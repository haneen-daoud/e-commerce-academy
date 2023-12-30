import React, { useContext } from 'react'
import { UserContext } from '../context/User'
import './info.css'
export default function UserInfo() {
    const {userData,loader}=useContext(UserContext)
    if(loader){
    return <p>Loder....</p>
    }
  return (
    <>
    <div class="profile-container ">
    <h2>{userData.userName}</h2>
        <img src={userData.image.secure_url} className='img-fluid img-info w-50' />
    <p>{userData?.email}</p>

<buttun href="#" className="button-48"><span>Edit Profile</span></buttun>
</div>
</>
  )
}
