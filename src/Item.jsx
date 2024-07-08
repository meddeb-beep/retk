import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { complete, del } from './tslice';
const Item = ({title,done,id}) => {
  const d=useDispatch();
  const handlecha=()=>{
    d(complete(id))
  }
  const dele=()=>{
    d(del(id))
  }
  return (
    <div style={{margin:"10px"}}>
      <input type='checkbox'  onChange={handlecha} id={id}/>
      <label style={{margin:"0 10px"}} htmlFor={id}>{title}</label>
      <button type="button"onClick={dele} >Delete</button>
    </div>
  )
}
export default Item
