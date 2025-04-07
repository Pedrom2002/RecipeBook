import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

export default function RecipeDetailScreen({ route, navigation }) {
  const { recipe, onEditRecipe } = route.params;

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
          textAlign: 'center',
        }}
      >
        {recipe.name}
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 15,
        }}
      >
        Ingredientes:
      </Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={{ fontSize: 16, marginBottom: 5 }}>
          • {ingredient}
        </Text>
      ))}

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 15,
        }}
      >
        Instruções:
      </Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>{recipe.instructions}</Text>

      {/* Botão para editar */}
      <Button
        title="Editar Receita"
        onPress={() =>
          navigation.navigate('EditRecipe', {
            recipe,
            onEditRecipe, // Passando a função de edição
          })
        }
      />
    </ScrollView>
  );
}
