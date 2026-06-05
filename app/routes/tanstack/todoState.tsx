import { useQuery  } from "@tanstack/react-query";


export default function TodoState(){

    const {data:todos} = useQuery<any[]>({
        queryKey:["todos"]
    })

    const total = todos?.length || 0;
    const completed = todos?.filter((t)=> t.completed).length || 0;

    return (<>
        <div>
            <p>all task: {total}</p>
            <p>all done: {completed}</p>
        </div>
    
    </>)
}