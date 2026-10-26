import { defineConfig } from "vite"; import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  // Avoid Vite's pre-bundler walking outside the project directory on locked-down Windows folders.
  optimizeDeps: { noDiscovery: true, include: ["react", "react-dom/client", "socket.io-client"] },
  server: { proxy: { "/socket.io": { target: "http://localhost:3001", ws: true } } }
});
