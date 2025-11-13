import { defineConfig } from "vite";
// import solid from "solid-start/vite"; // se for SolidStart
import solid from "vite-plugin-solid"; // se for SolidJS standalone

export default defineConfig({
  plugins: [solid()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`,
      },
    },
  },
});