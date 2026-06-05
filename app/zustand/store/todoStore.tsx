import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

export const useTodoStore = create(
    
    devtools(
        persist(

    (set)=>({


    todos: [],


    addTodo: (text:any) =>
        set(
            (state:any)=>({
            todos: [...state.todos, {id: Date.now(), text}]
        }),
        false,
        "todo/zustand/add"
    ),


    deleteTodo: (id:any) =>
        set((state:any)=>({
            todos: state.todos.filter((todo:any)=> todo.id !== id)
        }),
        false,
        "todo/zustand/delete"
    )      

}),
        {
            name: "zustand-localStoraage"
        }

    )


)

)