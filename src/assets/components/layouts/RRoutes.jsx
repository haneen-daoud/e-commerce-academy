import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Layout.jsx';
import Home from '../web/home/Home.jsx'
import Categories from '../web/categories/Categories.jsx';
import DashboardLayout from './DashboardLayout.jsx';
import HomeDashboard from '../dashboard/home/HomeDashboard.jsx';
import CategoriesDashboard from '../dashboard/categories/CategoriesDashboard.jsx'
import Register from '../web/register/Register.jsx'
import Login from '../web/login/Login.jsx'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "register",
        element: <Register />
      }
      ,
      {
        path: "home",
        element: <Home />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "login",
        element: <Login />
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
      },
      {
        path: 'categories',
        element: <CategoriesDashboard />
      }
    ]
  }


]);