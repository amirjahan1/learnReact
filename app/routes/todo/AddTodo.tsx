import { useState } from "react";
import { Link } from "react-router";
import { useTodos } from "~/context/TodoContext";



function TodoInput() {
    const [text,setText] = useState("")
    const {dispatch}:any = useTodos()


    const handelSubmit = (e:any) =>{
        e.preventDefault()
        if(!text.trim()) return;

        dispatch({
            type: "ADD_TODO", payload:text
        });
        setText("")
    }

    return(<>
        <Link to={"/list"} >List</Link>

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

