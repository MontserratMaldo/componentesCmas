import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

interface CardDisplayProps {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
}

const CardDisplay: React.FC<CardDisplayProps> = ({
  cardNumber = '•••• •••• •••• ••••',
  cardHolder = 'Ingresa el nombre que aparece en la ta',
  expiryDate = 'MM/AA',
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8cceed', '#0093d8', '#005882']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Enrique Vidó Villalvazo</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.cardNumber}>{cardNumber}</Text>
        </View>

        <View style={styles.chipContainer}>
          <View style={styles.chip}>
            <View style={styles.chipGold} />
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.info}>
            <Text style={styles.label}>Card Holder name</Text>
            <Text style={styles.value}>{cardHolder}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Expiry Date</Text>
            <Text style={styles.value}>{expiryDate}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  card: {
    width: width - 80,
    maxWidth: 320,
    height: 200,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 5,
  },
  title: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  numberContainer: {
    marginTop: -10,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 1.5,
  },
  chipContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  chip: {
    width: 40,
    height: 30,
    backgroundColor: 'rgba(255, 215, 0, 0.9)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipGold: {
    width: 34,
    height: 24,
    backgroundColor: 'rgba(255, 215, 0, 0.5)',
    borderRadius: 3,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,
  },
  label: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 8,
    fontFamily: 'Poppins-Light',
    marginBottom: 2,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default CardDisplay;