import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function RecipeCard({ recipe, onPress }) {
  if (!recipe || !recipe.name || !Array.isArray(recipe.ingredients)) {
    // Se `recipe` não estiver válido ou faltar `name` ou `ingredients`, retorna null para não renderizar nada
    return (
      <Text
        style={{
          color: 'red',
          textAlign: 'center',
          fontSize: 16,
        }}
      >
        Erro ao carregar a receita
      </Text>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        {recipe.name}
      </Text>
      <Text
        style={{
          color: '#666',
        }}
      >
        {recipe.ingredients.length} ingredientes
      </Text>
    </TouchableOpacity>
  );
}
