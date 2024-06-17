import React, { useState } from 'react'

const AboutUs = () => {
    const [imgInfo, setImageInfo] = useState(1)
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
                <picture className="rounded-full cursor-pointer" onClick={() => setImageInfo(1)} >
                    <img className="w-40 h-40 rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lautaro Romano" />
                </picture>
                <picture className="rounded-full cursor-pointer" onClick={() => setImageInfo(2)}>
                    <img className="w-40 h-40 rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Marcelo Garrido" />
                </picture>
                <picture className="rounded-full cursor-pointer" onClick={() => setImageInfo(3)}>
                    <img className="w-40 h-40 rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pablo Heredia" />
                </picture>
            </div>

            <div className="border border-red-500 w-11/12 mx-auto mt-4 rounded-md p-2 bg-[#1F2024]">
                {
                    (imgInfo === 1 ? <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione repudiandae vero nulla corporis, illum facilis? Non, culpa, tempora dolorem reiciendis iure aut, minima officiis hic iusto repudiandae deleniti laudantium!</p>
                        :
                        imgInfo === 2 ? <p className="text-white">2Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione repudiandae vero nulla corporis, illum facilis? Non, culpa, tempora dolorem reiciendis iure aut, minima officiis hic iusto repudiandae deleniti laudantium!</p>
                            : <p className="text-white">3Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione repudiandae vero nulla corporis, illum facilis? Non, culpa, tempora dolorem reiciendis iure aut, minima officiis hic iusto repudiandae deleniti laudantium!</p>)
                }
            </div>
        </>
    )
}

export default AboutUs