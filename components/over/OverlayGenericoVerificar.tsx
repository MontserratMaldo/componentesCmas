import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Typography } from '@/constants/Tipografia';

interface OverlayCuentaVerificadaProps {
  visible: boolean;
  onClose: () => void;
  title: string;    
  message: string;  
  
}

const OverlayCuentaVerificada: React.FC<OverlayCuentaVerificadaProps> = ({
  visible,
  onClose,
  title,
  message,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark" size={46} color="#ffffff" />
          </View>

          <Text style={[Typography.title1, styles.title]}>{title}</Text>
          <Text style={[Typography.text, styles.subtitle]}>{message}</Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={[Typography.text, styles.buttonText]}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 280,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  iconCircle: {
    backgroundColor: '#003366',
    borderRadius: 50,
    padding: 16,
    marginBottom: 18,
  },
  title: {
    color: '#001f3f',
    textAlign: 'center',
  },
  subtitle: {
    color: '#001f3f',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default OverlayCuentaVerificada;

