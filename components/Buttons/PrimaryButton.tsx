import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Typography } from '../../constants/Tipografia';
import { blue } from '../../constants/PaletaColores';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
};

export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: blue.normal.normal.hex, 
    paddingVertical: 16,                     
    paddingHorizontal: 24,                   
    borderRadius: 12,                        
  },
  text: {
    ...Typography.title2, 
    color: '#FFFFFF',     
    textAlign: 'center',
  },
});
