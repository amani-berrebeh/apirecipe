import React from 'react'
import Recipe from './Recipe'

const ListRecipe = ({recipes}) => {
    console.log(recipes)
  return (
    <div>List of Recipes
    {recipes.map((elem,i)=><Recipe elem={elem} key={i} />)}    

 </div>
  )
}

export default ListRecipe