import { View, Text, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "PageTwo">;

export default function PageTwo({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text>This is Page 2</Text>
      <Button title="Go to Page 3" onPress={() => navigation.navigate("PageThree")} />
      <Button title="Back to Page 1" onPress={() => navigation.goBack()} />
    </View>
  );
}
