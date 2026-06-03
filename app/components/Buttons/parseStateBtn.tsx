import { useState } from "react";

export  const ParseStateBtn = ({colasasaSec } :any) => {
  const [colSec,setColSec] = useState(colasasaSec);
   return(<>
    <div className={`flex justify-center align-center border-2 border-red-500 rounded-lg ${colSec ? 'bg-gray-300' : 'bg-blue-300'}`}>
        <section onClick={()=>setColSec(!colSec)} className={`w-20 h-20 rounded-full ${colSec ? 'bg-green-500': 'bg-red-500' }`}></section>
    </div>
   </>)
 }