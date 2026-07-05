import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { vueTui } from "@vue-tui/vite";

// vueTui() adds the terminal dev server (HMR); @vitejs/plugin-vue compiles your .vue SFCs.
// (Prefer JSX? use @vitejs/plugin-vue-jsx.) The production build is a separate tsdown config
// (see tsdown.config.ts) — `vite build` is browser-first and the wrong tool for a Node program.
export default defineConfig({
  plugins: [vue(), vueTui()],
});
