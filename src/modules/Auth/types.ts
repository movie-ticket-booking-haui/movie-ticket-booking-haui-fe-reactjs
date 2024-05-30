// export interface FormRequest {
//   email: string;
//   password: string;
//   remember: string;
// }
export interface ILoginDataRequest {
  email: string;
  password: string;
}
export interface ILoginDataResponse {
  access: {
    token: string;
    expires: Date;
  };
}
