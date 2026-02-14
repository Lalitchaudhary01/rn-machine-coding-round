import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);

    const calculateBmi = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height) / 100;
        if (weightNum > 0 && heightNum > 0) {
            const bmiValue = weightNum / (heightNum * heightNum);
            setBmi(parseFloat(bmiValue.toFixed(2)));
        } else {
            setBmi(null);
        }
    }
  return (
    <View>
      <Text>BmiCalculator</Text>
      <TextInput
        value={weight}
        onChangeText={setWeight}
        placeholder="Enter weight in kg"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 }}
      />
      <TextInput
        value={height}
        onChangeText={setHeight}
        placeholder="Enter height in cm"
        keyboardType='numeric'
        style={{ borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 }}
      />
      <Text>BMI: {bmi !== null ? bmi : 'N/A'}</Text>
      <TouchableOpacity onPress={calculateBmi} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}></TouchableOpacity>
        <Text style={{ color: 'white' }}>Calculate BMI</Text>
    </View>
  )
}

export default BmiCalculator