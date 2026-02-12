import React from 'react';
import { View,  StyleSheet } from 'react-native';
import Counter from './src/components/Counter';
import TrefficLight from './src/components/TrefficLight';
import TogggleTheme from './src/components/TogggleTheme';
import StopWatch from './src/components/StopWatch';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Counter/> */}
      {/* <TrefficLight/> */}
      {/* <TogggleTheme/> */}
      <StopWatch/>
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