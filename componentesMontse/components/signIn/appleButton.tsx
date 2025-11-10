// components/signIn/AppleButton.tsx
import SocialIconButton from '@/components/signIn/socialIconButton';
import React from 'react';

export default function AppleButton() {
  return (
    <SocialIconButton
      icon={require('@/assets/images/apple.png')}
      accessibilityLabel="Iniciar sesión con Apple"
      onPress={() => alert('Iniciar sesión con Apple')}
      backgroundColor="#fff" // 👈 cambia a blanco
      size={56}
    />
  );
}
