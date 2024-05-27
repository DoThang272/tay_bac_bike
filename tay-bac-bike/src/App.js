import { Outlet, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

import Button from "./components/button";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo from "./images/image.png";
import tiktokLogo from "./images/logoTiktok.png";
import facebookLogo from "./images/logoFabook.png";
import zaloLogo from "./images/logoZalo.png";

function App() {
  const btnSignIn = "Đăng kí/Đăng nhập";
  const carouselRef = useRef(null);
  return (
    <>
      <div className="flex justify-center items-center gap-7 bg-blue-main h-[3rem] text-[1.5rem]">
        <div>
          Cửa hàng sửa chữa mua bán, trao đổi xe máy, xe máy điện{" "}
          <strong className="text-red-500"> Quang Đạo</strong>
        </div>
        <div className="flex gap-2 items-center font-bold">
          <li>
            <Link to={`contact`} className="text-[1rem] font-bold">
              Liên hệ
            </Link>
          </li>
          <li className="text-red-500 text-[1.25rem]">Hotline: 0976243569</li>
          <li>
            <a target="_blank" href="https://zalo.me/0397269518">
              <img className="h-[1.5rem]" src={zaloLogo} alt="" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.tiktok.com/@do_thang_28?_t=8mcPSlDeCNV&_r=1"
            >
              <img className="h-[1.5rem]" src={tiktokLogo} alt="" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100024281364274"
            >
              <img className="h-[1.5rem]" src={facebookLogo} alt="" />
            </a>
          </li>
        </div>
        {/* end contactlogo */}

        {/* start login/logout */}

        {/* end login/logout */}
      </div>
      <div id="body-main" className="flex justify-between sticky top-0 z-40 bg-white items-center mt-3">
        {/* start logo */}
        <div className="">
          <Link to={`/`}>
            <img className="max-h-[6rem]" src={logo} alt="" />
          </Link>
        </div>
        {/* end logo */}

        {/* start menu */}
        <div className="flex items-center gap-8">
          <div className="space-x-[2rem] text-[1rem]  font-bold">
            <Link className=" " to={`/`}>
              Trang chủ
            </Link>
            <Link
              className="hover:text-blue-main hover:border-b-[2px] hover:border-b-blue-main  focus:text-blue-main focus:shadow-lg focus:shadow-blue-main/50 "
              to={`motor`}
            >
              Xe máy
            </Link>
            <Link
              className="hover:text-blue-main hover:border-b-[2px] hover:border-b-blue-main  focus:text-blue-main focus:shadow-lg focus:shadow-blue-main/50 "
              to={`electricBike`}
            >
              Xe máy điện
            </Link>
            <Link
              className="hover:text-blue-main hover:border-b-[2px] hover:border-b-blue-main  focus:text-blue-main focus:shadow-lg focus:shadow-blue-main/50 "
              to={`accessoriesBike`}
            >
              Phụ tùng, phụ kiện
            </Link>
            <Link
              className="hover:text-blue-main hover:border-b-[2px] hover:border-b-blue-main  focus:text-blue-main focus:shadow-lg focus:shadow-blue-main/50 "
              to={`introPage`}
            >
              Giới thiệu
            </Link>
            <Link
              className="hover:text-blue-main hover:border-b-[2px] hover:border-b-blue-main  focus:text-blue-main focus:shadow-lg focus:shadow-blue-main/50 "
              to={`policy`}
            >
              Chính sách
            </Link>
          </div>
          <div>
            <Link to={`register`} className="text-[1rem] font-bold">
              <Button dangNhap="Đăng nhập/Đăng kí" />
            </Link>
            
          </div>
          
        </div>
        {/* start contactlogo */}

        {/* end menu */}
      </div>
      {/* <Carosuel /> */}

      <div id="body-content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
