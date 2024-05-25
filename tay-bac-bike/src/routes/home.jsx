import Button from "../components/button";
import Carosuel from "../components/carouelPage";
import buyMotor1 from "../images/buyMotor.png";
import buyMotor2 from "../images/xeCub.png";

function Home() {
    return ( <>
        <Carosuel />
        <div className="w-full">
            <div className="flex gap-6 justify-center">
                <div className="flex bg-[#5ECAEE] text-white overflow-hidden shadow-3xl shadow-blue-main-500/50 rounded-[1rem] w-[32%] pl-[1rem] pt-[1rem] relative">
                    <div className='w-[60%]'>
                        <span className="text-[2rem]">Mua xe máy</span>
                        <ul className="pl-[1.25rem]">
                            <li className="display_listst_type">Tùy chọn trả góp</li>
                            <li className="display_listst_type">Chính sách bảo hành và đổi trả</li>
                            <li className="display_listst_type">Giấy tờ đáng tin cậy về tình trạng xe</li>
                        </ul>
                    <Button className='block' buyMotor="Mua"/>
                    </div>
                    {/* <div className="flex items-end w-[40%] h-[10rem] absolute bottom-0 "> */}
                        <img className="flex items-end h-[60%] w-auto absolute bottom-0 right-[-2rem]" src={buyMotor1} alt=""/>
                    {/* </div> */}
                    
                </div>
                <div className="flex bg-[#5ECAEE] text-white overflow-hidden shadow-3xl shadow-blue-main-500/50 rounded-[1rem] w-[32%] pl-[1rem] pt-[1rem] relative">
                    <div className='w-[60%]'>
                            <span className="text-[2rem]">Bán xe máy</span>
                            <ul className="pl-[1.25rem]">
                                <li className="display_listst_type">Tùy chọn trả góp</li>
                                <li className="display_listst_type">Chính sách bảo hành và đổi trả</li>
                                <li className="display_listst_type">Giấy tờ đáng tin cậy về tình trạng xe</li>
                            </ul>
                        <Button className='block' buyMotor="Mua"/>
                    </div>
                        {/* <div className="flex items-end w-[40%] h-[10rem] absolute bottom-0 "> */}
                            <img className="flex items-end h-[60%] w-auto absolute bottom-0 right-[-2rem]" src={buyMotor1} alt=""/>
                        {/* </div> */}
                        
                </div>
                <div className="flex bg-[#5ECAEE] text-white overflow-hidden shadow-3xl shadow-blue-main-500/50 rounded-[1rem] w-[32%] pl-[1rem] pt-[1rem] relative">
                    <div className='w-[65%]'>
                            <span className="text-[2rem]">Trao đổi xe máy</span>
                            <ul className="pl-[1.25rem]">
                                <li className="display_listst_type">Tùy chọn trả góp</li>
                                <li className="display_listst_type">Chính sách bảo hành và đổi trả</li>
                                <li className="display_listst_type">Giấy tờ đáng tin cậy về tình trạng xe</li>
                            </ul>
                        <Button className='block' buyMotor="Mua"/>
                    </div>
                        {/* <div className="flex items-end w-[40%] h-[10rem] absolute bottom-0 "> */}
                            <img className="flex items-end h-[60%] w-auto absolute bottom-0 right-[-2rem]" src={buyMotor2} alt=""/>
                        {/* </div> */}
                        
                </div>
            </div>
            
        </div>
            <Button hello="Hello" />
    </> );
}

export default Home;