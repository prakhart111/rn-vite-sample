import { View, Text, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "PageThree">;

export default function PageThree({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text>This is Page 3</Text>
      <Button title="Back to Page 1" onPress={() => navigation.popToTop()} />
    </View>
  );
}
