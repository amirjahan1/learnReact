import  { useFormStatus } from "react-dom" 

export function SubmitButton() {

    const { pending } = useFormStatus()
 

  return (
    <button
      type="submit"
      disabled={pending}
      className={pending ?  " bg-gray-300" : "bg-blue-500"} 
    >
        {
            pending ? "در حال ارسال..." : "ارسال" 
        }
    </button>
  );
}