import React, { useContext } from 'react';
import RecipeIngredientEdit from '../components/RecipeIngredientEdit';
import { RecipeContext } from './App';

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  // handleChange({ name: 'New name' });

  return (
    <div className='recipe-edit'>
      <div className='recipe-edit__remove-button-container'>
        <button className='btn recipe-edit__remove-button'>&times;</button>
      </div>
      <div className='recipe-edit__details-grid'>
        <label htmlFor='name' className='recipe-edit__label'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
          className='recipe-edit__input'
        />
        <label htmlFor='cookTime' className='recipe-edit__label'>
          Cook Time
        </label>
        <input
          type='text'
          name='cookTime'
          id='cookTime'
          value={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
          className='recipe-edit__input'
        />
        <label htmlFor='servings' className='recipe-edit__label'>
          Servings
        </label>
        <input
          type='number'
          min='1'
          name='servings'
          id='servings'
          value={recipe.servings}
          onInput={(e) =>
            handleChange({ servings: parseInt(e.target.value) || '' })
          }
          className='recipe-edit__input'
        />
        <label htmlFor='instructions' className='recipe-edit__label'>
          Instructions
        </label>
        <textarea
          name='instructions'
          id='instructions'
          value={recipe.instructions}
          onInput={(e) => handleChange({ instructions: e.target.value })}
          className='recipe-edit__input'
        />
      </div>
      <br />
      <label className='recipe-edit__label'>Ingredients</label>
      <div className='recipe-edit__ingredient-grid'>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => {
          return (
            <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} />
          );
        })}
      </div>
      <div className='recipe-edit__add-ingredient-btn-container'>
        <button className='btn btn--primary'>Add Ingredient</button>
      </div>
    </div>
  );
}
