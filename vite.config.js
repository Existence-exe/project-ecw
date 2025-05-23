// filepath: c:\Users\NILUTPUL\Documents\learning\vite.config.js
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
