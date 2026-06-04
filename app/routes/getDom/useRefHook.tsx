import { useRef } from 'react'

export default function useRefHook(){
    const inputRef =  useRef<any>(null)
    const handleClick=()=>{
        console.log(inputRef.current.value)
    }
    return(<>
        <div>
            <p onClick={handleClick}>test click me</p>
            <input ref={inputRef} type='text' placeholder='write text' />

        </div>
    </>)
}