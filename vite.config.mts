import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import importToCDN, { autoComplete } from "vite-plugin-cdn-import";

import copyBuildFilesPlugin from "./scripts/copy-build-files-plugin";

export default defineConfig({
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  plugins: [
    react(),
    importToCDN({
      modules: [autoComplete("react"), autoComplete("react-dom")],
    }),
    copyBuildFilesPlugin(),
  ],
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 10 * 1024, // 单位b 合并小chunk
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
      treeshake: {
        preset: "recommended",
        manualPureFunctions: ["console.log"],
      },
      external: ["react", "react-dom"],
    },
  },
});
