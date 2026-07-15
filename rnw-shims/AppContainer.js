// Web stub for `react-native/Libraries/ReactNative/AppContainer`.
//
// react-native-screens' DebugContainer imports RN's internal AppContainer,
// which react-native-web does not expose. On web the app is mounted via
// react-native-web's AppRegistry, so this internal wrapper is unused — a
// passthrough that just renders its children keeps the bundle resolvable.
import * as React from 'react';

export default function AppContainer(props) {
  return React.createElement(React.Fragment, null, props && props.children);
}
