import React from 'react';
import Recipe from '../components/Recipe';

export default function RecipeList({ recipes }) {
  return (
    <div className='recipe-list'>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      {/* <div className='recipe-list__add-recipe-btn-container'>
        <button className='btn btn--primary' onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div> */}
    </div>
  );
}
