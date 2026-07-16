import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import PageOne from "./screens/PageOne";
import PageTwo from "./screens/PageTwo";
import PageThree from "./screens/PageThree";

// SafeAreaProvider renders null children until it measures the frame via an
// async onLayout/ResizeObserver. On web `initialWindowMetrics` is null, so in
// environments where that measurement never lands (e.g. the Nodepod preview
// iframe) the whole app stays blank. Seeding explicit metrics makes `insets`
// non-null on first render, so children render immediately regardless of
// whether measurement fires. Zero insets are correct for a browser (no notch);
// the frame updates if/when a real measurement arrives.
const initialMetrics = {
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
  frame: {
    x: 0,
    y: 0,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  },
};

export type RootStackParamList = {
  PageOne: undefined;
  PageTwo: undefined;
  PageThree: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialMetrics}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PageOne">
          <Stack.Screen name="PageOne" component={PageOne} />
          <Stack.Screen name="PageTwo" component={PageTwo} />
          <Stack.Screen name="PageThree" component={PageThree} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
