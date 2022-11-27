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
    rollupOptions: {
      input: {
        main: '/index.html',
        // add pages here
        nested: 'src/pages/pideaqui.html',
        nested2: 'src/pages/nosotros.html',
      },
      output: {
        // js minify
        minifyInternalExports: true,
        // css minify
        compact: true,
        // Javascript
        chunkFileNames: 'js/script.js',
      },
      // js
    },
  },
  // define: {
  //   'process.env': import.meta.env,
  // },

  plugins: [
    //vite and firebase env
    {
      name: 'vite-plugin-env',
      config: () => ({
        VITE_API_KEY: process.env.VITE_API_KEY,
        VITE_AUTH_DOMAIN: process.env.VITE_AUTH_DOMAIN,
        VITE_PROJECT_ID: process.env.VITE_PROJECT_ID,
        VITE_STORAGE_BUCKET: process.env.VITE_STORAGE_BUCKET,
        VITE_MESSAGING_SENDER_ID: process.env.VITE_MESSAGING_SENDER_ID,
        VITE_APP_ID: process.env.VITE_APP_ID,
      }),
    },
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

  // https://vitejs.dev/config/
});
