import Link from "next/link";

export default function Hero() { 
    return (
        <div className="h-screen flex items-center justify-center">
            <img src="table.png" alt="hero" className="w-full h-full object-cover blur-sm" />
            <div className="absolute items-center justify-center flex flex-col w-full h-full bg-black bg-opacity-50">
                 <h1 className=" text-center text-white text-4xl md:text-6xl font-extrabold  motion-preset-oscillate motion-duration-1500 ">Bienvenue sur Pot-au-Feu</h1>
                <p className="text-xl md:text-3xl font-semibold text-center mt-24 text-white motion-preset-focus motion-duration-2000 ">Un classique réconfortant, idéal pour vos événements chaleureux ...</p>
                <div className="flex flex-col sm:flex-col md:space-x-20 justify-center mt-14 md:flex-row">
                    <Link href="/about" className="bg-transparent border-2 border-white text-white hover:text-red-600 px-4 py-3 mt-14 h-14 w-64 sm:64 text-center items-center hover:bg-white transition-all font-semibold md:w-96 rounded-md motion-preset-pop motion-duration-1000">A propos</Link>
                    <Link href="/contact" className="bg-red-600 text-white px-4 py-4 mt-14 h-14 w-64 sm:64 text-center items-center hover:bg-red-700 transition-all font-semibold md:w-96 rounded-md motion-preset-pop motion-duration-2000">Réserver</Link>
                </div>
            </div>
            
        </div>
    )
}
