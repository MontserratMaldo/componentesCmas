import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type MultilineFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

const MultilineField: React.FC<MultilineFieldProps> = ({ placeholder, value, onChangeText }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    multiline
    numberOfLines={4}
  />
);

export default MultilineField;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    textAlignVertical: 'top',
    marginVertical: 8,
  },
});