import React from 'react';
import Ingredient from '../components/Ingredient';

export default function IngredientList({ ingredients }) {
  return (
    <div className='ingredient-grid'>
      {ingredients.map((ingredient) => {
        return <Ingredient key={ingredient.id} {...ingredient} />;
      })}
    </div>
  );
}
