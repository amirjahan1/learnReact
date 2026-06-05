import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addTodo } from "./api/todo-api"
function TodoForm() {
    const [title,setTitle] = useState("")
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: addTodo,
        onSuccess:  ()=>{
            queryClient.invalidateQueries({ queryKey: ["todos"]})
            setTitle("")
        }
    }) 


    const handelSubmit = (e:  React.FormEvent) => {
        e.preventDefault()
        if (!title.trim()) return;
        mutation.mutate(title)
    }
    return(<>
        <h1 className="text-4xl">TodoForm</h1>
        <form onSubmit={handelSubmit}>
            <input type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="new task ..."
                className="border-2 rounded-lg"
            />

            <button type="submit" className="m-3"
            
            disabled={mutation.isPending}>
                
                send   
                
                </button>
        </form>
    </>)
}
export default TodoForm