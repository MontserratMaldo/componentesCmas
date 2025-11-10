import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type PasswordFieldProps = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
};

const PasswordField: React.FC<PasswordFieldProps> = ({ placeholder, value, onChangeText }) => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder || 'Contraseña'}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secure}
      />
      <TouchableOpacity onPress={() => setSecure(!secure)} style={styles.icon}>
        <Ionicons
          name={secure ? 'eye-outline' : 'eye-off-outline'}
          size={20}
          color="#555"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  input: { flex: 1, paddingVertical: 10, fontSize: 16 },
  icon: { padding: 4 },
});