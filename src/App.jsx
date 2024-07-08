import React from 'react'
import { Input } from './Input'
import { useSelector } from 'react-redux'
import Item from './Item'
export const App = () => {
  const t=useSelector((state)=>state.todos.todoslist)
  return (
    <div>
        <div>
            <Input/>
           {t.map((todo)=>(
                 <Item key={todo.id} title={todo.title} done={todo.done} id={todo.id}/> 
            ))}
        </div>      
    </div>
  )
}
