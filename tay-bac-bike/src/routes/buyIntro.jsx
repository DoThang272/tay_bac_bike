function BuyIntro() {
    return ( <>
        <div className="flex justify-between w-[100%] bg-blue-main-100 py-[3rem] rounded-xl">
          <div className="w-[25%] ">
            <i class="fa-solid fa-calendar-check flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center px-[1rem]">
              Tìm kiếm sản phẩm trong danh mục của chúng tôi
            </p>
            
          </div>
          <div className="w-[25%] ">
            <i class="fa-solid fa-gear flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center">
              Đặt lịch lái thử miễn phí tại cửa hàng của chúng tôi
            </p>
          </div>
          <div className="w-[25%] ">
            <i class="fa-solid fa-credit-card flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center">
              Thanh toán đầy đủ hoặc lựa chọn trả góp
            </p>
          </div>
          <div className="w-[25%] ">
            <i class="fa-solid fa-file-circle-check flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center px-[1rem]">
              Tận hưởng chuyến đi của bạn với chính sách 6 tháng bảo hành
            </p>
          </div>
        </div>
    </> );
}

export default BuyIntro;