import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  shortcuts: [
    {
      "flex-center": "items-center justify-center",
      "flex-v-center": "items-center",
      "flex-h-center": "justify-center",
      "flex-h-end": "justify-end",
    },
  ],
  presets: [presetUno({ attributifyPseudo: true }), presetAttributify()],
  include: [/.*\/anu-vue\.js(.*)?$/, "./**/*.vue"],
});
