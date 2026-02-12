import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
      const increment = () => {
        setCount(count + 1);
      }
      const decrement = () => {
        setCount(count - 1);
      }

      const reset = () => {
        setCount(0);
      }
  return (
    <View>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={{margin: 10, flexDirection: "row", justifyContent: "center"}}>
            <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.btnText}>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text style={styles.btnText}>Decrease</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>
      </View>
      
      
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
})

export default Counter