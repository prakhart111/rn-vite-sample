// Web stub for React Native's Fabric codegen helper.
//
// RN libraries (react-native-safe-area-context, react-native-screens) import
// `react-native/Libraries/Utilities/codegenNativeComponent` to declare native
// (Fabric) component specs. Those specs are only ever rendered on iOS/Android;
// on web react-native-web supplies the real implementations via `.web.js`
// variants, so the native specs are bundled but never mounted.
//
// react-native-web ships no equivalent of this file, so without this stub the
// rnw `react-native -> react-native-web` alias rewrites the import to a
// nonexistent path and the dep optimizer fails. Returning a no-op host
// component keeps the bundle resolvable while staying inert at runtime.
export default function codegenNativeComponent(_name, _options) {
  return function NativeComponentStub() {
    return null;
  };
}
