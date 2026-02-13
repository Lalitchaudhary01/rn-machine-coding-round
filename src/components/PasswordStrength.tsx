import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const PasswordStrength = () => {
  const [password, setPassword] = useState('');

  const getStrength = () => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return { label: "Weak", color: "red" };
    if (strength === 3 || strength === 4) return { label: "Medium", color: "orange" };
    if (strength === 5) return { label: "Strong", color: "green" };

    return { label: "", color: "black" };
  };

  const strength = getStrength();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Strength Checker</Text>

      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
      />

      <Text style={{ color: strength.color, marginTop: 10 }}>
        Strength: {strength.label}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
})

export default PasswordStrength