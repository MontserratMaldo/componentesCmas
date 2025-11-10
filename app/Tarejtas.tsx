import CVVInput from '@/components/Tarjeta/CVV';
import CardDisplay from '@/components/Tarjeta/Tarjeta';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function SelectCard() {
  const [cvv, setCvv] = useState('');
  
  // Datos de la tarjeta que puedes modificar
  const [cardData, setCardData] = useState({
    number: '•••• •••• •••• 1234',
    holder: 'Enrique Vidó',
    expiry: '12/30'
  });

  const handleBack = () => {
    console.log('Regresar');
  };

  const handleCVVComplete = (completeCvv: string) => {
    setCvv(completeCvv);
    console.log('CVV completo:', completeCvv);
  };


  return (
    <View style={styles.container}>

      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardSection}>
          <CardDisplay
            cardNumber="•••• •••• •••• 1234"
            cardHolder="Enrique Vidó"
            expiryDate="12/26"
          />
        </View>

        <View style={styles.cvvSection}>
          <CVVInput onComplete={handleCVVComplete} />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFF5F5',
  },
  headerTitle: {
    fontSize: 19,
    fontFamily: 'Poppins-SemiBold',
    color: '#00334c',
    lineHeight: 22,
  },
  placeholder: {
    width: 40,
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 40,
  },
  cardSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cvvSection: {
    marginTop: 10,
  },
});