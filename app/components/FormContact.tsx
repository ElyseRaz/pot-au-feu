"use client"
import React from 'react'
import Swal from 'sweetalert2';

const FormContact = () => {

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            message: { value: string };
            reset: () => void;
        };
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "f4e4056f-db0f-435b-b575-2f44312ed477",
                name: target.name.value,
                email: target.email.value,
                message: target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
           Swal.fire({
               title: 'Message envoyé',
               text: 'Votre message a été envoyé avec succès',
               icon: 'success',
               confirmButtonText: 'OK'
           })
           target.reset();
        }
        else {
            Swal.fire({
                title: 'Erreur',
                text: 'Une erreur s\'est produite lors de l\'envoi de votre message',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }

  return (
    <div className='flex flex-col md:flex-row mb-20 '>
    <div>
        <img src='breakfast.jpg' alt='image' className='mt-12 ml-14 md:ml-20 rounded-2xl w-9/12 mb-20 md:mb-0 motion-preset-slide-right motion-duration-1500 '/>
    </div>
    <div className="form-contact bg-white shadow-2xl w-11/12  mt-12 flex flex-col justify-center items-center rounded-xl  mr-20 gap-5 motion-preset-blur-right motion-duration-2000 ml-5">
    <h1 className=" text-red-600 text-4xl font-bold ">Contact</h1>
        <form name="contact" method="POST"  className='flex flex-col gap-5 rounded-xl w-max -pt-20 p-10 ' onSubmit={handleSubmit}>
            <label className='flex flex-col gap-2'>
                Nom:
                <input type="text" className='border-2 w-96 h-10 rounded-md outline-none p-2 ' placeholder="Votre Nom " name="name" required/>
            </label>
            <label className='flex flex-col gap-2'>
                Email:
                <input type="email" name="email" className='border-2 h-10 rounded-md outline-none p-2 ' placeholder="Votre Email" required/>
            </label>
            <label className='flex flex-col gap-2'>
                Message:
                <textarea name="message" className='border-2 h-36 rounded-md outline-none p-2' placeholder="Votre Message" required/>
            </label>
            <button type="submit" className='px-8 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700'>Send</button>
        </form>
    </div>
    </div>
  )
}

export default FormContact
