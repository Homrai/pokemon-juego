import { useState } from 'react'

export const useForm = (item={}) => {
  
  const [inputs,setInputs]= useState(item);

  const handleVariable =(e)=>{
    const {name, value, checked, type}=e.target;
    setInputs((old)=>({
      ...old,
      [name]: type ==="checkbox" ? checked : value
    }));
  };

  const reset =()=>{
    setInputs(item);
  };
    
  return [inputs, handleVariable, reset]
}