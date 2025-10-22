import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const isProd = mode === "production";

  return {
    base: isProd ? env.VITE_BASENAME : "/", // dev always "/"

    plugins: [react(), tailwindcss()],
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },

    server: {
      port: Number(env.VITE_PORT) || 5173,
      open: true,
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
        "/tmdb": {
          target: "https://api.themoviedb.org/3",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/tmdb/, ""),
        },
      },
    },

    define: {
      __APP_ENV__: JSON.stringify(env.VITE_ENV),
    },

    // Build configuration
    build: {
      sourcemap: !isProd, // enable source maps in dev for .tsx debugging
      minify: isProd ? "esbuild" : false,
      emptyOutDir: true, // clear dist folder before build
    },

    esbuild: {
      sourcemap: !isProd, // ensure TS -> JS mapping for dev
    },

    // Ensure TypeScript does not emit JS into src/
    optimizeDeps: {
      include: [], // no special deps needed
    },
  };
});
