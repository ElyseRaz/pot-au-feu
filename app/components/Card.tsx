import React from 'react'

const Card = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 md:mt-40 md:ml-40 ml-12 mb-10 sm:ml-36'>
      <div className='h-96 w-96 bg-white rounded-lg shadow-lg shadow-zinc-500  flex flex-col justify-center items-center gap-10 hover:md:scale-125 hover:transition-all motion-preset-pop motion-duration-2000'>
        <img src='dinner.png' alt='icon' className='w-28 h-28' />
        <h2 className='text-3xl italic text-red-600 font-semibold'>Repas</h2>
        <p className='text-center'>Nous préparons les repas avec les meilleurs qualités et avec des aliments bien saines mais aussi bien frais pour obtenir une alimentation équilibré et bien saine</p>
      </div>
      <div className='h-96 w-96 bg-white rounded-lg shadow-lg shadow-zinc-500 flex flex-col justify-center items-center gap-10 hover:md:scale-125 hover:transition-all motion-preset-pop motion-duration-2000'>
        <img src='wedding-arch.png' alt='icon' className='w-28 h-28' />
        <h2 className='text-3xl italic text-red-600 font-semibold  '>Décoration</h2>
        <p className='text-center'>Nous ferons les décorations avec les thèmes choisis par les clients et avec les meilleurs décorations pour embellir la salle de fête et de donner une bonne ambiance</p>
      </div>
      <div className='h-96 w-96 bg-white rounded-lg shadow-lg shadow-zinc-500 flex flex-col justify-center items-center gap-10 hover:md:scale-125 hover:transition-all motion-preset-pop motion-duration-2000'>
        <img src='karaoke.png' alt='icon' className='w-28 h-28' />
        <h2 className='text-3xl italic text-red-600 font-semibold '>Animation</h2>
        <p className='text-center'>Nous ferons les animations avec des orchestres déja disponibles , le Dj mais aussi les animateurs et animatrices pour ambiancer la fête</p>
      </div>
    </div>
  )
}

export default Card
