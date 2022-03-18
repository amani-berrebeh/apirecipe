import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ListRecipe from './Components/ListRecipe';
import { getrecipe } from './redux/action';
import { Route, Routes } from 'react-router-dom' //imbrc
import Details from './Components/Details';
function App() {
  const dispatch= useDispatch()
  const recipes=useSelector((state)=>state.recipes)
  const loading=useSelector((state)=>state.loading)
  const [input, setInput] = useState()
  //const [querry, setQuerry] = useState('')
 useEffect(() => {
   dispatch(getrecipe(input)) //querry
 
   
 }, [input]) //querry
 const handleSubmit=(e)=> {
   e.preventDefault()
   //setQuerry(input)

 }
  return (
    <div className="App"><Routes> 
      <Route path="/" element={ loading?
      <h1>loading...</h1>:  
      
        <div> 
          <form onSubmit={handleSubmit}>
          <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder=" ...rearch your meal" />
        </form>
       <ListRecipe recipes={recipes}/></div>}/>
       <Route path="/details/:id" element={<Details/>} />
     </Routes>
    </div>
  );
}

export default App;
