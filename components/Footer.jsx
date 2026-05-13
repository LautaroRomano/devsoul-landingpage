import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const PRIMARY = "#BDF61D";

const links = {
  "Empleados IA": [
    { label: "SDRSoul", href: "#empleados-ia" },
    { label: "SupportSoul", href: "#empleados-ia" },
    { label: "AdminSoul", href: "#empleados-ia" },
    { label: "OpsSoul", href: "#empleados-ia" },
    { label: "ClinicSoul", href: "#empleados-ia" },
  ],
  "Plataforma": [
    { label: "Dashboard", href: "#" },
    { label: "Integraciones", href: "#" },
    { label: "Seguridad", href: "#" },
    { label: "API", href: "#" },
  ],
  "Empresa": [
    { label: "Misión y Visión", href: "#nosotros" },
    { label: "Industrias", href: "#industrias" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/img/logos/isotipo 1.png"
              alt="DevSoul logo"
              className="w-10 h-10 object-cover"
            />
            <span className="text-white font-bold text-lg tracking-tight">
              Dev<span style={{ color: PRIMARY }}>Soul</span>
            </span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-8">
            La infraestructura de workforce digital para empresas en Latinoamérica. Agentes autónomos de IA que trabajan como empleados reales.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/dev.soul.it"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg border flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/104109828"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg border flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:hello@devsoul.it"
              className="w-9 h-9 rounded-lg border flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([category, items]) => (
          <div key={category}>
            <h4
              className="text-xs uppercase tracking-[0.16em] font-bold mb-5"
              style={{ color: PRIMARY }}
            >
              {category}
            </h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-zinc-500 hover:text-white transition-colors duration-200 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-zinc-600">
          <span>© 2026 DevSoul. Infraestructura de workforce digital para Latinoamérica.</span>
          <div className="flex gap-4">
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">Política de Privacidad</span>
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">Términos de Servicio</span>
            <a
              href="mailto:hello@devsoul.it"
              className="hover:text-zinc-400 transition-colors"
            >
              hello@devsoul.it
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
