import { defineConfig } from "vite";
import { rnw } from "vite-plugin-rnw";
import { fileURLToPath } from "node:url";

// "React Native the Vite way": rnw() aliases `react-native` -> `react-native-web`,
// strips Flow types, and handles CJS interop for RN packages. No Metro, no Expo —
// this is the path that boots inside the Nodepod/WebContainer facade.
const shim = (file: string) =>
  fileURLToPath(new URL(`./rnw-shims/${file}`, import.meta.url));

export default defineConfig({
  plugins: [rnw()],
  resolve: {
    // react-native-web ships none of RN's Fabric/New-Architecture codegen
    // internals, yet RN libraries (safe-area-context, screens) import them.
    // They are native-only and never render on web, so point them at no-op
    // stubs. These entries MUST precede rnw's blanket `react-native ->
    // react-native-web` alias — Vite seeds user config before plugin config,
    // so first-match-wins resolution hits these before the blanket rule
    // (which would otherwise rewrite them to nonexistent RNW paths and break
    // the dev dependency optimizer).
    alias: {
      "react-native/Libraries/Utilities/codegenNativeComponent": shim(
        "codegenNativeComponent.js",
      ),
      "react-native/Libraries/ReactNative/AppContainer": shim("AppContainer.js"),
    },
  },
  server: { host: "0.0.0.0", port: 5173, strictPort: true },
});
