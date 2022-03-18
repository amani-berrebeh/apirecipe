import { GETRECIPEFAILED, GETRECIPEFAILEDONE, GETRECIPELOADING, GETRECIPELOADINGONE, GETRECIPESUCCESS, GETRECIPESUCCESSONE } from './actionTypes';
const initialState = {

    recipes:[],loading:false,error:null
}

const recipeReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GETRECIPELOADING:
    case GETRECIPELOADINGONE:
    return { ...state,loading:true}

 case GETRECIPESUCCESS:
   case GETRECIPESUCCESSONE:
    return { ...state,recipes:payload, loading:false}

   case GETRECIPEFAILED:
     case GETRECIPEFAILEDONE:
    return { ...state,error:payload, loading:false} 
  default:
    return state
  }
}
export default recipeReducer