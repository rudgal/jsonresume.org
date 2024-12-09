import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    target: 'node20',
    outDir: './dist',
    rollupOptions: {
      input: {
        de: './src/de/index.ts',
        en: './src/en/index.ts',
      },
      external: ['react', 'react-dom/server'],
      output: {
        format: 'cjs',
        entryFileNames: ({ name }) => {
          return ['de', 'en'].includes(name) ? '[name]/index.js' : '[name].js';
        },
      },
    },
  },
  resolve: {
    alias: {
      // Aliases if needed
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Polyfills for Node.js globals and built-ins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
});
