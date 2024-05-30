// import { authApi } from "@/constants";
// import HttpRequest from "@/core/http/singleton/auth";
import axios from "axios";
import { ILoginDataRequest, ILoginDataResponse } from "../types";
import { authApi } from "../../../constants";

const AuthServices = {
  loginApi: async (data: ILoginDataRequest) => {
    console.log(authApi.loginUrl);

    const res = await axios.post<ILoginDataResponse>(authApi.loginUrl, data);
    return res.data;
  },
};

export default AuthServices;
