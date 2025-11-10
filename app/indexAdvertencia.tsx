import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import OverlayGenericoAdvertencia from '@/components/over/OverlayGenericoAdvertencia';
//ejemplo Cuenta CMAS no disponible
export default function IndexAdvertencia() {
  const [visible, setVisible] = useState(true);

  const cerrarOverlay = () => {
    setVisible(false); 
  };

  return (
    <View style={styles.container}>
      {visible ? (
        <OverlayGenericoAdvertencia
          visible={visible}
          onClose={cerrarOverlay}
          title="No hay cuentas CMAS disponibles"
          message="Registra una cuenta para continuar."
          buttonText="Registrar cuenta"
        />
      ) : (
        <View style={styles.blankScreen} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blankScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
