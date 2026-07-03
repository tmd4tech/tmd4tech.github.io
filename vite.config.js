import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ─────────────────────────────────────────────────────────────
//  BASE PATH
//  • User/organization site (repo named USERNAME.github.io):
//      leave base as "/"
//  • Project site (repo named e.g. "portfolio"):
//      set base to "/portfolio/"
//  The GitHub Action sets this automatically via VITE_BASE, so you
//  usually don't need to touch it. Override locally if you want.
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
