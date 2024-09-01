import { defineConfig } from 'vite';
// @ts-ignore:next-line
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @ts-ignore:next-line
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
