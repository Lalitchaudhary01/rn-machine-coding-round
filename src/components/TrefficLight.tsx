import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Light = "red" | "yellow" | "green";

const lights: Light[] = ["red", "yellow", "green"];

export default function App(): JSX.Element {
  const [currentLight, setCurrentLight] = useState<Light>("red");
  const [isAuto, setIsAuto] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const durations: Record<Light, number> = {
    red: 3000,
    yellow: 1000,
    green: 3000,
  };

  const getNextLight = (light: Light): Light => {
    const currentIndex = lights.indexOf(light);
    const nextIndex = (currentIndex + 1) % lights.length;
    return lights[nextIndex];
  };

  // Auto Mode Logic
  useEffect(() => {
    if (isAuto) {
      timerRef.current = setTimeout(() => {
        setCurrentLight((prev) => getNextLight(prev));
      }, durations[currentLight]);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentLight, isAuto]);

  const handleManualNext = (): void => {
    setIsAuto(false);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setCurrentLight((prev) => getNextLight(prev));
  };

  const toggleAuto = (): void => {
    setIsAuto((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traffic Light</Text>

      <View style={styles.lightContainer}>
        <View
          style={[
            styles.light,
            { backgroundColor: currentLight === "red" ? "red" : "#555" },
          ]}
        />
        <View
          style={[
            styles.light,
            { backgroundColor: currentLight === "yellow" ? "yellow" : "#555" },
          ]}
        />
        <View
          style={[
            styles.light,
            { backgroundColor: currentLight === "green" ? "green" : "#555" },
          ]}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={toggleAuto}>
        <Text style={styles.btnText}>
          {isAuto ? "Stop Auto Mode" : "Start Auto Mode"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleManualNext}>
        <Text style={styles.btnText}>Manual Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 20,
  },
  lightContainer: {
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  light: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: 200,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});