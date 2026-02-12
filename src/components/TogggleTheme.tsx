import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const ToggleTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#121212" : "#ffffff" },
      ]}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      <Text
        style={[
          styles.text,
          { color: isDark ? "#ffffff" : "#000000" },
        ]}
      >
        Current Theme: {theme.toUpperCase()}
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isDark ? "#ffffff" : "#000000" },
        ]}
        onPress={toggleTheme}
      >
        <Text
          style={{
            color: isDark ? "#000000" : "#ffffff",
            fontWeight: "600",
          }}
        >
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleTheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
});