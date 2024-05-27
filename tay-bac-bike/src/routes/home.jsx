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
                        <Button className='' buyMotor="Mua"/>
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
                        <Button className='' buyMotor="Mua"/>
                    </div>
                        {/* <div className="flex items-end w-[40%] h-[10rem] absolute bottom-0 "> */}
                    <img className="flex items-end h-[70%] w-auto absolute bottom-0 right-[-3rem] " src={buyMotor2} alt=""/>
                        {/* </div> */}
                        
                </div>
            </div>
            
        </div>
        <div className=" mt-[6rem]">
            <div className="flex justify-center mb-[3rem] font-bold text-[2rem]">
                Tại sao nên mua từ chúng tôi?
            </div>
            <div className="flex justify-between">
                <div className="w-[25%] ">
                    <div className="content_center_box">
                        <i class="fa-solid fa-shield-heart"></i>
                    </div>
                    <p className="content_center_box">
                        Đảm bảo chất lượng
                    </p>
                </div>
                <div className="w-[25%]">
                    <div className="content_center_box">
                        <i class="fa-solid fa-money-bill-trend-up"></i>
                    </div>
                    <p className="content_center_box">
                        Giá trị lớn
                    </p>
                    
                </div>
                <div className="w-[25%]">
                    <div className="content_center_box">
                        <i class="fa-solid fa-cart-arrow-down"></i>
                    </div>
                    <p className="content_center_box">
                        Mua hàng dễ dàng
                    </p>
                    <span className="content_center_box">Quy trình mua hàng an toàn, nhanh chóng và đáng tin cậy với các phương thức thanh toán đơn giản, các lựa chọn tài chính có sẵn và việc xử lý tất cả các thủ tục giấy tờ để bạn có thể sử dụng xe mà không gặp rắc rối.</span>
                    
                </div>
                <div className="w-[25%]">
                    <div className="content_center_box">
                        <i class="fa-solid fa-headset"></i>
                    </div>
                    <p className="content_center_box">
                        Luôn sẵn sàng hỗ trợ
                    </p>
                    
                </div>
            </div>
        </div>
        <div className="mt-[9rem]">
            bac
        </div>
    </> );
}

export default Home;