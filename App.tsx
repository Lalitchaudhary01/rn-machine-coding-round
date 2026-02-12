import React from 'react';
import { View,  StyleSheet } from 'react-native';
import Counter from './src/components/Counter';
import TrefficLight from './src/components/TrefficLight';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Counter/> */}
      <TrefficLight/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});