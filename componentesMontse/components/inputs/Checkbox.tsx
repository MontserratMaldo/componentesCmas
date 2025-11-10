import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CheckboxProps = {
  label: string;
  onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggle}>
      <View style={styles.box}>
        {checked && <Ionicons name="checkmark" size={16} color="#fff" />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginVertical: 6 },
  box: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    marginRight: 8,
  },
  label: { fontSize: 16 },
});