import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base ("./") makes the built site portable: it works from a domain
// root (Vercel, Netlify, custom domain) AND from a GitHub Pages project
// subpath (https://user.github.io/repo/) with no extra configuration.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
