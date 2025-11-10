import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type VerifyButtonProps = {
  onPress: () => void;
};

const VerifyButton: React.FC<VerifyButtonProps> = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Ionicons name="checkmark-circle-outline" size={20} color="#fff" />
    <Text style={styles.text}>Verificar</Text>
  </TouchableOpacity>
);

export default VerifyButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28a745',
    borderRadius: 12,
    paddingVertical: 14,
    marginVertical: 6,
  },
  text: { color: '#fff', fontSize: 16, marginLeft: 6, fontWeight: '600' },
});