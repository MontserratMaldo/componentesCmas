import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

type SecondaryButtonProps = {
  title: string;
  onPress: () => void;
};

export default function SecondaryButton({ title, onPress }: SecondaryButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg * 1.5,
    borderRadius: theme.borderRadius,
  },
  text: {
    ...theme.typography.title2,
    color: theme.colors.textPrimary,
    textAlign: 'center',
  },
});