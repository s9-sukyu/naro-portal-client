import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
　server: {
    proxy: {
      '/api': {
        target: "http://xxx.xxx.xxx.xxx:xxxx", // 前回のサーバーのアドレスと自分のポートの組にする
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/'),
      }
    }
  }
});