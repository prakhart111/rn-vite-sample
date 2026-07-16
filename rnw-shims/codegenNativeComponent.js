// Web stub for React Native's Fabric codegen helper.
//
// RN libraries (react-native-safe-area-context, react-native-screens) import
// `react-native/Libraries/Utilities/codegenNativeComponent` to declare native
// (Fabric) component specs. react-native-web ships no equivalent, so without a
// stub the rnw `react-native -> react-native-web` alias rewrites the import to
// a nonexistent path and the dep optimizer fails.
//
// The stub renders its CHILDREN (not null). On a normal browser react-native-web's
// `.web.js` variants are used and these native specs are inert. But Nodepod's
// dependency optimizer does NOT honor rnw's `.web.js` extension priority, so
// inside Nodepod it bundles the *native* build of these libraries — and the
// native SafeAreaProvider / ScreenStack / Screen render THROUGH this stub. A
// stub returning null there blanks the whole app (the provider/container
// swallows its children); passing children through lets the content render.
// Native-only props (onInsetsChange, etc.) are dropped, which is fine on web
// (paired with SafeAreaProvider `initialMetrics` so insets are non-null without
// a native measurement callback).
//
// NOTE: this is Nodepod-targeted. A standalone web build outside Nodepod uses
// the real `.web.js` builds, which do not tolerate the passthrough — so this
// trades standalone-web rendering for Nodepod-preview rendering.
export default function codegenNativeComponent(_name, _options) {
  return function NativeComponentStub(props) {
    return props && props.children !== undefined ? props.children : null;
  };
}
