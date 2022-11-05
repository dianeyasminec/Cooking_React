import React from 'react'
import { Button } from 'react-bootstrap';

export default function RecipeIngredientEdit(props) {
  const {
    ingredient,
  handleIngredientChange
} = props

function handleChange(changes){
  handleIngredientChange(ingredient.id, {...ingredient, ...changes})
}
  return (
    <>
        <input 
        className='recipe-edit__input'
         type="text"
         value={ingredient.name}
         onInput= {(e) => handleChange({name: e.target.value})}
         />
        <input 
        className='recipe-edit__input'
         type="text"
         value={ingredient.amount}
         onInput= {(e) => handleChange({amount: e.target.value})}
         />
        <Button className='btn btn--danger' variant='danger'>&times;</Button>
    </>
  )
}
