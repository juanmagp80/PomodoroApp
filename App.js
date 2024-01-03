import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
} from "react-native";
import Header from "./src/components/Header/Header";
import Timer from "./src/components/Timer/Timer";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentColor, setCurrentColor] = useState(0);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View
        style={{
          paddingHorizontal: 25,
          paddingTop: Platform.OS === "android" && 30,
          flex: 1,
        }}
      >
        <Text style={styles.Text}>Pomodoro</Text>
        <Header
          setTime={setTime}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          time={time}
        />
        <Timer style={styles.time} time={time} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    textAlign: "center",

    fontSize: 80,
    // alignItems: "center"
  },
  Text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
});
