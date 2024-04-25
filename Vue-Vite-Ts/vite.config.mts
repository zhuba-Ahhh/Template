import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import uncossConfig from "./unocss.config";
import Unocss from "unocss/vite";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    // 启用 CSS Modules
    modules: {
      localsConvention: "camelCase", // 或者 'dashes' | 'camelCaseOnly'
    },
  },
  plugins: [
    vue(),
    visualizer(),
    Unocss(uncossConfig),
    viteImagemin({
      gifsicle: {
        // gif图片压缩
        optimizationLevel: 3, // 选择1到3之间的优化级别
        interlaced: false, // 隔行扫描gif进行渐进式渲染
        // colors: 2 // 将每个输出GIF中不同颜色的数量减少到num或更少。数字必须介于2和256之间。
      },
      optipng: {
        // png
        optimizationLevel: 7, // 选择0到7之间的优化级别
      },
      mozjpeg: {
        // jpeg
        quality: 20, // 压缩质量，范围从0(最差)到100(最佳)。
      },
      pngquant: {
        // png
        quality: [0.8, 0.9], // Min和max是介于0(最差)到1(最佳)之间的数字，类似于JPEG。达到或超过最高质量所需的最少量的颜色。如果转换导致质量低于最低质量，图像将不会被保存。
        speed: 4, // 压缩速度，1(强力)到11(最快)
      },
      svgo: {
        // svg压缩
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 500, // 单位 kb
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
        entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
        assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
      },
      treeshake: {
        preset: "recommended",
        manualPureFunctions: ["console.log"],
      },
    },
    minify: "terser", // 启用 terser 压缩
    terserOptions: {
      // 生产环境时移除console等
      compress: {
        pure_funcs: ["console.log"], // 只删除 console.log
        drop_console: true, // 删除所有 console
        drop_debugger: true,
      },
    },
  },
});
