import React, { useContext } from 'react';
import { RecipeContext } from './App';

export default function Header() {
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <div className='showcase'>
      <div className='container'>
        <div className='showcase-container'>
          <div className='showcase-content'>
            <h1>Add Your Favorite Recipes!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto est delectus in aliquam exercitationem praesentium,
              animi sint neque? Similique nostrum laboriosam qui eum officia
              cupiditate.
            </p>
            <button
              onClick={() => handleRecipeAdd()}
              className='btn btn--primary'
            >
              Add Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
