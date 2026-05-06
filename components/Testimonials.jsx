import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Exequiel",
    position: "Bronovios.com",
    image: "/img/logos/isotipo 1.png",
    testimonio: 'Muchísimas Gracias por todo el trabajo que hicieron!\n\nDesde la creación hasta el mantenimiento 10 puntos ⭐🤩 y a pesar de la diferencia horaria que tenemos, siempre están dispuestos a solucionar cualquier cosa en todo momento. Gracias.',
    rating: 5
  },
  {
    name: "Chino Almiron",
    position: "Sistema Gimnasio",
    image: "/img/logos/isotipo 1.png",
    testimonio: "Sin palabras, más que agradecido por su trabajo realizado, muy conforme con la APP personal pude optimizar tiempo y al mismo tiempo llegar más fácil a más alumnos desde cualquier ubicación.",
    rating: 5
  },
  {
    name: "Ana Rodríguez",
    position: "Lemonpad",
    image: "/img/logos/isotipo 1.png",
    testimonio: "El sistema de gestión que crearon para los restaurantes me ahorra muchas horas semanales. Ahora puedo enfocarme en mis clientes mientras la tecnología trabaja para mí.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Estadísticas generales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary-100 mb-2">98%</div>
          <div className="text-zinc-600 text-sm">Clientes satisfechos</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary-100 mb-2">150+</div>
          <div className="text-zinc-600 text-sm">Proyectos exitosos</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary-100 mb-2">4.9/5</div>
          <div className="text-zinc-600 text-sm">Calificación promedio</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary-100 mb-2">30 días</div>
          <div className="text-zinc-600 text-sm">Tiempo promedio</div>
        </div>
      </div>

      {/* Testimonio principal */}
      <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-sm">
        {/* Quote icon */}
        <div className="absolute top-4 right-8 opacity-10">
          <FaQuoteLeft className="text-8xl text-primary-100" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(currentTestimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-primary-100 text-xl" />
          ))}
        </div>

        {/* Testimonio */}
        <blockquote className="text-xl md:text-2xl text-zinc-800 mb-8 leading-relaxed">
          "{currentTestimonial.testimonio}"
        </blockquote>

        {/* Información del cliente */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={currentTestimonial.image} 
              alt={currentTestimonial.name} 
              className="w-16 h-16 rounded-full border-2 border-primary-100" 
            />
            <div>
              <div className="text-zinc-900 font-bold text-lg">{currentTestimonial.name}</div>
              <div className="text-zinc-600 text-sm">{currentTestimonial.position}</div>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-primary-100/20 hover:bg-primary-100/30 border border-primary-100/40 rounded-full p-3 transition-all duration-300"
            >
              <FaArrowLeft className="text-primary-100" />
            </button>
            <div className="text-zinc-700 text-sm">
              {currentIndex + 1} de {testimonials.length}
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-primary-100/20 hover:bg-primary-100/30 border border-primary-100/40 rounded-full p-3 transition-all duration-300"
            >
              <FaArrowRight className="text-primary-100" />
            </button>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary-100' 
                : 'bg-zinc-300 hover:bg-zinc-400'
            }`}
          />
        ))}
      </div>

      {/* CTA después de testimonios */}
      <div className="text-center mt-12">
        <div className="bg-white border border-zinc-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">
            ¿Listo para ser nuestro próximo caso de éxito?
          </h3>
          <p className="text-zinc-600 mb-6">
            Únete a más de 150 empresas que ya están vendiendo más gracias a nosotros
          </p>
          <button 
            onClick={() => document.getElementById('cotizacion-rapida').scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-100 text-secondary rounded-full font-bold px-8 py-4 text-lg hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            OBTENER COTIZACIÓN GRATIS
            <FaArrowRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;