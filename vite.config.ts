import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from 'vite-plugin-electron/simple'


export default defineConfig({
  plugins: [vue(),electron({
    main: {
      // Shortcut of `build.lib.entry`
      entry: './main.js',
    },
    preload: {
      // Shortcut of `build.rollupOptions.input`
      input: './preload.js',
    },
    // Optional: Use Node.js API in the Renderer process
    renderer: {},
  })],
});