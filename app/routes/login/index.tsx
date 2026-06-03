// function LoginPageV1() {

import { BtnCounter } from "~/components/Buttons/btnCounter";

//     return <h1>Login Page V1</h1>;
// }
// export default LoginPageV1;


// const LoginPageV2 = () => {

//     return <h1>Login Page V2</h1>;
// }

// export default LoginPageV2;



export function LoginPageV3() {
    return <h1>Login Page V3</h1>;
}


export const LoginPageV4 = () => {
    return (
    <>
       <BtnCounter count={5} job={[
        {
            title: "Software Engineer",
            company: "Google"
        },
        {
            title: "Frontend Developer",
            company: "Facebook"
        },
        {
            title: "Backend Developer",
            company: "Amazon"
        }
       ]} />
        <h1>Login Page V4</h1>
    </>
   );
}