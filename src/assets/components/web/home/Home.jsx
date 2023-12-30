import React from 'react'
import './Home.css'
import imgContent from "./images/HomeLogo.jpeg"
export default function Home() {
 
  return (
    <>
      <div className="container">
      <div className="Home d-flex ">
      
    <div className='Home-page w-50'>
    </div>
    <div className="home-content  text-center ">
      <img src={imgContent} alt='img-logo' className='img-fluid w-50 '/>
      <div className='Home-p p-3'>Embark on a luxurious shopping journey with Haneen Store! 
        Explore our diverse collection of refined clothing and accessories, 
        where elegance meets quality.
         Order today and elevate your style with a touch of sophistication.</div>
    </div>

    </div>
    </div>
</>  

    
  )
}
