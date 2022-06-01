import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'native-base';
import __recipes from '../../constants/recipes';
import {RecipeCard} from '../../components';

export const RecipesView = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // fetcher les recettes
    console.log('__recipes', __recipes);
    setTimeout(() => {
      setRecipes(__recipes);
    }, 1000);
  }, []);

  return (
    <View>
      <Text>Recipies</Text>
      <FlatList
        data={recipes}
        renderItem={({item: recipe}) => {
          console.log('RECIPE', recipe);
          return <RecipeCard recipe={recipe} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
