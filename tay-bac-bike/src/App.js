import { Outlet, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from 'react';
import Carosuel from "./components/carouelPage";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import logo from "./images/image.png";

function App() {

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
      <Carosuel />

      <div id="body-main">
        <Outlet />
      </div>
    </>
  );
}

export default App;
