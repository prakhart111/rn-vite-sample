# rn-vite-sample

A bare-minimum **React Native app built the Vite way** — no Expo, no Metro. Meant as
an import/smoke-test artifact for the Nodepod / WebContainer facade.

It uses `react-native-web` + `vite` + `vite-plugin-rnw` (the plugin aliases
`react-native` → `react-native-web`, strips Flow types, and handles CJS interop),
so the whole thing bundles and boots on the Vite path instead of Expo/Metro.

## What it does

Three screens with `@react-navigation/native` (native-stack):

- **Page 1** → "Go to Page 2"
- **Page 2** → "Go to Page 3" / "Back to Page 1"
- **Page 3** → "Back to Page 1"

This deliberately exercises **routing without expo-router** — the piece that is
Metro-only and does *not* work on the Vite path. `@react-navigation` is Metro-free
and runs on `react-native-web`.

## Run

```bash
npm install
npm run dev      # vite dev server on :5173
npm run build    # production bundle -> dist/
```

## Key files

- `vite.config.ts` — the `rnw()` plugin (the whole "Vite way" adapter)
- `src/main.tsx` — `AppRegistry` web bootstrap
- `src/App.tsx` — navigation container + stack
- `src/screens/*` — the three pages
