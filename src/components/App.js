import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import RecipeList from '../components/RecipeList';
import RecipeEdit from '../components/RecipeEdit';
import '../css/App.css';
import { v4 as uuidv4 } from 'uuid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faFacebook, faTwitter);

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

export default function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find((recipe) => {
    return recipe.id === selectedRecipeId;
  });

  useEffect(() => {
    const recipeJSON = sessionStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: '',
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <Navbar />
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Milanesa',
    servings: 4,
    cookTime: '0:25',
    instructions: `1. Put salt on beef\n2. Put beef in over\n3. Eat milanesa`,
    ingredients: [
      {
        id: 1,
        name: 'Beef',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs',
      },
    ],
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: `1. Put paprika on pork\n2. Put pork in over\n3. Eat pork`,
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds',
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs',
      },
    ],
  },
];
