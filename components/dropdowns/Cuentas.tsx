import { blue } from "@/constants/PaletaColores";
import { Typography } from "@/constants/Tipografia";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface Cuenta {
  id: string;
  numeroCuenta: string;
  alias: string;
  saldo: number;
}

interface CuentaDropdownProps {
  cuentas: Cuenta[];
  cuentaSeleccionada: Cuenta;
  onSeleccionar: (cuenta: Cuenta) => void;
  mostrarAgregarCuenta?: boolean;
  onAgregarCuenta?: () => void;
}

const Cuentas: React.FC<CuentaDropdownProps> = ({
  cuentas,
  cuentaSeleccionada,
  onSeleccionar,
  mostrarAgregarCuenta = true,
  onAgregarCuenta,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  const handleSeleccionar = (cuenta: Cuenta) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onSeleccionar(cuenta);
    setIsOpen(false);
  };

  const handleAgregarCuenta = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(false);
    if (onAgregarCuenta) onAgregarCuenta();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.dropdownButton, isOpen && styles.dropdownButtonOpen]}
        onPress={toggleDropdown}
        activeOpacity={0.7}
      >
        <Text style={styles.dropdownText}>
          {cuentaSeleccionada.alias} - {cuentaSeleccionada.numeroCuenta}
        </Text>
        <MaterialIcons
          name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={28}
          color={blue.normal.normal.hex}
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.optionsList}>
          {cuentas.map((cuenta, index) => (
            <TouchableOpacity
              key={cuenta.id}
              style={[
                styles.optionItem,
                index === cuentas.length - 1 && !mostrarAgregarCuenta && styles.lastOption,
              ]}
              onPress={() => handleSeleccionar(cuenta)}
              activeOpacity={0.7}
            >
              <Text style={styles.optionText}>{cuenta.alias}</Text>
            </TouchableOpacity>
          ))}

          {mostrarAgregarCuenta && (
            <TouchableOpacity
              style={[styles.optionItem, styles.lastOption]}
              onPress={handleAgregarCuenta}
              activeOpacity={0.7}
            >
              <Text style={styles.optionText}>Añadir cuenta...</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: blue.dark.normal.hex,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    minHeight: 56,
  },
  dropdownButtonOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  dropdownText: {
    ...Typography.text,
    color: blue.dark.normal.hex,
    flex: 1,
    fontWeight: '700',
  },
  optionsList: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: blue.dark.normal.hex,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: "hidden",
  },
  optionItem: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: blue.ligth.normal.hex,
    backgroundColor: "#ffffff",
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionText: {
    ...Typography.text,
    color: blue.dark.normal.hex,
    fontWeight: '700',
  },
});

export default Cuentas;
