import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoState from "./todoState";

export default  function TodosPage(){

    return(<>
        <div className="w-full">
            <h1 className="text-3xl">Rect Query Page</h1>

            <TodoState />
            <TodoForm />
            <TodoList />
        </div>
    </>)
}