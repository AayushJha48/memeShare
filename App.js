import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MemeScreen from "./screens/memeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MemeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "rgba(128, 128, 128, 0.1)",
  },
});
