import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HeaderBar({ title, onMenu }: { title: string; onMenu?: () => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.menu} onPress={onMenu}>
        <Text style={styles.menuIcon}>≡</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 18, paddingHorizontal: 20, paddingBottom: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 24, fontWeight: '800', color: '#0D0D0D' },
  menu: { width: 34, height: 34, backgroundColor: '#0A667F', borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  menuIcon: { color: '#fff', fontSize: 18, fontWeight: '900', marginTop: -2 },
});
