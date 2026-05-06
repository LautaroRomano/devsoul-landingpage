import { FaArrowRight, FaWhatsapp, FaSearch, FaProjectDiagram, FaRobot, FaChartLine, FaBrain, FaNetworkWired, FaCheckCircle, FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import Contactanos from "./Contactanos";
import Testimonials from "./Testimonials";

export default function Main() {
  const stats = [
    { value: "-60%", label: "Tareas manuales" },
    { value: "24/7", label: "Agentes activos" },
    { value: "3x", label: "Velocidad operativa" },
    { value: "150+", label: "Procesos automatizados" },
  ];

  const methodology = [
    {
      step: "01",
      title: "Diagnóstico empresarial",
      description:
        "Estudiamos tu empresa en profundidad. Relevamos el organigrama, entendemos cada área, identificamos cuellos de botella y mapeamos todas las tareas que hoy se hacen a mano.",
      tags: ["Relevamiento", "Organigrama", "Análisis"],
      className: "md:col-span-6",
    },
    {
      step: "02",
      title: "Modelado de procesos",
      description:
        "Transformamos tu empresa en un modelo orientado a procesos. Documentamos cada flujo bajo estándares BPM, eliminamos redundancias y diseñamos la arquitectura de automatización.",
      tags: ["BPM", "Flujos", "Arquitectura"],
      className: "md:col-span-6",
    },
    {
      step: "03",
      title: "Automatización inteligente",
      description:
        "Implementamos las automatizaciones que eliminan el trabajo repetitivo: integraciones entre sistemas, workflows automáticos, notificaciones, reportes y toma de decisiones sin intervención humana.",
      tags: ["Workflows", "Integraciones", "Triggers"],
      className: "md:col-span-4 bg-primary-100/10 border-primary-100/30",
    },
    {
      step: "04",
      title: "IA & Sistema Multi-Agente",
      description:
        "Potenciamos la automatización con Inteligencia Artificial. Desplegamos un SMA donde cada agente actúa como un empleado digital especializado dentro de tu empresa.",
      tags: ["LLM", "SMA", "Agentes IA"],
      className: "md:col-span-8",
    },
  ];

  const benefits = [
    { icon: <FaChartLine />, title: "Mayor eficiencia operativa", description: "Tus procesos corren solos, sin errores humanos, en fracción del tiempo." },
    { icon: <FaBrain />, title: "Decisiones más inteligentes", description: "La IA analiza datos en tiempo real y actúa según reglas de negocio definidas por vos." },
    { icon: <FaNetworkWired />, title: "Visibilidad total", description: "Cada proceso queda documentado, trazado y medible. Sabés exactamente qué pasa en tu empresa." },
    { icon: <FaCheckCircle />, title: "Escalabilidad sin fricción", description: "Tu empresa crece sin tener que contratar más personal para tareas operativas." },
    { icon: <FaRobot />, title: "Empleados digitales 24/7", description: "Los agentes del SMA no se cansan, no se equivocan y trabajan en simultáneo los 7 días de la semana." },
    { icon: <FaProjectDiagram />, title: "Empresa modelo por procesos", description: "Dejás atrás la gestión informal. Tu empresa opera con estructura, orden y automatización desde el núcleo." },
  ];

  const values = [
    { label: "Profundidad", description: "Entendemos tu negocio antes de escribir una sola línea de código. La automatización nace del conocimiento real de tu empresa." },
    { label: "Pragmatismo", description: "Priorizamos impacto sobre complejidad. Automatizamos lo que genera valor, no lo que se ve bonito." },
    { label: "Transparencia", description: "Cada proceso modelado, cada agente desplegado y cada resultado queda documentado y es tuyo." },
    { label: "Excelencia técnica", description: "Usamos las herramientas de vanguardia pero con criterio. La tecnología sirve al negocio, no al revés." },
  ];

  return (
    <main className="bg-[#f8f9fa] text-zinc-900 pt-24">

      {/* HERO */}
      <section id="hero" className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
            Business Process Automation
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Automatizamos los procesos de tu empresa para que{" "}
            <span className="text-primary-100">trabaje sola</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
            Estudiamos tu empresa, modelamos cada proceso y desplegamos automatizaciones inteligentes con IA y un Sistema Multi-Agente (SMA) que actúa como tu equipo digital de operaciones.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              onPress={() =>
                document.getElementById("cotizacion-rapida")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary-100 text-zinc-900 font-bold rounded-lg px-8"
            >
              Automatiza tu empresa
              <FaArrowRight className="ml-2" />
            </Button>
            <Button
              variant="bordered"
              onPress={() => document.getElementById("metodologia")?.scrollIntoView({ behavior: "smooth" })}
              className="border-zinc-300 text-zinc-800 font-semibold rounded-lg px-8"
            >
              Ver metodología
            </Button>
          </div>
        </div>
      </section>

      {/* STATS */}
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

      {/* METODOLOGÍA */}
      <section id="metodologia" className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">Cómo trabajamos</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Nuestra metodología</h2>
          <p className="mt-4 text-zinc-600 max-w-2xl">
            Un proceso probado de 4 pasos para transformar cómo opera tu empresa, desde el diagnóstico hasta los agentes inteligentes corriendo en producción.
          </p>
        </div>
        <div className="grid md:grid-cols-12 gap-6">
          {methodology.map((item) => (
            <article
              key={item.step}
              className={`rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${item.className}`}
            >
              <span className="text-5xl font-black text-zinc-100 leading-none select-none">{item.step}</span>
              <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-zinc-600">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="servicios" className="border-y border-zinc-200 bg-white/70 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">Por qué automatizar</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              Lo que cambia cuando tu empresa opera por procesos
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <div className="text-3xl text-primary-100 mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-zinc-600 text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="bg-zinc-900 text-white p-10 md:p-14">
            <p className="text-xs uppercase tracking-[0.22em] text-primary-100 font-semibold">Tecnología avanzada</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
              Sistema Multi-Agente (SMA): tu equipo de empleados digitales
            </h2>
            <p className="mt-5 text-zinc-400 leading-relaxed">
              El SMA es un conjunto de agentes de IA que trabajan de forma colaborativa dentro de tu empresa. Cada agente tiene un rol específico: uno gestiona consultas, otro procesa pedidos, otro actualiza el CRM, otro genera reportes.
            </p>
            <ul className="mt-8 space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary-100 mt-1 flex-shrink-0" />
                <span>Operan de forma autónoma, coordinada y sin intervención humana.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary-100 mt-1 flex-shrink-0" />
                <span>Se adaptan a las reglas y lenguaje de tu negocio.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary-100 mt-1 flex-shrink-0" />
                <span>Escalan con vos: más carga, más agentes, sin contratar personas.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary-100 mt-1 flex-shrink-0" />
                <span>Cada acción queda registrada y es auditable.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 md:p-14 grid grid-cols-2 gap-2 content-center">
            {[
              ["Agente Ventas", "Gestiona leads y seguimientos automáticos"],
              ["Agente Soporte", "Responde consultas y deriva casos complejos"],
              ["Agente Operaciones", "Coordina tareas internas y actualiza sistemas"],
              ["Agente Analytics", "Genera reportes y alertas en tiempo real"],
            ].map(([title, desc]) => (
              <div key={title} className="border border-zinc-200 rounded-xl p-5 bg-zinc-50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary-100 inline-block animate-pulse"></span>
                  <p className="text-sm font-bold tracking-tight">{title}</p>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN / VALORES */}
      <section id="nosotros" className="border-y border-zinc-200 bg-white/70 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">Quiénes somos</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Misión, Visión y Valores</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="rounded-2xl border border-primary-100/40 bg-primary-100/5 p-8">
              <div className="text-3xl text-primary-100 mb-4"><FaBullseye /></div>
              <h3 className="text-xl font-bold mb-3">Misión</h3>
              <p className="text-zinc-600 leading-relaxed">
                Transformar la forma en que las empresas operan, eliminando el trabajo manual repetitivo mediante automatización inteligente, modelado de procesos e IA, para que las personas puedan enfocarse en lo que realmente genera valor.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="text-3xl text-primary-100 mb-4"><FaEye /></div>
              <h3 className="text-xl font-bold mb-3">Visión</h3>
              <p className="text-zinc-600 leading-relaxed">
                Ser el aliado estratégico de referencia en automatización de procesos empresariales en Latinoamérica, construyendo organizaciones más ágiles, inteligentes y autónomas gracias a la adopción de IA y sistemas multi-agente.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="text-3xl text-primary-100 mb-4"><FaHeart /></div>
              <h3 className="text-xl font-bold mb-3">Propósito</h3>
              <p className="text-zinc-600 leading-relaxed">
                Creemos que una empresa bien organizada y automatizada no solo es más eficiente: es más humana. Cuando las máquinas hacen lo mecánico, las personas pueden hacer lo que solo las personas pueden hacer.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-center">Nuestros valores</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => (
                <div key={v.label} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <p className="font-bold text-primary-100 uppercase tracking-wider text-sm mb-2">{v.label}</p>
                  <p className="text-zinc-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOGO CAROUSEL */}
      <section id="proyectos" className="py-20 border-b border-zinc-200 bg-white overflow-hidden">
        <div className="text-center mb-12 px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Quienes confiaron en nosotros</h2>
          <p className="mt-4 text-zinc-600">Empresas y proyectos que eligieron transformar su operación con DevSoul.</p>
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

      {/* CONTACTO */}
      <section id="cotizacion-rapida" className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Empecemos a automatizar tu empresa</h2>
            <p className="mt-4 text-zinc-600">
              Contanos cómo opera hoy tu empresa y te armamos un diagnóstico inicial sin costo.
            </p>
          </div>
          <Contactanos />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-20 border-y border-zinc-200 bg-white/70">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Lo que dicen nuestros clientes</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/+5493816224859?text=Hola! Me interesa automatizar los procesos de mi empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg block"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div> */}
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
