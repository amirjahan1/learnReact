import { useState } from "react";
import { Link } from "react-router";
import {useTodoStore} from './../../zustand/store/todoStore'


function TodoInput() {
    const [text,setText] = useState("")
    const addTodo = useTodoStore((state:any)=>state.addTodo)


    const handelSubmit = (e:any) =>{
        e.preventDefault()
        if(!text.trim()) return;
        addTodo(text)
        setText("")
    }

    return(<>
    <h1 className="text-xl">Zustand</h1>
        <Link to={"/zustand/list"} >List</Link>

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

