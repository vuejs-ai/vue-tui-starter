# my-vue-tui-app

A [vue-tui](https://github.com/vuejs-ai/vue-tui) app — a Vue interface that runs in the terminal.

> Requires Node.js 22.18+.

## Scripts

```sh
npm install
npm run dev      # terminal dev server with HMR (experimental) — edit src/app.vue, watch it update
npm run build    # bundle src/main.ts -> dist/main.js
npm run preview  # build, then run the production output
```

Press `q` to quit the app.

## Project structure

```
src/
  main.ts    # createApp(App).mount()
  app.vue    # your UI — a <Spinner> loads, then a +/- counter (press + or =, and -)
vite.config.ts  # plugins: [vueTui()]
```

Built with [`@vue-tui/runtime`](https://www.npmjs.com/package/@vue-tui/runtime),
[`@vue-tui/components`](https://www.npmjs.com/package/@vue-tui/components), and the
[`@vue-tui/vite`](https://www.npmjs.com/package/@vue-tui/vite) plugin.
