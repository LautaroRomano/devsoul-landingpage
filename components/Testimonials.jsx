import React, { useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
const testimonials = [
  {
    name: "Bronovios",
    image: "/img/logos/isotipo 1.png",
    testimonio: `
    Muchísimas Gracias por todo el trabajo que hicieron! Desde la creación hasta el mantenimiento 10 puntos ⭐🤩 y a pesar de la diferencia horaria que tenemos, siempre están dispuestos a solucionar cualquier cosa en todo momento. Gracias.
    `
  },
  {
    name: "Chino Almiron",
    image: "/img/logos/isotipo 1.png",
    testimonio: <>
      Sin palabras, más que agradecido por su trabajo realizado, muy conforme con la APP personal pude optimizar tiempo y al mismo tiempo llegar más fácil a más alumnos desde cualquier ubicación.
      {<br />}{<br />}
      Un trabajo excelente.
    </>
  },
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

  return (
    <div className="md:p-8 mx-auto h-full max-w-6xl">
      {/* Contenedor de nombres y fotos */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 w-full min-h-screen bg-black p-4">

          {/* Testimonio 1 */}
          <div className="bg-white p-4 relative sm:col-span-2 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-3 grid-content">
            <div className="absolute top-1 right-8">
              <FaQuoteLeft className="opacity-20 text-8xl" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/logos/isotipo 1.png" alt="Bronovios" className="w-12 h-12 rounded-full" />
              <h2 className="font-bold">Bronovios</h2>
            </div>
            <div className="mt-2">
              <p className="text-justify p-4 uppercase font-bold">
                Muchísimas Gracias por todo el trabajo que hicieron!
              </p>
              <p className="text-justify px-4">
                Desde la creación hasta el mantenimiento 10 puntos ⭐🤩 y a pesar de la diferencia horaria que tenemos, siempre están dispuestos a solucionar cualquier cosa en todo momento. Gracias.
              </p>
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="bg-primary-100 p-4 sm:col-span-2 lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-4 grid-content">
            <div className="flex items-center gap-2">
              <img src="/img/logos/isotipo 3.png" alt="Chino Almiron" className="w-12 h-12 rounded-full" />
              <h2 className="font-bold">Chino Almiron</h2>
            </div>
            <div className="mt-2">
              <p className="text-justify p-4 uppercase font-bold">Un trabajo excelente.</p>
              <p className="text-justify p-4">
                Sin palabras, más que agradecido por su trabajo realizado, muy conforme con la APP personal pude optimizar tiempo y al mismo tiempo llegar más fácil a más alumnos desde cualquier ubicación.
              </p>
            </div>
          </div>

          {/* Logo 1 */}
          <div className="bg-[#49556b] flex justify-center items-center col-span-1 sm:col-span-2 lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-6 grid-content">
            <img src="/img/logos/isotipo 2.png" alt="LOGO" className="w-48" />
          </div>

          {/* Logo 2 */}
          <div className="bg-primary-100 flex justify-center items-center sm:col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-6 grid-content">
            <img src="/img/logos/isotipo 3.png" alt="LOGO" />
          </div>

          {/* Logo 3 */}
          <div className="bg-white flex justify-center items-center sm:col-span-1 lg:col-start-4 lg:col-end-6 lg:row-start-4 lg:row-end-6 grid-content">
            <img src="/img/logos/isotipo 1.png" alt="LOGO" className="w-48" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;