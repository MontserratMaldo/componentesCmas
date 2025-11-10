import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type StepIndicatorProps = {
  steps: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, activeIndex, onSelect }) => (
  <View style={styles.container}>
    {steps.map((step, index) => (
      <TouchableOpacity
        key={step}
        style={[styles.tab, activeIndex === index && styles.activeTab]}
        onPress={() => onSelect(index)}
      >
        <Text style={[styles.text, activeIndex === index && styles.activeText]}>{step}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default StepIndicator;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeTab: { borderColor: '#007bff' },
  text: { fontSize: 16, color: '#555' },
  activeText: { color: '#007bff', fontWeight: '600' },
});