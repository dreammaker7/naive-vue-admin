import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import { createVitePlugins } from './build/vite/plugins';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : './',
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3010,
    open: true,
    fs: {
      // https://vitejs.dev/config/#server-fs-allow
      allow: ['..']
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 2048,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          naive: ['naive-ui']
        }
      }
    }
  }
}));
