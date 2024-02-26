import React, { useContext } from 'react'
import { UserContext } from '../context/User';
import '../info/info.css'

export default function UserContact() {
    const { userData, loader } = useContext(UserContext)
  if (loader)
  return <span class="loader"></span>
  return (

    <div className="user_contact ">
  <div className="container">
  <div className="contact-container">
    <div className="row">
    <div className="col-md-4 justify-content-center align-items-center d-flex">
       <img src={userData.image.secure_url} className='img-fluid img-info w-50 ' />
</div>
      <div className="col-md-8">
      <h2 className='text-center'>Contact Information</h2>
    <div className="contact-in">
      <strong>Address:</strong> 123 Main Street, City, Country
    </div>
    <div className="contact-in">
      <strong>Phone:</strong> +1234567890
    </div>
    <div className="contact-in">
      <strong>Fax:</strong> +1234567890
    </div>
    <div className="contact-in d-flex ">
      <strong>Email: <h6> {userData?.email}</h6></strong> 
    </div>
      </div>
    </div>
    
  </div>
</div>

  </div>
    )
}
