
import { createSlice } from "@reduxjs/toolkit";


const getInitialTodos = () => {
  if (typeof window === "undefined") return [];
  
  try {
    const saved = sessionStorage.getItem("rtk-todos");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error("Failed to parse todos from sessionStorage", e);
    return [];
  }
};

 
 const initialState:any = getInitialTodos()


const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {

    addTodo: (state, action) => {
        state.push({id: Date.now(), text: action.payload})
    },


    deleteTodo: (state, action) => {
        return state.filter((todo)=> todo.id !== action.payload)
    }
  }  
})


export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;