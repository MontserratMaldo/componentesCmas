import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { blue } from "@/constants/PaletaColores";
import { Typography } from "@/constants/Tipografia";

interface InfoCuentaProps {
  periodo: string;
  fechaLimite: string;
  atrasos: number;
}

const InfoCuenta: React.FC<InfoCuentaProps> = ({ periodo, fechaLimite, atrasos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MaterialIcons name="event" size={22} color={blue.normal.normal.hex} />
        <Text style={styles.label}>
          Periodo: <Text style={styles.value}>{periodo}</Text>
        </Text>
      </View>

      <View style={styles.row}>
        <MaterialIcons name="calendar-today" size={22} color={blue.normal.normal.hex} />
        <Text style={styles.label}>
          Fecha límite de pago: <Text style={styles.value}>{fechaLimite}</Text>
        </Text>
      </View>

      <View style={styles.row}>
        <MaterialIcons name="error-outline" size={22} color={blue.normal.normal.hex} />
        <Text style={styles.label}>
          Atrasos: <Text style={styles.value}>{atrasos}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: blue.ligth.normal.hex,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    ...Typography.text,
    color: blue.normal.normal.hex,
    marginLeft: 8,
  },
  value: {
    fontWeight: "600",
  },
});

export default InfoCuenta;
