import { createContext , useContext, useReducer} from "react"

const TodoContext = createContext(null)


const initialState = []


function  todoReducer(state :any, action:any) {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now() , text:  action.payload}];

        case "DELETE_TODO":
            return state.filter((todo:any)=> todo.id !== action.payload)    


        default:
            return state;    
    }
}



export function TodoProvider({children}:any) {
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    return(
        <TodoContext.Provider  value={{ todos,dispatch}}>
        {children}
        </TodoContext.Provider>
    )
}


export function useTodos() {
    return useContext(TodoContext);
}

