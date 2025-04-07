import React, { useState } from 'react'
import { Button, Card, CardBody, Input, Textarea } from '@nextui-org/react';
import axios from 'axios';

export default function Contactanos() {

    const [data, setData] = useState({ email: '', name: '', message: '' })

    const sendMail = async () => {
        try {
            if (data.name.length === 0) return window.alert('Debes completar tu nombre')
            if (data.email.length === 0) return window.alert('Debes completar tu email')
            if (data.message.length === 0) return window.alert('Debes escribirnos un mensaje')

            await axios.post('/api/sendmail', data)
            setData({ email: '', name: '', message: '' })
            return window.alert('Recibimos tu mensaje con exito')

        } catch (error) {
            console.log("🚀 ~ sendMail ~ error:", error)
            return window.alert('Ocurrio un error inesperado')
        }
    }

    return (
        <div className='w-full text-default-900 flex flex-col items-center gap-16'>
            <Card
                isBlurred
                className="border-none bg-[#49556B] w-full max-w-[800px]"
                shadow="sm"
            >
                {/* Divs con posición absoluta debajo del formulario */}
                <div className='z-0 absolute w-[5rem] h-[5rem] rounded-full bg-primary-100 top-[-20px] left-[-20px] opacity-50'></div>
                <div className='z-0 absolute w-[20rem] h-[20rem] rounded-full bg-primary-100 top-[50px] right-[-150px] opacity-50'></div>
                <CardBody>
                    <form className="mx-auto my-8 z-10 relative w-full flex flex-col gap-4 px-0 md:px-12"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex justify-center text-primary-100 title uppercase text-xl font-bold mb-2">
                            <h1>CONTACTANOS</h1>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-2">
                            <div className="w-full">
                                <Input type="text" label="Nombre completo"
                                    value={data.name}
                                    onChange={({ target }) => setData(p => ({ ...p, name: target.value }))}
                                />
                            </div>
                            <div className="w-full">
                                <Input type="email" label="Email"
                                    value={data.email}
                                    onChange={({ target }) => setData(p => ({ ...p, email: target.value }))}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <Textarea
                                label='Cuentanos sobre tu negocio'
                                name="message"
                                id="message"
                                rows={4}
                                defaultValue={''}
                                value={data.message}
                                onChange={({ target }) => setData(p => ({ ...p, message: target.value }))}
                            />
                        </div>
                        <div className="flex w-full items-center justify-center">
                            <Button
                                type="button"
                                variant='solid'
                                className='w-full bg-primary-100 text-secondary'
                                onClick={sendMail}
                            >
                                Enviar
                            </Button>
                        </div>
                    </form>

                </CardBody>
            </Card>
            {/* <div className='w-full flex items-center justify-around mt-16 md:flex-row max-sm:flex-col max-sm:gap-8'>
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
            </div> */}

        </div >
    )
}

