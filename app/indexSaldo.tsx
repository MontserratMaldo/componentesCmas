import PrimaryButton from '@/components/Buttons/PrimaryButton';
import AgregarCuentaCard from '@/components/Saldo/OtraCuenta';
import TarjetaSaldo from '@/components/Saldo/TarjetaSaldo';
import Cuentas from '@/components/dropdowns/Cuentas';
import { Typography } from '@/constants/Tipografia';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export interface Cuenta {
  id: string;
  numeroCuenta: string;
  alias: string;
  saldo: number;
}

const RECIBO = {
  fechaEmision: new Date('2025-11-09'), 
  diasLimite: 7, 
};

const CUENTAS: Cuenta[] = [
  { id: '1', numeroCuenta: '73810', alias: 'Casa', saldo: 245.75 },
  { id: '2', numeroCuenta: '73811', alias: 'Oficina', saldo: 820.4 },
];

export default function IndexSaldo() {
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState<Cuenta>(CUENTAS[0]);

  const hoy = new Date();
  const fechaEmision = RECIBO.fechaEmision;
  const fechaLimite = new Date(fechaEmision);
  fechaLimite.setDate(fechaEmision.getDate() + RECIBO.diasLimite);

  const atrasos = hoy > fechaLimite ? 1 : 0;
  const mesActual = fechaEmision.toLocaleString('es-ES', { month: 'long', year: 'numeric' });
  const fechaLimiteFormateada = fechaLimite.toLocaleDateString('es-ES');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.saldoTitle}>Saldo</Text>

          <TarjetaSaldo saldo={cuentaSeleccionada.saldo} adeudo={cuentaSeleccionada.alias} />

          <View style={{ height: 30 }} />

          <Cuentas
            cuentas={CUENTAS}
            cuentaSeleccionada={cuentaSeleccionada}
            onSeleccionar={setCuentaSeleccionada}
          />

          <View style={styles.infoBox}>
            <View style={styles.infoRow}>
              <Ionicons name="calendar-outline" size={20} color="#004A98" />
              <Text style={styles.infoLabel}>Periodo:</Text>
              <Text style={styles.infoValue}>{mesActual}</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="calendar-number-outline" size={20} color="#004A98" />
              <Text style={styles.infoLabel}>Fecha límite de pago:</Text>
              <Text style={styles.infoValue}>{fechaLimiteFormateada}</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="alert-circle-outline" size={20} color="#004A98" />
              <Text style={styles.infoLabel}>Atrasos:</Text>
              <Text style={styles.infoValue}>{atrasos}</Text>
            </View>
          </View>

          <AgregarCuentaCard onPress={() => console.log('Ir a agregar cuenta')} />

          <View style={{ height: 100 }} />
        </ScrollView>

        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title="Pagar ahora" 
            onPress={() => console.log('Botón de pago presionado')} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  saldoTitle: {
    ...Typography.h3,   
    textAlign: 'center',
    marginBottom: 16,
    color: '#00334c',
    fontWeight: '600',  
  },
  infoBox: {
    backgroundColor: '#E6F0FA',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoLabel: {
    marginLeft: 8,
    fontWeight: '600',
    color: '#004A98',
  },
  infoValue: {
    marginLeft: 4,
    color: '#333',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
});
