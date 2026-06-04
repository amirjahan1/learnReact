export const PostCard =({data}:any)=>{
    return(<>
     <article className="max-w-md rounded-xl bg-[#1e1e1e] p-6 font-sans text-[#e0e0e0]" onClick={()=>{
        console.log(data)
     }}>
      <h2 className="mb-3 text-lg font-semibold text-white">
        {data.title}
      </h2>
      <p className="mb-4 whitespace-pre-line text-sm leading-relaxed text-[#b0b0b0]">
       
       {data.body}
      </p>
      <span className="text-xs text-[#888]">User #{data.userId} · Post #{data.id}</span>
    </article>
    </>)
}