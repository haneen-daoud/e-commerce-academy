import axios from 'axios';
import { useQuery } from "react-query"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom'
import './Categories.css'
import collection from "./imgCategore/collection.jpg"
import col1 from "./imgCategore/col1.jpg"
import col2 from "./imgCategore/col2.jpg"
import colall from "./imgCategore/colall.jpg"
import sport1 from "./imgCategore/sport1.jpg"
import sport2 from "./imgCategore/sport2.jpg"
import sport3 from "./imgCategore/sport3.jpg"
import casual1 from "./imgCategore/casual1.jpg"
import casual2 from "./imgCategore/casual2.jpg"
import casual3 from "./imgCategore/casual3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faTwitter, faInstagram, faYoutube , } from '@fortawesome/free-brands-svg-icons';
export default function Categories() {
  const getCategories = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=7`);
    return data
  }
  const { data, isLoading } = useQuery('web-categories', getCategories);



  if (isLoading) {
    return <div className='container'><span class="loader"></span></div>
  }
  return (
<>
<div className="container">
<div className=" category-main-image  text-uppercase text-center row align-items-center">
<div className="col-md-6 ">
 
  <h2 className='text-upercase'>collection 2024</h2>
        <div className='w-75 text-center m-auto '><p className=' fs-3'>Explore our diverse fashion collections for both men and women, blending elegance with comfort and featuring the latest trends for every style and occasion.</p></div>
      <div className="social-media mt-4  d-flex  gap-4  justify-content-center">
        <div className="icon icon-Categories border rounded-circle  d-flex justify-content-center align-items-center ">
        <FontAwesomeIcon icon={faFacebookF}  />

        </div>
        <div className="icon icon-Categories border rounded-circle  d-flex justify-content-center align-items-center ">
        <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="icon icon-Categories border rounded-circle  d-flex justify-content-center align-items-center ">
        <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="icon icon-Categories border rounded-circle  d-flex justify-content-center align-items-center ">
        <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      
     </div>
</div>
</div>
    <div className="py-5  my-5">
      <div className="text-center py-5">
      <h2>DISCOVER THE COLLECTIONS</h2></div>
      <div className="swiper-custom-pagination "></div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}

        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination'
        }}
        spaceBetween={50}
        slidesPerView={3.5}
        loop={true}
        autoplay={{
          delay: 2000
        }}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        {data?.categories.length ? data?.categories.map((category) =>

          <SwiperSlide key={category._id}>
            <Link to={`/products/category/${category._id}`}>
              <div className="category ">
                <img src={category.image.secure_url} ></img>
              </div>
            </Link>
          </SwiperSlide>


        ) : '<h2>no gategories found</h2>'}

      </Swiper>
    </div>
{/*start press section*/}
<div className="press ">
  <div className="container">
    <div className="team-title text-center pb-3">
      <h2 className="pb-5">OUR COLLECTION</h2>
    </div>
    <div className="row pb-5">
      <div className="col-md-4  col-sm-6  image-press p-0">
        <div className=" pe-2"> 
          <img src={colall} alt="group of people" />
        </div>
      </div>
      <div className="col-md-4  col-sm-6 press-content ">
        <div className="press-col ps-4 pb-5 pt-2  d-flex justify-content-center align-items-center">   
          <div>
            <div className="press-product">
              12
              <br /><span className="press-span">AUG, 2024</span>
            </div>
            <div className="title pb-3">winter collection</div>
            <h4>
              <a href="Bolg-grid.html">Introducing our Winter Collection: elegance meets warmth in contemporary designs for unmatched style.</a>
            </h4>
          </div>
        </div> 
      </div>
      <div className="col-md-4 col-sm-6  press-content">
        <div className="press-col ps-4 pb-5 pt-2  d-flex justify-content-center align-items-center">   
          <div>
            <div className="press-product">
              23
              <br /><span className="press-span">JUL, 2024</span>
            </div>
            <div className="press-content-lower">
              <div className="title pb-2">Summer Collection</div>
              <h4>
                <a href="Bolg-grid.html">where style meets comfort in vibrant designs for the season.</a>
              </h4>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>

<div className="recent-product py-5">
  <div className="container">
<div className="title-recent ">
  <h2 className='text-uppercase'>Recent product</h2>
  </div>  
{/*start project section*/}
<div className=" latest-work project-section ">
  <div className=" ">
    <div className="header-ser  row pb-3  d-flex align-items-center ">
     
      <div className="blog-content  col-md-7 d-flex justify-content-end">
        <ul className="nav nav-tabs d-flex  border-0" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active text-black-50" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Formal</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-black-50" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">sport</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-black-50" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Casual </button>
          </li>
        
        </ul>
      </div>
      <div className="  col-md-4 d-flex  btn-all-product  justify-content-end ms-5  pe-0">
      <button type="submit" className="button-32 p-2" role="button"><Link to="/allProduct" className='text-white'>All Product</Link></button>
      </div>
    </div>
  </div>
  <div className="project-section-content px-5  ">
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-4 pt-5  d-flex justify-content-center text-center">
            <div className="news-item-home news-item   ">
              <div className="image">
                <a href="#">
                <img src={collection} className="w-100" alt="group of people" />
</a>
              </div>
              <div className="news-title  d-flex justify-content-between align-items-center">
                <a href="blog-detail.html" className="fw-bold text-black fs-4 text-capitalize text-decoration-none">zahra</a>
                <div className="date text-capitalize ">Formal white jacket
</div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4 pt-5  d-flex justify-content-center text-center">
            <div className="news-item-home news-item   ">
              <div className="image">
                <a href="#">
                  <img src={col1} className="w-100" alt="group of people" />
                  </a>
              </div>
              <div className="news-title  d-flex justify-content-between align-items-center">
                <a href="blog-detail.html" className="fw-bold text-black fs-4 text-capitalize text-decoration-none">fendi</a>
                <div className="date text-capitalize ">Formal black jacket</div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4 pt-5  d-flex justify-content-center text-center">
            <div className="news-item-home news-item   ">
              <div className="image">
                <a href="#">
                <img src={col2} className=" " alt="group of people" width="380px" height="400px"/></a>
              </div>
              <div className="news-title  d-flex justify-content-between align-items-center">
                <a href="blog-detail.html" className="fw-bold text-black fs-4 text-capitalize text-decoration-none">yaqa</a>
                <div className="date text-capitalize ">Formal light brown jacket</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade  " id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
        <div className="row">
          <div className="col-md-12 col-ms-12 col-lg-4 pt-5  d-flex justify-content-center text-center">
            <div className="news-item-home news-item   ">
              <div className="image">
                <a href="#">
                <img src={sport1} className="w-100" alt="group of people" />
</a>
              </div>
              <div className="news-title  d-flex justify-content-between align-items-center">
                <a href="blog-detail.html" className="fw-bold text-black fs-4 text-capitalize text-decoration-none">Puma</a>
                <div className="date text-capitalize ">Youth hats</div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-ms-12 col-lg-4 pt-5  d-flex justify-content-center text-center">
            <div className="news-item-home news-item   ">
              <div className="image">
                <a href="#">
                <img src={sport2} className="w-100" alt="group of people" /></a>
              </div>
              <div className="news-title  d-flex justify-content-between align-items-center">
                <a href="blog-detail.html" className="fw-bold text-black fs-4 text-capitalize text-decoration-none">Fila</a>
                <div className="date text-capitalize ">White sports tracksuit</div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-ms-12 col-lg-4 pt-5  d-flex justify-content-center text-center">
            <div className="news-item-home news-item   ">
              <div className="image">
                <a href="#">
                <img src={sport3} className="w-100" alt="group of people" width="400px" height="380px" />
</a>
              </div>
              <div className="news-title  d-flex justify-content-between align-items-center">
                <a href="blog-detail.html" className="fw-bold text-black fs-4 text-capitalize text-decoration-none">Reebok</a>
                <div className="date text-capitalize ">Black sports shoes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade  " id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
        <div className="row">
          <div className="col-md-12 col-ms-12 col-lg-4 pt-5  d-flex justify-content-center text-center">
            <div className="news-item-home news-item   ">
              <div className="image overflow-hidden h-75">
                <a href="#">
                  <img src={casual2} className="w-100" alt="group of people" /></a>
              </div>
              <div className="news-title  d-flex justify-content-between align-items-center">
                <a href="blog-detail.html" className="fw-bold text-black fs-4 text-capitalize text-decoration-none">Gucci</a>
                <div className="date text-capitalize ">Men's shirt</div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-ms-12 col-lg-4 pt-5  d-flex justify-content-center text-center">
            <div className="news-item-home news-item   ">
              <div className="image overflow-hidden h-75">
                <a href="#">
                  <img src={casual1} className="w-100" alt="wooden" /></a>
              </div>
              <div className="news-title  d-flex justify-content-between align-items-center">
                <a href="blog-detail.html" className="fw-bold text-black fs-4 text-capitalize text-decoration-none">Hugo Boss</a>
                <div className="date text-capitalize ">Men's accessories</div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-ms-12 col-lg-4 pt-5  d-flex justify-content-center text-center">
            <div className="news-item-home news-item   ">
              <div className="image overflow-hidden h-75 ">
                <a href="#">
                  <img src={casual3} className="w-100" alt="male" /></a>
              </div>
              <div className="news-title d-flex justify-content-between align-items-center">
                <a href="blog-detail.html" className="fw-bold text-black fs-4 text-capitalize text-decoration-none">Armani</a>
                <div className="date text-capitalize ">Men's tiles</div>
              </div>
            </div>
          </div>
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
