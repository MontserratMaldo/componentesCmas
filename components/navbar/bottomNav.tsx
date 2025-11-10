import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';

type TabKey = 'home' | 'receipt' | 'report';
type TabRoute = '/home' | '/receipt' | '/report';

type TabItem = {
  key: TabKey;
  route: TabRoute;
  icon: ImageSourcePropType;
  iconActive: ImageSourcePropType;
};

const PRIMARY = '#0A667F';

export default function BottomNav({ active }: { active: TabKey }) {
  const router = useRouter();

  const tabs: TabItem[] = [
    { key: 'report',  route: '/report',  icon: require('../../assets/images/report.png'),  iconActive: require('../../assets/images/reportActive.png') },
    { key: 'home',    route: '/home',    icon: require('../../assets/images/home.png'),    iconActive: require('../../assets/images/homeActive.png') },
    { key: 'receipt', route: '/receipt', icon: require('../../assets/images/receipt.png'), iconActive: require('../../assets/images/receiptActive.png') },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        {tabs.map((t) => {
          const isActive = active === t.key;
          return (
            <TouchableOpacity key={t.key} style={styles.item} activeOpacity={0.8} onPress={() => router.replace(t.route)}>
              <Image source={isActive ? t.iconActive : t.icon} style={styles.icon} resizeMode="contain" />
              <View style={[styles.underline, { backgroundColor: isActive ? PRIMARY : 'transparent' }]} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { borderTopWidth: 1, borderTopColor: '#E6E6E6', backgroundColor: '#fff', paddingTop: 8, paddingBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', paddingHorizontal: 16 },
  item: { alignItems: 'center', justifyContent: 'flex-end' },
  icon: { width: 28, height: 28 },
  underline: { marginTop: 6, height: 4, width: 56, borderRadius: 3 },
});
