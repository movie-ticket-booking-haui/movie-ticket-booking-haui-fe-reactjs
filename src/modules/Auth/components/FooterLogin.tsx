import logo_phim from "../../../assets/images/phim1.jpg";
import logo_phimother from "../../../assets/images/phim2.jpg";
import logo_footer from "../../../assets/images/logo_footer.gif";
const FooterLogin = () => {
  return (
    <div className="footer bg-white pl-48 pr-48 w-full pt-10">
      <div className="flex flex-col items-center">
        <div className="w-[100%]">
          <img src={logo_phim}></img>
        </div>
        <div className="w-[100%] mt-3">
          <img src={logo_phimother}></img>
        </div>
      </div>
      <div className="footer_inner w-[100%] flex flex-col items-start justify-start pt-7 pb-7">
        <div className="">
          <img src={logo_footer}></img>
        </div>
        <div className="flex items-start justify-start w-[100%] ">
          Chính Sách Khách Hàng Thường Xuyên | Chính Sách Bảo Mật Thông Tin|
          Điều Khoản Sử Dụng
        </div>
        <div> CÔNG TY TNHH LOTTE CINEMA VIỆT NAM </div>
        <div>
          Giấy CNĐKDN: 0302575928, đăng ký lần đầu ngày 02/05/2008, đăng ký thay
          đổi lần thứ 10 ngày 30/03/2018, cấp bởi Sở KHĐT Thành phố Hồ Chí Minh
        </div>
        <div>
          Địa chỉ: Tầng 3, TTTM Lotte, số 469 đường Nguyễn Hữu Thọ, Phường Tân
          Hưng, Quận 7, TPHCM, Việt Nam
        </div>
        <div>
          Hotline: (028) 3775 2524 COPYRIGHT © LOTTECINEMAVN.COM - ALL RIGHTS
          RESERVED.
        </div>
      </div>
    </div>
  );
};
export default FooterLogin;
