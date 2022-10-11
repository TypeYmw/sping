import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import path from 'path';
import proxyConfig from './config/vite/proxy';
import chunkModules from './config/vite/chunks';
import createVitePlugins from './config/plugins';

const resolve = (str: string):string => path.resolve(__dirname, str);

// https://cn.vitejs.dev/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const ENV = loadEnv(mode, __dirname);
  console.log('ENV', ENV);

  return {
    base: ENV.VITE_PUBLIC_PATH,
    resolve: {
      // 设置别名
      alias: {
        '@': resolve('src'),
        'config': resolve('config')
      },
      // 忽略拓展名字
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
    },
    // 本地开发配置
    server: {
      host: true,
      // open: true,
      port: 8888,
      https: false,
      proxy: proxyConfig
    },
    build: {
      minify: 'terser',
      // 打包构建输出路径
      outDir: 'dist/dist',
      // 生成静态资源的存放路径
      assetsDir: 'static',
      // 构建后是否生成 source map 文件，除了生产其他都需要
      sourcemap: !!ENV.VITE_SOURCE_MAP,
      // chunk 大小警告的限制
      chunkSizeWarningLimit: 800,
      // 生产环境移除 console
      terserOptions: {
        compress: {
          drop_console: !ENV.VITE_CONSOLE,
          drop_debugger: !ENV.VITE_DEBUGGER
        }
      },
      // rollup配置
      rollupOptions: {
        output: {
          // https://rollupjs.org/guide/en/#outputmanualchunks
          manualChunks: chunkModules()
        }
      }
    },
    css: {
      // 处理打包出现警告 "@charset" must be the first
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: atRule => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ]
      }
    },
    plugins: createVitePlugins()
  };
});
