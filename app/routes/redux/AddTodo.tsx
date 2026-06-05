import { useState } from "react";
import { Link } from "react-router";
import {  useDispatch } from "react-redux";
import {addTodo} from '../../redux/store/todoSlice'
function TodoInput() {
    const [text,setText] = useState("")
    const dispatch = useDispatch()

    const handelSubmit = (e:any) =>{
        e.preventDefault()
        if(!text.trim()) return;


        dispatch(addTodo(text))
        setText("")
    }

    return(<>
    <h1 className="text-xl">Redux</h1>
        <Link to={"/redux/list"} >List</Link>

        <form onSubmit={handelSubmit} className="mb-20">
            <input
                type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="write your text"
                className="p-8 w-4/12"
            />

            <button type="submit" className="px-8 py-12 mr-8">
                ADD
            </button>
        </form>
    </>)
}

export default TodoInput

