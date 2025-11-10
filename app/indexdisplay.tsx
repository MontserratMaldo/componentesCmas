import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import DisplayCuentaVerificacion from '@/components/display/DisplayVerificar';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <DisplayCuentaVerificacion />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
