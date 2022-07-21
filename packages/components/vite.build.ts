
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@src': resolve(__dirname, './src')
        }
    },
    build: {
        outDir: 'lib',
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'bk-ui',
            formats: ['es', 'umd'],
            fileName: (format) => `bk-components.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    plugins: [vue()],
});
