const fs = require('fs-extra');
const path = require('path');

// 定义复制文件的函数
const copyBuildFiles = async (pathWay, name) => {
  // 源路径：指定项目的 dist 目录
  const source = path.join(__dirname, '..', pathWay, 'dist');
  // 目标路径：外层 Vite 项目中的指定文件夹
  const target = path.join(__dirname, '..', name);

  try {
    // 确保目标目录存在
    await fs.ensureDir(target);

    // 复制文件
    await fs.copy(source, target, { overwrite: true });

    console.log('Build files copied successfully.');
  } catch (error) {
    console.error('Error copying build files:', error);
  }
};

// 执行函数
copyBuildFiles('React-Vite-Ts', 'React');
copyBuildFiles('Vue-Vite-Ts', 'Vue');