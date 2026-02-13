import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CountdownTimer = () => {
  const [inputValue, setInputValue] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ✅ Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (isRunning || seconds <= 0) return;

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const handleReset = () => {
    stopTimer();
    setInputValue("");
    setSeconds(0);
  };

  const handleTextChange = (value: string) => {
    setInputValue(value);

    const parsed = parseInt(value);
    if (!isNaN(parsed)) {
      setSeconds(parsed);
    } else {
      setSeconds(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countdown Timer</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter seconds"
        keyboardType="numeric"
        value={inputValue}
        onChangeText={handleTextChange}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, isRunning && styles.disabled]}
          onPress={startTimer}
          disabled={isRunning}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={stopTimer}
        >
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleReset}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.timerText}>
        {seconds === 0 && !isRunning
          ? "Time's Up ⏰"
          : `Seconds Left: ${seconds}`}
      </Text>
    </View>
  );
};

export default CountdownTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 6,
    minWidth: 80,
    alignItems: "center",
  },
  disabled: {
    backgroundColor: "#999",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  timerText: {
    marginTop: 30,
    fontSize: 20,
    textAlign: "center",
    color: "red",
  },
});