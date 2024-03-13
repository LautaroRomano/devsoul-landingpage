import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Main() {
  return (
    <section className="text-black body-font lg:pt-20">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>Creamos sitios web</span>
            <br ></br>
            impresionantes
          </h1>
          <br></br>
          <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
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
      <section className="text-gray-600 body-font">
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

            <div className="p-4 w-1/4">
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

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
              Nuestros servicios
            </h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4 w-full">

                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="https://picsum.photos/300/300"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Aplicaciones Mobiles
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="https://picsum.photos/300/300"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Aplicaciones Web
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="https://picsum.photos/300/300"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Integración de Apps y Datos
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="https://picsum.photos/300/300"
                    ></img>
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
    </section>
  );
}
