// components/common/SocialIconButton.tsx
import React from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  icon: ImageSourcePropType;
  onPress?: () => void;
  accessibilityLabel?: string;
  size?: number;
  backgroundColor?: string;
  hasBackground?: boolean; // 👈 nuevo
  style?: ViewStyle;
};

export default function SocialIconButton({
  icon,
  onPress,
  accessibilityLabel = 'Social sign-in',
  size = 56,
  backgroundColor = '#fff',
  hasBackground = true,
  style,
}: Props) {
  const radius = size / 2;
  const iconSize = Math.round(size * 0.55);

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={[
        hasBackground
          ? [
              styles.base,
              {
                width: size,
                height: size,
                borderRadius: radius,
                backgroundColor,
              },
            ]
          : null,
        style,
      ]}
      android_ripple={{ color: 'rgba(0,0,0,0.08)', borderless: true }}
      hitSlop={10}
    >
      <Image
        source={icon}
        style={{
          width: hasBackground ? iconSize : size,
          height: hasBackground ? iconSize : size,
          borderRadius: hasBackground ? 0 : 0,
        }}
        resizeMode="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
});
