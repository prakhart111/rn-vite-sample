import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import PageOne from "./screens/PageOne";
import PageTwo from "./screens/PageTwo";
import PageThree from "./screens/PageThree";

export type RootStackParamList = {
  PageOne: undefined;
  PageTwo: undefined;
  PageThree: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
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
