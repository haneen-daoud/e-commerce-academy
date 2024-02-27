import React, { useContext } from 'react'
import { UserContext } from '../context/User'
import './info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
export default function UserInfo() {
    const {userData,loader}=useContext(UserContext)
    console.log(userData)
    if(loader){
    return <p>Loder....</p>
    }
  return (
    <>
    <div class="profile">
    <div className="title-recent ">
  <h2 className='text-uppercase'>personal information</h2>
  <span></span>
  </div>  
  <div className="row ">
    <div className="col-md-6 col-sm-12 justify-content-center align-items-center d-flex">
       <img src={userData.image.secure_url} className='img-fluid img-info w-50 ' />
</div>
<div className="col-md-6 col-sm-12">
       <a href='#'><FontAwesomeIcon icon={faPenToSquare} />
change profile information</a>

<div className='inf'>
  <h4>Name</h4>
<input type="text" name="username" className='bg-white border-1' defaultValue={userData.userName} />
<h4>Email</h4>
<input type="email" name="username" className='bg-white border-1' defaultValue={userData?.email} />
<h4>Status account</h4>
<input type="email" name="username" className='bg-white border-1' defaultValue={userData?.status} />
</div>
</div>
  </div>
  
</div>
</>
  )
}
