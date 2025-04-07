import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, FlatList } from 'react-native';
import RecipeCard from './components/RecipeCard';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';
import EditRecipeScreen from './screens/EditRecipeScreen';
import HomeScreen from './screens/HomeScreen'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [recipes, setRecipes] = useState([]); // Inicializando como uma lista vazia

  useEffect(() => {
    const loadRecipes = async () => {
      const savedRecipes = await AsyncStorage.getItem('recipes');
      if (savedRecipes) {
        setRecipes(JSON.parse(savedRecipes));
      } else {
        setRecipes([]); // Caso não haja receitas salvas, inicializa com uma lista vazia
      }
    };
    loadRecipes();
  }, []);

  const saveRecipes = async (newRecipes) => {
    try {
      await AsyncStorage.setItem('recipes', JSON.stringify(newRecipes));
      setRecipes(newRecipes);
    } catch (error) {
      console.log('Erro ao salvar as receitas', error);
    }
  };

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    saveRecipes(updatedRecipes);
  };

  const handleEditRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    saveRecipes(updatedRecipes);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={{ title: 'Detalhes da Receita' }}
        />
        <Stack.Screen
          name="AddRecipe"
          options={{ title: 'Adicionar Receita' }}
        >
          {(props) => (
            <AddRecipeScreen {...props} onAddRecipe={handleAddRecipe} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="EditRecipe"
          options={{ title: 'Editar Receita' }}
        >
          {(props) => (
            <EditRecipeScreen {...props} onEditRecipe={handleEditRecipe} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
