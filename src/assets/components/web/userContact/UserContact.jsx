import React, { useContext } from 'react'
import { UserContext } from '../context/User';
export default function UserContact() {
    const { userData, loader } = useContext(UserContext)
  if (loader)
  return <span class="loader"></span>
  return (
    <div className="user_contact text-center">
    <h2>contact information</h2>
    <a href={`mailto:${userData.email}`} className='text-decoration-none  text-black fs-4'>email: {userData?.email}</a>
  </div>
    )
}
