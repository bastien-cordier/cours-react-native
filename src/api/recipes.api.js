import {Recipe} from '../models';
import APIRoot from './index.api';

const recipesApi = new APIRoot('/recipes');
export const useRecipes = () => {
  const fetchRecipes = async () => {
    try {
      const res = await recipesApi.api().get('/complexSearch');

      const recipes = Recipe.fromArray(res.data.results);
      return recipes;
    } catch (error) {
      console.log('ERROR', error);
      throw error;
    }
  };
  const getUserRecipe = async () => {};
  const publishRecipe = async () => {};

  return {
    fetchRecipes,
    publishRecipe,
    getUserRecipe,
  };
};
