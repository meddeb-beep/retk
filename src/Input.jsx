import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { save } from './tslice'
export const Input = () => {
  const [input,setInput]=useState("")
  const d=useDispatch()
  const handladd=()=>{
    if(input){
        d(save(
            {   id:Date.now(),
                title:input,
                done:false
            }
        ))
        setInput("")
    }else{
        alert("Not Found")
    }

  }
  return (
    <form>
        <input type="text"  value={input} onInput={(e)=>setInput(e.target.value)}/>
        <button type="button" className='btn' onClick={handladd} >Add</button>
    </form>
  )
}
