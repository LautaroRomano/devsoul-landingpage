import React from 'react'
import { LiaSortAmountUpSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { FiInstagram } from 'react-icons/fi';

const Contactanos = () => {
    return (
        <div className='w-full text-white flex flex-col items-center gap-16'>
            <div className='w-full flex justify-center items-center gap-4'>
                <div className="container px-5 mx-auto">
                    <div className="text-center">
                        <h2 className="text-5xl font-medium title-font text-white">
                            Contactanos
                        </h2>
                    </div>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
                    </div>
                </div>
            </div>

            <div className='w-full flex items-center justify-around mt-16 md:flex-row max-sm:flex-col max-sm:gap-8'>
                <div className='flex flex-col justify-center items-center gap-8 min-w-[16rem] min-h-[10rem] text-black bg-white rounded-md shadow-[0_10px_20px_rgba(255,_0,_0,_0.7)]'>
                    <div>
                        <HiOutlineMail className='text-3xl' />
                    </div>
                    <p className='text-2xl font-bold'>dev.soul@gmail.com</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-8 min-w-[16rem] min-h-[10rem] text-black bg-white rounded-md shadow-[0_10px_20px_rgba(255,_0,_0,_0.7)]'>
                    <div>
                        <FaInstagram className='text-3xl' />
                    </div>
                    <p className='text-2xl font-bold'>dev.soul.it</p>
                </div>
            </div>

            <div className='w-3/4 min-h-[13rem] bg-white rounded-md p-4 relative overflow-hidden'>
    {/* Divs con posición absoluta debajo del formulario */}
    <div className='z-0 absolute w-[5rem] h-[5rem] rounded-full bg-[#ff0000] top-[-20px] left-[-20px] opacity-50'></div>
    <div className='z-0 absolute w-[20rem] h-[20rem] rounded-full bg-[#ff0000] top-[50px] right-[-150px] opacity-50'></div>

    <div className="mx-auto max-w-2xl text-center z-10 relative">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Envianos un mensaje</h2>
    </div>

    <form className="mx-auto max-w-xl mt-10 z-10 relative">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Nombre completo
                </label>
                <div className="mt-2.5">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                </label>
                <div className="mt-2.5">
                    <input
                        type="email"
                        name="email"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Mensaje
                </label>
                <div className="mt-2.5">
                    <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full resize-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                    />
                </div>
            </div>
        </div>
        <button
            type="submit"
            className="block w-full mt-2 mx-auto rounded-md bg-[#ff0000] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
            Enviar
        </button>
    </form>
</div>

        </div>
    )
}


export default Contactanos