import { Typewriter } from "react-simple-typewriter";
import { FiCheckSquare, FiSmartphone } from "react-icons/fi";
import { TbPencilHeart } from "react-icons/tb";
import HoverCard from "./HoverCard";
import Contactanos from "./Contactanos";
import ProjectsCard from "./ProjectsCard";
import { Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import Testimonials from "./Testimonials";

export default function Main() {

  const nuestrosServicios = [
    {
      img: '/img/app-mobile2-optimizado.gif',
      text: 'Aplicaciones Mobiles'
    },
    {
      img: '/img/app-web2-optimizado.gif',
      text: 'Aplicaciones Web'
    },
    {
      img: '/img/app-integracion2-optimizado.gif',
      text: 'Marketing digital'
    }
  ]

  const impulsamosTuNegocio = [
    {
      icon: <TbPencilHeart className="text-4xl text-primary-100" />,
      title: 'Atrae Nuevos Clientes',
      description: 'Nuestros desarrollos están diseñados para captar la atención de tus futuros clientes. Con estrategias de diseño centradas en el usuario y una experiencia de navegación fluida, tu sitio web se convierte en una poderosa herramienta para atraer y retener nuevos clientes.'
    },
    {
      icon: <FiSmartphone className=" text-4xl text-primary-100" />,
      title: 'Expande a Nuevos Mercados',
      description: 'Con nuestras soluciones tecnológicas, tu negocio no tiene fronteras. Adaptamos y optimizamos tu sitio web para que puedas llegar a audiencias globales, abriendo las puertas a nuevos mercados y oportunidades de crecimiento.'
    },
    {
      icon: <FiCheckSquare className=" text-4xl text-primary-100" />,
      title: 'Confía en Nuestra Experiencia',
      description: 'En nuestra empresa, la confianza y la calidad son pilares fundamentales. Con años de experiencia en el desarrollo de sitios web, te ofrecemos un servicio personalizado y soluciones a medida que garantizan el éxito de tu proyecto digital.'
    },
  ]

  return (
    <main className="text-white body-font lg:pt-20 bg-secondary overflow-hidden relative">

      {/* HERO */}
      <div className="container px-5 pt-24 mx-auto lg:px-4 lg:py-4 relative">
        <div className="flex flex-col w-full mb-2 text-left md:text-center text-white">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter">
            <span className="title uppercase max-sm:tracking-[0.001em]">Creamos sitios web</span>
            <br ></br>
            <span
              className="text-primary-200 hover:text-primary-100">
              <Typewriter
                words={['Confiables', 'Seguros', 'Economicos']}
                loop
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <br></br>
          <p className="mx-auto mt-10 text-lg font-normal leading-relaxed lg:w-2/3 max-sm:text-justify max-sm">
            Devsoul es un proyecto destinado a brindar soluciones digitales a partir de las tendencias mas importantes del mundo tecnológico.{" "}
          </p>
          <div className="flex w-full justify-center items-center mt-10">
            <ModalCallAction />
          </div>
        </div>
      </div>

      {/* Luces de los costados */}
      <div className="absolute w-20 h-[25rem] -left-32 lg:-left-24 top-36 bg-primary-100 shadow-glow rounded-full animate-move"></div>
      <div className="absolute w-24 h-72 -right-32 lg:-right-24 top-28 bg-primary-100 shadow-glow animate-move-reverse"></div>

      {/* Lo que ofrecemos */}
      <section className="text-white mt-0 md:mt-12 body-font max-sm:pt-32 ">
        <div className="container px-5 mx-auto hidden max-sm:block">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tighter">
              Lo que ofrecemos
            </h2>
          </div>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
          </div>
        </div>

        <div className="container px-5 py-24 md:pt-0 max-sm:pt-6 mx-auto flex flex-wrap">
          <div className="flex flex-row flex-wrap -mb-10 text-center w-full lg:py-6 lg:pl-12 lg:text-left ">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-2xl title-font font-medium mb-3 title uppercase">
                  Presupuesto gratuito
                </h2>
                <p className="leading-relaxed text-lg">
                  Contanos tu caso y te ofrecemos una solucion y un presupuesto sin costo.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-2xl title-font font-medium mb-3 title uppercase">
                  SEO
                </h2>
                <p className="leading-relaxed text-lg">
                  Nuestros sitios tienen las mejores prácticas de SEO para garantizar que llegues a la cima.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-2xl title-font font-medium mb-3 title uppercase">
                  Google Analytics
                </h2>
                <p className="leading-relaxed text-lg">
                  Haciendo tu web con nosotros tendras acceso a analiticas de las visitas de tu web en tiempo real.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-2xl title-font font-medium mb-3 title uppercase">
                  Sitios Rapidos
                </h2>
                <p className="leading-relaxed text-lg">
                  Nuestros sitios web son rapidos y eficientes. Porque la rapidez no depende unicamente del internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros servicios */}
      <section className="relative text-white mt-0 md:mt-12 body-font max-sm:pt-32 ">
        <div className="absolute -top-24" id='about-us'></div>
        <div className="container px-5 mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tighter title uppercase">
              Nuestros servicios
            </h2>

            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>

            <div className="flex px-5 py-16 mx-auto w-full justify-center">
              <div className="flex flex-wrap -m-4 w-full justify-center">
                {
                  nuestrosServicios.map((item, i) => (
                    <div key={i} className="p-4">
                      <div className="h-full flex flex-col items-center text-center">
                        <div className="">
                          <HoverCard img={item.img} />
                        </div>
                        <div className="w-full">
                          <h2 className="title-font font-medium text-lg text-default-900">
                            {item.text}
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impulsa tu negocio */}
      <section className="text-white mt-0 md:mt-12 body-font max-sm:pt-32 px-0 md:px-6 lg:px-12">
        <div className="container px-5 mx-auto">
          <div className="container px-5 mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tighter title uppercase">
                Impulsamos tu negocio
              </h2>
            </div>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>

            <div className="mt-14 flex flex-col gap-4">
              {
                impulsamosTuNegocio.map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 pt-4 max-sm:w-full max-sm:items-center lg:max-w-[700px]">
                    <h2 className="flex font-bold items-center gap-4 title uppercase">
                      {item.icon}
                      <p>{item.title}</p>
                    </h2>
                    <p className="mt-0 max-sm:text-center">
                      {item.description}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section className="relative text-default-900 mt-0 md:mt-12 body-font max-sm:pt-32">
        <div className="absolute -top-24" id='projects'></div>
        <div className="container px-5 mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-white title uppercase">
              Algunos de nuestros proyectos
            </h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>

            <div className="flex justify-center flex-wrap gap-4">
              {projects.map((p, i) => (
                <ProjectsCard title={p.title} description={p.description} link={p.link} key={i} img={p.img} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Contactanos */}
      <section className="relative bg-secondary mt-0 md:mt-24 body-font max-sm:pt-32">
        <div className="absolute -top-24" id='contact-us'></div>
        <div className="container px-5 mx-auto">
          <div className="container mx-auto">
            <Contactanos />
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="text-default-900 mt-0 md:mt-12 body-font max-sm:pt-32" >
          <div className="container lg:px-5 mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tighter text-white title uppercase">
                Testimonios
              </h2>
            </div>
            <div className="flex my-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>

            <Testimonials />
        </div>
      </section>

    </main>
  );
}


const projects = [
  {
    title: 'Bronovios.com',
    link: 'https://www.bronovios.com',
    description: 'Un sitio web para ayudar a las personas a emigrar. Este proyecto incluye una pagina principal y un panel de control para los administradores.',
    img: '/img/casos-de-exito/bronovios.png'
  },
  {
    title: 'Redapuntes.com',
    link: 'https://redapuntes.vercel.app',
    description: 'El sitio donde puedes encontrar todos los recursos que nesecitas para tu vida universitaria.',
    img: '/img/casos-de-exito/red-apuntes.png'
  },
  {
    title: 'Lemonpad.com',
    link: 'https://nutriblock.vercel.app',
    description: 'Un sistema que ayuda a los nutricionistas a tener un contacto directo con sus pacientes.',
    img: '/img/casos-de-exito/lemonpad.png'
  },
]

function ModalCallAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-primary-100 text-secondary rounded-none font-bold">QUIERO UNA COTIZACION</Button>
      <Modal
        size={'xl'}
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="py-0 px-0">
                <Contactanos />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}