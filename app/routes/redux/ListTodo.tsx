import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from './../../redux/store/todoSlice'
function TodoList() {

    const todos = useSelector((state:any)=> state.todoManger)
    const dispatch = useDispatch()

    return(<>
    <h1 className="text-xl">Redux</h1>
     <Link to={"/redux/add"} >ADD</Link>
    <ul className="my-10 p-8">

        {
            todos.map((data:any)=>(
            <li key={data.id} className="border-b-2 border-blue-400 my-2">
                        <span>  {data.text} </span>
                        <button
                        className='m-5 bg-red-900'
                        onClick={()=>dispatch(deleteTodo((data.id))) }>delete </button>
            </li>
            ))
        }
       

    </ul>

    </>)
}

export default TodoList