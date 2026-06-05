import {useTodos} from '../../context/TodoContext'  
import { Link } from "react-router";

function TodoList() {

    const { todos, dispatch} = useTodos()

    return(<>
     <Link to={"/add"} >ADD</Link>
    <ul className="my-10 p-8">

        {
            todos.map((data)=>(
            <li key={data.id} className="border-b-2 border-blue-400 my-2">
                        <span>  {data.text} </span>
                        <button
                        className='m-5 bg-red-900'
                        onClick={
                            ()=>dispatch({ type:"DELETE_TODO", payload:  data.id})
                        }>delete </button>
            </li>
            ))
        }
       

    </ul>

    </>)
}

export default TodoList