
import React from 'react';
import { View, Text } from 'react-native';

export default function IngredientList({ ingredients }) {
  if (!Array.isArray(ingredients)) {
    // Se ingredients não for um array, não renderize nada
    return (
      <Text
        style={{
          color: 'red',
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        Nenhum ingrediente disponível.
      </Text>
    );
  }

  if (ingredients.length === 0) {
    // Se ingredients estiver vazio, exibe uma mensagem de lista vazia
    return (
      <Text
        style={{
          color: 'gray',
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        Nenhum ingrediente encontrado.
      </Text>
    );
  }

  return (
    <View style={{ marginBottom: 15 }}>
      {ingredients.map((ingredient, index) => (
        <Text
          key={index}
          style={{
            marginLeft: 10,
            marginBottom: 5,
          }}
        >
          • {ingredient}
        </Text>
      ))}
    </View>
  );
}
