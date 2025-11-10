import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type AccountNumberFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const AccountNumberField: React.FC<AccountNumberFieldProps> = ({ value, onChangeText }) => (
  <TextInput
    style={styles.input}
    placeholder="Número de cuenta"
    keyboardType="numeric"
    value={value}
    onChangeText={onChangeText}
    maxLength={12}
  />
);

export default AccountNumberField;

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