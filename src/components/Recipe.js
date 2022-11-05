import React from 'react'
import IngredientList from './IngredientList'
import { Button } from 'react-bootstrap';

export default function Recipe(props) {
    // Destructure props make it easier to read 
    const {
      id,
      handleRecipeDelete,
        name, 
        cookTime,
        servings,
        instructions,
        ingredients,
        handleRecipeSelect
    } = props
return (
<div className="recipe">
    <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
          <div>
             <Button 
             onClick ={() => handleRecipeSelect(id)}
             className="btn btn--primary mr-1"
             variant='primary'>
              Edit
              </Button>
             <Button 
             onClick={() => handleRecipeDelete(id)}
             className='btn btn--danger'
             variant='danger'>
              Delete
              </Button>
          </div>
    </div>
     <div className="recipe__row">
        <span className="recipe__label"> Cook Time:</span>
        <span className="recipe__value"> {cookTime}</span>
    </div>
      <div className="recipe__row">
        <span className="recipe__label"> Servings:</span>
        <span className="recipe__value"> {servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label"> Instructions:</span>
        <span className="recipe__value recipe__instructions recipe__value--indented"> {instructions}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label"> Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
            <IngredientList ingredients={ingredients}/>
        </div>
      </div>
</div>



)}
