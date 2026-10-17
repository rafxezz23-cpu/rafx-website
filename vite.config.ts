import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  plugins: [tailwindcss()],
  build: { rollupOptions: { input: { main: resolve(__dirname, "index.html"), projekt: resolve(__dirname, "projekt.html") } } },
});
