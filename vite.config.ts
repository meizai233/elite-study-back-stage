import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import PxToRem from "./px-to-rem";

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    Unocss(),
    AutoImport({
      dts: "src/types/auto-imports.d.ts", // 生成类型声明文件，自动引入相关插件
      imports: ["vue", "pinia", "@vueuse/core"], // 自动引入哪些内容
      dirs: ["src/composables"], // 自动导入composables目录下的模块
    }),
    Components({
      dirs: ["src/components"], //自动导入components目录下的组件
      dts: "./src/types/components.d.ts", //生成类型声明文件，自动引入相关组件
      resolvers: [AntDesignVueResolver({ resolveIcons: true })],
    }),
    PxToRem(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
