import { checkAdminRole, adminLogin } from "@/api/user";
import { message } from "ant-design-vue";

// 实现密码登陆：调用adminLogin接口 处理返回值 如果登陆成功 把数据存放到本地
export function useAuth() {
  // token响应式设置本地存储
  const token = useLocalStorage("token", "");
  const isLogin = computed(() => !!token.value);

  // 登陆的办法
  async function login(phone: string, password: string) {
    // 调用登录接口
    const { code, data } = await adminLogin({ phone, password });
    if (code === 0) {
      token.value = data;
      // 获取用户信息
      const { data: details, code: c_code } = await checkAdminRole();
      if (c_code === 0) {
        if (details.role === "ADMIN") {
          message.success("登录成功");
        } else {
          clearLoginState();
          message.error("您不是管理员, 无法登录!");
        }
      }
    }
  }

  // 清除token
  function clearLoginState() {
    token.value = "";
  }

  return {
    token,
    isLogin,
    login,
    clearLoginState,
  };
}
