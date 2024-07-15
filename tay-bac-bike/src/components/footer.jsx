import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
function Footer() {
    return ( <>
        {/* Start Fotter */}
        <div className="bg-blue-main-50 px-[15%] mb-[1rem] flex justify-between">
            <div className="">
                <div className="text-[2rem] text-green-main">
                    Xe máy xe điện Quang Đạo
                </div>      
                <div className="text-[1.2rem] ">Liên hệ với chúng tôi để được tư vấn và sửa chữa, mua, bán, bảo dưỡng xe máy xe điện.</div>      
                <table className="mb-[1rem] ">
                    <tr className="bg-blue-gray-50">
                        <td className="flex items-center gap-1"><BsFillTelephoneFill />Tel:</td>
                        <td>    0976243569</td>
                    </tr>
                    <tr>
                        <td className="flex items-center gap-1"><FaFacebook />Facebook:</td>
                        <td>Đỗ Quang Đạo (id: 100033639080916)</td>
                    </tr>
                    <tr className="bg-blue-gray-50">
                        <td className="flex items-center gap-1"><SiZalo />Zalo:</td>
                        <td>    0976243569</td>
                    </tr>
                    <tr>
                        <td className="flex items-center gap-1"><MdEmail />Email:</td>
                        <td>    Doanhthang16@gmail.com</td>
                    </tr>
                    <tr className="bg-blue-gray-50">
                        <td className="flex items-center gap-1"><FaLocationDot />Address:</td>
                        <td>    Tk Quyết Thắng, Cò Nòi, Mai Sơn, Sơn La</td>
                    </tr>
                </table>
                <div className="w-full">
                    <div className="text-[1.2rem] mb-[0.5rem]">Truy cập nhanh danh mục</div>
                    <div className="flex w-full">
                        <div className="w-[30%] grid gap-3">
                            <div className="bg-blue-gray-50">Xe máy</div>
                            <div>Xe điện</div>
                            <div className="bg-blue-gray-50">Xe máy cũ</div>
                        </div>
                        <div className=" grid gap-3 w-[30%]">
                            <div>Phụ tùng, phụ kiện</div>
                            <div className="bg-blue-gray-50">Giới thiệu về cửa hàng</div>
                            <div>Chính sách</div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex float-right ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.061785285643!2d104.17740927530765!3d21.110102784979688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3132510073731127%3A0x1f17abc25eeee702!2zWGUgbcOheSBxdWFuZyDEkeG6oW8!5e0!3m2!1svi!2s!4v1720583488821!5m2!1svi!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
        <div className="flex justify-center bg-black-main-text text-white py-[1rem]">
            Coppy right by Do Thang cute dep trai
        </div>
        {/* End Fotter */}
    </> );
}

export default Footer;