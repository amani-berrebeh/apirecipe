import axios from "axios"
import { GETRECIPEFAILED, GETRECIPEFAILEDONE, GETRECIPELOADING, GETRECIPELOADINGONE, GETRECIPESUCCESS, GETRECIPESUCCESSONE } from "./actionTypes"

export const getrecipe =(query)=> async (dispatch)=>{
    try { dispatch ({type:GETRECIPELOADING})
     const resp = await
    axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=01dd33e2&app_key=64ccda011be1b3a5552df0c364eedc95`)
  console.log(resp)
  dispatch({type:GETRECIPESUCCESS,payload:resp.data.hits})
  } catch (error) { console.log(error)
      dispatch({type:GETRECIPEFAILED,payload:error})
  }
  }
  export const getonerecipe =(id)=> async (dispatch)=>{
    try { dispatch ({type:GETRECIPELOADINGONE})
     const resp = await
    axios.get(
    `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=01dd33e2&app_key=64ccda011be1b3a5552df0c364eedc95`)
  console.log(resp)
  dispatch({type:GETRECIPESUCCESSONE,payload:resp.data.recipe})
  } catch (error) { console.log(error)
      dispatch({type:GETRECIPEFAILEDONE,payload:error})
  }
  }
  //redux thunk i dispatch