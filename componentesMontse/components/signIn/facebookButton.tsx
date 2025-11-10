// components/signIn/FacebookButton.tsx
import SocialIconButton from '@/components/signIn/socialIconButton';
import React from 'react';

export default function FacebookButton() {
  return (
    <SocialIconButton
      icon={require('@/assets/images/facebook.png')}
      accessibilityLabel="Iniciar sesión con Facebook"
      onPress={() => alert('Iniciar sesión con Facebook')}
      hasBackground={false} // 👈 el logo ya tiene su círculo
      size={56}
    />
  );
}
