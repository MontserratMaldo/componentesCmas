import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type AddCardButtonProps = {
  onPress: () => void;
};

const AddCardButton: React.FC<AddCardButtonProps> = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Ionicons name="card-outline" size={20} color="#fff" />
    <Text style={styles.text}>Agregar tarjeta</Text>
  </TouchableOpacity>
);

export default AddCardButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7f0e',
    borderRadius: 12,
    paddingVertical: 14,
    marginVertical: 6,
  },
  text: { color: '#fff', fontSize: 16, marginLeft: 6, fontWeight: '600' },
});