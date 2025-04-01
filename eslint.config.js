import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
    { files: ["**/*.{js,mjs,cjs,ts,vue}"], languageOptions: { globals: globals.browser } },
    { files: ["**/*.{js,mjs,cjs,ts,vue}"], plugins: { js }, extends: ["js/recommended"] },
    tseslint.configs.recommended,
    pluginVue.configs["flat/essential"],
    { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } }, rules:{
        "vue/multi-word-component-names":"off"
    } },
    {ignores:['download-image.cjs']},
    {
        rules: {
            "indent": ["error",4,{ "SwitchCase": 1 }],
            "@typescript-eslint/no-explicit-any": "off", // ✅ 完全关闭 any 类型检查
            "no-unused-expressions": "off",
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    "allowShortCircuit": true, // 允许逻辑短路表达式
                    "allowTernary": true       // 允许三元运算符（可选）
                }
            ],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    "argsIgnorePattern": "^_",   // 忽略以 _ 开头的函数参数
                    "varsIgnorePattern": "^_",   // 忽略以 _ 开头的变量
                    "caughtErrorsIgnorePattern": "^_"  // 忽略以 _ 开头的 catch 参数
                }
            ]
        }
    }
]);
