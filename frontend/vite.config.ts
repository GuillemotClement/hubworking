import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // a ajouter pour utiliser le container avec Docker pour pouvoir acceder a l'application depuis la machine local
  server: {
    host: "0.0.0.0",
  },
});
