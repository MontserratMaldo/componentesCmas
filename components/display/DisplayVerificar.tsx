import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import { Typography } from '@/constants/Tipografia';

const DisplayCuentaVerificacion = () => {
  const [activeTab, setActiveTab] = useState<'titular' | 'monto'>('titular');
  const [nombreTitular, setNombreTitular] = useState('');
  const [montoPago, setMontoPago] = useState('');

  
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const switchTab = (tab: 'titular' | 'monto') => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: tab === 'titular' ? -40 : 40,
        duration: 200,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setActiveTab(tab);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 350,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 350,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => switchTab('titular')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'titular' && styles.activeText]}>
            Nombre del titular
          </Text>
          <View style={[styles.tabLine, activeTab === 'titular' && styles.activeLine]} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => switchTab('monto')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'monto' && styles.activeText]}>
            Monto del último pago
          </Text>
          <View style={[styles.tabLine, activeTab === 'monto' && styles.activeLine]} />
        </TouchableOpacity>
      </View>

      <View style={{ height: 30 }} />

      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }],
          width: '85%',
        }}
      >
        {activeTab === 'titular' ? (
          <TextInput
            style={styles.input}
            placeholder="Nombre del titular"
            placeholderTextColor="#9CA3AF"
            value={nombreTitular}
            onChangeText={setNombreTitular}
          />
        ) : (
          <TextInput
            style={styles.input}
            placeholder="$"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={montoPago}
            onChangeText={setMontoPago}
          />
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 25,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  tabText: {
    ...Typography.text,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  activeText: {
    color: '#003366',
    fontWeight: '600',
  },
  tabLine: {
    height: 3,
    width: '90%',
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
  },
  activeLine: {
    backgroundColor: '#444',
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    fontSize: 16,
    color: '#333',
  },
});

export default DisplayCuentaVerificacion;
