import React from 'react'
import './Home.css'
import imgContent from "./images/HomeLogo.jpeg"
import logoMarka1 from "./images/c-mg-1.png"
import logoMarka2 from "./images/c-mg-2.png"
import logoMarka3 from "./images/c-mg-3.png"
import shipped from "./images/shipped.png"
import support from "./images/support.png"
import credit from "./images/credit-card.png"
import box from "./images/box.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faTwitter, faInstagram, faYoutube , } from '@fortawesome/free-brands-svg-icons';
import {faAngleLeft ,faAngleRight } from '@fortawesome/free-solid-svg-icons';

import woman from "./images/womanhijab.jpg"
import man from "./images/manphoto.jpg"


export default function Home() {
 
  return (
    <>
      <div className="container">
      <div className="Home  ">

    <div className='Home-page '>
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
    {/*services section*/}
<div className="services  py-5 " id="service">
  <div className="container">
    <div className=" px-5 pt-5 pb-0 about-us ">
      <div className="title-ser d-flex justify-content-center">
        <div>
          <span className="border-bottom title-border-color title-span  text-darkw pb-2">SERVICE</span>
          <h2 className=" h2-about  ps-4 pt-2">What we do!</h2>
        </div>
      </div>
    </div>
    <div className="row py-4">

    <div className=" service-item col-md-6 col-lg-3 text-center px-3 py-4">
         <img src={shipped} alt="servvice 1 image" width="55px" />
        <h3 className="ser-h3">Free Shipment Over 50$</h3>
        <p className="ser-para text-darkw">Free shipping on orders over $50! Explore and take advantage now.</p>
      </div>
      <div className=" service-item col-md-6 col-lg-3 text-center  px-3  py-4">
        <a href="#">   <img  src={credit} width='50px'/></a>
        <h3 className="ser-h3">100% Secure Payment </h3>
        <p className="ser-para text-darkw">
        We provide 100% secure payment options for your safety and peace of mind.</p>
      </div>
      <div className=" service-item col-md-6 col-lg-3 text-center px-3 py-4">
        <a href="#"><img src={support} width='50px'/></a>
        <h3 className="ser-h3">24/7 online Support</h3>
        <p className="ser-para text-darkw">Get 24/7 support for all your queries and concerns. We're always here to help!</p>
      </div>
      
      <div className=" service-item col-md-6 col-lg-3 text-center px-3 py-4">
        <a href="#"><img src={box} width="50px" alt="servvice 1 image" /></a>
        <h3 className="ser-h3">World Wide Shipment</h3>
        <p className="ser-para text-darkw">We offer global shipping for your convenience.</p>
      </div>
    </div>
  </div>
</div>

<div className="header">

    <div className="header-content  ">

   <div className="row">
   <div className="col-md-6 col-sm-12  align-content-center  ">
        <div className='social-media-box'>
          <p className=' fs-3'>We always stay with our clients and respect their business. We deliver 100% and provide instant response to help them succeed in constantly changing and challenging business world.</p></div>
      <div className="social-media mt-4  d-flex  gap-4 ">
        <div className="icon border rounded-circle d-flex justify-content-center align-items-center ">
        <FontAwesomeIcon icon={faFacebookF}  />

        </div>
        <div className="icon border rounded-circle d-flex justify-content-center align-items-center ">
        <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="icon border rounded-circle d-flex justify-content-center align-items-center ">
        <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="icon border rounded-circle d-flex justify-content-center align-items-center ">
        <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      
     </div>
     <div className="col-md-6">
     <div className="newsletter-form">
  <h2 >Subscribe Our Newsletter</h2>
  <p>Phasellus lacinia fermentum bibendum. Interdum et malesuada fames ac</p>
  <form action="#">
    <input type="email" placeholder="Enter your email address" required />
    <button type="submit" class="button-32" role="button">Subscribe</button>
  </form>
</div>

     </div>
      </div>
    </div>
  </div>
 {/*start clients section*/}
<div className="client position-relative">
  <div className="container">
    <ul className=" d-flex ">
      
      <li>
        <div className="image-box"><a href="#"><img src={logoMarka1} className="img-fluid" alt="clients image icon" /></a></div>
      </li>
      <li>
        <div className="image-box"><a href="#"><img src={logoMarka2} alt="clients image icon" /></a></div>
      </li>
      <li>
        <div className="image-box"><a href="#"><img src={logoMarka3} alt="clients image icon" /></a></div>
      </li>
      <li>
        <div className="image-box"><a href="#"><img src={logoMarka1} className="img-fluid" alt="clients image icon" /></a></div>
      </li>
      <li>
        <div className="image-box"><a href="#"><img src={logoMarka2} alt="clients image icon" /></a></div>
      </li>
      <li>
        <div className="image-box"><a href="#"><img src={logoMarka3} alt="clients image icon" /></a></div>
      </li>
      
    </ul>
  </div>
</div>
<div className="testimonial testimonial-about ">
  <div className="container">
    <div className="team-title text-start pb-3">
      <h2 className="mb-5 team-title-h2">Some opinions of our website users
      </h2>
    </div>
    <div className="owl-nav d-flex justify-content-end w-100">
      <button type="button" className="owl-prev px-3 py-2 ">
      <FontAwesomeIcon icon={faAngleLeft}  />
      </button>
      <button type="button" className="owl-next px-3 py-2 ms-2">
      <FontAwesomeIcon icon={faAngleRight} />
       </button>
    </div>
    <div>
      <div className="d-flex row">
        <div className="main-test pb-4 rounded-4 col-md-6 rounded-4   ">
          <div className="w-100 position-relative rounded-4">
            <div className="author-content py-3  ">
              <div className="image-author ">
              <img src={man} className="d-block w-100 man-image"   alt="author-1 image" />

              </div>
              <div className="quoet w-100 text-end">
                <i className="fs-1 fa-solid fa-quote-right" />
              </div>
              <div className="author-name pt-3">
                <span className="fs-5 fw-medium text-black">Adam Stone </span>
                <span className="span1"> | 33 | </span>
                <span className="span2">From Yemen</span>
              </div>
              <div className="para-author">
                <p>Fast shipping and excellent customer service! I was hesitant about buying clothes online, but my experience was wonderful. Thank you!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-test pb-4 rounded-4 col-md-6 rounded-3  position-relative  ">
          <div className="author-content py-3 ">
            <div className="image-author ">
            <img src={woman} className="d-block w-100" alt="author-1 image" />

            </div>
            <div className="quoet w-100 text-end">
              <i className="fs-1 fa-solid fa-quote-right" />
            </div>
            <div className="author-name pt-3">
              <span className="fs-5 fw-medium text-black">sara yaseen</span>
              <span className="span1"> | 29 | </span>
              <span className="span2"> From Palestine</span>
            </div>
            <div className="para-author">
              <p> The website provides a unique and enjoyable shopping experience. Attractive design and excellent product images. I loved everything about it!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>  

    
  )
}
