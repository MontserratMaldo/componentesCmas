import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type DropdownProps = {
  options: string[];
  selected: string | null;
  onSelect: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selector} onPress={() => setOpen(!open)}>
        <Text style={styles.text}>{selected || 'Seleccionar cuenta'}</Text>
        <Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={18} color="#555" />
      </TouchableOpacity>

      {open && (
        <FlatList
          data={options}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                onSelect(item);
                setOpen(false);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
  },
  text: { fontSize: 16 },
  option: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
});