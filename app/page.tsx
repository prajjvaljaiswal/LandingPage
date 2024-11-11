'use client'

import Image from "next/image";
import Header from "../components/header"
import { useRouter } from "next/navigation";

export default function Home() {
  const nav = useRouter();
  return (
    <div>
      <Header/>
      <div className="">
        <img className="justify-self-center my-14 h-32 w-32" alt="logo" src="https://www.logolynx.com/images/logolynx/f7/f71d013d7cb38b1ce92fdda0048f43a9.png" />
        <h1 className="justify-self-center text-6xl font-bold mb-12">Wellcom Here</h1>
      </div>
      <div className="justify-self-center">
        <button className="border-2 border-black py-3 px-10 font-bold mx-14 bg-slate-600 text-white" onClick={()=>nav.push('/login')}>Sign in</button>
        <button className="border-2 border-black py-3 px-10 font-bold border-slate-600 text-slate-600">Get Started</button>
      </div>
      
    </div>
  );
}
