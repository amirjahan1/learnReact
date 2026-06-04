import { useActionState, useState } from 'react'
import {SubmitButton } from  './FormBtn'
import axios from "axios"
import ChildComp from './childrenCom'



export default function PostForm() {


    const [newPost,setNewPost] =  useState([])


    async function createPostAction(prevState:any, formData :any) {

        // const formData = new FormData()
        // formData.append("title",title)

        // const json = {
        //     title:"addffd"
        // }

        // JSON.stringify(json)

    const title = formData.get("title")
    const body = formData.get("body")

    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title,
            body,
            userId:1
        },
        {
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })

        setNewPost((prevState)=>([...prevState,response.data]))

         console.log(response.data)

    return {
        success: true,
        message: "successsssssssss",
        // data:data
    }
    }

    catch (error) {
        return {
            success: false,
            message: "Nothing~!!!!!"
        }
    }
    

}


    const [state, formAction] = useActionState<any>(createPostAction, {
        success:null,
        message:  ""
    })


  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">ساخت پست جدید (React 19 + Axios)</h2>
      
  
      <form action={formAction} className="flex flex-col gap-4 max-w-sm">
        <input 
          name="title" 
          placeholder="عنوان پست" 
          className="border p-2 rounded"
          required 
        />
        
        <textarea 
          name="body" 
          placeholder="متن پست" 
          className="border p-2 rounded"
          required 
        />

      
        <SubmitButton />

       {
        state.message && (<p>
            {state.message}
        </p>)
       }
        
      </form>
        {/* <input type="file" onChange={(e)=>setProfilePicture(e.target.value[0])}/> */}

      <p  onClick={()=>{
        console.log(newPost)
      }}>heh</p>



      <ChildComp>
        <div>
 hieffeeffefef hieffeeffefef
        </div>
       
      </ChildComp>
    </div>
  );
}