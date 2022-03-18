import React from 'react'
import { Link } from 'react-router-dom' //imbrl
const Recipe = ({elem}) => {
    console.log(elem)
  return (
     <Link to={`/details/${elem.recipe.uri.slice(51)}`}> 
     <div> <h1> {elem.recipe.label} </h1>
    <img src={elem.recipe.image} alt="" />
    </div>
    </Link>
  )
}

export default Recipe