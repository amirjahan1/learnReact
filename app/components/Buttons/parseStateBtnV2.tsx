
export  const ParseStateBtnV2 = ({colSec,setColSec } :any) => {
  
   return(<>
    <div className={`flex justify-center align-center border-2 border-purple-500 rounded-lg ${colSec ? 'bg-yellow-300' : 'bg-brown-300'}`}>
        <section onClick={()=>setColSec(!colSec)} className={`w-20 h-20 rounded-full ${colSec ? 'bg-green-500': 'bg-red-500' }`}></section>
    </div>
   </>)
 }