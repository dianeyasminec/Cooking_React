import React from 'react'
import Recipe from './Recipe'
import { Button } from 'react-bootstrap';

export default function RecipeList(props) {
  const {recipes, 
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect
    
   
  } = props
  return (
 
<div className="recipe-list">   
  <div>
    {recipes.map(recipe =>{
      return <Recipe 
      key ={recipe.id}
      handleRecipeDelete={handleRecipeDelete}
      handleRecipeSelect={handleRecipeSelect}
     
     
      // {...recipe } Means PASS ALL THE DIFFERENTS PROPS FROM recipe
        {...recipe}/>
    })}
  </div>
    <div className="recipe-list__add-recipe-btn-container">
  <Button 
  onClick={handleRecipeAdd} 
    className='btn btn--primary'
    variant='primary'>
        Add  Recipe
  </Button>
    </div>
  </div> 
 

  )
}
