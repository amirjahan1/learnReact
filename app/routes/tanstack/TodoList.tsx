import { useQuery } from "@tanstack/react-query"
import {fetchTodos} from "./api/todo-api"

export default function TodoList(){
const {data: todos,isLoading, isError, error} = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime:1000 * 30
})

if(isLoading) return <p>loading....</p>
if(isError) return<p>{(error as Error).message}</p>
    return(<>
    <ul>
        {
            todos?.map((todo)=>(
            <li key={todo.id} className="my-2 border-b-2 border-b-green-500">
                    <p>{todo.title}</p>
                    <p>{todo.completed ?  "done" : "un done"}</p>
                    </li>
            ))
        }
        
    </ul>
    </>)
}