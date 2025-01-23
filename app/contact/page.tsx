import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormContact from '../components/FormContact'

const Contact = () => {
  return (
    <div>
      <Header /> 
      <h1 className="md:text-6xl text-4xl mt-36 md:mt-24 font-bold text-center italic text-red-600 motion-preset-bounce motion-duration-1500 ">Nous Contacter</h1>
      <FormContact />
      <Footer />
    </div>
  )
}

export default Contact
