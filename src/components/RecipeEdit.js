import React from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { Button } from 'react-bootstrap';

export default function RecipeEdit(props) {
const { recipe,
handleRecipeChange} = props;

function handleChange(changes){
  handleRecipeChange(recipe.id, {...recipe, ...changes})
}

function handleIngredientChange(id, ingredient){
  const newIngredients = [...recipe.ingredients]
  const index = newIngredients.findIndex(i => i.id === id)
  newIngredients[index] = ingredient
 handleChange({ingredients : newIngredients})
 }

  return (
    <div className="recipe-edit">
      <div className='recipe-edit__remove-button-container'>
        <Button  variant='danger'>&times;</Button>
      </div>
      <div className='recipe-edit__details-grid'>
        <label 
        className='recipe-edit__label' 
        htmlFor="name"
        >Name
        </label>
        <input
        className='recipe-edit__input'
         type='text'
         value={recipe.name}
          name='name' 
          id='name'
          onInput={ e => handleChange({name: e.target.value})}/>
        <label
         className='recipe-edit__label'
          htmlFor="cookTime">
            Cook Time
            </label>
        <input 
        className='recipe-edit__input'
        type='text' 
        value={recipe.cookTime}
        onInput={ e => handleChange({cookTime: e.target.value})}
        name='cookTime' 
        id='cookTime'/>
        <label 
        className='recipe-edit__label'
         htmlFor="servings">
            Servings
            </label>
        <input 
        className='recipe-edit__input'
        type='text'
        value={recipe.servings}
        onInput={ e => handleChange({servings: parseInt(e.target.value ) || ''})}
         min='1' 
         name='servings'
          id='servings'/>
        <label 
        className='recipe-edit__label'
         htmlFor="instructions">
            Instructions
            </label>
        <textarea 
        className='recipe-edit__input'
        type='text' 
        name='instructions'
        onInput={ e => handleChange({instructions: e.target.value})}
         id='instructions'>{recipe.instructions}
         </textarea>
      </div>
      <br/>
      
        <label className='recipe-edit__label'>Ingredients</label>
         <div className='recipe-edit__ingredient-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {recipe.ingredients.map(ingredient => (
               <RecipeIngredientEdit 
               key={ingredient.id} 
               ingredient={ingredient}
               handleIngredientChange={handleIngredientChange} /> 
            ))}
            
         </div>
         <div className='recipe-edit__add-ingredient-btn-container'>
            <Button variant='outline-primary'>Add Ingredient</Button>
         </div>
        
    </div>
  )
}
