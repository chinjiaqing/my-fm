import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import px2viewport from "postcss-px-to-viewport-8-plugin"
import UnoCSS from "unocss/vite"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/my-fm/' : '/',
    plugins: [
        vue(),
        UnoCSS()
    ],
    server:{
        host:'0.0.0.0',
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'./src')
        }
    },
    css:{
        postcss: {
            plugins: [
                px2viewport({
                    viewportWidth: 750, // 设计稿基准宽度
                    unitPrecision: 3, // 保留小数位
                    propList: ["*"], // 需要转换的属性
                    viewportUnit: "vw", // 只转换 `px` 到 `vw`
                    minPixelValue: 2, // 小于 2px 不转换
                    mediaQuery: true, // ✅ 允许 `@media` 里的 px 转换
                })
            ]
        }
    }
})
