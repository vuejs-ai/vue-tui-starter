import { defineConfig } from "vite";
import { vueTui } from "@vue-tui/vite";

// vueTui() wires up the terminal dev server (HMR) and the production build.
// It applies @vitejs/plugin-vue internally, so no other plugins are needed.
export default defineConfig({
  plugins: [vueTui()],
});
