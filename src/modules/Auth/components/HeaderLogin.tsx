import { Link } from "react-router-dom";
import instagram_icon from "../../../assets/images/instagram_icon.svg";
import facebook_icon from "../../../assets/images/facebook_icon.svg";
import { pathRoutes } from "../../../constants/routes";
import { Menu, MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];
const HeaderLogin = () => {
  const itemMenus: MenuItem[] = [
    {
      label: (
        <a href={pathRoutes.login} target="_blank" rel="noopener noreferrer">
          Shop quà tặng
        </a>
      ),
      key: "shop",
    },
    {
      label: (
        <a href={pathRoutes.login} target="_blank" rel="noopener noreferrer">
          Mua vé
        </a>
      ),
      key: "buy",
    },
    {
      label: (
        <a href={pathRoutes.login} target="_blank" rel="noopener noreferrer">
          Phim
        </a>
      ),
      key: "movie",
    },
    {
      label: (
        <a href={pathRoutes.login} target="_blank" rel="noopener noreferrer">
          Rạp chiếu phim
        </a>
      ),
      key: "cinema",
    },
    {
      label: (
        <a href={pathRoutes.login} target="_blank" rel="noopener noreferrer">
          Khuyến mại
        </a>
      ),
      key: "promotion",
    },
    {
      label: (
        <a href={pathRoutes.login} target="_blank" rel="noopener noreferrer">
          Liên Hệ
        </a>
      ),
      key: "contact",
    },
  ];
  const itemHeaderTops: MenuItem[] = [
    {
      label: (
        <a href={pathRoutes.login} target="_blank" rel="noopener noreferrer">
          Đăng ký
        </a>
      ),
      key: "shop",
    },
    {
      label: (
        <a href={pathRoutes.login} target="_blank" rel="noopener noreferrer">
          Thẻ thành viên
        </a>
      ),
      key: "buy",
    },
    {
      label: (
        <a href={pathRoutes.login} target="_blank" rel="noopener noreferrer">
          Hỗ trợ khách hàng
        </a>
      ),
      key: "movie",
    },
    {
      label: (
        <a href={pathRoutes.login} target="_blank" rel="noopener noreferrer">
          English
        </a>
      ),
      key: "english",
    },
  ];
  return (
    <div
      className="header w-full"
      style={{
        borderBottom: "1px solid #c9c9c9",
      }}
    >
      <div className="header_banner flex justify-between">
        <div
          className="flex justify-between w-[20%] items-center"
          style={{ paddingLeft: "100px" }}
        >
          <Link to={pathRoutes.login} className="flex justify-between">
            <img src={instagram_icon}></img>
            <div
              style={{
                fontWeight: "bold",
                color: "black",
                paddingLeft: "5px",
              }}
            >
              Instagram
            </div>
          </Link>
          <Link to={pathRoutes.login} className="flex justify-between">
            <img src={facebook_icon}></img>
            <div className=" pl-1 text-black font-bold">Facebook</div>
          </Link>
        </div>
        <div className="w-[30%] flex flex-col justify-end">
          <Menu
            items={itemHeaderTops}
            mode="horizontal"
            style={{ backgroundColor: "rgb(239,235,219)" }}
          ></Menu>
        </div>
      </div>
      <div
        className="header_logo flex items-center w-full justify-center"
        style={{ backgroundColor: "white" }}
      >
        <img
          src="src\assets\images\logo_login.png"
          className="flex items-center"
        ></img>
      </div>
      <div style={{ backgroundColor: "rgb(239,235,219)", height: "3px" }}></div>
      <div style={{ backgroundColor: "white" }} className="w-full">
        <Menu
          items={itemMenus}
          mode="horizontal"
          className="flex items-center justify-center p-2"
          style={{ fontSize: "20px" }}
        ></Menu>
      </div>
    </div>
  );
};
export default HeaderLogin;
