import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import { recipes } from './recipes';

export default function HomeScreen({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text) {
      const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(text.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(text.toLowerCase()))
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  };

  const handleRecipePress = (recipe) => {
    // Navegar para a tela de receita, passando a receita como parâmetro
    navigation.navigate('RecipeDetail', { recipe });
  };

  return (
    <View>
      {/* Componente de pesquisa */}
      <SearchBar value={searchTerm} onChangeText={handleSearch} />

      {/* Botão para adicionar nova receita */}
      <Button
        title="Adicionar Nova Receita"
        onPress={() => navigation.navigate('AddRecipe')}
      />

      {/* Lista de receitas filtradas */}
      <FlatList
        data={filteredRecipes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => handleRecipePress(item)} // Passa a receita ao clicar
          />
        )}
      />
    </View>
  );
}
