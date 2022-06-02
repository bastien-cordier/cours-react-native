import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {View, Pressable, FlatList} from 'native-base';
import __recipes from '../../constants/recipes';
import {RecipeCard} from '../../components';

export const RecipesView = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // fetcher les recettes
    console.log('__recipes', __recipes);
    setTimeout(() => {
      setRecipes(__recipes);
    }, 1000);

    navigation.setOptions({
      title: 'Recettes',
    });
  }, []);

  return (
    <View>
      <FlatList
        data={recipes}
        renderItem={({item: recipe}) => {
          console.log('RECIPE', recipe);
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('recipeDetailView', {
                  recipe,
                })
              }>
              <RecipeCard recipe={recipe} />
            </Pressable>
          );
        }}
        keyExtractor={item => item.id}
        style={styles.recipiesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recipiesList: {
    paddingTop: 25,
  },
});
