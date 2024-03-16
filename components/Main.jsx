import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import HoverCard from "./HoverCard";

export default function Main() {
  return (
    <section className="text-black body-font lg:pt-20 bg-transparent">
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#DC2626_100%)]"></div>
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>Creamos sitios web</span>
            <br ></br>
            <span
              // style={{color: 'red'}} 
              class="text-red-600 hover:text-red-800">
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
          <p className="mx-auto mt-10 text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
            Devsoul es un proyecto destinado a brindar soluciones digitales a partir de las tendencias mas importantes del mundo tecnológico.{" "}
          </p>
        </div>
      </div>
      {/* <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
        <img
          className="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
          alt="hero"
          src="./images/placeholder.png"
        ></img>
      </div> */}
      <section className="text-gray-600 body-font pt-32">
        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={940} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={740} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  <CountUp end={315} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
          </div>
        </section> */}
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="./images/placeholder.png"
            ></img>
          </div> */}

          <div className="flex flex-row flex-wrap lg:py-6 -mb-10 lg:pl-12 lg:text-left text-center w-full">

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Presupuesto gratuito
                </h2>
                <p className="leading-relaxed text-lg">
                  Contanos tu caso y te ofrecemos una solucion y un presupuesto sin costo.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  SEO
                </h2>
                <p className="leading-relaxed text-lg">
                  Nuestros sitios tienen las mejores prácticas de SEO para garantizar que llegues a la cima.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Google Analytics
                </h2>
                <p className="leading-relaxed text-lg">
                  Haciendo tu web con nosotros tendras acceso a analiticas de las visitas de tu web en tiempo real.
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
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

      <section className="text-gray-600 body-font pt-32">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
              Nuestros servicios
            </h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
            <div className="flex px-5 py-16 mx-auto w-full justify-center">
              <div className="flex flex-wrap -m-4 w-full justify-center">

                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="hidden md:block">
                      <HoverCard img={'/img/apps-mobiles.gif'} />
                    </div>
                    <div className="block md:hidden card relative h-60 w-60">
                      <div className='group relative flex h-full w-full select-none items-center justify-center rounded-lg border border-gray-900 bg-gradient-to-tr from-gray-950 to-gray-900 text-sm font-light text-gray-300'>
                        <span className='text-md bg-gradient-to-t from-gray-400 to-white bg-clip-text font-bold text-transparent'>
                          <img
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                            src={'/img/apps-mobiles.gif'}
                          ></img>
                        </span>
                      </div>
                    </div>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Aplicaciones Mobiles
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="hidden md:block">
                      <HoverCard img={'/img/apps-web.gif'} />
                    </div>

                    <div className="block md:hidden card relative h-60 w-60">
                      <div className='group relative flex h-full w-full select-none items-center justify-center rounded-lg border border-gray-900 bg-gradient-to-tr from-gray-950 to-gray-900 text-sm font-light text-gray-300'>
                        <span className='text-md bg-gradient-to-t from-gray-400 to-white bg-clip-text font-bold text-transparent'>
                          <img
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                            src={'/img/apps-web.gif'}
                          ></img>
                        </span>
                      </div>
                    </div>

                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Aplicaciones Web
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="hidden md:block">
                      <HoverCard img={'/img/app-integracion.gif'} />
                    </div>

                    <div className="block md:hidden card relative h-60 w-60">
                      <div className='group relative flex h-full w-full select-none items-center justify-center rounded-lg border border-gray-900 bg-gradient-to-tr from-gray-950 to-gray-900 text-sm font-light text-gray-300'>
                        <span className='text-md bg-gradient-to-t from-gray-400 to-white bg-clip-text font-bold text-transparent'>
                          <img
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                            src={'/img/app-integracion.gif'}
                          ></img>
                        </span>
                      </div>
                    </div>

                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Integración de Apps y Datos
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="hidden md:block">
                      <HoverCard img={'/img/tansformacion-digital.gif'} />
                    </div>

                    <div className="block md:hidden card relative h-60 w-60">
                      <div className='group relative flex h-full w-full select-none items-center justify-center rounded-lg border border-gray-900 bg-gradient-to-tr from-gray-950 to-gray-900 text-sm font-light text-gray-300'>
                        <span className='text-md bg-gradient-to-t from-gray-400 to-white bg-clip-text font-bold text-transparent'>
                          <img
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                            src={'/img/tansformacion-digital.gif'}
                          ></img>
                        </span>
                      </div>
                    </div>

                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Transformación Digital
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nustros trabajos */}
      {/* <section className="text-gray-600 body-font pt-32">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20 flex justify-center items-center flex-col">
            <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
              Nuestros trabajos
            </h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
            {/* CARD
            <div className="bg-white w-full min-h-36 rounded-2xl mt-6 flex justify-between flex-col">
              <div className="relative flex justify-center">
                <div className="w-36 h-10 border-black-2">
                  <img src="" alt="proyect-photo" className="w-36 h-40 absolute bg-slate-700 bottom-0.5 left-2 rounded-2xl" />
                </div>
                <div className="ml-16 text-right p-2">
                  <p className="text-black">Bronovios.com, nuestro primer trabajo profesional bajo el nombre de DevSoul Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam dolor tempora ad reprehenderit modi debitis cupiditate consequuntur non. Fuga recusandae sed exercitationem repellendus numquam iure excepturi quae magni dolores.</p>
                </div>
              </div>
              <div className="bg-red-600 flex justify-center h-10 rounded-b-xl text-white">
                <button>Bronovios.com</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Agregar al pie de pagina */}
      <div class="container-blob">
        <div class="blob-c">
          <div class="shape-blob"></div>
          <div class="shape-blob one"></div>
          <div class="shape-blob two"></div>
          <div class="shape-blob three"></div>
          <div class="shape-blob four"></div>
          <div class="shape-blob five"></div>
          <div class="shape-blob six"></div>
        </div>
        <h1 className="blob_h1 text-white text-wrap">Dev<br />Soul</h1><br /><h1 class='text-red-600 blob_h1'>Programming</h1>
      </div>


    </section>
  );
}
