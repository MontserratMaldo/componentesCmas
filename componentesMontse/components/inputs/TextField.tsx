import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

type TextFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

const TextField: React.FC<TextFieldProps> = ({ placeholder, value, onChangeText }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
    />
  </View>
);

export default TextField;

const styles = StyleSheet.create({
  container: { width: '100%', marginVertical: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
});