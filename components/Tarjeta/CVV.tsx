import React, { useRef, useState } from 'react';
import {
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TextInput,
    TextInputKeyPressEventData,
    View,
} from 'react-native';

interface CVVInputProps {
  onComplete?: (cvv: string) => void;
}

const CVVInput: React.FC<CVVInputProps> = ({ onComplete }) => {
  const [digits, setDigits] = useState(['', '', '']);
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChange = (text: string, index: number) => {
    if (!/^\d*$/.test(text)) return;

    const newDigits = [...digits];
    newDigits[index] = text;
    setDigits(newDigits);

    if (text && index < 2) {
      inputRefs[index + 1].current?.focus();
    }

    if (newDigits.every(d => d !== '')) {
      onComplete?.(newDigits.join(''));
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Código de seguridad de tu tarjeta (CVV)</Text>
      <View style={styles.inputsContainer}>
        {digits.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="numeric"
            maxLength={1}
            selectTextOnFocus
          />
        ))}
      </View>
      <Text style={styles.hint}>3 dígitos al reverso de tu tarjeta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  label: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#00334c',
    marginBottom: 15,
  },
  inputsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  input: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#d9d9d9',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#00334c',
  },
  hint: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#666',
    marginTop: 10,
  },
});

export default CVVInput;