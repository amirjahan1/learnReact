import { configureStore } from "@reduxjs/toolkit"
import todoReducer from  './todoSlice'


export const store = configureStore({
reducer:  {
    todoManger: todoReducer
}
})

 

store.subscribe(()=>{
    const state = store.getState()
 
    sessionStorage.setItem("rtk-todos", JSON.stringify(state.todoManger))
})