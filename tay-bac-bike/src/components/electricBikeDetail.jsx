import detail1 from '../images/IMG_3288.JPG'
function ElectricBikeDetail() {
    return ( <>
        <div className=" rounded-[9px] border-[2px] border-blue-main-100">
            <img className='rounded-[9px] ' src={detail1} alt="detail1"/>
            <p className='px-[0.7rem] pt-[0.7rem] '>XTREME</p>
            <p className='font-bold p-[0.7rem]'>XE ĐẠP ĐIỆN KENKO M133</p>
            <div className='px-[0.7rem] text-[0.9rem] pb-[0.7rem] border-b-[2px] border-b-blue-main-100'>
                <span className='border-[1px] bg-blue-main-100 rounded-[4px] p-[0.2rem] mr-[0.5rem]'>Xe điện</span>
                <span className='border-[1px] bg-blue-main-100 rounded-[4px] p-[0.2rem] mr-[0.5rem]'>50km / 1 lần sạc</span>

            </div>
            {/* <hr className='text-blue-main'/> */}
            <div className='p-[0.7rem] font-bold text-blue-main text-[1.5rem] '>8.900.000 VNĐ</div>
        </div>

        
    </> );
}

export default ElectricBikeDetail;