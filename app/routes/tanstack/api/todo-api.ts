export interface Todo {
    id:number;
    title: string;
    completed: boolean;
}


let mocktodos: Todo[] = [
    {
        id: 1, 
        title: "Learn  React Query(Tanstack)",
        completed: false
    }
,

    {
        id: 2, 
        title: "Tanstackis great",
        completed: true
    }
]


export const fetchTodos = async (): Promise<Todo[]> =>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return [...mocktodos]
}


export const addTodo = async (title:string): Promise<Todo> =>{
    await new Promise((resolve)=>setTimeout(resolve,800));
    const newTodo = { id: Date.now(), title, completed:false}
    mocktodos.push(newTodo)
    return newTodo;
}