import { useEffect,useState } from "react"

export default function UseEffectPage () {

    const [count,setCount] = useState(0)


    // component Did Mount
    useEffect(()=>{
        console.log("component Mount")
    },[])




    // component Did Update
        useEffect(()=>{
            
              console.log("component Mount when count change")
              setCount(10)
    },[count])


    useEffect(()=>{
        console.log("run in any render")
    })



    // component will Unmount
    useEffect(()=>{

        const interval = setInterval(()=> console.log("tick tock"),1000)

        return ()=>{
            clearInterval(interval)
            console.log("component unmount")
        }
    },[])


    return(<>

        <h1>useEffect</h1>

        <p onClick={()=>{
            console.log(count)
        }}>click me</p>
    </>)

}
 

