import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/Cart'
import './navbar.css'
import Logo from "./imgLogo.jpeg"
import { UserContext } from '../context/User'

export default function Navbar({ user, setUser }) {
  const { count } = useContext(CartContext)
  const navigate = useNavigate()
 
const { userData ,setUserData} = useContext(UserContext)
console.log(userData)
const logout = () => {
  localStorage.removeItem("UserToken")
  setUser(null)
  navigate('./home')
  setUserData(null)
}
 
  return (

    <nav className="navbar navbar-expand-lg py-3 ">
      <div className="container">
        <a className="navbar-brand " href="#">HSTORE<img src={Logo} className='img-fluid ms-3' width={'50px'}></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link to={'/categories'} className="nav-link" href="#">Categories</Link>
            </li>


            <li className="nav-item">
              <Link to={'/allProduct'} className="nav-link" href="#">Products</Link>
            </li>
            {user && <li className="nav-item">
              <Link className="nav-link" to={"/cart"}>Cart <i class="fi fi-rr-shopping-cart">{count}</i></Link>
            </li>}


          </ul>
          <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-capitalize" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {userData?userData.userName:'Accounts'}

        </a>
        <ul className="dropdown-menu ">
          {user == null ?
          <>
          <li><Link to='/register' className="dropdown-item" >register</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link to='/login' className="dropdown-item" >  login</Link></li>
          </>
          :<>
          <li><Link to='/profile' className="dropdown-item" >Profile</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link onClick={logout} className="dropdown-item" > Logout</Link></li>
          </>}
     
        </ul>
      </li>
        </ul>
        </div>
      </div>

    </nav>



  )
}
