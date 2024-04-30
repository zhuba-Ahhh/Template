import { defineConfig } from 'father';

export default defineConfig({
  define: {
    VERSION: JSON.stringify(process.env.npm_package_version),
  },
  esm: {
    input: 'src', // 默认编译目录
    platform: 'browser', // 默认构建为 Browser 环境的产物
    transformer: 'babel', // 默认使用 babel 以提供更好的兼容性
  },
  // 以下为 cjs 配置项启用时的默认值，有自定义需求时才需配置
  cjs: {
    input: 'src', // 默认编译目录
    platform: 'node', // 默认构建为 Node.js 环境的产物
    transformer: 'esbuild', // 默认使用 esbuild 以获得更快的构建速度
  },
  umd: {
    name: 'efan', // 实例名
    output: {
      filename: 'index.js',
    },
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
    },
  },
  platform: 'browser',
  prebundle: {
    deps: {},
  },
});
