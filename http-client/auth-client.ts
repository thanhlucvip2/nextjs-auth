import { LoginModel } from "./login.model";
import axiosClient from "./axios-client";

export const authClient = {
  login(loginModel: LoginModel) {
    return axiosClient.post("/public/login", loginModel);
  },
  logout() {
    return axiosClient.post("/public/logout");
  },
  getdata() {
    return axiosClient.get("/recruiter/feeds");
  },
};
