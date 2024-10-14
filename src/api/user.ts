import request, { BASE_URL } from "@/utils/request";

// 登陆接口
export function adminLogin(data: { phone: string; password: string }) {
  return request("/login", {
    method: "POST",
    data,
    baseURL: BASE_URL + "/api/user/v1",
  });
}

// 用户数据接口
export function checkAdminRole() {
  return request("/detail", {
    baseURL: BASE_URL + "/api/user/v1",
  });
}
