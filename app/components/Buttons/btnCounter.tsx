interface BtnCounterProps {
    count: number;
    name?: string;
    job?: any[];
}

export const BtnCounter = (props: BtnCounterProps) => {
    return (<>
    <h1>{props.name}</h1>
    <div className="flex justify-center items-center p-2 border-2 border-blue-300 rounded-md font-lg ">
        <button className="bg-blue-500 text-white p-2 rounded-md">+</button>
            <span className="mx-2">{props.count}</span>

        <button className="bg-red-500 text-white p-2 rounded-md">-</button>   
   </div>
   <section className="mt-4">
       <h2>Job Experience</h2>
       {
       props.job?.map(
        ({ title, company }) =>  {
        return(
                
                <div key={title}> 
                    <h3>{title}</h3>
                    <p>{company}</p>
                </div>
                
        )
       }
    )
       }
   </section>
    </>)
}

// const & let 