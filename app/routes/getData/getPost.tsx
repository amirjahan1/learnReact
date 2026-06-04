import { useEffect, useState } from 'react'
import axios from 'axios'
import { PostCard } from './post'

function ShowPost(){

    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(false)


    const getPostFunc=()=>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/posts",{
            headers : {
                // Authorization: localStorage.getItem("token")
            }
        }).then((res)=>(res.data))
        .then((data)=>{
            setLoading(false)
            console.log(data)
            setPosts(data)
        })
        .catch((e)=>{
            setLoading(false)
            console.log(e)
        })
    }

    useEffect(()=>{
        getPostFunc()
    },[])


    return(<>
      
                {loading && <h2>loading...</h2>  }
            
                <h1>   
                ShowPost
                </h1>

                <div className='w-full grid md:grid-cols-4 grid-cols-1 gap-10'>
                    {
                        posts.length > 0 ?  
                        posts.map((data:any)=>(
                            <PostCard key={data.id} data={data} />
                        ))
                        
                        :" no post"
                    }
                </div>
        </>)
}

export  default ShowPost