import React,{useState, useEffect} from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import {v4 as uuidv4} from 'uuid';
import RecipeEdit from './RecipeEdit';
import 'bootstrap/dist/css/bootstrap.min.css';


const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(() => { 
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  })  

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
 
  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
   }

   function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
   }
 


useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
},[recipes])

  function handleRecipeAdd(){
    const newRecipe = {
     id: uuidv4(),
     name: 'New',
     servings: 1,
     cookTime:'1:00',
     instructions:'Instr.',
     ingredients: [
       { id: uuidv4(), name: 'Name', amount : '1 Tbs'}
     ]
   }
setRecipes([...recipes,newRecipe])
     }

     function handleRecipeDelete(id){
      setRecipes(recipes.filter(recipe=> recipe.id !== id))
     }

   

  return( 
    <>
    
    <RecipeList 
    recipes={recipes}
    handleRecipeAdd={handleRecipeAdd}
    handleRecipeDelete={handleRecipeDelete}
    handleRecipeSelect={handleRecipeSelect}
    />
    {/* If ANYTTHINK BEFORE THE END IS TRUE THEN DO THE THING AFTER THE END */}
    {selectedRecipe && <RecipeEdit  handleRecipeChange ={handleRecipeChange}recipe={selectedRecipe}/>}
  
    </>
  )
}

// This is our variable will be use to pass in to RecipeList and make our App dynamic
 
const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken ',
    servings: 3,
    cookTime: '45:00',
    instructions:"1. Put Chicken in the oven\n 2. Wait 1 hour for cooking \n 3. Serve the Chicken",
    ingredients:[
      {
      id:1,
      name:'Chicken',
      amount: ' 2 pounds'
    },
    {
      id:2,
      name:' Salt',
      amount: ' \n2 TBS'
    }
  ]},

  {
    id: 2,
    name: 'Fish',
    servings: 2,
    cookTime: '9:30',
    instructions :'1. Put fish in the oven\n2. Wait 1 hour for cooking\n3. Serve the fish',
    ingredients:[
      {
      id:1,
      name:' Fish',
      amount: ' 4 pounds'
    },
    {
      id:2,
      name:' Paprika',
      amount: ' 3 TBS'
    }
  ]
   
  }
]

export default App;
   











