import React, { useContext } from 'react'
import { UserContext } from '../context/User';
import "./Profile.css"
import { Link, Outlet } from 'react-router-dom';
export default function Profile() {
  
  const { userData, loader } = useContext(UserContext)

  if (loader)
  return <span class="loader"></span>

  return (
    <>
    
    <div className="profile ">
      <div className="d-flex">
      <div className="col-md-3  left-menu position-relative">

          <div className="w-100  Menu-item ">
              <a href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto  text-decoration-none ">
              <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
            </div>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-5"
              id="menu">
              <li className="nav-item">
                <Link to={'/profile/info'} href="#" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house" />{" "}
                  <span className="ms-1  d-none d-sm-inline">information</span>
                </Link>
              </li>
              <li>
                <Link to={'/profile/usercontact'} className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table" />{" "}
                  <span className="ms-1  d-none d-sm-inline">contact</span>
                </Link>
              </li>
              <li>
                <Link to={'/profile/order'} className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table" />{" "}
                  <span className="ms-1  d-none d-sm-inline">Orders</span>
                </Link>
              </li>
             
           
              
            </ul>
            <hr />
            <div className="dropdown ">
        
             <img src={userData.image.secure_url}
                 alt="hugenerd"
                  width={30}
                 height={30}
                 className="rounded-circle"
             />
                <span className="d-none d-sm-inline mx-1">welcome</span>
              

            </div>
          </div>
        </div>
        
        <div className="w-50 ms-5 mt-5">  <Outlet  /></div>

      </div>

    </div>

     
</>
  )
}
