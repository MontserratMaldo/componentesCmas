import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type CVVFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const CVVField: React.FC<CVVFieldProps> = ({ value, onChangeText }) => (
  <TextInput
    style={styles.input}
    placeholder="CVV"
    keyboardType="numeric"
    value={value}
    onChangeText={onChangeText}
    maxLength={3}
  />
);

export default CVVField;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    width: 100,
    marginVertical: 8,
  },
});