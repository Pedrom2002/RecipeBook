import React, { useState } from 'react';
import { ScrollView, TextInput, Text, Button, View } from 'react-native';

export default function EditRecipeScreen({ route, navigation }) {
  const { recipe, onEditRecipe } = route.params; // Recebe a receita e a função onEditRecipe

  // Estado para armazenar os novos valores
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join("\n"));
  const [instructions, setInstructions] = useState(recipe.instructions);

  // Função para salvar a receita editada
  const handleSave = () => {
    const updatedRecipe = {
      ...recipe,
      name,
      ingredients: ingredients.split("\n"), // Convertendo a string de volta para um array de ingredientes
      instructions,
    };

    // Chama a função de edição para atualizar a lista de receitas
    onEditRecipe(updatedRecipe); // Atualiza as receitas

    // Navega de volta para a tela de detalhes da receita
    navigation.navigate('RecipeDetail', {
      recipe: updatedRecipe, // Passando a receita atualizada
      onEditRecipe: onEditRecipe, // Passando a função de edição
    });
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#f7f7f7' }}>
      {/* Nome da Receita */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, color: '#333' }}>Nome da Receita:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          fontSize: 16,
          borderRadius: 8,
          backgroundColor: '#fff',
        }}
        value={name}
        onChangeText={setName}
        placeholder="Digite o nome da receita"
        placeholderTextColor="#888"
      />

      {/* Ingredientes */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, color: '#333' }}>Ingredientes:</Text>
      <TextInput
        style={{
          height: 100,
          textAlignVertical: 'top',
          paddingTop: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          fontSize: 16,
          borderRadius: 8,
          backgroundColor: '#fff',
        }}
        value={ingredients}
        onChangeText={setIngredients}
        multiline
        numberOfLines={4}
        placeholder="Digite os ingredientes (separados por linha)"
        placeholderTextColor="#888"
      />

      {/* Instruções */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, color: '#333' }}>Instruções:</Text>
      <TextInput
        style={{
          height: 100,
          textAlignVertical: 'top',
          paddingTop: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
          fontSize: 16,
          borderRadius: 8,
          backgroundColor: '#fff',
        }}
        value={instructions}
        onChangeText={setInstructions}
        multiline
        numberOfLines={6}
        placeholder="Digite as instruções"
        placeholderTextColor="#888"
      />

      {/* Botão para salvar a receita */}
      <Button title="Salvar" onPress={handleSave} color="#4CAF50" />
    </ScrollView>
  );
}
