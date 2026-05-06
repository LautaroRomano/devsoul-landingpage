export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src="/img/logos/isotipo 1.png" alt="logo principal" className="w-16 h-16 object-cover" />
          <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
            Automatización de procesos empresariales con IA. Transformamos cómo opera tu empresa para que trabaje más inteligente, no más duro.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.16em] font-bold text-zinc-900">Lo que hacemos</h4>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li>Diagnóstico empresarial</li>
            <li>Modelado de procesos (BPM)</li>
            <li>Automatización inteligente</li>
            <li>Sistema Multi-Agente (SMA)</li>
            <li>IA aplicada al negocio</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.16em] font-bold text-zinc-900">Empresa</h4>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li>Metodología</li>
            <li>Misión y Visión</li>
            <li>Clientes</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.16em] font-bold text-zinc-900">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li>HQ: Innovation District</li>
            <li>
              <a className="text-zinc-900 underline font-medium" href="mailto:hello@devsoul.it">
                hello@devsoul.it
              </a>
            </li>
            <li>
              <a
                className="text-zinc-900 underline font-medium"
                href="https://www.instagram.com/dev.soul.it"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="text-zinc-900 underline font-medium"
                href="https://www.linkedin.com/company/104109828"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-zinc-500">
          <span>© 2026 DevSoul IT. Automatización de procesos empresariales con IA.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
