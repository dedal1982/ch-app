import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Имя файла для входных точек
        entryFileNames: "[name].js",
        // Имя файла для чанков
        chunkFileNames: "[name].js",
        // Имя файла для ассетов (CSS, изображения и т.д.)
        assetFileNames: "[name][extname]",
      },
    },
  },
});
