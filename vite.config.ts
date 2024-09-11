import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    Unocss(),
    AutoImport({
      dts: "src/typings/auto-imports.d.ts", // 生成类型声明文件，自动引入相关插件
      imports: ["vue", "pinia"], // 自动引入哪些内容
      dirs: ["src/composables"], // 自动导入composables目录下的模块
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
