import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'  // <--- import vue plugin, 使用HMR项目热更新, 热更新不会刷新页面, 会保留当前页面状态, 但是会重新渲染页面
import vueJsxPlugin from '@vitejs/plugin-vue-jsx' // <--- import vue-jsx plugin, 使用jsx语法, 但是需要安装依赖, npm i @vue/babel-plugin-jsx -D, 然后在babel.config.js中配置
import viteLegacyPlugin from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
        plugins: [vue(),
            vueJsxPlugin(),
            viteLegacyPlugin({targets: ['defaults']})],
        optimizeDeps: {
            // include:['esm-dep']
            build: {
                target: 'es2015',
            },
        },
        host: '127.0.0.1',
    }
);