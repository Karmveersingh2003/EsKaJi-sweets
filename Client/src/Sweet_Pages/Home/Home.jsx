import React from 'react'
import "./home.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeSwiper.css";
import { Pagination, Navigation, Autoplay } from "swiper";
import video from "./Video.mp4"

const Home = () => {


  return (
    <>

      <div className='container'>
        <h4>Touch of Tradition</h4>


        <Swiper

          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,

          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://jodhpursweets.com/wp-content/uploads/2022/08/Anjeer-Chakkar.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://jodhpursweets.com/wp-content/uploads/2022/08/Bournvita-Barfi-1-430x430.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://jodhpursweets.com/wp-content/uploads/2022/08/Badam-Laccha-2.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://jodhpursweets.com/wp-content/uploads/2022/12/lahsoon-bhakarwadi128762-430x430.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://jodhpursweets.com/wp-content/uploads/2022/08/Badam-Katli.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://jodhpursweets.com/wp-content/uploads/2022/08/Chocolate-Barfi.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://jodhpursweets.com/wp-content/uploads/2022/08/Ghewar-1.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://jodhpursweets.com/wp-content/uploads/2022/08/Manpasand.jpg" alt="" srcset="" /></SwiperSlide>
          <SwiperSlide><img src="https://jodhpursweets.com/wp-content/uploads/2022/08/Dal-Moth.jpg" alt="" srcset="" /></SwiperSlide>
        </Swiper>
      </div>

      <div className='Video'>

        <div id="homevedio">
          <video src={video} autoPlay loop muted />

        </div>
        <div id="content_onvedio">
          <h2>Welcome to EsKaJi Sweets</h2>
          <button><a href="/product_cat/sweets">DISCOVER WITH US</a></button>
        </div>
      </div>



      <div className='collection'>
          <div><img src="https://www.sweedesi.com/cdn/shop/files/International-PhotoRoom_1.png?v=1703068873&width=240" alt="" /></div>
          <div><img src="https://www.sweedesi.com/cdn/shop/files/211-2115785_india-map-png-photo-3d-map-of-india-PhotoRoom_2.png?v=1703071216&width=240" alt="" /></div>
          <div><img src="https://www.sweedesi.com/cdn/shop/files/My-project-15.jpg?v=1700028764&width=240" alt="" /></div>
          <div><img src="https://www.sweedesi.com/cdn/shop/products/fusion-laddu-box-sweedesi-453246.jpg?v=1687958996&width=240" alt="" /></div>
          <div><img src="https://www.sweedesi.com/cdn/shop/collections/mukhwas-digestive-712658.jpg?v=1674301409&width=240" alt="" /></div>
          <div><img src="https://www.sweedesi.com/cdn/shop/files/20230627_120208.jpg?v=1688033523&width=240" alt="" /></div>
      </div>


      <div className='Rbox'>
        <div className='belief'>
          <h1>Belief</h1>
          <p>Hailing from the land of sun and blue, over the years we've specialized in making traditional Indian sweets while maintaining their authentic tastes. </p>

        </div>
        <div className='values'>
          <h1>Values</h1>
          <p>Our focus is on building a long term relationship based on trust and taste and nourish it with our compassion for each other.  </p>

        </div>
        <div className='team'>
          <h1>Team</h1>
          <p>We have a highly educated and experienced team, that has helped us to reach the position where we are now. </p>

        </div>
        <div className='infra'>
          <h1>Infrastructure</h1>
          <p>Located at Sardarpura our Retail Outlet is highly modernised and designer. Our outlet at Jodhpur Airport is also stylish as well as customer friendly. </p>

        </div>
      </div>


      <div className='OurTeam'>
        <div className='heading'>
          <h2 >WE TAKE CARE OF YOUR EXPERIENCE</h2>
          <p>‘Don’t worry about it, our team is ever ready’</p>
        </div>
        <div className='member'>
          <div className='m1'>
            <h2 >No artificial preservatives</h2>
            <p>Crafting sweets is a legacy from more than 100 years, was put together to create a brand - EsKaJi Sweets by our founder. Trust, innovation and creativity are our core values</p>
          </div>
          <div className='m1'>
            <h2>Made in pure desi ghee</h2>
            <p>All the sweets are created from scratch using pure desi ghee and no artificial ingredients are used in the process. All the ingredients are fresh and hand picked from all over the country to bring out the best taste in each and every bite.</p>
          </div>
          <div className='m1'>
            <h2>Safe & secure packing</h2>
            <p>EsKaJi Sweets provides safe and secure packing for your delicate items. We use the latest technology and equipment to pack your items and ensure that they reach their destination safely and securely.</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home