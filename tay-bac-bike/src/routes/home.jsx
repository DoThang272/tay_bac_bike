import { Outlet, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import Button from "../components/button";
import Carosuel from "../components/carouelPage"; 
import buyMotor1 from "../images/buyMotor.png";
import buyMotor2 from "../images/xeCub.png";
import buyMotor3 from "../images/cbr150.png";
import ElementDetailBox from '../components/elementDetail.jsx'
import ElectricBikeDetail from "../components/electricBikeDetail.jsx";
import Footer from "../components/footer.jsx";


function Home() {
    const sellIntro = function(){
        const changeLogo1 = document.querySelector('.logoHowActive1');
        const changeLogo2 = document.querySelector('.logoHowActive2');
        const changeLogo3 = document.querySelector('.logoHowActive3');
        const changeLogo4 = document.querySelector('.logoHowActive4');
        console.log("do THang");
        document.querySelector('.textHowActive1').innerHTML = "Gửi thông tin của bạn để đặt lịch thẩm định xe tận nơi"; 
        document.querySelector('.textHowActive2').innerHTML = "Thẩm định xe máy của bạn"; 
        document.querySelector('.textHowActive3').innerHTML = "Nhận báo giá ngay tại chỗ"; 
        document.querySelector('.textHowActive4').innerHTML = "Chúng tôi sẽ làm thủ tục giấy tờ & bạn lo chi phí!"; 

        changeLogo1.classList.replace("fa-calendar-check" , "fa-envelope-open-text")
        changeLogo1.classList.replace("fa-window-restore" , "fa-envelope-open-text")
        changeLogo2.classList.replace("fa-heart-circle-check" , "fa-magnifying-glass-chart")
        changeLogo2.classList.replace("fa-gear" , "fa-magnifying-glass-chart")
        changeLogo3.classList.replace("fa-file-lines" , "fa-comments-dollar")
        changeLogo3.classList.replace("fa-credit-card" , "fa-comments-dollar")
        changeLogo4.classList.replace("fa-file-circle-check" , "fa-sack-dollar")
        changeLogo4.classList.replace("fa-house-user" , "fa-sack-dollar")
    }
    const clearClassIntro  = function(){
        const changeLogo1 = document.querySelector('.logoHowActive1');
        const changeLogo2 = document.querySelector('.logoHowActive2');
        const changeLogo3 = document.querySelector('.logoHowActive3');
        const changeLogo4 = document.querySelector('.logoHowActive4');
        document.querySelector('.textHowActive1').innerHTML = "Tìm kiếm sản phẩm trong danh mục của chúng tôi"; 
        document.querySelector('.textHowActive2').innerHTML = "Đặt lịch lái thử miễn phí tại cửa hàng của chúng tôi"; 
        document.querySelector('.textHowActive3').innerHTML = "Thanh toán đầy đủ hoặc lựa chọn trả góp"; 
        document.querySelector('.textHowActive4').innerHTML = "Tận hưởng chuyến đi của bạn với chính sách 6 tháng bảo hành";
        changeLogo1.classList.replace("fa-envelope-open-text" , "fa-calendar-check")
        changeLogo1.classList.replace("fa-window-restore" , "fa-calendar-check")

        changeLogo2.classList.replace("fa-heart-circle-check" , "fa-gear")
        changeLogo2.classList.replace("fa-magnifying-glass-chart" , "fa-gear")
        
        changeLogo3.classList.replace("fa-comments-dollar" , "fa-credit-card")
        changeLogo3.classList.replace("fa-file-lines" , "fa-credit-card")
        changeLogo4.classList.replace("fa-sack-dollar" , "fa-file-circle-check")
        changeLogo4.classList.replace("fa-house-user" , "fa-file-circle-check")

    }
    const exchangeIntro  = function(){
        const changeLogo1 = document.querySelector('.logoHowActive1');
        const changeLogo2 = document.querySelector('.logoHowActive2');
        const changeLogo3 = document.querySelector('.logoHowActive3');
        const changeLogo4 = document.querySelector('.logoHowActive4');
        document.querySelector('.textHowActive1').innerHTML = "Gửi thông tin xe máy của bạn và đặt lịch thẩm định"; 
        document.querySelector('.textHowActive2').innerHTML = "Chọn chiếc xe máy bạn muốn"; 
        document.querySelector('.textHowActive3').innerHTML = "Đăng ký lái thử và chuẩn bị hồ sơ"; 
        document.querySelector('.textHowActive4').innerHTML = "Chọn nhận xe tại cửa hàng hoặc tại nhà"; 

        changeLogo1.classList.replace("fa-calendar-check" , "fa-window-restore")
        changeLogo1.classList.replace("fa-envelope-open-text" , "fa-window-restore")

        changeLogo2.classList.replace("fa-gear" , "fa-heart-circle-check")
        changeLogo2.classList.replace("fa-magnifying-glass-chart" , "fa-heart-circle-check")
        
        changeLogo3.classList.replace("fa-comments-dollar" , "fa-file-lines")
        changeLogo3.classList.replace("fa-credit-card" , "fa-file-lines")
        
        changeLogo4.classList.replace("fa-sack-dollar" , "fa-house-user")
        changeLogo4.classList.replace("fa-file-circle-check" , "fa-house-user")


    }
    return ( <>
        <Carosuel />
        <div className="w-full">
            <div className="flex gap-6 h-[16rem] mx-[15%] justify-center">
                <div className="flex bg-[#5ECAEE] text-white overflow-hidden shadow-3xl shadow-blue-main-500/50 rounded-[1rem] w-[32%] pl-[1rem] py-[1rem] relative">
                    <div className='w-[60%] flex flex-wrap content-between'>
                        <div>
                            <span className="text-[2rem] font-bold">Mua xe máy</span>
                            <ul className="pl-[1.25rem]">
                                <li className="display_listst_type">Tùy chọn trả góp</li>
                                <li className="display_listst_type">Chính sách bảo hành và đổi trả</li>
                                <li className="display_listst_type">Giấy tờ đáng tin cậy về tình trạng xe</li>
                            </ul>
                        </div>
                        <Button className='' buyMotor="Mua"/>
                    </div>
                    {/* <div className="flex items-end w-[40%] h-[10rem] absolute bottom-0 "> */}
                        <img className="flex items-end h-[60%] w-auto absolute bottom-3 right-[-2rem]" src={buyMotor1} alt=""/>
                    {/* </div> */}
                    
                </div>
                <div className="flex bg-[#5ECAEE] text-white overflow-hidden shadow-3xl shadow-blue-main-500/50 rounded-[1rem] w-[32%] pl-[1rem] py-[1rem] relative">
                    <div className='w-[60%] flex flex-wrap content-between'>
                        <div className="">
                            <span className="text-[2rem] font-bold">Bán xe máy</span>
                            <ul className="pl-[1.25rem]">
                                <li className="display_listst_type">An toàn & bảo mật</li>
                                <li className="display_listst_type">Kiểm tra miễn phí 100%</li>
                                <li className="display_listst_type">Không rắc rối giấy tờ, thanh toán nhanh chóng</li>
                            </ul>
                        </div>
                        <Button className='' buyMotor="Bán"/>
                    </div>
                        {/* <div className="flex items-end w-[40%] h-[10rem] absolute bottom-0 "> */}
                            <img className="flex items-end h-[60%] w-auto absolute bottom-3 right-[-3rem]" src={buyMotor3} alt=""/>
                        {/* </div> */}
                        
                </div>
                <div className="flex bg-[#5ECAEE] text-white overflow-hidden shadow-3xl shadow-blue-main-500/50 rounded-[1rem] w-[32%] pl-[1rem] py-[1rem] relative">
                    <div className='w-[65%] flex flex-wrap content-between'>
                        <div>
                            <span className="text-[2rem] font-bold">Trao đổi xe máy</span>
                            <ul className="pl-[1.25rem]">
                                <li className="display_listst_type">Thủ tục không rắc rối</li>
                                <li className="display_listst_type">Sang tên ngay lập tức</li>
                                <li className="display_listst_type">Đa dạng sự lựa chọn</li>
                            </ul>
                        </div>
                        <Button className='' buyMotor="Trao đổi"/>
                    </div>
                        {/* <div className="flex items-end w-[40%] h-[10rem] absolute bottom-0 "> */}
                    <img className="flex items-end h-[75%] w-auto absolute bottom-0 right-[-3rem] " src={buyMotor2} alt=""/>
                        {/* </div> */}
                        
                </div>
            </div>
             
        </div>
        {/* Lý do nên mua xe từ chugns tôi */}
        <div className=" mt-[6rem] mx-[15%]">
            <div className="flex justify-center mb-[2.5rem] font-bold text-[2rem]">
                Tại sao nên mua từ chúng tôi?
            </div>
            <div className="flex justify-between gap-[4rem]">
                <div className="w-[25%]">
                    <div className="content_center_box ">
                        <i class="fa-solid fa-shield-heart icon_style"></i>
                    </div>
                    <p className="content_center_box text-[1.2rem] font-bold my-[0.8rem]">
                        Đảm bảo chất lượng
                    </p>
                    <span className="content_center_box leading-[1.7rem]">
                    Xe máy của chúng tôi trải qua một quy trình kiểm tra chi tiết 170 điểm và được bảo dưỡng hoàn toàn để hoạt động như mới.
                    </span>
                </div>
                <div className="w-[25%]">
                    <div className="content_center_box">
                        <i  class="fa-solid fa-money-bill-trend-up icon_style"></i>
                    </div>
                    <p className="content_center_box text-[1.2rem] font-bold my-[0.8rem]">
                        Giá trị lớn
                    </p>
                    <span className="content_center_box leading-[1.7rem]">
                        Xe máy đã qua sử dụng của chúng tôi đạt chứng nhận chất lượng, có chính sách bảo hành, chính sách đổi trả dễ dàng và bảo hiểm đi kèm để mang lại sự an tâm cho bạn.
                    </span>
                </div>
                <div className="w-[25%]">
                    <div className="content_center_box">
                        <i class="fa-solid fa-cart-arrow-down icon_style"></i>
                    </div>
                    <p className="content_center_box text-[1.2rem] font-bold my-[0.8rem]">
                        Mua hàng dễ dàng
                    </p>
                    <span className="content_center_box leading-[1.7rem]">
                        Quy trình mua hàng an toàn, nhanh chóng và đáng tin cậy với các phương thức thanh toán đơn giản, các lựa chọn tài chính có sẵn và việc xử lý tất cả các thủ tục giấy tờ để bạn có thể sử dụng xe mà không gặp rắc rối.
                    </span>
                    
                </div>
                <div className="w-[25%]">
                    <div className="content_center_box">
                        <i class="fa-solid fa-headset icon_style"></i>
                    </div>
                    <p className="content_center_box text-[1.2rem] font-bold my-[0.8rem]">
                        Luôn sẵn sàng hỗ trợ
                    </p>
                    <span className="content_center_box leading-[1.7rem]">
                    Hãy tin tưởng vào chính sách bảo hành 6 tháng, chính sách đổi trả trong vòng 6 ngày, và đội ngũ chuyên nghiệp sẵn sàng hỗ trợ bạn với những vấn đề gặp phải sau khi mua hàng.
                    </span>
                    
                </div>
            </div>
        </div>
        {/* Lý do nên mua xe từ chugns tôi */}

        {/* Start mua, bán , trảo đổi xe  */}
        <div className="mt-[6rem] mb-[6rem] mx-[15%]">
            <div className="mb-[2.5rem] font-bold text-[2rem]">
                Chúng tôi hoạt động như thế nào?
            </div>
            <div className="flex w-[100%] justify-center ">
                <button  onClick={clearClassIntro}  className="text-[1.5rem] font-bold pb-1rem px-[2rem] border-b-[2px] border-b-white box-border text_active_hi  ">
                    Mua
                </button >
                <button onClick={sellIntro} className="text-[1.5rem] font-bold pb-1rem px-[2rem] border-b-[2px] border-b-white box-border text_active_hi ">
                    Bán
                </button>
                <button onClick={exchangeIntro} className="text-[1.5rem] font-bold pb-1rem px-[2rem] border-b-[2px] border-b-white box-border text_active_hi ">
                    Trao đổi
                </button>
            </div>
            <div className="flex justify-center gap-[11rem]">
                <div className="flex justify-between w-[100%] bg-blue-main-100 py-[3rem] rounded-xl">

                    <div className="w-[25%] ">
                        <i class="logoHowActive1 fa-solid fa-calendar-check flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
                        <p id="" className="textHowActive12 textHowActive1 text-center px-[1rem]">
                        Tìm kiếm sản phẩm trong danh mục của chúng tôi
                        </p>
                        
                    </div>
                    <div className="w-[25%] ">
                        <i class="logoHowActive2 fa-solid fa-gear flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
                        <p className="textHowActive2 text-center">
                        Đặt lịch lái thử miễn phí tại cửa hàng của chúng tôi
                        </p>
                    </div>
                    <div className="w-[25%] ">
                        <i class="logoHowActive3 fa-solid fa-credit-card flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
                        <p className="textHowActive3 text-center">
                        Thanh toán đầy đủ hoặc lựa chọn trả góp
                        </p>
                    </div>
                    <div className="w-[25%] ">
                        <i class="logoHowActive4 fa-solid fa-file-circle-check flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
                        <p className="textHowActive4 text-center px-[1rem]">
                        Tận hưởng chuyến đi của bạn với chính sách 6 tháng bảo hành
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[6rem] mb-[6rem] mx-[15%]">
            <div className="mb-[2.5rem] font-bold text-[2rem]">
                Sản phẩm xe cũ giá rẻ chất lượng tốt.
            </div>
            <div className="grid grid-cols-5 gap-2">
                <ElementDetailBox />
                <ElementDetailBox />
                <ElementDetailBox />
                <ElementDetailBox />
                <ElementDetailBox />
                <ElementDetailBox />
                <ElementDetailBox />
                <ElementDetailBox />
                
            </div>
            <Link to={`oldBike`}>
                <div className="flex justify-center my-[2rem] text-[1.5rem] hover:text-blue-main">Xem thêm</div>
            </Link>
        </div>
        <div className="mt-[6rem] mb-[6rem] mx-[15%]">
            <div className="mb-[2.5rem] font-bold text-[2rem]">
                Xe điện giá tốt pin khỏe.
            </div>
            <div className="grid grid-cols-5 gap-2">
                <ElectricBikeDetail />
                <ElectricBikeDetail />
                <ElectricBikeDetail />
                <ElectricBikeDetail />
                <ElectricBikeDetail />
                <ElectricBikeDetail />
                <ElectricBikeDetail />
                
            </div>
            <Link to={`electricBike`}>
                <div className="flex justify-center my-[2rem] text-[1.5rem] hover:text-blue-main">Xem thêm</div>
            </Link>
        </div>
        {/* End mua, bán , trảo đổi xe  */}
        <Footer />

    </> );
}

export default Home;