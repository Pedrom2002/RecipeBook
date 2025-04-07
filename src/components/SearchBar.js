import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({ value, onChangeText, onClear }) {
  return (
    <View
      style={{
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <TextInput
        placeholder="Buscar receitas..."
        value={value}
        onChangeText={onChangeText}
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#ddd',
          padding: 10,
          borderRadius: 8,
        }}
      />
      {/* Ícone de limpar */}
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear} style={{ marginLeft: 10 }}>
          <Ionicons name="close-circle" size={20} color="#888" />
        </TouchableOpacity>
      )}
    </View>
  );
}
