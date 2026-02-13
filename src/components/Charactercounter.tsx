import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Charactercounter = () => {
  const [text, setText] = useState('');

  // Total characters (including spaces)
  const count = text.length;

  // Word count (space handle properly)
  const wordCount = text.trim() === ''
    ? 0
    : text.trim().split(/\s+/).length;

  // Characters without spaces
  const characterCount = text.replace(/\s+/g, '').length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Character Counter</Text>

      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter text"
        multiline
      />

      <Text>Total Characters: {count}</Text>
      <Text>Characters (no spaces): {characterCount}</Text>
      <Text>Total Words: {wordCount}</Text>
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
    height: 100,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
})

export default Charactercounter