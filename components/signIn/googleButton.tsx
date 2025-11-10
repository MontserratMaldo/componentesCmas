// components/signIn/GoogleButton.tsx
import SocialIconButton from '@/components/signIn/socialIconButton';
import React from 'react';

export default function GoogleButton() {
  return (
    <SocialIconButton
      icon={require('@/assets/images/google.png')}
      accessibilityLabel="Iniciar sesión con Google"
      onPress={() => alert('Iniciar sesión con Google')}
      backgroundColor="#fff"
      size={56}
    />
  );
}
