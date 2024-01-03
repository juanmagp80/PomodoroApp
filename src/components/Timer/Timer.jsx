import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Timer({ time }) {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}: ${(time % 60).toString().padStart(2, "0")}`;
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 15,
    padding: 15,
    flex: 0.3,
    justifyContent: "center",
    // alignItems: "center"
  },
  time: {
    fontWeight: "bold",
    fontSize: 80,
    color: "red",
    justifyContent: "center",
    textAlign: "center",
  },
});
