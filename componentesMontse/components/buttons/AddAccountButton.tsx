import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type AddAccountButtonProps = {
  onPress: () => void;
};

const AddAccountButton: React.FC<AddAccountButtonProps> = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Ionicons name="add-circle-outline" size={20} color="#fff" />
    <Text style={styles.text}>Agregar cuenta</Text>
  </TouchableOpacity>
);

export default AddAccountButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6f42c1',
    borderRadius: 12,
    paddingVertical: 14,
    marginVertical: 6,
  },
  text: { color: '#fff', fontSize: 16, marginLeft: 6, fontWeight: '600' },
});