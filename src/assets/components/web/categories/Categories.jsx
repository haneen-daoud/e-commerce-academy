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
    <div className="container">
      <div className="swiper-custom-pagination"></div>
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

  )
}
