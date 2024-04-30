const fs = require("fs-extra");
const path = require("path");

// 定义复制文件的函数
const copyBuildFiles = async (pathWay, name) => {
  // 源路径：指定项目的 dist 目录
  const source = path.join(__dirname, "..", `template/${pathWay}`, "dist");
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

// 异步函数来处理复制操作
const setupDist = async () => {
  await copyBuildFiles("React-Vite-Ts", "React");
  await copyBuildFiles("Vue-Vite-Ts", "Vue");

  // 复制外层 index.html 到 dist 目录
  const source = path.join(__dirname, "..", "index-node.html");
  const target = path.join(__dirname, "..", "dist", "index.html");
  await fs.copy(source, target, { overwrite: true });
};

// 执行 setupDist 函数
setupDist();
