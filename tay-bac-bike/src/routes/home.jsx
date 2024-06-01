import { Outlet, Link } from "react-router-dom";
import Button from "../components/button";
import Carosuel from "../components/carouelPage";
import buyMotor1 from "../images/buyMotor.png";
import buyMotor2 from "../images/xeCub.png";
import buyMotor3 from "../images/cbr150.png";

function Home() {

    return ( <>
        <Carosuel />
        <div className="w-full">
            <div className="flex gap-6 h-[16rem] justify-center">
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
        <div className=" mt-[6rem]">
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
        <div className="mt-[6rem] mb-[6rem]">
            <div className="mb-[2.5rem] font-bold text-[2rem]">
                Chúng tôi hoạt động như thế nào?
            </div>
            <div className="flex justify-center gap-[11rem]">
                <Link to={`buyIntro`}>
                    <div className="text-[1.5rem] font-bold pb-1rem px-[2rem] border-b-[2px] border-b-white box-border text_active_hi">Mua</div> 
                </Link>
                <Link to={`sellIntro`}>
                    <div className="text-[1.5rem] font-bold pb-1rem px-[2rem] border-b-[2px] border-b-white box-border text_active_hi" >Bán</div>
                </Link>
                <Link to={`exchangeIntro`}>
                    <div className="text-[1.5rem] font-bold pb-1rem px-[2rem] border-b-[2px] border-b-white box-border text_active_hi" >Trao đổi</div>
                </Link>
            </div>
            <div className="flex bg-blue-main-100 py-[3rem] rounded-xl">
                <Outlet />
            </div>
        </div>
        <div className="mt-[6rem]">
            as 
        </div>
        {/* End mua, bán , trảo đổi xe  */}
    </> );
}

export default Home;