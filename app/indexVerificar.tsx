import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Overlay from '@/components/over/OverlayGenericoVerificar'; 

// ejemplo reporte
export default function Index() {
  const [visible, setVisible] = useState(true); 

  const cerrarOverlay = () => setVisible(false); 

  return (
    <View style={styles.container}>
      <Overlay
        visible={visible}
        onClose={cerrarOverlay}
        title="Reporte generado con éxito."
        message="Número de reporte: 2830155070"
      />

      {!visible && <View style={styles.blankContainer} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  blankContainer: { flex: 1, backgroundColor: '#fff' },
});
