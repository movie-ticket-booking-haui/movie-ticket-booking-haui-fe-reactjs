import ContentBody from "../components/ContentBody";
import FooterLogin from "../components/FooterLogin";
import HeaderLogin from "../components/HeaderLogin";

const LoginPage = () => {
  return (
    <div
      className="login w-full"
      style={{
        backgroundColor: "rgb(239,235,219)",
      }}
    >
      <HeaderLogin />
      <ContentBody />
      <FooterLogin />
    </div>
  );
};

export default LoginPage;
