import { Link } from "react-router";
import {useTodoStore} from "./../../zustand/store/todoStore"
function TodoList() {

    const todos = useTodoStore((state:any)=> state.todos)
    const  deleteTodo = useTodoStore((state:any)=> state.deleteTodo)


    return(<>
    <h1 className="text-xl">Zustand</h1>
     <Link to={"/zustand/add"} >ADD</Link>
    <ul className="my-10 p-8">

        {
            todos.map((data:any)=>(
            <li key={data.id} className="border-b-2 border-blue-400 my-2">
                        <span>  {data.text} </span>
                        <button
                        className='m-5 bg-red-900'
                        onClick={
                            ()=>deleteTodo(data.id)
                        }>delete </button>
            </li>
            ))
        }
       

    </ul>

    </>)
}

export default TodoList