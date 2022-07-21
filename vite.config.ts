/* eslint-disable */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{
            find: /~(.+)/,
            replacement: resolve(__dirname, 'node_modules/$1')
        }]
    },
    plugins: [vue()]
});
