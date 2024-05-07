import React from 'react'
import { LiaSortAmountUpSolid } from "react-icons/lia";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

const Contactanos = () => {
    return (
        <div className='w-full text-white'>
            <div className='w-full flex justify-center items-center gap-4'>
                <div className='min-w-[3rem] min-h-[3rem] rounded-full flex justify-center items-center bg-reflex'>
                    <LiaSortAmountUpSolid className='text-3xl'/>
                </div>
                <p className='text-2xl'>Si quieres hacer que tu negocia crezca, contactanos</p>
            </div>

            <div className='w-full flex items-center justify-around mt-16'>
                <div className='flex flex-col justify-center  items-center gap-8 min-w-[16rem] min-h-[10rem] text-black bg-white'>
                    <div>
                        <MdOutlineAlternateEmail className='text-3xl'/>
                    </div>
                    <p className='text-2xl font-bold'>dev.soul@gmail.com</p>
                </div>

                <div className='flex flex-col justify-center  items-center gap-8 min-w-[16rem] min-h-[10rem] text-black bg-white'>
                    <div>
                        <FaInstagram className='text-3xl'/>
                    </div>
                    <p className='text-2xl font-bold'>dev.soul.it</p>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Contactanos