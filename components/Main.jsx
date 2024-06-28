import { Typewriter } from "react-simple-typewriter";
import { FiCheckSquare, FiSmartphone } from "react-icons/fi";
import { TbPencilHeart } from "react-icons/tb";
import HoverCard from "./HoverCard";
import Contactanos from "./Contactanos";
import AboutUs from "./AboutUs";
import ProjectsCard from "./ProjectsCard";
import { Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";

export default function Main() {


  return (
    <section className="text-black body-font lg:pt-20 bg-transparent">

      {/* HERO */}
      <div className="container px-5 pt-24 mx-auto lg:px-4 lg:py-4 ">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-default-900">
            <span>Creamos sitios web</span>
            <br ></br>
            <span
              className="text-red-600 hover:text-red-800">
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
          <p className="mx-auto mt-10 text-lg font-normal leading-relaxed text-default-900 dark:text-gray-300 lg:w-2/3 max-sm:text-justify max-sm">
            Devsoul es un proyecto destinado a brindar soluciones digitales a partir de las tendencias mas importantes del mundo tecnológico.{" "}
          </p>
          <div className="flex w-full justify-center items-center mt-10">
            <ModalCallAction />
          </div>
        </div>
      </div>

      {/* Lo que ofrecemos */}
      <section className="text-default-900 mt-0 md:mt-12 body-font max-sm:pt-32 ">
        <div className="container px-5 mx-auto hidden max-sm:block">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-default-900">
              Lo que ofrecemos
            </h2>
          </div>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
          </div>
        </div>

        <div className="container px-5 py-24 md:pt-0 max-sm:pt-6 mx-auto flex flex-wrap">
          <div className="flex flex-row flex-wrap lg:py-6 -mb-10 lg:pl-12 lg:text-left text-center w-full">

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-default-900 text-2xl title-font font-medium mb-3">
                  Presupuesto gratuito
                </h2>
                <p className="leading-relaxed text-lg">
                  Contanos tu caso y te ofrecemos una solucion y un presupuesto sin costo.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-default-900 text-2xl title-font font-medium mb-3">
                  SEO
                </h2>
                <p className="leading-relaxed text-lg">
                  Nuestros sitios tienen las mejores prácticas de SEO para garantizar que llegues a la cima.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-default-900 text-2xl title-font font-medium mb-3">
                  Google Analytics
                </h2>
                <p className="leading-relaxed text-lg">
                  Haciendo tu web con nosotros tendras acceso a analiticas de las visitas de tu web en tiempo real.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-default-900 text-2xl title-font font-medium mb-3">
                  Rapido
                </h2>
                <p className="leading-relaxed text-lg">
                  Los sitios web más rápidos que puedes conseguir.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Nuestros servicios */}
      <section className="relative text-default-900 mt-0 md:mt-12 body-font max-sm:pt-32 ">
        <div className="absolute -top-24" id='about-us'></div>
        <div className="container px-5 mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-default-900">
              Nuestros servicios
            </h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
            </div>
            <div className="flex px-5 py-16 mx-auto w-full justify-center">
              <div className="flex flex-wrap -m-4 w-full justify-center">

                <div className="p-4">
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="">
                      <HoverCard img={'/img/apps-mobiles.gif'} />
                    </div>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-default-900">
                        Aplicaciones Mobiles
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="">
                      <HoverCard img={'/img/apps-web.gif'} />
                    </div>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-default-900">
                        Aplicaciones Web
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="">
                      <HoverCard img={'/img/app-integracion.gif'} />
                    </div>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-default-900">
                        Marketing digital
                      </h2>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impulsa tu negocio */}
      <section className="text-default-900 mt-0 md:mt-12 body-font max-sm:pt-32 px-0 md:px-6 lg:px-12">
        <div className="container px-5 mx-auto">
          <div className="container px-5 mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tighter text-default-900">
                Impulsamos tu negocio
              </h2>
            </div>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
            </div>

            <div className="mt-14 flex flex-col gap-4">
              <div className="flex flex-col  gap-2 pt-4 max-sm:w-full max-sm:items-center lg:max-w-[700px]">
                <h2 className="flex font-bold items-center">
                  <TbPencilHeart className="text-4xl text-red-600" />
                  <p>Atrae Nuevos Clientes</p>
                </h2>
                <p className="mt-0 max-sm:text-center">
                  Nuestros desarrollos están diseñados para captar la atención de tus futuros clientes.
                  Con estrategias de diseño centradas en el usuario y una experiencia de navegación fluida,
                  tu sitio web se convierte en una poderosa herramienta para atraer y retener nuevos clientes.
                </p>
              </div>

              <div className="flex flex-col  gap-2 pt-4 max-sm:w-full max-sm:items-center lg:max-w-[700px]">
                <h2 className="flex font-bold items-center">
                  <FiSmartphone className=" text-4xl text-red-600" />
                  <p>Expande a Nuevos Mercados</p>
                </h2>
                <p className="mt-0 max-sm:text-center">
                  Con nuestras soluciones tecnológicas, tu negocio no tiene fronteras. Adaptamos y optimizamos
                  tu sitio web para que puedas llegar a audiencias globales, abriendo las puertas a nuevos mercados
                  y oportunidades de crecimiento.
                </p>
              </div>

              <div className="flex flex-col  gap-2 pt-4 max-sm:w-full max-sm:items-center lg:max-w-[700px]">
                <h2 className="flex font-bold items-center">
                  <FiCheckSquare className=" text-4xl text-red-600" />
                  <p>Confía en Nuestra Experiencia</p>
                </h2>
                <p className="mt-0 max-sm:text-center">
                  En nuestra empresa, la confianza y la calidad son pilares fundamentales. Con años de experiencia en
                  el desarrollo de sitios web, te ofrecemos un servicio personalizado y soluciones a medida que garantizan
                  el éxito de tu proyecto digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative text-default-900 mt-0 md:mt-12 body-font max-sm:pt-32">
        <div className="absolute -top-24" id='projects'></div>
        <div className="container px-5 mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-default-900">
              Algunos de nuestros proyectos
            </h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
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
      <section className="relative text-default-900 mt-0 md:mt-24 body-font max-sm:pt-32">
        <div className="absolute -top-24" id='contact-us'></div>
        <div className="container px-5 mx-auto">
          <div className="container mx-auto">
            <Contactanos />
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      {/*  <section className="text-default-900 mt-0 md:mt-12 body-font max-sm:pt-32" >
        <div className="container px-5 mx-auto">
          <div className="container px-5 mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tighter text-default-900">
                Sobre nosotros
              </h2>
            </div>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
            </div>
            <AboutUs />
          </div>
        </div>
      </section> */}

    </section>
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
      <Button onPress={onOpen} className="bg-red-500 text-white rounded-none font-bold">QUIERO UNA COTIZACION</Button>
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