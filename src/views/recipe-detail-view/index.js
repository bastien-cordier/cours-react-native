import React, {useEffect} from 'react';
import {Text, View} from 'native-base';
import __recipies from '../../constants/recipes';

export const RecipeDetailView = ({navigation, route}) => {
  const {recipe} = route.params;

  useEffect(() => {
    console.log('RECIPE', recipe);
    navigation.setOptions({
      title: recipe.title,
    });
  }, []);

  return (
    <View>
      <Text>RECIPE DETAIL: {recipe.title}</Text>
    </View>
  );
};
