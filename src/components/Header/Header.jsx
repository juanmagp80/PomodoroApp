import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ time, currentTime, setCurrentTime, setTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }
  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    width: "33%",
    marginVertical: 20,
    borderRadius: 10,
  },
});
