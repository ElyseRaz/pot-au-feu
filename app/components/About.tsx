import React from 'react'

const Abouts = () => {
  return (
    <div>
        <div className="container mx-auto px-4 md:px-0"> 
            <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="md:text-6xl text-4xl mt-12 font-bold text-center italic text-red-600 motion-preset-bounce motion-duration-1500 ">À propos de nous</h1>
            <div className='flex space-x-28  mt-4 md:mt-2 items-center justify-center flex-col md:flex-row'>
                <img src="meal.png" alt="image" className="  mt-12 md:-ml-20 mb-10 md:mb-0 motion-preset-slide-right motion-duration-1500" />
                <div className='flex flex-col md:items-center md:justify-center gap-6 -ml-20  '>
                    <h1 className=' text-2xl -ml-8 md:text-4xl text-red-600 italic items-center motion-preset-slide-left motion-duration-1500'>Une grande naissance </h1>
                    <p className=' text-lg italic -ml-24 md:ml-4 motion-preset-slide-left motion-duration-2000'>Pot-au-Feu est un groupe de traiteur fondée en  Mars 2024 pour assurer les besions dans les évenenments comme les mariages , les baptêmes ou tout autres types d’évenements. Depuis le fondement de ce groupes , nous avons déja organisés plus de 50 évenements, que ce soit des évenements familiales ou des évenements nationaux. Ces préstations réussi nous ont donnés des motivations et du courages pour continuer à organiser les évenements.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Abouts
