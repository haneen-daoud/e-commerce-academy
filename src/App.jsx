import { RouterProvider } from "react-router-dom";
import Layout from "./assets/components/layouts/Layout.jsx";
import Register from "./assets/components/web/register/Register.jsx";
import Login from "./assets/components/web/login/Login.jsx";
import Home from "./assets/components/web/home/Home.jsx";
import Categories from "./assets/components/web/categories/Categories.jsx";
import DashboardLayout from "./assets/components/layouts/DashboardLayout.jsx";
import HomeDashboard from './assets/components/dashboard/home/HomeDashboard.jsx';
import CategoriesDashboard from './assets/components/dashboard/categories/CategoriesDashboard.jsx'
import { createBrowserRouter } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import CategoriesDetails from "./assets/components/web/categories/CategoriesDetails.jsx";
import Product from "./assets/components/web/products/Product.jsx";
import { CartContextProvider } from "./assets/components/web/context/Cart.jsx";
import Cart from "./assets/components/web/cart/Cart.jsx";
import Profile from "./assets/components/web/profile/Profile.jsx";
import { UserContext } from "./assets/components/web/context/User.jsx";
import Forget from "./assets/components/web/forget/Forget.jsx"
import Send from "./assets/components/web/sendCode/Send.jsx";
import CreateOrdeer from "./assets/components/web/order/CreateOrder.jsx";
import UserContact from "./assets/components/web/userContact/UserContact.jsx"
import UserInfo from "./assets/components/web/info/UserInfo.jsx";
import OrderDetails from "./assets/components/web/order/OrderDetails.jsx";
import Review from "./assets/components/web/review/Review.jsx";
import AllProduct from "./assets/components/web/products/AllProduct.jsx";
import './index.css'
import Contact from "./assets/components/web/contact/Contact.jsx"
export default function App() {

  let { setUserToken } = useContext(UserContext)
  useEffect(() => {

    if (localStorage.getItem("UserToken") != null) {
      setUserToken(localStorage.getItem("UserToken"))
    }
  }, []);

  const [user, setUser] = useState(null);


  const saveCurrentUser = () => {
    const token = localStorage.getItem("UserToken");
    const decoded = jwtDecode(token);
    setUser(decoded);
  }
  useEffect(() => {
    if (localStorage.getItem("UserToken"))
      saveCurrentUser();
  }, [])
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} setUser={setUser} />,
      children: [
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'login',
          element: <Login saveCurrentUser={saveCurrentUser} />
        },
        {
          index: true,
        
          element: <Home />
        },
        {
          path: 'categories',
          element: <Categories />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: '/forget',
          element: <Forget />
        },
        {
          path: '/send',
          element: <Send />
        },
        {
          path: 'profile',
          element: <Profile/>,
          children:[
              {
                path:'usercontact',
                element:<UserContact />
      
              },
              {
                path:'info',
                element:<UserInfo/>
              }
              ,
              {
                path:'order',
                element:<OrderDetails/>
              }
              ,
            ]
        },
        {
          path: 'products/:id/review',
          element: <Review/>,
        },

        {
           path:'/allProduct/review',
           element:<Review/>
        },
        
        
        {
          path: '/products/:productId',
          element: <Product />
        },
        {
          path:'allProduct',
          element:<AllProduct/>

        },
        {
          path: '/cart',
          element:<Cart />
          
        },
        {
          path:'createOrder',
          element:<CreateOrdeer/>
        },
        {
          path: '/products/category/:categoryId',
          element: <CategoriesDetails />
        },
        {
          path: '/products/category/:categoryId/review',
          element: <Review />
        },
        {
          path: 'categories',
          element: <Categories />
        },
       
        {
          path: '*',
          element: <h2>page not found --- web</h2>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
        path: 'home',
        element: <HomeDashboard />
      }
      ,
      {
        path: '*',
        element: <h2>page not found --- dashboard</h2>
      }
      ]

    }
  ]);
  return (
    //كل كومبوننت رح نستدعيه رح نصير نبعتو لملف ال cart
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  )
}
