function SellIntro() {
    return ( <>
        <div className="sell_intro flex w-[100%] bg-blue-main-100 justify-center py-[3rem] rounded-xl">
          <div className="w-[25%] ">
            <i class="fa-solid fa-envelope-open-text flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center px-[1rem]">
              Gửi thông tin của bạn để đặt lịch thẩm định xe tận nơi
            </p>
          </div>
          <div className="w-[25%] ">
            <i class="fa-solid fa-magnifying-glass-chart flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center">
                Thẩm định xe máy của bạn
            </p>
          </div>
          <div className="w-[25%] ">
            <i class="fa-solid fa-comments-dollar flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center">
              Nhận báo giá ngay tại chỗ
            </p>
          </div>
          <div className="w-[25%] ">
            <i class="fa-solid fa-sack-dollar flex justify-center text-[2.8rem] text-blue-main p-[1rem]"></i>
            <p className="text-center px-[1rem]">
              Chúng tôi sẽ làm thủ tục giấy tờ & bạn lo chi phí!
            </p>
          </div>
        </div>
    </> );
}

export default SellIntro;