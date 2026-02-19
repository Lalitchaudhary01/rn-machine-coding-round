import React from 'react';
import { View,  StyleSheet } from 'react-native';
import OtpInput from './src/components/OtpInput';
import Todo from './src/components/Todo';
import Faq from './src/components/Faq';
import SearchLocal from './src/components/SearchLocal';
// import PasswordStrength from './src/components/PasswordStrength';
// import Counter from './src/components/Counter';
// import TrefficLight from './src/components/TrefficLight';
// import TogggleTheme from './src/components/TogggleTheme';
// import StopWatch from './src/components/StopWatch';
// import CountdownTimer from './src/components/CountdownTimer';
// import Charactercounter from './src/components/Charactercounter';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Counter/> */}
      {/* <TrefficLight/> */}
      {/* <TogggleTheme/> */}
      {/* <StopWatch/> */}
      {/* <CountdownTimer/> */}
      {/* <Charactercounter/> */}
      {/* <PasswordStrength/> */}
      {/* <OtpInput/> */}
      {/* <Todo/> */}
      <Faq/>
      <SearchLocal/>
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