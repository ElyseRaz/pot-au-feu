'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header () {
    const[isClick, setIsClick] = useState(false);
    const toogleNavbar = () => {
        setIsClick(!isClick);
    }
    return(
       <>
        <div className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 w-full z-50 ">
            <h1 className="font-bold text-3xl text-red-600  md:ml-10"><Link href="/">Pot-au-Feu</Link></h1>
            <div className="flex space-x-10 mr-10 hidden md:block">
                <Link href="/" className="font-semibold text-red-600 hover:text-black transition-all">Accueil</Link>
                <Link href="/about"className="font-semibold text-red-600 hover:text-black transition-all">A propos</Link>
                <Link href="/our-services"className="font-semibold text-red-600 hover:text-black transition-all">Services</Link>
                <Link href="/contact"className="font-semibold text-red-600 hover:text-black transition-all">Contact</Link>
            </div>
            <div className=" block md:hidden pt-2  ">
                <button className="w-8 transition-all"  onClick={toogleNavbar}>
                    {isClick ? ( <img src="fermer.png "  />
                    ) : (<img src="suite.png" alt="hamburger" />)}
                </button>
            </div>
        </div>
        <div className="md:hidden z-50 w-full">
            {isClick && (
                <>
                <div className="flex flex-col items-center justify-center bg-white fixed top-0 left-0 right-1 z-50">
                <div className=" block md:hidden pt-2 justify-items-end  ml-96 sm:ml-96 sm:-mr-64 mt-4">
                <button className="w-8 transition-all"  onClick={toogleNavbar}>
                    {isClick ? ( <img src="fermer.png "  />
                    ) : (<img src="suite.png" alt="hamburger" />)}
                </button>
            </div>
                    <Link href="/" className="font-semibold text-red-600 hover:text-black transition-all p-4">Accueil</Link>
                    <Link href="/about"className="font-semibold text-red-600 hover:text-black transition-all p-4">A propos</Link>
                    <Link href="/our-services"className="font-semibold text-red-600 hover:text-black transition-all p-4">Services</Link>
                    <Link href="/contact"className="font-semibold text-red-600 hover:text-black transition-all p-4">Contact</Link>
                </div>
                
                </>
            )}
        </div>
        </>
    )
}