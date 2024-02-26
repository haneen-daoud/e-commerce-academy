import React from 'react'
import "./contact.css"
import { Link  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen ,faLocationDot , faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF ,faTwitter, faInstagram, faYoutube , } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <>

<div className="contact-content text-uppercase text-center ">
  <h2 className="title-contact">contact</h2>
  <ul className="d-flex justify-content-center contact-link">
    <li className="ms-2  "><Link to="/home" className=" contact-link-home">home </Link></li>
    <span className="ms-2 text-black"> / </span>
    <li className="ms-2"><a href="contact.html" className="text-black">contact</a></li>
  </ul>
</div>
{/*contact form section*/}
<div className="contact-info">
  <h2 className="text-center w-50 m-auto">Contact us for any further questions, possible projects &amp; business partnerships</h2>
  <div className=" px-5 d-flex pt-5 mt-5 ">
    <div className="col-md-7">
    <div className="contact-form">
    <div className="contact-form-content">
      <div className="contact-title text-center pb-4">
        <h2>GET IN TOUCH </h2>
      </div>
      <form>
        <div className="row ">
          <div className="col-md-6 col-sm-12 col-lg-6 input-head">
            <input type="text" placeholder="Name*" className="input-item" />
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 input-head">
            <input type="email" placeholder="Email*" className="input-item" />
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6  input-head">
            <input type="text" placeholder="Phone*" className="input-item" />
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6  input-head">
            <input type="text" placeholder="Subject*" className="input-item" />
          </div>
        </div>
        <div className="col-md-12">
          <textarea placeholder="Your Message*" className="outline-none" defaultValue={""} />
        </div>
      </form>
      <div className="btn  d-flex  align-items-center position-relative pt-5">
        <div className=" about-us-btn m-auto ">
        <button type="submit" class="button-32" role="button">Submit Message</button>

        </div>
      </div>
    </div>

</div>

    </div>

    <div className="inf-contact px-5 pt-5   col-md-5">

      <div className="mt-3 ">
        <div className="upper-contact-info d-flex justify-content-between">
          <h3 >CONTACT DIRECTLY</h3>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </div>
        <div className="info-content pb-5">
          <a href="mailto:hstore@gmail.com">hstore@gmail.com</a>
          <a href="tel:+056-83-458-868">(+056) 83-458-868</a>
        </div>
      </div>
      <div className="">
        <div className="upper-contact-info d-flex justify-content-between">
          <h3>VISIT OUR OFFICE</h3>
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <div className="info-content  pb-5">
          <p>192 nablus Street, qalqilia,
            90002, Palestine</p>
        </div>
      </div>
      <div className=" ">
        <div className="upper-contact-info d-flex justify-content-between">
          <h3 className=''>WORK WITH US</h3>
          <FontAwesomeIcon icon={faBriefcase} />
       </div>
        <div className="info-content  ">
          <p className="m-0">Send your CV to our email</p>
          <a href="mailto:hstore@gmail.com">hstore@gmail.com</a>
        </div>
      </div>
    </div>
  </div>

</div>
<div className="header">

    <div className="header-content  ">

   <div className="row">
   <div className="col-md-6  align-content-center ">
        <div className='w-75'><p className=' fs-3'>We always stay with our clients and respect their business. We deliver 100% and provide instant response to help them succeed in constantly changing and challenging business world.</p></div>
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
  <h2>Subscribe Our Newsletter</h2>
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
 
    </>
  )
}
