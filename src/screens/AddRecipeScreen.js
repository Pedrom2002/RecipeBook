import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AddRecipeScreen({ navigation, onAddRecipe }) {
  const [name, setName] = useState(''); // Armazena o nome da receita
  const [instructions, setInstructions] = useState(''); // Armazena as instruções
  const [ingredients, setIngredients] = useState(''); // Armazena os ingredientes

  const handleAddRecipe = () => {
    if (name && instructions && ingredients) {
      const newRecipe = {
        id: Date.now(), // Gera um id único baseado no timestamp
        name,
        ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()), // Separa e limpa os ingredientes
        instructions,
      };

      // Chama a função onAddRecipe para adicionar a nova receita
      onAddRecipe(newRecipe);

      // Volta para a tela anterior
      navigation.goBack();
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: '#ddd',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
        }}
        placeholder="Nome da Receita"
        value={name}
        onChangeText={setName} // Atualiza o estado do nome
      />
      <TextInput
        style={{
          height: 40,
          borderColor: '#ddd',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
        }}
        placeholder="Instruções"
        value={instructions}
        onChangeText={setInstructions} // Atualiza o estado das instruções
        multiline
      />
      <TextInput
        style={{
          height: 40,
          borderColor: '#ddd',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
        }}
        placeholder="Ingredientes (separados por vírgula)"
        value={ingredients}
        onChangeText={setIngredients} // Atualiza o estado dos ingredientes
      />
      <Button title="Adicionar Receita" onPress={handleAddRecipe} /> {/* Adiciona a nova receita */}
    </View>
  );
}
