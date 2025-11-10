import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type OTPFieldProps = {
  code: string[];
  onChange: (index: number, value: string) => void;
};

const OTPField: React.FC<OTPFieldProps> = ({ code, onChange }) => (
  <View style={styles.container}>
    {code.map((digit, index) => (
      <TextInput
        key={index}
        style={styles.box}
        keyboardType="numeric"
        maxLength={1}
        value={digit}
        onChangeText={(value) => onChange(index, value)}
      />
    ))}
  </View>
);

export default OTPField;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center', gap: 10 },
  box: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 45,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
  },
});