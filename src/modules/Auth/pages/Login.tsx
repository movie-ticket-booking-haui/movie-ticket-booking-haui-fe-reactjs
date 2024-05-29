import ContentBody from "../components/ContentBody";
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
    </div>
  );
};

export default LoginPage;
