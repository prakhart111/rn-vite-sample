import { defineConfig } from "vite";
import { rnw } from "vite-plugin-rnw";

// "React Native the Vite way": rnw() aliases `react-native` -> `react-native-web`,
// strips Flow types, and handles CJS interop for RN packages. No Metro, no Expo —
// this is the path that boots inside the Nodepod/WebContainer facade.
export default defineConfig({
  plugins: [rnw()],
  server: { host: "0.0.0.0", port: 5173, strictPort: true },
});
