import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Header from "./src/components/Header/Header";
import Timer from "./src/components/Timer/Timer";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentColor, setCurrentColor] = useState(0);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (time === 0) {
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(isWorking ? 300 : 1500);
      playSound();
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  function handleStartStop() {
    setIsActive(!isActive);
  }
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/button-click-off-click.mp3")
    );

    await sound.playAsync();
  }

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
        <TouchableOpacity onPress={handleStartStop} style={styles.Button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {isActive ? "Pause" : "Start"}
          </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#333333",
    alignItems: "center",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
  },
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
