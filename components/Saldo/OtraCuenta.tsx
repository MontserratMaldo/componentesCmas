import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { blue } from "@/constants/PaletaColores";
import { Typography } from "@/constants/Tipografia";

interface AgregarCuentaCardProps {
  onPress?: () => void;
}

const AgregarCuentaCard: React.FC<AgregarCuentaCardProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.row}>
        <MaterialIcons name="add-circle-outline" size={26} color={blue.normal.normal.hex} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.title}>Agregar cuenta</Text>
          <Text style={styles.subtitle}>Agrega una nueva cuenta para pagar</Text>
        </View>
        <MaterialIcons
          name="chevron-right"
          size={26}
          color={blue.dark.normal.hex}
          style={{ marginLeft: "auto" }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: blue.ligth.normal.hex,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 0,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    ...Typography.title2,
    color: blue.dark.normal.hex,
    fontWeight: '700',
  },
  subtitle: {
    ...Typography.text,
    color: blue.dark.normal.hex,
    opacity: 0.7,
    fontWeight: '700',
  },
});

export default AgregarCuentaCard;
