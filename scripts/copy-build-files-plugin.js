import fs from "fs-extra";
import path from "path";

const copyBuildFiles = async (pathWay, name) => {
  // 源路径：指定项目的 dist 目录
  const source = path.join(__dirname, "..", pathWay, "dist");
  // 目标路径：外层 Vite 项目中的指定文件夹
  const target = path.join(__dirname, "..", "dist");

  try {
    // 确保目标目录存在
    await fs.ensureDir(target);

    // 复制文件
    await fs.copy(source, target, {
      overwrite: true,
      filter: (src) => path.basename(src) !== "index.html",
    });

    // 复制并重命名 index.html 文件
    const sourceIndexPath = path.join(source, "index.html");
    const newIndexPath = path.join(target, `${name}.html`);
    await fs.copy(sourceIndexPath, newIndexPath, { overwrite: true });

    console.log("Build files copied successfully.");
  } catch (error) {
    console.error("Error copying build files:", error);
  }
};

export default () => {
  return {
    name: "copy-build-files-plugin",

    // 这个钩子在 Vite 构建结束后调用
    async generateBundle(_, bundle) {
      await copyBuildFiles("template/React-Vite-Ts", "React");
      await copyBuildFiles("template/Vue-Vite-Ts", "Vue");
    },
    async configureServer(server) {
      // 当服务器准备好时
      server.httpServer.once("listening", async () => {
        await copyBuildFiles("React-Vite-Ts", "React");
        await copyBuildFiles("Vue-Vite-Ts", "Vue");
        console.log("Server is ready and files are copied.");
      });
    },
  };
};
