"use client"
import Image from "next/image";
import SharedLayoutAnimation from "@/components/SharedLayoutAnimation";
import { useState } from "react";
import Link from "next/link";
// import Logo from 'public/logo.png'
import img11 from '../public/image/11.jpg'
import img33 from '../public/image/33.jpg'
export default function Home() {
  const [data, setdata] = useState([
    {
      data: {
        title: "Tomato",
        desc: 
        "....................... ........... .................."+
        "....................... ........... .................."+
        "....................... ........... .................."+
        "....................... ........... .................."+
        ""
      }, label: "Tomato", img: img11
    },
    {
      data: {
        title: "Lettuce",
        desc: 
          "....................... ........... .................."+
          "....................... ........... .................."+
          "....................... ........... .................."+
          "....................... ........... .................."+
          ""
      }, label: "Lettuce", img: img33
    },
    // { icon: "🧀", label: "Cheese", img: '/image/44.jpg' },
  ])

  return (
    <div dir="rtl" className=" w-screen h-screen flex flex-col justify-center items-center">
      <NavBar/>
      <SharedLayoutAnimation data={data} />
    </div>
  );
}
const navItems= [
  {
      label: "الرئيسية",
      href: "/",
  },
  {
      label: "عن الشركة",
      href: "#",
  },
  {
      label: "مشاريعنا",
      href: "#",
  },
  {
      label: "خدماتنا",
      href: "#",
  },
  {
      label: "اتصل بنا",
      href: "/contact",
  },
];

import logo from '../public/logo.png'
function NavBar() {
  return <>
  <div className="absolute top-0 z-20 bg-slate-50 opacity-30 w-full h-14"></div>
      <div className="absolute top-0 z-20  w-full h-14 grid grid-cols-4 items-center">
        
        <div className="borde flex-1 ps-8">
          <Image src={logo} alt="" width={50} height={40} />
        </div>


        {/*  */}
        {/* <div className="relative"> */}
          <div className="col-span-2 flex  gap-2 justify-center">
            {navItems.map((i)=>(
              <Link key={i.label} href={i.href} className="">{i.label}</Link>
            ))}
          </div>
        {/* </div> */}



        {/*  */}
        <div className="flex justify-end">dasdsa</div>
      </div>
  </>
}






