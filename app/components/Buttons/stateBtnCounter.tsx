import  { useState } from "react";


function  countHandler(cou:number,setCo:React.Dispatch<React.SetStateAction<number>>, sign:string = "+") {
    if(sign === "+") return setCo(cou + 1);
    setCo(cou - 1);
}

export const StateBtnCounter = () => {
    const [count,setCount] = useState(0);


    function increment () {
        setCount((prevState)=>( prevState + 1));
    }

    function decrement () {
        setCount(count - 1);
    }
     
    return (<>
        <div className="flex justify-center items-center p-2 border-2 border-blue-300 rounded-md font-lg w-3/12 ">
            <button onClick={()=>countHandler(count,setCount, "+")} className="bg-blue-500 text-white p-2 rounded-md">+</button>
            <span className="mx-2">{count}</span>
            <button onClick={() => setCount((prevState) => {
                console.log(prevState);
                return prevState - 1;
               })} className="bg-red-500 text-white p-2 rounded-md">-</button>

            
        </div>
    </>)
}

 