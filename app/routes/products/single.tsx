import { useParams } from "react-router";


export default function ProductSingle() {
let { id,name } = useParams();  


  return (
      <div className="aspect-[4/3] w-full overflow-hidden ">
            dynamic route {id}
      </div>
   
  );
}
