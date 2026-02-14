import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const OtpInput = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue.length <= 6) {
      setOtp(numericValue);
    }
  }

  return (
    <View>
      <Text>OtpInput</Text>
      <TextInput
        value={otp}
        onChangeText={handleOtpChange}
        placeholder="Enter OTP"
        keyboardType="numeric"
        maxLength={6}
        style={{ borderWidth: 1, padding: 10, borderRadius: 5 }}
        autoCapitalize="none"
      />
      <Text>Entered OTP: {otp}</Text>
      <TouchableOpacity onPress={() => alert(`OTP Submitted: ${otp}`)} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}>
        <Text style={{ color: 'white' }}>Submit OTP</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OtpInput