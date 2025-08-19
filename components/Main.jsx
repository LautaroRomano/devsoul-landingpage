import { Typewriter } from "react-simple-typewriter";
import { FiCheckSquare, FiSmartphone, FiTrendingUp, FiZap, FiUsers, FiAward, FiMessageCircle } from "react-icons/fi";
import { TbPencilHeart, TbRocket, TbTarget } from "react-icons/tb";
import { FaStar, FaArrowRight, FaPlay, FaClock, FaFire, FaWhatsapp } from "react-icons/fa";
import HoverCard from "./HoverCard";
import Contactanos from "./Contactanos";
import ProjectsCard from "./ProjectsCard";
import { Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import Testimonials from "./Testimonials";
import { useState } from "react";

export default function Main() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const nuestrosServicios = [
    {
      img: '/img/app-mobile2-optimizado.gif',
      text: 'Aplicaciones Mobiles',
      description: 'Apps nativas que convierten visitantes en clientes'
    },
    {
      img: '/img/app-web2-optimizado.gif',
      text: 'Aplicaciones Web',
      description: 'Sitios web que venden mientras duermes'
    },
    {
      img: '/img/app-integracion2-optimizado.gif',
      text: 'Marketing Digital',
      description: 'Estrategias que multiplican tus ventas'
    }
  ]

  const beneficiosPrincipales = [
    {
      icon: <TbRocket className="text-4xl text-primary-100" />,
      title: 'Resultados en 30 Días',
      description: 'Tu sitio web estará listo y funcionando en máximo 30 días. No más esperas interminables.',
      highlight: '30 días'
    },
    {
      icon: <FiTrendingUp className="text-4xl text-primary-100" />,
      title: 'ROI Garantizado',
      description: 'Nuestros clientes ven un incremento del 300% en sus ventas online en los primeros 3 meses.',
      highlight: '300% ROI'
    },
    {
      icon: <FiZap className="text-4xl text-primary-100" />,
      title: 'Soporte 24/7',
      description: 'Estamos disponibles cuando nos necesites. Tu éxito es nuestra prioridad.',
      highlight: '24/7'
    },
  ]

  const procesoSimple = [
    {
      step: '01',
      title: 'Cuéntanos tu idea',
      description: 'Describe tu negocio y objetivos en 2 minutos'
    },
    {
      step: '02',
      title: 'Recibe tu propuesta',
      description: 'Te enviamos un presupuesto personalizado en 24h'
    },
    {
      step: '03',
      title: 'Comenzamos ya',
      description: 'Firmamos y empezamos a crear tu sitio web'
    }
  ]

  const estadisticas = [
    { numero: '150+', texto: 'Proyectos Exitosos' },
    { numero: '100%', texto: 'Clientes Satisfechos' },
    { numero: '300%', texto: 'ROI Promedio' },
    { numero: '24h', texto: 'Tiempo de Respuesta' }
  ]

  return (
    <main className="text-white body-font lg:pt-20 bg-secondary overflow-hidden relative">

      {/* HERO SECTION MEJORADO */}
      <div className="container px-5 pt-24 mx-auto lg:px-4 lg:py-4 relative">
        <div className="flex flex-col w-full mb-2 text-left md:text-center text-white">
          
          {/* Badge de confianza */}
          <div className="flex justify-center mb-6">
            <div className="bg-primary-100/10 border border-primary-100/30 rounded-full px-6 py-2 flex items-center gap-2">
              <FaStar className="text-primary-100 text-sm" />
              <span className="text-sm font-medium">Más de 150 proyectos exitosos</span>
            </div>
          </div>

          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            <span className="title uppercase max-sm:tracking-[0.001em]">Creamos sitios web</span>
            <br />
            <span className="text-primary-100 hover:text-primary-200 transition-colors">
              <Typewriter
                words={['CONFIABLES','ECONÓMICOS','QUE VENDEN', 'QUE CONVIERTEN', 'QUE CRECEN']}
                loop
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          
          <p className="mx-auto mt-8 text-xl font-normal leading-relaxed lg:w-2/3 max-sm:text-justify text-gray-300">
            Creamos sitios web que <span className="text-primary-100 font-semibold">convierten visitantes en clientes</span>. 
            Sin complicaciones, sin esperas. Tu negocio merece estar online ya.
          </p>

          {/* CTA Principal */}
          <div className="flex w-full justify-center items-center mt-12 gap-4 flex-wrap">
            <Button 
              onPress={() => document.getElementById('cotizacion-rapida').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-100 text-secondary rounded-full font-bold px-8 py-6 text-lg hover:bg-primary-200 transition-all duration-300 transform hover:scale-105 shadow-lg pulse-glow"
            >
              OBTENER COTIZACIÓN GRATIS
              <FaArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Garantía */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              <span className="text-primary-100 font-semibold">✓ Garantía de 30 días</span> • 
              <span className="text-primary-100 font-semibold"> ✓ Sin costos ocultos</span> • 
              <span className="text-primary-100 font-semibold"> ✓ Soporte incluido</span>
            </p>
          </div>
        </div>
      </div>

      {/* Luces de los costados */}
      <div className="absolute w-20 h-[25rem] -left-32 lg:-left-24 top-36 bg-primary-100 shadow-glow rounded-full animate-move"></div>
      <div className="absolute w-24 h-72 -right-32 lg:-right-24 top-28 bg-primary-100 shadow-glow animate-move-reverse"></div>

      {/* ESTADÍSTICAS IMPACTANTES */}
      <section className="py-16 mt-20">
        <div className="container px-5 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estadisticas.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-100 mb-2">{stat.numero}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO SIMPLIFICADO */}
      <section className="py-20 bg-black/20">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter title uppercase mb-4">
              En solo 3 pasos
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hacemos el proceso súper simple. Sin complicaciones, sin esperas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {procesoSimple.map((paso, i) => (
              <div key={i} className="text-center group">
                <div className="bg-primary-100/10 border border-primary-100/30 rounded-2xl p-8 h-full hover:bg-primary-100/20 transition-all duration-300 card-hover">
                  <div className="bg-primary-100 text-secondary rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {paso.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 title uppercase">{paso.title}</h3>
                  <p className="text-gray-300">{paso.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS PRINCIPALES */}
      <section className="py-20">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter title uppercase mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              No solo creamos sitios web, creamos máquinas de ventas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beneficiosPrincipales.map((beneficio, i) => (
              <div key={i} className="group">
                <div className="bg-gradient-to-br from-primary-100/5 to-primary-100/10 border border-primary-100/20 rounded-2xl p-8 h-full hover:border-primary-100/50 transition-all duration-300 card-hover">
                  <div className="mb-6">
                    {beneficio.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 title uppercase">{beneficio.title}</h3>
                  <p className="text-gray-300 mb-4">{beneficio.description}</p>
                  <div className="text-primary-100 font-bold text-lg">{beneficio.highlight}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros servicios */}
      <section className="relative text-white py-20 bg-black/20">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter title uppercase mb-4">
              Nuestros servicios
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluciones completas para hacer crecer tu negocio online
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-primary-100"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nuestrosServicios.map((item, i) => (
              <div key={i} className="group">
                <div className="flex flex-col items-center bg-gradient-to-br from-primary-100/5 to-primary-100/10 border border-primary-100/20 rounded-2xl p-6 h-full hover:border-primary-100/50 transition-all duration-300 card-hover">
                  <div className="mb-6">
                    <HoverCard img={item.img} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 title uppercase text-primary-100">
                    {item.text}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COTIZACIÓN RÁPIDA */}
      <section id="cotizacion-rapida" className="py-20">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter title uppercase mb-4">
              Obtén tu cotización gratis
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cuéntanos sobre tu proyecto y te enviamos una propuesta personalizada en 24 horas
            </p>
          </div>
          <Contactanos />
        </div>
      </section>

      {/* Proyectos */}
      <section className="relative text-default-900 py-20 bg-black/20">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white title uppercase mb-4">
              Casos de éxito
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Mira cómo hemos transformado estos negocios
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-primary-100"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <ProjectsCard title={p.title} description={p.description} link={p.link} key={i} img={p.img} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="text-default-900 py-20">
        <div className="container lg:px-5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white title uppercase mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              No nos creas a nosotros, créeles a ellos
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-primary-100/10 to-primary-200/10">
        <div className="container px-5 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter title uppercase mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a más de 150 empresas que ya están vendiendo más gracias a nosotros
          </p>
          <Button 
            onPress={() => document.getElementById('cotizacion-rapida').scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-100 text-secondary rounded-full font-bold px-10 py-6 text-xl hover:bg-primary-200 transition-all duration-300 transform hover:scale-105 shadow-lg bounce-subtle"
          >
            COMENZAR AHORA
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* CHAT FLOTANTE */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Botón de WhatsApp */}
        <a 
          href="https://wa.me/1234567890?text=Hola! Me interesa obtener una cotización para mi sitio web" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block mb-4"
        >
          <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300">
            <FaWhatsapp className="text-2xl" />
          </div>
        </a>

        {/* Botón de chat */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-primary-100 hover:bg-primary-200 text-secondary rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300"
        >
          <FiMessageCircle className="text-2xl" />
        </button>

        {/* Chat popup */}
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
            <div className="bg-primary-100 text-secondary p-4 rounded-t-lg">
              <h3 className="font-bold">💬 ¿Tienes preguntas?</h3>
              <p className="text-sm">Estamos aquí para ayudarte</p>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">¡Hola! ¿En qué puedo ayudarte hoy?</p>
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => document.getElementById('cotizacion-rapida').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full text-left p-2 hover:bg-gray-100 rounded text-sm text-gray-700"
                  >
                    💰 Quiero una cotización
                  </button>
                  <button 
                    onClick={() => window.open('https://wa.me/1234567890?text=Hola! Me interesa obtener una cotización para mi sitio web', '_blank')}
                    className="w-full text-left p-2 hover:bg-gray-100 rounded text-sm text-gray-700"
                  >
                    📱 Hablar por WhatsApp
                  </button>
                  <button 
                    onClick={() => window.open('mailto:info@devsoul.com', '_blank')}
                    className="w-full text-left p-2 hover:bg-gray-100 rounded text-sm text-gray-700"
                  >
                    📧 Enviar email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </main>
  );
}

const projects = [
  {
    title: 'Bronovios.com',
    link: 'https://www.bronovios.com',
    description: 'Sitio web para ayudar a personas a emigrar. Incluye panel de administración completo.',
    img: '/img/casos-de-exito/bronovios.png'
  },
  {
    title: 'Redapuntes.com',
    link: 'https://redapuntes.vercel.app',
    description: 'Plataforma educativa con recursos universitarios. +10,000 usuarios activos.',
    img: '/img/casos-de-exito/red-apuntes.png'
  },
  {
    title: 'Lemonpad.app',
    link: 'https://lemonpad.app',
    description: 'Transforma tu restaurante con LEMONPAD: Menú QR inteligente, pagos seguros, analytics en tiempo real, gestión de entregas.',
    img: '/img/casos-de-exito/lemonpad.png'
  },
]