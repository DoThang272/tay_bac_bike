import React, { useRef, useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay,Thumbs, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade,  } from 'swiper/modules';

import carousel7 from "../images/banner_carou1.jpg";
import carousel2 from "../images/banner_carou2.jpg";
import carousel3 from "../images/banner_carou3.jpg";
import carousel4 from "../images/banner_carou4.jpg";
import carousel5 from "../images/banner_carou5.jpg";
import carousel6 from "../images/banner_carou6.jpg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft  } from "react-icons/fa";

function Carosuel() {
    const slides = [
        carousel7,carousel2,carousel3,carousel4,carousel5,
      ];
  return (
    <>
      {/* <div className="container"> */}
        {/* <div className="heading [w-100%]"> */}
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              EffectFade,
              Autoplay,
              Thumbs,
              EffectCoverflow
            ]}
            spaceBetween={50}
            slidesPerView={"auto"}
            effect={"fade"}
            grabCursor={true}
            centeredSlides={false}
            thumbs={true}
            speed={3000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            scrollbar={{ draggable: true }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            className="swiper_container "
          >
            <SwiperSlide>
              <img src={carousel7} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel6} alt="slide_image" />
            </SwiperSlide>

            {/* <div className=" slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <FaRegArrowAltCircleLeft />
              </div>
              <div className="swiper-button-next slider-arrow">
                <FaRegArrowAltCircleRight />
              </div>
              <div className="swiper-pagination"></div>
            </div> */}
          </Swiper>
        {/* </div> */}
      {/*  </div> */}
    </>
  );
}

export default Carosuel;
