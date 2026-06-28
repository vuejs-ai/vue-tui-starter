# vue-tui starter templates

Official starter templates for [**vue-tui**](https://github.com/vuejs-ai/vue-tui) — the Vue
framework for building terminal user interfaces.

**Requirements:** Node.js 22.18+.

Each top-level directory is a self-contained template. Scaffold one with
[tiged](https://github.com/tiged/tiged), which copies a single subdirectory out of this repo:

```sh
npx tiged vuejs-ai/vue-tui-starter/vite my-app
cd my-app
npm install
npm run dev
```

Then edit `src/app.vue` and watch the terminal update instantly via HMR _(experimental)_.
Press `q` to quit the running app.

## Templates

| Template         | Stack                     | What it shows                                                                                                                        |
| ---------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [`vite`](./vite) | Vue SFC + `@vue-tui/vite` | In-process terminal dev server with HMR _(experimental)_ and a production build. A friendly hello world using `<Spinner>` from `@vue-tui/components`. |

More templates may be added over time — each as its own directory, scaffolded the same way
(`npx tiged vuejs-ai/vue-tui-starter/<template> my-app`).

## The `vite` template

A minimal app wired up with the [`@vue-tui/vite`](https://www.npmjs.com/package/@vue-tui/vite)
plugin:

- **`npm run dev`** — boots the app in your terminal with state-preserving HMR.
- **`npm run build`** — bundles `src/main.ts` into a single `dist/main.js`.
- **`npm run preview`** — builds, then runs the production output.

Its `vite.config.ts` is minimal — `vueTui()` is the only plugin you need:

```ts
import { defineConfig } from "vite";
import { vueTui } from "@vue-tui/vite";

export default defineConfig({
  plugins: [vueTui()],
});
```

## Learn more

- [vue-tui](https://github.com/vuejs-ai/vue-tui) — the framework: components (`Box`, `Text`, …),
  composables (`useInput`, `useFocus`, …), and yoga-based flexbox layout.
- [`@vue-tui/components`](https://www.npmjs.com/package/@vue-tui/components) — high-level
  components such as `<Spinner>`.

## License

MIT
