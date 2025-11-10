import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle } from 'react-native-svg';
import { blue, blueSomeDark } from '@/constants/PaletaColores';
import { Typography } from '@/constants/Tipografia';

interface TarjetaSaldoProps {
  saldo: number | string;
  adeudo?: string;
}

const TarjetaSaldo: React.FC<TarjetaSaldoProps> = ({ saldo, adeudo }) => {
  const formatearSaldo = (monto: number | string): string => {
    const numero = parseFloat(String(monto));
    if (isNaN(numero)) {
      return "$0.00";
    }
    return `$${numero.toFixed(2)}`;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[blue.normal.normal.hex, blue.dark.normal.hex, blueSomeDark.dark.normal.hex]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Svg height="140" width="140" style={styles.decoration}>
          <Path d="M60 10 C50 30, 40 50, 40 65..." fill="rgba(255,255,255,0.08)" />
          <Circle cx="100" cy="90" r="20" fill="rgba(255,255,255,0.04)" />
        </Svg>

        <View style={styles.content}>
          <Text style={styles.saldo}>{formatearSaldo(saldo)}</Text>
          <Text style={styles.adeudo}>{adeudo}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 6,
  },
  gradient: {
    paddingHorizontal: 28,
    paddingVertical: 36,
    minHeight: 200,
    borderRadius: 20,
  },
  decoration: {
    position: 'absolute',
    right: -25,
    top: 10,
  },
  content: {
    zIndex: 1,
  },
  saldo: {
    ...Typography.h1,
    fontSize: 52,
    lineHeight: 60,
    color: '#ffffff',
    marginBottom: 8,
  },
  adeudo: {
    ...Typography.text,
    color: 'rgba(255,255,255,0.9)',
    fontSize: 18,
  },
});

export default TarjetaSaldo;


