import React from 'react'
import Navbar from './../dashboard/navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../web/footer/Footer'

export default function DashboardLayout() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}
