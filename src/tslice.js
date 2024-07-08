import { createSlice } from "@reduxjs/toolkit"

const initialState={
    todoslist:[],
}
const toslice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        save:(state,action)=>{
            state.todoslist.push(action.payload);
        },
        complete:(state,action)=>{
            state.todoslist.map((todo)=>{
                if(action.payload=todo.id){
                    todo.done=!todo.done
                }
            })
        },
        del:(state,action)=>{
            const t=state.todoslist
            state.todoslist=[...t.filter(function(e){
                return e.id!=action.payload;
            })]
        }
    }
})
export const {save,complete,del}=toslice.actions
export default toslice.reducer;