import { useCallback, useMemo,memo, useState  } from "react";


const ExpensiveList = memo(({onItemClick}: {onItemClick: (item: number)=>void})=>{
    return(<>
    <div  className="p-4 border mt-2">
        <button onClick={()=> onItemClick(32)}>
            click ME
        </button>
    </div>
    </>)
})


ExpensiveList.displayName = "ExpensiveList"


export default function OptimizationDemo(){
    const [count,setCount] = useState(0)
    const [text,setText] = useState("")


    const expensiveCalculation = useMemo(()=>{
        console.log("calcute start")
        let num = 0;
        for (let i = 0; i < 100000000;  i++){
            num += i
        }

    return num;
    },[])


    const handelItemClick = useCallback((id:number)=>{
            console.log("id click:" + id)
    },[])

    return(<>
    <div className="mt-4">

        <h1 className="text-3xl">UseMemo & UseCallBack</h1>
        <p>Calcute {expensiveCalculation}</p>


        <div className="mt-4">
            <button onClick={()=>setCount(c  =>  c + 1)} className="bg-green-500 text-white">
                {count}
            </button>


            <input
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="type text"
            className="border-2 p-1"
           />
        </div>


        <ExpensiveList onItemClick={handelItemClick} />

    </div>
    
    </>)


}