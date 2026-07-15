import { View, Text, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "PageOne">;

export default function PageOne({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text>This is Page 1</Text>
      <Button title="Go to Page 2" onPress={() => navigation.navigate("PageTwo")} />
    </View>
  );
}
