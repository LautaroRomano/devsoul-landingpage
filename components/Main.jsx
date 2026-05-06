import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import Contactanos from "./Contactanos";
import Testimonials from "./Testimonials";

export default function Main() {
  const stats = [
    { value: "+40%", label: "Eficiencia operativa" },
    { value: "24/7", label: "Soporte crítico" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "150+", label: "Proyectos entregados" },
  ];

  const services = [
    {
      title: "AI Applied",
      description:
        "Implementamos automatizaciones inteligentes para marketing, ventas y operación con foco en crecimiento medible.",
      tags: ["LLM", "Automatización", "Integraciones"],
      className: "md:col-span-8",
    },
    {
      title: "Process Optimization",
      description:
        "Reestructuramos procesos y arquitectura para reducir tiempos, costos y fricción operativa.",
      tags: ["Arquitectura", "Performance", "Escalabilidad"],
      className: "md:col-span-4 bg-primary-100/20 border-primary-100/40",
    },
    {
      title: "Automation Edge",
      description:
        "Creamos sistemas repetibles que convierten tareas manuales en flujos automáticos y trazables.",
      tags: ["Workflows", "CRM", "Dashboards"],
      className: "md:col-span-6",
    },
    {
      title: "Elite Teams",
      description:
        "Equipo senior integrado con tu negocio para acelerar ejecución y calidad de entrega.",
      tags: ["Seniority", "Velocidad", "Ownership"],
      className: "md:col-span-6",
    },
  ];

  return (
    <main className="bg-[#f8f9fa] text-zinc-900 pt-24">
      <section id="hero" className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
              Engineering Excellence
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight uppercase">
              Ingeniería de software que impulsa resultados reales
            </h1>
            <p className="mt-6 text-lg text-zinc-600 max-w-xl">
              Diseñamos soluciones digitales con la estética, claridad y precisión de una
              marca premium: más conversión, más automatización y mejor experiencia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onPress={() =>
                  document.getElementById("cotizacion-rapida")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-primary-100 text-zinc-900 rounded-lg px-8"
              >
                Optimiza tu negocio
                <FaArrowRight className="ml-2" />
              </Button>
              <Button
                variant="bordered"
                onPress={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                className="border-zinc-300 text-zinc-800 rounded-lg px-8"
              >
                Ver soluciones
              </Button>
            </div>
          </div>
          {/* <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <img
              src="/img/casos-de-exito/lemonpad.png"
              alt="Vista de proyecto"
              className="w-full h-[320px] object-cover rounded-xl border border-zinc-100"
            />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-zinc-500 uppercase tracking-wider">System latency</p>
              <p className="text-2xl font-bold">0.02ms</p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white/70">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-3xl md:text-4xl font-bold text-primary-100">{item.value}</p>
              <p className="text-sm uppercase tracking-wider text-zinc-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">Capabilities</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Nuestros pilares de ingeniería</h2>
        </div>
        <div className="grid md:grid-cols-12 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className={`rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${service.className}`}
            >
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-3 text-zinc-600">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="bg-zinc-900 text-white p-10 md:p-14">
            <p className="text-xs uppercase tracking-[0.22em] text-primary-100 font-semibold">Strategic Value</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">Más que código, arquitectura de negocio</h2>
            <ul className="mt-8 space-y-4 text-zinc-300">
              <li>Visión técnica alineada a KPIs reales.</li>
              <li>Seguridad, rendimiento y mantenibilidad desde el día uno.</li>
              <li>Entregas iterativas que generan valor semanal.</li>
            </ul>
          </div>
          <div className="bg-white p-10 md:p-14 grid grid-cols-2 gap-6">
            {[
              ["99%", "Server uptime"],
              ["150+", "Projects delivered"],
              ["10ms", "Core latency"],
              ["ISO", "Compliance ready"],
            ].map(([value, label]) => (
              <div key={label} className="border border-zinc-200 rounded-xl p-5 bg-zinc-50">
                <p className="text-4xl font-bold tracking-tight">{value}</p>
                <p className="text-xs uppercase tracking-wider text-zinc-500 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-20 border-y border-zinc-200 bg-white/70 overflow-hidden">
        <div className="text-center mb-12 px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Quienes confiaron en nosotros</h2>
          <p className="mt-4 text-zinc-600">Marcas y proyectos que eligieron trabajar con nuestro equipo.</p>
        </div>
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee-track">
            {Array.from({ length: 4 }, (_, loopIndex) => trustedBy.map((logo) => ({ ...logo, loopIndex })))
              .flat()
              .map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="logo-marquee-item">
                {logo.link ? (
                  <a href={logo.link} target="_blank" rel="noopener noreferrer" aria-label={logo.name}>
                    <img src={logo.img} alt={logo.name} className="h-14 md:h-16 w-auto object-contain" />
                  </a>
                ) : (
                  <img src={logo.img} alt={logo.name} className="h-14 md:h-16 w-auto object-contain" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizacion-rapida" className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Comencemos tu proyecto</h2>
            <p className="mt-4 text-zinc-600">
              Cuéntanos lo que necesitas y armamos una propuesta personalizada en 24 horas.
            </p>
          </div>
          <Contactanos />
        </div>
      </section>

      <section id="testimonios" className="py-20 border-y border-zinc-200 bg-white/70">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Lo que dicen nuestros clientes</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/+5493816224859?text=Hola! Me interesa obtener una cotización para mi sitio web"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg block"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </main>
  );
}

const trustedBy = [
  {
    name: "Bronovios",
    img: "/img/quienes-confiaron/bronovios.jpg",
    link: "https://www.bronovios.com/",
  },
  {
    name: "Prendete al Camino",
    img: "/img/quienes-confiaron/prendete-al-camino.webp",
    link: "https://www.prendetealcamino.com/",
  },
  {
    name: "Belleza Femenina",
    img: "/img/quienes-confiaron/belleza-femenina.jpg",
    link: "https://www.instagram.com/belleza_femenina_bf74/",
  },
  {
    name: "Instituto San Cristobal",
    img: "/img/quienes-confiaron/instituto-superior-san-cristobal.png",
    link: "https://issc.com.ar/",
  },
  {
    name: "Willy Donuts",
    img: "/img/quienes-confiaron/willydonuts.jpg",
    link: "https://www.instagram.com/willy.donuts/",
  },
];