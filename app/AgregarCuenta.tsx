import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { blue } from "@/constants/PaletaColores";

export default function AgregarCuenta() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={blue.normal.normal.hex} />
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Agregar nueva cuenta</Text>
      <Text style={styles.subtitle}>
        Aquí podrás registrar una nueva cuenta para realizar pagos fácilmente.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    marginLeft: 8,
    color: blue.normal.normal.hex,
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: blue.normal.normal.hex,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 24,
  },
});
