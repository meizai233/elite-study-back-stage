import { message } from "ant-design-vue";
import axios, { type AxiosRequestConfig } from "axios";
export const BASE_URL = "http://localhost:8888";
const request = axios.create({ baseURL: `${BASE_URL}/api/admin/v1` });

// 请求拦截器
// 请求拦截器
request.interceptors.request.use((config) => {
  // $ 配置Reactivity transform后 不需要在显式转为ref 一个vue3语法糖
  const { token } = $(useAuth());
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// 响应拦截器
request.interceptors.response.use((response) => {
  const { clearLoginState } = $(useAuth());
  const data = response.data;

  if (data.code !== 0) {
    message.error(data.msg);
    clearLoginState();
  }
  return response;
});

export default async function (url: string, options?: AxiosRequestConfig) {
  return (
    await request({
      url,
      ...options,
    })
  ).data;
}
