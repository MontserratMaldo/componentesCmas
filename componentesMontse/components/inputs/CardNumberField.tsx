import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type CardNumberFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const CardNumberField: React.FC<CardNumberFieldProps> = ({ value, onChangeText }) => (
  <TextInput
    style={styles.input}
    placeholder="Número de tarjeta"
    keyboardType="numeric"
    value={value}
    onChangeText={onChangeText}
    maxLength={16}
  />
);

export default CardNumberField;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginVertical: 8,
  },
});