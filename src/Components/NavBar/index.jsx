import { useEffect, useState } from "react";

const NavBar = ()=>{
   const [isMenu , setIsMenu] = useState(false);
   const MenuItem = [
        {
            menu: "مرحباً",
            link: "accueil"
        },
        {
            menu: "العروض الترويجية والمكافآت",
            link: "promocode"
        },
        {
            menu: "كيفية التسجيل؟",
            link: "register"
        },
        {
            menu: "ميزة 1xbet",
            link: "bookmaker"
        },
        {
            menu: "التعليمات",
            link: "Qfa"
        },
        {
            menu: "اتصال",
            link: "contacts"
        }


   ]

    return (
        <nav className={`px-8 flex mb-4 ${isMenu ? "h-full " : "h-[4rem] items-center "}  z-50  justify-between  lg:h-16 w-lvw fixed top-0  bg-black`}>
            
            <h2 className={`text-2xl text-white ${isMenu ? "pt-4" : ""}`}>
                WINMAD BET
            </h2>

            <ul className={` flex flex-col    ${isMenu ? "flex" :"lg:flex hidden"} max-lg:absolute    lg:flex-row  max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2  max-lg:-translate-y-1/2  items-center  justify-between gap-8 lg:4rem `}>
                {MenuItem.map(({menu , link} , index)=>(
                    <li className="text-white text-lg hover:text-blue transition-all duration-500" key={index} onClick={()=>setIsMenu(false)}>
                        <a href={`#${link}`}>{menu}</a>
                    </li>
                ))}
  

                
            </ul> 

            <div className={`flex  gap-4  lg:hidden ${isMenu ? "pt-4" : ""} `}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={()=>{setIsMenu(true)}} className={`size-10 ${isMenu ? "hidden" : ""} text-white font-bold cursor-pointer`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={()=>{setIsMenu(false)}} className={`${isMenu ? "" : "hidden"} size-10 text-white  cursor-pointer`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div> 




        </nav>
    )
}

export  default  NavBar;