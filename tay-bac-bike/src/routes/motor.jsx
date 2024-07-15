
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Carosuel from "../components/carouelPage"; 
import ElementDetailBox from "../components/elementDetail";
import { FaMinus } from "react-icons/fa";
import Footer from "../components/footer";


function Motor() {

    return ( <>
        <Carosuel />    
        <div className="mx-[15%] mb-[2rem]">
            
            <div className="w-[100%] flex">
                <div className="w-[20%] border-[2px] border-green-main rounded-[9px] mr-[1rem]">
                    <div className="flex justify-between p-[0.5rem] items-center text-blue-main font-bold text-[1.3rem]">
                        <div>Thương hiệu</div>
                        <div className=""><FaMinus /></div>
                    </div>
                    <ul className="pl-[1rem] grid gap-2 mb-[1rem]">
                        <li>- Honda</li>
                        <li>- Yamaha</li>
                        <li>- Suzuki</li>
                        <li>- SYM</li>
                        <li>- Detech espero</li>
                        <li>- Xe cũ</li>
                        <li>- "Xe thồ"</li>
                    </ul>
                    <hr />
                    <form className="grid gap-2 mb-[1rem]">
                        <div className="flex justify-between p-[0.5rem] items-center text-blue-main font-bold text-[1.3rem]">
                            <div>Khoảng giá</div>
                            <div className=""><FaMinus /></div>
                        </div>
                        <div className="flex pl-[1rem] items-center gap-[0.5rem]">
                            <input type="radio" />
                            <div>Tất cả</div>
                        </div>
                        <div className="flex pl-[1rem] items-center gap-[0.5rem]">
                            <input type="radio" />
                            <div>Nhỏ hơn 4.000.000 VNĐ</div>
                        </div>
                        <div className="flex pl-[1rem] items-center gap-[0.5rem]">
                            <input type="radio" />
                            <div>Từ 4 triệu đến 8 triệu VNĐ</div>
                        </div>
                        <div className="flex pl-[1rem] items-center gap-[0.5rem]">
                            <input type="radio" />
                            <div>Từ 8 triệu đến 12 triệu VNĐ</div>
                        </div>
                        <div className="flex pl-[1rem] items-center gap-[0.5rem]">
                            <input type="radio" />
                            <div>Từ 12 triệu đến 17 triệu VNĐ</div>
                        </div>
                        <div className="flex pl-[1rem] items-center gap-[0.5rem]">
                            <input type="radio" />
                            <div>Trên 17.000.000 triệu VNĐ</div>
                        </div>

                    </form>
                    <hr/>
                    <div className="flex justify-between p-[0.5rem] items-center text-blue-main font-bold text-[1.3rem]">
                        <div>Loại sản phẩm</div>
                        <div className=""><FaMinus /></div>
                    </div>
                    <ul className="pl-[1rem] grid gap-2 mb-[1rem]">
                        <li className="flex items-center gap-1">
                            <input type="checkbox" />
                            <div>Xe tay ga</div>
                        </li>
                        <li className="flex items-center gap-1">
                            <input type="checkbox" />
                            <div>Xe côn</div>
                        </li>
                        <li className="flex items-center gap-1">
                            <input type="checkbox" />
                            <div>Xe số</div>
                        </li>
                        <li className="flex items-center gap-1">
                            <input type="checkbox" />
                            <div>Xe điện</div>
                        </li>
                    </ul>
                </div>
                <div className="w-[80%] ">
                    <div className="border-[2px] border-green-main rounded-[9px] mb-[1rem] flex p-[1rem] justify-between items-center">
                        <div>Tất cả sản phẩm</div>
                        <div className="flex items-center ">
                            <div id="sapXep" className="pr-[0.5rem]">Sắp xếp </div>
                            <select className="border-[2px] border-green-main" name="sapXep" id="">
                                <option value="All">Tất cả</option>
                                <option value="bestSeler">Sản phẩm bán chạy</option>
                                <option value="AToZ">Từ A đến Z</option>
                                <option value="ZToA">Từ Z đến A</option>
                                <option value="HightToLowPrice">Giá từ cao tới thấp</option>
                                <option value="LowToHightPrice">Giá từ thấp tới cao</option>
                            </select>
                        </div>

                    </div>
                    <div className=" grid grid-cols-4 gap-2">
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                        <ElementDetailBox />
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-[1rem]'>
                <Stack spacing={2}>
                    {/* <Pagination count={10} shape="rounded" /> */}   
                    <Pagination  count={10} variant="outlined" shape="rounded" />
                </Stack>
            </div>
        </div>

        <Footer />
    </> );
}

export default Motor;