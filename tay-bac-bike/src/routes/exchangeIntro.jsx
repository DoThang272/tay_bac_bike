function ExchangeIntro() {
    return ( <>
        <div className="flex bg-blue-main-100 py-[3rem] rounded-xl">
          <div className="w-[25%] ">
            <i class="fa-solid fa-window-restore flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center px-[1rem]">
                Gửi thông tin xe máy của bạn và đặt lịch thẩm định
            </p>
          </div>
          <div className="w-[25%] ">
            <i class="fa-solid fa-heart-circle-check flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center">
                Chọn chiếc xe máy bạn muốn 
            </p>
          </div>
          <div className="w-[25%] ">
            <i class="fa-solid fa-file-lines flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center">
                Đăng ký lái thử và chuẩn bị hồ sơ
            </p>
          </div>
          <div className="w-[25%] ">
            <i class="fa-solid fa-house-user flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center px-[1rem]">
                Chọn nhận xe tại cửa hàng hoặc tại nhà
            </p>
          </div>
        </div>
    </> );
}

export default ExchangeIntro;