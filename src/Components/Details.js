import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getonerecipe } from '../redux/action';

const Details = () => { 
    const params=useParams() 
    console.log(params)
    const dispatch= useDispatch()
    useEffect(() => {
     dispatch(getonerecipe(params.id))
    
      
      
    }, [])
    
  return (
    <div>Details</div>
  )
}

export default Details