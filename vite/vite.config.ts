import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { vueTui } from "@vue-tui/vite";

// vueTui() adds the terminal dev server (HMR) and the production build;
// @vitejs/plugin-vue compiles your .vue SFCs. (Prefer JSX? use @vitejs/plugin-vue-jsx.)
export default defineConfig({
  plugins: [vueTui(), vue()],
});
