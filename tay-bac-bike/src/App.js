import { Outlet, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay,Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Carosuel from "./components/carouelPage";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade,  } from 'swiper/modules';

import logo from "./images/image.png";
import carousel7 from "./images/carousel8.jpg";
import carousel2 from "./images/carousel2.jpg";
import carousel3 from "./images/carousel0.jpg";
import carousel4 from "./images/carousel4.jpg";
import carousel5 from "./images/carousel4.jpg";
import carousel6 from "./images/carousel4.jpg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft  } from "react-icons/fa";

<script src="../path/to/flowbite/dist/flowbite.min.js"></script>


function App() {
  const slides = [
    carousel7,carousel2,carousel3,carousel4,carousel5,
  ];
  const carouselRef = useRef(null);
  return (
    <>
      <div id="body-main" className="flex justify-between items-center mt-3">
        {/* start logo */}
        <div className="">
          <Link to={`/`}>
            <img className="max-h-[5rem]" src={logo} alt="" />
          </Link>
        </div>
        {/* end logo */}

        {/* start menu */}
        <div className="space-x-[2rem] text-[1.25rem] ">
          <Link className=" " to={`/`}>Trang chủ</Link>
          <Link className="hover:text-red-500 hover:border-b-[2px] hover:border-b-red-500  focus:text-red-500 focus:shadow-lg focus:shadow-red-500/50 " to={`motor`}>Xe máy</Link>
          <Link className="hover:text-red-500 hover:border-b-[2px] hover:border-b-red-500  focus:text-red-500 focus:shadow-lg focus:shadow-red-500/50 " to={`electricBike`}>Xe máy điện</Link>
          <Link className="hover:text-red-500 hover:border-b-[2px] hover:border-b-red-500  focus:text-red-500 focus:shadow-lg focus:shadow-red-500/50 " to={`accessoriesBike`}>Phụ tùng, phụ kiện</Link>
          <Link className="hover:text-red-500 hover:border-b-[2px] hover:border-b-red-500  focus:text-red-500 focus:shadow-lg focus:shadow-red-500/50 " to={`introPage`}>Giới thiệu</Link>
          <Link className="hover:text-red-500 hover:border-b-[2px] hover:border-b-red-500  focus:text-red-500 focus:shadow-lg focus:shadow-red-500/50 " to={`policy`}>Chính sách</Link>
          {/* <Link className="" to={`register`}>Đăng ký</Link> */}
        </div>
        {/* end menu */}

        {/* start contactlogo */}
        <div>
          <Link>fb</Link> 
          <Link>fb</Link> 
        </div>
        {/* end contactlogo */}
      </div>


      {/* <div className="container">
        <div className="heading [w-100%]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y ,EffectFade,Autoplay,Thumbs]}
            effect={'fade'}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={"auto"}
            thumbs={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            scrollbar={{ draggable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            className="swiper_container "
          >
            <SwiperSlide>
              <img src={carousel7} alt="slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel2} alt="slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel3} alt="slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel4} alt="slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel5} alt="slide_image"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel6} alt="slide_image"/>
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <FaRegArrowAltCircleLeft />
              </div>
              <div className="swiper-button-next slider-arrow">
                <FaRegArrowAltCircleRight />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div> */}
      <Carosuel />

      <div id="body-main">
        <Outlet />
      </div>
    </>
  );
}

export default App;
