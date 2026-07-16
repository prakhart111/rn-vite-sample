# Taking your app to Android & the App Store

The preview you see in dualite runs your app **on the web** — it uses
`react-native-web` + Vite so it can boot instantly in the browser. That preview is
for building and iterating fast. It is **not** a native build, and this project on
its own does not produce an `.apk`/`.aab` (Android) or `.ipa` (iOS).

The good news: **your app code is real React Native.** Your screens, components
(`View`, `Text`, `Button`, `StyleSheet`), and navigation
(`@react-navigation/native-stack`) are all standard React Native and carry over to a
native app with little or no change. To ship to the Play Store or App Store, you move
that code into an **Expo** project and build it with **EAS Build**.

Below is the whole path. You do this on your own machine (or in Expo's cloud); it is
not done inside dualite.

---

## 1. What carries over vs. what's web-only

**Carries over (copy these):**

- `src/App.tsx`, `src/screens/*` — your screens and navigation setup
- Any `View` / `Text` / `Button` / `StyleSheet` / hooks code
- `@react-navigation/*`, `react-native-safe-area-context`, `react-native-screens` usage

**Web-preview scaffolding (do NOT copy — Expo replaces it):**

- `vite.config.ts`, `index.html`, `src/main.tsx` (the `AppRegistry` web mount)
- `rnw-shims/`, `vite-plugin-rnw`, `react-native-web`
- The exact version pins in `package.json` (those exist only for the in-browser runtime)

> Tip: in your screens, remove the `initialMetrics={...}` prop you may have on
> `SafeAreaProvider` — on a real device `SafeAreaProvider` measures the notch/insets
> itself. It was only needed for the web preview.

## 2. Create an Expo app

Expo is the standard, batteries-included way to build and ship React Native. On your
machine:

```sh
npx create-expo-app@latest my-app
cd my-app
```

## 3. Bring your code in

Copy your `src/` (screens + `App.tsx`) into the Expo project and point the app entry
at your `App`. In a default Expo Router template you can instead drop your navigator
into `app/`, but the simplest 1:1 move is a classic entry:

```jsx
// index.js (or App.tsx, depending on template)
import { registerRootComponent } from 'expo';
import App from './src/App';
registerRootComponent(App);
```

Install the same libraries with Expo's installer (it picks native-compatible
versions):

```sh
npx expo install react-native-safe-area-context react-native-screens \
  @react-navigation/native @react-navigation/native-stack
```

`@react-navigation/native-stack` is **native-first** — on a device it uses the real
native navigation stack, so your navigation code works as-is.

## 4. Test on a real phone with Expo Go (free, no build)

```sh
npx expo start
```

Install **Expo Go** from the Play Store / App Store, scan the QR code, and your app
runs on your phone instantly. Great for day-to-day testing. (Expo Go can't include
custom native modules — for those you use a development build, below.)

## 5. Build installable binaries with EAS

EAS Build compiles your app in Expo's cloud (no Android Studio / Xcode needed).

```sh
npm install -g eas-cli
eas login                 # create a free Expo account if needed
eas build:configure
```

**Android:**

```sh
eas build -p android --profile preview        # .apk you can sideload / share
eas build -p android --profile production      # .aab for the Play Store
```

**iOS** (requires a paid Apple Developer account — see below):

```sh
eas build -p ios --profile production
```

## 6. Submit to the stores

```sh
eas submit -p android      # uploads the .aab to Google Play
eas submit -p ios          # uploads the build to App Store Connect
```

Then finish the listing (screenshots, description, privacy details) in the **Google
Play Console** / **App Store Connect** and submit for review.

## What you'll need (accounts & cost)

- **Google Play:** a Google Play Developer account — **one-time $25**.
- **Apple App Store:** an Apple Developer account — **$99/year** (required even to
  build for a physical iPhone).
- **Expo/EAS:** free tier covers getting started; paid plans speed up build queues.

## Keeping web + native from one codebase (optional)

You can keep this Vite web project **and** an Expo native project sharing the same
`src/` — Vite serves the web preview, Expo/Metro builds native. The one thing that
doesn't cross over is Vite-specific config; component and navigation code is shared.
If you go this route, keep platform-specific bits in `.web.tsx` / `.native.tsx` files
so each bundler picks the right one.

## Summary

| | Web preview (this project, in dualite) | Native app (Android / iOS) |
|---|---|---|
| Bundler | Vite + react-native-web | Metro (via Expo) |
| Run it | Opens in the browser instantly | Expo Go, or EAS build → device/store |
| Ships to | — (preview only) | Play Store `.aab`, App Store `.ipa` |
| Your screen/nav code | ✅ | ✅ same code |

Your React Native code is portable. dualite gives you a fast web preview to build it;
Expo + EAS turn that same code into real Android and iOS apps.
