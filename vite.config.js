import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/',
  publicDir: '../public',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: true,
    minify: true,
    target: 'esnext',
    polyfillDynamicImport: true,
    brotliSize: true,
    chunkSizeWarningLimit: 500,
  },

  plugins: [
    Pages({
      extensions: ['html'],
      pagesDir: 'pages',
      // add pages here
      pages: ['pideaqui', 'nosotros'],
    }),
  ],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@': '/js',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/scss/variables.scss";',
      },
    },
  },

  optimizeDeps: {
    include: ['@popperjs/core'],
  },

  define: {
    'process.env': {},
  },

  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },

  logLevel: 'info',
  clearScreen: true,

  // https://vitejs.dev/config/
});
