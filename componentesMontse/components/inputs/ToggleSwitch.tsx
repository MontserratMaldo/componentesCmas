import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

type ToggleSwitchProps = {
  label: string;
  onToggle: (value: boolean) => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, onToggle }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggle = (value: boolean) => {
    setIsEnabled(value);
    onToggle(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={isEnabled} onValueChange={toggle} />
    </View>
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 8 },
  label: { fontSize: 16 },
});