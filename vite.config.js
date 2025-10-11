import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    viteCompression(), // убедитесь, что импорт правильный
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "esbuild",
    target: "esnext",
    manifest: "manifest.json",
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-toast",
          ],
        },
        entryFileNames: "dist/assets/js/[name].[hash].js",
        chunkFileNames: "dist/assets/js/[name].[hash].js",
        assetFileNames: "dist/assets/[ext]/[name].[hash][extname]",
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
