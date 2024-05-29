import { pathRoutes } from "../../constants/routes";
import LoginPage from "./pages/Login";

const authRoutes = [
  {
    path: pathRoutes.login,
    page: <LoginPage />,
  },
];

export default authRoutes;
