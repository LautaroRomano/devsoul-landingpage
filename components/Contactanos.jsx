import React, { useState } from 'react'
import { Button, Card, CardBody, Input, Textarea, Select, SelectItem } from '@nextui-org/react';
import { FaRocket, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

export default function Contactanos() {

    const [data, setData] = useState({ 
        email: '', 
        name: '', 
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '' 
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const projectTypes = [
        { key: 'website', label: 'Sitio Web Corporativo' },
        { key: 'ecommerce', label: 'Tienda Online' },
        { key: 'app', label: 'Aplicación Móvil' },
        { key: 'landing', label: 'Landing Page' },
        { key: 'other', label: 'Otro' }
    ]

    const budgetRanges = [
        { key: '1000-3000', label: '$1,000 - $3,000' },
        { key: '3000-5000', label: '$3,000 - $5,000' },
        { key: '5000-10000', label: '$5,000 - $10,000' },
        { key: '10000+', label: '$10,000+' },
        { key: 'not-sure', label: 'No estoy seguro' }
    ]

    const timelines = [
        { key: 'asap', label: 'Lo antes posible' },
        { key: '1month', label: '1 mes' },
        { key: '2months', label: '2 meses' },
        { key: '3months', label: '3 meses' },
        { key: 'flexible', label: 'Flexible' }
    ]

    const sendMail = async () => {
        try {
            if (data.name.length === 0) return window.alert('Debes completar tu nombre')
            if (data.email.length === 0) return window.alert('Debes completar tu email')
            if (data.message.length === 0) return window.alert('Cuéntanos sobre tu proyecto')

            setIsSubmitting(true)
            await axios.post('/api/sendmail', data)
            setData({ email: '', name: '', company: '', phone: '', projectType: '', budget: '', timeline: '', message: '' })
            setIsSubmitted(true)
            setIsSubmitting(false)

        } catch (error) {
            console.log("🚀 ~ sendMail ~ error:", error)
            setIsSubmitting(false)
            return window.alert('Ocurrió un error inesperado')
        }
    }

    if (isSubmitted) {
        return (
            <div className='w-full text-default-900 flex flex-col items-center gap-8'>
                <Card
                    isBlurred
                    className="border-none bg-[#49556B] w-full max-w-[600px]"
                    shadow="sm"
                >
                    <CardBody className="text-center py-16">
                        <FaCheckCircle className="text-6xl text-primary-100 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-white mb-4">¡Mensaje enviado con éxito!</h2>
                        <p className="text-gray-300 mb-6">
                            Hemos recibido tu solicitud y nos pondremos en contacto contigo en las próximas 24 horas.
                        </p>
                        <div className="bg-primary-100/10 border border-primary-100/30 rounded-lg p-4">
                            <p className="text-primary-100 font-semibold">
                                <FaClock className="inline mr-2" />
                                Respuesta garantizada en 24 horas
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }

    return (
        <div className='w-full text-default-900 flex flex-col items-center gap-16'>
            
            {/* Beneficios rápidos */}
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
                <div className="bg-primary-100/10 border border-primary-100/30 rounded-lg p-6 text-center">
                    <FaRocket className="text-3xl text-primary-100 mx-auto mb-3" />
                    <h3 className="text-white font-bold mb-2">Respuesta en 24h</h3>
                    <p className="text-gray-300 text-sm">Te enviamos tu propuesta personalizada en máximo 24 horas</p>
                </div>
                <div className="bg-primary-100/10 border border-primary-100/30 rounded-lg p-6 text-center">
                    <FaCheckCircle className="text-3xl text-primary-100 mx-auto mb-3" />
                    <h3 className="text-white font-bold mb-2">Presupuesto gratis</h3>
                    <p className="text-gray-300 text-sm">Sin costos ocultos ni sorpresas. Todo transparente desde el inicio</p>
                </div>
                <div className="bg-primary-100/10 border border-primary-100/30 rounded-lg p-6 text-center">
                    <FaClock className="text-3xl text-primary-100 mx-auto mb-3" />
                    <h3 className="text-white font-bold mb-2">Proyecto en 30 días</h3>
                    <p className="text-gray-300 text-sm">Tu sitio web estará listo y funcionando en máximo 30 días</p>
                </div>
            </div>

            <Card
                isBlurred
                className="border-none bg-[#49556B] w-full max-w-[800px]"
                shadow="sm"
            >
                {/* Divs con posición absoluta debajo del formulario */}
                <div className='z-0 absolute w-[5rem] h-[5rem] rounded-full bg-primary-100 top-[-20px] left-[-20px] opacity-50'></div>
                <div className='z-0 absolute w-[20rem] h-[20rem] rounded-full bg-primary-100 top-[50px] right-[-150px] opacity-50'></div>
                <CardBody>
                    <form className="mx-auto my-8 z-10 relative w-full flex flex-col gap-6 px-0 md:px-12"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="text-center mb-6">
                            <h1 className="text-primary-100 title uppercase text-2xl font-bold mb-2">
                                OBTÉN TU COTIZACIÓN GRATIS
                            </h1>
                            <p className="text-gray-300">
                                Cuéntanos sobre tu proyecto y te enviamos una propuesta personalizada
                            </p>
                        </div>

                        {/* Información personal */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input 
                                type="text" 
                                label="Nombre completo *"
                                value={data.name}
                                onChange={({ target }) => setData(p => ({ ...p, name: target.value }))}
                                className="text-white"
                            />
                            <Input 
                                type="email" 
                                label="Email *"
                                value={data.email}
                                onChange={({ target }) => setData(p => ({ ...p, email: target.value }))}
                                className="text-white"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <Input 
                                type="text" 
                                label="Empresa"
                                value={data.company}
                                onChange={({ target }) => setData(p => ({ ...p, company: target.value }))}
                                className="text-white"
                            />
                            <Input 
                                type="tel" 
                                label="Teléfono"
                                value={data.phone}
                                onChange={({ target }) => setData(p => ({ ...p, phone: target.value }))}
                                className="text-white"
                            />
                        </div>

                        {/* Detalles del proyecto */}
                        <div className="grid md:grid-cols-3 gap-4">
                            <Select
                                label="Tipo de proyecto"
                                value={data.projectType}
                                onChange={({ target }) => setData(p => ({ ...p, projectType: target.value }))}
                                className="text-white"
                            >
                                {projectTypes.map((type) => (
                                    <SelectItem key={type.key} value={type.key}>
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </Select>

                            <Select
                                label="Presupuesto aproximado"
                                value={data.budget}
                                onChange={({ target }) => setData(p => ({ ...p, budget: target.value }))}
                                className="text-white"
                            >
                                {budgetRanges.map((budget) => (
                                    <SelectItem key={budget.key} value={budget.key}>
                                        {budget.label}
                                    </SelectItem>
                                ))}
                            </Select>

                            <Select
                                label="Timeline del proyecto"
                                value={data.timeline}
                                onChange={({ target }) => setData(p => ({ ...p, timeline: target.value }))}
                                className="text-white"
                            >
                                {timelines.map((timeline) => (
                                    <SelectItem key={timeline.key} value={timeline.key}>
                                        {timeline.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>

                        <Textarea
                            label='Cuéntanos sobre tu proyecto *'
                            placeholder="Describe tu idea, objetivos, público objetivo, funcionalidades que necesitas..."
                            name="message"
                            id="message"
                            rows={4}
                            value={data.message}
                            onChange={({ target }) => setData(p => ({ ...p, message: target.value }))}
                            className="text-white"
                        />

                        <div className="flex w-full items-center justify-center">
                            <Button
                                type="button"
                                variant='solid'
                                className='w-full bg-primary-100 text-secondary font-bold py-6 text-lg hover:bg-primary-200 transition-all duration-300'
                                onClick={sendMail}
                                isLoading={isSubmitting}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Enviando...' : 'OBTENER COTIZACIÓN GRATIS'}
                                {!isSubmitting && <FaArrowRight className="ml-2" />}
                            </Button>
                        </div>

                        <div className="text-center text-gray-400 text-sm">
                            <p>✓ Sin compromiso • ✓ Respuesta en 24h • ✓ Presupuesto detallado</p>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

