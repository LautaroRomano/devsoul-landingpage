import React, { useState } from 'react'

const AboutUs = () => {
    const [imgInfo, setImageInfo] = useState(1)

    const us = [
        {
            photo: '/img/Nosotros/Lautaro - DS.jpeg',
            name: 'Lautaro Romano',
            content: 'Mi nombre es matias me dicen macakito y soy cantante de los wachiturros'
        },
        {
            photo: '/img/Nosotros/Marce - DS.jpeg',
            name: 'Marcelo Garrido',
            content: 'Soy gonzalo me dicen gonzalito tengo 20 años soy balarin y coreografo de los wachiturros'
        },
        {
            photo: '/img/Nosotros/Pablo - DS.jpeg',
            name: 'Pablo Heredia',
            content: 'Soy leonel me dicen leito tengo 16 años y soy bailarin de los wachiturros'
        },
    ]
    return (
        <>
            <div className="container px-5 mx-auto">
                <div className="text-center">
                    <h2 className="text-5xl font-medium title-font text-white">
                        Sobre nosotros
                    </h2>
                </div>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
                </div>
            </div>

            <div className="flex w-full justify-around mt-4">
                {
                    us.map((us, i) => {
                        return (
                            <picture className="rounded-full cursor-pointer relative" onClick={() => setImageInfo(i)} title={us.name}>
                                <div className="inner flex justify-center items-center gap-8 w-[11rem] h-[11rem] max-sm:w-[6.5rem] max-sm:h-[6.5rem]">
                                    <img className="object-cover w-40 h-40 rounded-full z-10 max-sm:w-24 max-sm:h-24" src={us.photo} alt={us.name} />
                                    {/* <div className="absolute rounded-full z-20 bg-green-500 w-8 h-8 bottom-[6px] right-[5px] max-sm:w-4 max-sm:h-4 max-sm:bottom-[3px] max-sm:right-[2px]"></div> */}
                                </div>
                            </picture>
                        )
                    })
                }

            </div>

            <div className="border border-red-500 w-11/12 mx-auto mt-4 rounded-md p-2 bg-[#1F2024]">
                {
                    us.map((us, i) => {
                        return (
                            imgInfo === i && <p className="text-white">{us.content ? us.content : 'Messi'}</p>
                        )
                    })
                }
            </div>

        </>
    )
}

export default AboutUs