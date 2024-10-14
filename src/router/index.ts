import { createRouter, createWebHistory } from "vue-router";
import index from "@/views/index.vue";
// @ 相对路径在tsconfig.json配置
// 路由配置
export const routes = [
  {
    path: "/",
    name: "首页",
    component: index,
  },
  {
    path: "/login",
    name: "登录页面",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/manager",
    name: "后台管理页面",
    component: () => import("@/views/manager.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 前置路由守卫
router.beforeEach((to, from, next) => {
  // $() 把useAuth()导出的对象 转换为ref响应式
  const { isLogin } = $(useAuth());
  if (!to.path.includes("login")) {
    if (!isLogin) next("/login");
    else next();
  } else {
    if (isLogin) next("/");
    else next();
  }
});

export default router;
