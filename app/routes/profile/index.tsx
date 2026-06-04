import { useSearchParams } from "react-router";
// import { BtnCounter } from "~/components/Buttons/btnCounter";
import BgPro from "./assets/images.jpg"
import ImageProfile from  '/public/assets/profile/blue-circle-with-white-user_78370-4707.avif'
export default function ProfilePage(){

    const [params]:any = useSearchParams();

    return (
        <div>
            <h1>Profile Page</h1>

        <img
            src={ImageProfile} alt="Profile" className="w-40 h-40 rounded-full p-1 m-2 border-2 border-blue-300 hover:border-yellow-600"
        />

                <img 
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62LVhts8-ERiNmlrfHQShVXasUYH38KKSRw&s"} alt="Profile"
                />
            <div  className="w-full flex justify-center items-center">
                    {/* <BtnCounter count={10} /> */}
                <div className="w-6/12  flex justify-center items-center my-10 "></div>
                <section className="w-40 h-40 rounded-full p-1 m-2 border-2 border-blue-300 hover:border-yellow-600 " 
                style={{
                     backgroundImage: 'url(' + BgPro+ ' )',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                    }}
                />

                <div>
                    <h2 className="text-2xl font-bold">{params.get("name") || "John"} Doe</h2>
                    <p className="text-gray-600">
                         <div
                                dangerouslySetInnerHTML={{__html: params.get("job") || "Software"}}
                                />
                        
                        
                         Engineer</p>
                    <p className="text-gray-500">john.doe@example.com</p>
                </div>

            </div>
        </div>
    )
}