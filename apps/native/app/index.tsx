import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import { Button } from "@repo/ui";

export default function Native() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Turborepo + Expo Router</Text>

      <Button onClick={() => alert("Hello")} text="Click me!" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
