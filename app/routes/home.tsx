import { useState } from "react";
import type { Route } from "./+types/home";
// import LoginPageV2 from './login' 
import {  LoginPageV4, LoginPageV3 } from './login'
import { BtnCounter } from "~/components/Buttons/btnCounter";
import  {StateBtnCounter} from "~/components/Buttons/stateBtnCounter";
import { ParseStateBtn } from "~/components/Buttons/parseStateBtn";
import { ParseStateBtnV2 } from "~/components/Buttons/parseStateBtnV2";
import { Link } from "react-router";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const [colSec,setColSec] = useState(false);
  return(<>
    <h1>Home Page</h1>
      <BtnCounter count={10} name="Home Page Counter" />
     <LoginPageV3 />
    <LoginPageV4 />

      <br />
      <br />
      <br />

    ==================================================================
  <br />
  <br />
  <br />

  <StateBtnCounter />


   ==================================================================
  <br />
  <br />
  <br />

   <ParseStateBtn colasasaSec={false} />
   <ParseStateBtn colasasaSec={true} />


 ==================================================================
  <br />
  <br />
  <br />

  <ParseStateBtnV2 colSec={colSec} setColSec={setColSec} />
  <ParseStateBtnV2 colSec={colSec} setColSec={setColSec} />


  <br />
  <br />
  <br />

  <Link to="/profile?name=ali&job=Designer" className="text-blue-500 hover:underline">Go to Profile Page</Link>

  </>);
}
