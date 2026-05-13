import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaBolt,
  FaCheck,
  FaChevronRight,
  FaCircle,
  FaClock,
  FaCode,
  FaCog,
  FaDatabase,
  FaGlobe,
  FaHeartbeat,
  FaIndustry,
  FaRobot,
  FaShoppingCart,
  FaTruck,
  FaUsers,
  FaUserTie,
  FaChartBar,
  FaComments,
  FaSitemap,
  FaBullseye,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";

const PRIMARY = "#BDF61D";

// ─── Utility: animated counter ───────────────────────────────────────────────
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Utility: intersection observer hook ─────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── AI Employee cards data ───────────────────────────────────────────────────
const aiEmployees = [
  {
    id: "SDRSoul",
    role: "Sales Development Representative",
    color: "#BDF61D",
    icon: <FaUserTie />,
    responsibilities: ["Prospección automática", "Seguimiento de leads", "Calificación de prospectos", "Outreach multicanal"],
    kpis: ["↑42% conversión de leads", "3x velocidad de outreach", "0 leads sin seguimiento"],
    integrations: ["CRM", "LinkedIn", "Email", "WhatsApp"],
    impact: "Convierte tu pipeline de ventas en una máquina autónoma que nunca duerme.",
  },
  {
    id: "SupportSoul",
    role: "Customer Support Agent",
    color: "#BDF61D",
    icon: <FaComments />,
    responsibilities: ["Atención 24/7", "Resolución de tickets", "Escalación inteligente", "FAQ automatizado"],
    kpis: ["-78% tiempo de respuesta", "94% satisfacción cliente", "∞ tickets simultáneos"],
    integrations: ["Zendesk", "WhatsApp", "Slack", "Email"],
    impact: "Soporte de nivel enterprise disponible en todos los canales, todo el tiempo.",
  },
  {
    id: "AdminSoul",
    role: "Administrative AI Employee",
    color: "#BDF61D",
    icon: <FaCog />,
    responsibilities: ["Gestión documental", "Agendas automáticas", "Reportes ejecutivos", "Coordinación interna"],
    kpis: ["-65% trabajo admin", "100% precisión datos", "Reportes en segundos"],
    integrations: ["Google Workspace", "Notion", "ERP", "Calendar"],
    impact: "Tu backoffice funciona solo. Sin errores, sin demoras, sin intervención humana.",
  },
  {
    id: "OpsSoul",
    role: "Operations Manager AI",
    color: "#BDF61D",
    icon: <FaSitemap />,
    responsibilities: ["Monitoreo de procesos", "Optimización de workflows", "Gestión de inventario", "Alertas operativas"],
    kpis: ["-40% costos operativos", "99.9% uptime operacional", "Real-time monitoring"],
    integrations: ["ERP", "WMS", "SCADA", "Dashboards"],
    impact: "Operaciones que se autogestionan, se optimizan y escalan sin fricción.",
  },
  {
    id: "ClinicSoul",
    role: "Healthcare Operations AI",
    color: "#BDF61D",
    icon: <FaHeartbeat />,
    responsibilities: ["Gestión de turnos", "Recordatorios automáticos", "Historial de pacientes", "Coordinación médica"],
    kpis: ["-60% ausencias pacientes", "+35% ocupación agenda", "Cumplimiento regulatorio"],
    integrations: ["HIS", "WhatsApp", "Email", "Historia clínica"],
    impact: "Tu clínica opera con precisión de sala de control, no de agenda en papel.",
  },
];

// ─── Industry data ────────────────────────────────────────────────────────────
const industries = [
  {
    icon: <FaHeartbeat />,
    name: "Salud",
    description: "ClinicSoul gestiona turnos, recordatorios y coordinación entre profesionales con cero intervención manual.",
    agents: ["ClinicSoul", "SupportSoul"],
  },
  {
    icon: <FaUserTie />,
    name: "Concesionarios",
    description: "SDRSoul califica prospectos, agenda test drives y da seguimiento automático a cada lead en el funnel.",
    agents: ["SDRSoul", "SupportSoul"],
  },
  {
    icon: <FaTruck />,
    name: "Logística",
    description: "OpsSoul monitorea flotas, procesa órdenes y genera reportes operativos en tiempo real sin fricción.",
    agents: ["OpsSoul", "AdminSoul"],
  },
  {
    icon: <FaIndustry />,
    name: "SCADA Industrial",
    description: "Integración nativa con sistemas SCADA para alertas predictivas y respuesta autónoma a eventos críticos.",
    agents: ["OpsSoul"],
  },
  {
    icon: <FaShoppingCart />,
    name: "Retail",
    description: "Gestión de consultas, procesamiento de pedidos y soporte post-venta sin aumentar el headcount.",
    agents: ["SupportSoul", "AdminSoul", "SDRSoul"],
  },
];

// ─── Comparison data ──────────────────────────────────────────────────────────
const comparisonRows = [
  { feature: "Disponibilidad", traditional: "8h/día · 5 días/semana", ai: "24/7 · 365 días/año" },
  { feature: "Escalabilidad", traditional: "Costo lineal por persona", ai: "Costo marginal casi cero" },
  { feature: "Costo operativo", traditional: "Salario + beneficios + rotación", ai: "Fracción del costo total" },
  { feature: "Velocidad de respuesta", traditional: "Minutos a horas", ai: "Milisegundos" },
  { feature: "Nivel de automatización", traditional: "Manual y dependiente", ai: "100% autónomo" },
  { feature: "Tasa de error", traditional: "Variable (fatiga, olvidos)", ai: "Consistente y auditable" },
];

// ─── HERO ORG CHART ───────────────────────────────────────────────────────────
function OrgChart() {
  return (
    <div className="relative select-none">
      {/* CEO */}
      <div className="flex justify-center mb-6">
        <OrgNode label="CEO" type="human" size="lg" />
      </div>

      {/* Connector line down from CEO */}
      <div className="flex justify-center mb-0">
        <div className="w-px h-6 bg-white/20" />
      </div>

      {/* Horizontal line */}
      <div className="relative flex justify-center mb-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-white/20" />
      </div>

      {/* Department row */}
      <div className="grid grid-cols-3 gap-4 pt-0">
        {[
          { dept: "Ventas", human: "Ana López", ai: "SDRSoul" },
          { dept: "Soporte", human: "Carlos Ruiz", ai: "SupportSoul" },
          { dept: "Operaciones", human: "María Gil", ai: "OpsSoul" },
        ].map((col) => (
          <div key={col.dept} className="flex flex-col items-center gap-3">
            {/* Connector up */}
            <div className="w-px h-6 bg-white/20" />
            {/* Dept node */}
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70 uppercase tracking-widest">
              {col.dept}
            </div>
            {/* Connector down */}
            <div className="w-px h-4 bg-white/20" />
            {/* People */}
            <div className="flex gap-2">
              <OrgNode label={col.human} type="human" size="sm" />
              <OrgNode label={col.ai} type="ai" size="sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrgNode({ label, type, size }) {
  const isAI = type === "ai";
  const isLg = size === "lg";
  return (
    <div
      className={`flex flex-col items-center gap-1.5 ${isLg ? "min-w-[90px]" : "min-w-[72px]"}`}
    >
      <div
        className={`rounded-xl flex items-center justify-center font-bold transition-all duration-300 ${
          isLg ? "w-14 h-14 text-xl" : "w-10 h-10 text-sm"
        } ${
          isAI
            ? "border-2 text-[#080808]"
            : "border border-white/20 bg-white/10 text-white"
        }`}
        style={isAI ? { backgroundColor: PRIMARY, borderColor: PRIMARY } : {}}
      >
        {isAI ? <FaRobot /> : <FaUsers />}
      </div>
      <span
        className={`text-center font-medium leading-tight ${
          isLg ? "text-sm text-white" : "text-[10px] text-zinc-400"
        }`}
      >
        {label}
      </span>
      {isAI && (
        <span
          className="text-[9px] font-bold uppercase tracking-widest"
          style={{ color: PRIMARY }}
        >
          AI
        </span>
      )}
    </div>
  );
}

// ─── METRIC CARD ─────────────────────────────────────────────────────────────
function MetricCard({ prefix, value, suffix, label, delay, inView }) {
  const count = useCountUp(value, 1800, inView);
  return (
    <div
      className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 text-center transition-all duration-700"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="text-4xl md:text-5xl font-black mb-3" style={{ color: PRIMARY }}>
        {prefix}{count}{suffix}
      </div>
      <p className="text-zinc-400 text-sm uppercase tracking-widest">{label}</p>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Main() {
  const [metricsRef, metricsInView] = useInView(0.3);
  const [activeEmployee, setActiveEmployee] = useState(0);

  return (
    <main className="bg-[#080808] text-white overflow-hidden">

      {/* ── SECTION 1: HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(189,246,29,0.12) 0%, transparent 70%), #080808",
        }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-8"
                style={{
                  borderColor: "rgba(189,246,29,0.3)",
                  color: PRIMARY,
                  backgroundColor: "rgba(189,246,29,0.06)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: PRIMARY }}
                />
                AI Workforce Platform · Latinoamérica
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                Incorporá{" "}
                <span
                  className="relative"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${PRIMARY}, #7cba01)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  empleados digitales
                </span>{" "}
                con IA en tu empresa.
              </h1>

              <p className="text-lg text-zinc-400 leading-relaxed max-w-lg mb-10">
                Creamos agentes autónomos que trabajan en ventas, soporte, administración y operaciones como miembros reales de tu equipo.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[#080808] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Solicitar demo
                  <FaArrowRight className="text-sm" />
                </button>
                <button
                  onClick={() =>
                    document.querySelector("#empleados-ia")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white border border-white/15 hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Ver empleados IA
                  <FaChevronRight className="text-xs" />
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex items-center gap-6 text-zinc-500 text-sm">
                <div className="flex items-center gap-2">
                  <FaCheckCircle style={{ color: PRIMARY }} />
                  <span>Sin reemplazar tu equipo</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle style={{ color: PRIMARY }} />
                  <span>Integración en días</span>
                </div>
              </div>
            </div>

            {/* Right: Org Chart */}
            <div
              className="rounded-2xl border p-8 md:p-10"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                    Estructura organizacional
                  </p>
                  <h3 className="text-white font-bold">Tu empresa híbrida</h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/40 inline-block" />
                    Humano
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ backgroundColor: PRIMARY }}
                    />
                    AI
                  </span>
                </div>
              </div>
              <OrgChart />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs animate-bounce">
          <span>Scrolleá</span>
          <div className="w-px h-8 bg-white/10" />
        </div>
      </section>

      {/* ── SECTION 2: AI EMPLOYEES ── */}
      <section id="empleados-ia" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: PRIMARY }}
            >
              Fuerza laboral digital
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Tus nuevos empleados digitales
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Cada agente está especializado en su área, integrado a tus herramientas y opera de forma autónoma como un miembro real de tu organización.
            </p>
          </div>

          {/* Employee selector tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {aiEmployees.map((emp, i) => (
              <button
                key={emp.id}
                onClick={() => setActiveEmployee(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeEmployee === i
                    ? "text-[#080808]"
                    : "border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
                style={
                  activeEmployee === i
                    ? { backgroundColor: PRIMARY }
                    : {}
                }
              >
                {emp.id}
              </button>
            ))}
          </div>

          {/* Active employee card */}
          {aiEmployees.map((emp, i) =>
            i !== activeEmployee ? null : (
              <div
                key={emp.id}
                className="grid lg:grid-cols-3 gap-6 rounded-2xl border p-8"
                style={{
                  borderColor: "rgba(189,246,29,0.2)",
                  background:
                    "linear-gradient(135deg, rgba(189,246,29,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                {/* Identity */}
                <div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 text-[#080808]"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    {emp.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-1">{emp.id}</h3>
                  <p className="text-zinc-400 text-sm mb-6">{emp.role}</p>
                  <p className="text-white/80 leading-relaxed text-sm">{emp.impact}</p>
                </div>

                {/* Responsibilities + KPIs */}
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                      Responsabilidades
                    </p>
                    <ul className="space-y-2">
                      {emp.responsibilities.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm text-zinc-300">
                          <FaCheck className="text-[10px] flex-shrink-0" style={{ color: PRIMARY }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">KPIs</p>
                    <ul className="space-y-2">
                      {emp.kpis.map((k) => (
                        <li
                          key={k}
                          className="text-sm font-semibold"
                          style={{ color: PRIMARY }}
                        >
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Integrations */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                    Integraciones
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {emp.integrations.map((int) => (
                      <span
                        key={int}
                        className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-zinc-300 font-medium"
                      >
                        {int}
                      </span>
                    ))}
                  </div>
                  <div
                    className="rounded-xl p-4 text-xs text-zinc-400 border"
                    style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.03)" }}
                  >
                    <p className="font-semibold text-white mb-1">Impacto operativo</p>
                    <div className="flex items-center gap-2 mt-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: PRIMARY }}
                      />
                      <span>Operando en producción</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

          {/* All employees grid (smaller cards) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            {aiEmployees.map((emp, i) => (
              <button
                key={emp.id}
                onClick={() => setActiveEmployee(i)}
                className={`rounded-xl border p-4 text-left transition-all duration-200 hover:border-white/20 ${
                  activeEmployee === i ? "" : "border-white/8"
                }`}
                style={
                  activeEmployee === i
                    ? { borderColor: "rgba(189,246,29,0.3)", backgroundColor: "rgba(189,246,29,0.04)" }
                    : { borderColor: "rgba(255,255,255,0.06)" }
                }
              >
                <div className="text-lg mb-2" style={{ color: activeEmployee === i ? PRIMARY : "#71717a" }}>
                  {emp.icon}
                </div>
                <p className="font-bold text-sm text-white">{emp.id}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{emp.role.split(" ").slice(0, 2).join(" ")}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: METRICS / ROI ── */}
      <section
        id="metricas"
        className="py-24 border-t border-white/5"
        ref={metricsRef}
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(189,246,29,0.05) 0%, transparent 70%), #080808",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: PRIMARY }}
            >
              ROI medible
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Resultados que se miden
            </h2>
            <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
              Los empleados digitales generan impacto desde el primer mes. Sin promesas, con métricas reales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard prefix="-" value={78} suffix="%" label="Tiempo de respuesta" delay={0} inView={metricsInView} />
            <MetricCard prefix="+" value={42} suffix="%" label="Conversión de leads" delay={150} inView={metricsInView} />
            <MetricCard prefix="" value={24} suffix="/7" label="Operaciones continuas" delay={300} inView={metricsInView} />
            <MetricCard prefix="-" value={65} suffix="%" label="Tareas repetitivas" delay={450} inView={metricsInView} />
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW IT WORKS ── */}
      <section id="como-funciona" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: PRIMARY }}
            >
              Proceso de implementación
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Cómo funciona
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Desde el diagnóstico hasta los agentes en producción, guiamos cada paso con precisión.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-0 relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(90deg, rgba(189,246,29,0.6), rgba(189,246,29,0.1))" }}
            />

            {[
              {
                step: "01",
                title: "Analizamos tu operación",
                desc: "Mapeamos procesos, organigrama y tareas repetitivas para identificar dónde los agentes generan más impacto.",
                icon: <FaDatabase />,
              },
              {
                step: "02",
                title: "Diseñamos tus empleados IA",
                desc: "Creamos agentes entrenados con el lenguaje, flujos y reglas específicas de tu negocio.",
                icon: <FaRobot />,
              },
              {
                step: "03",
                title: "Los integramos a tu organización",
                desc: "Conectamos los agentes a tus sistemas actuales: CRM, ERP, WhatsApp, email y más.",
                icon: <FaCode />,
              },
              {
                step: "04",
                title: "Monitoreás en tiempo real",
                desc: "Dashboard de control con métricas, alertas y visibilidad total de cada agente en operación.",
                icon: <FaChartBar />,
              },
            ].map((item, i) => (
              <div key={item.step} className="relative flex flex-col items-center text-center px-6 py-4">
                {/* Step number circle */}
                <div
                  className="w-[104px] h-[104px] rounded-full border-2 flex flex-col items-center justify-center mb-8 relative z-10 font-black"
                  style={{
                    borderColor: PRIMARY,
                    backgroundColor: "#080808",
                    color: PRIMARY,
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ fontSize: "24px", lineHeight: 1, marginBottom: "2px" }}>{item.icon}</span>
                  <span className="text-[10px] tracking-widest mt-1">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: MISSION / VISION / VALUES ── */}
      <section
        id="nosotros"
        className="py-24 border-t border-white/5"
        style={{
          background:
            "linear-gradient(180deg, #080808 0%, rgba(189,246,29,0.03) 50%, #080808 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: PRIMARY }}
            >
              Quiénes somos
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Misión, Visión y Valores
            </h2>
          </div>

          {/* Mission + Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <FaBullseye />,
                label: "Misión",
                content:
                  "Transformar empresas mediante empleados digitales inteligentes que automaticen operaciones, potencien equipos humanos y permitan organizaciones más eficientes, escalables y autónomas.",
                accent: true,
              },
              {
                icon: <FaEye />,
                label: "Visión",
                content:
                  "Convertirnos en la infraestructura líder de workforce digital en Latinoamérica, impulsando organizaciones híbridas donde humanos y agentes de IA trabajen juntos de forma natural.",
                accent: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: item.accent ? "rgba(189,246,29,0.25)" : "rgba(255,255,255,0.08)",
                  backgroundColor: item.accent ? "rgba(189,246,29,0.04)" : "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
                  style={{
                    backgroundColor: item.accent ? "rgba(189,246,29,0.15)" : "rgba(255,255,255,0.06)",
                    color: item.accent ? PRIMARY : "#ffffff",
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.label}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div>
            <p className="text-center text-xs uppercase tracking-widest text-zinc-500 mb-8">
              Valores
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Innovation First",
                  desc: "Empujamos continuamente los límites de los sistemas operativos de IA.",
                },
                {
                  name: "Human + AI Collaboration",
                  desc: "La tecnología debe amplificar el potencial humano, no reemplazarlo ciegamente.",
                },
                {
                  name: "Operational Excellence",
                  desc: "Cada empleado digital debe generar impacto de negocio medible.",
                },
                {
                  name: "Reliability",
                  desc: "Estabilidad, seguridad y observabilidad de nivel enterprise.",
                },
                {
                  name: "Scalability",
                  desc: "Sistemas capaces de crecer junto a la operación del cliente.",
                },
                {
                  name: "Transparency",
                  desc: "Métricas claras, acciones explicables y workflows auditables.",
                },
              ].map((val) => (
                <div
                  key={val.name}
                  className="rounded-xl border p-5 group hover:border-white/20 transition-all duration-300"
                  style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}
                >
                  <p
                    className="text-sm font-bold uppercase tracking-wider mb-2"
                    style={{ color: PRIMARY }}
                  >
                    {val.name}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INDUSTRIES ── */}
      <section id="industrias" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: PRIMARY }}
            >
              Casos de uso por industria
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Empleados IA en cualquier industria
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Cada sector tiene sus propios procesos. Nuestros agentes se adaptan a las reglas, el lenguaje y los sistemas de tu industria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="group rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "rgba(189,246,29,0.1)", color: PRIMARY }}
                >
                  {ind.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{ind.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{ind.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.agents.map((a) => (
                    <span
                      key={a}
                      className="text-xs px-2.5 py-1 rounded-lg font-semibold"
                      style={{ backgroundColor: "rgba(189,246,29,0.1)", color: PRIMARY }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: DASHBOARD PREVIEW ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: PRIMARY }}
            >
              Control total
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Dashboard de workforce digital
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Supervisá tus empleados IA en tiempo real. Conversaciones activas, métricas de rendimiento y estructura organizacional en una sola vista.
            </p>
          </div>

          {/* Mock dashboard */}
          <div
            className="rounded-2xl border overflow-hidden"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              background: "#0d0d0d",
            }}
          >
            {/* Dashboard header bar */}
            <div
              className="flex items-center justify-between px-5 py-3 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "#111111" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-zinc-500 text-xs">DevSoul Control Center — devsoul.it/dashboard</span>
              <div className="flex items-center gap-2">
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                  style={{ backgroundColor: "rgba(189,246,29,0.15)", color: PRIMARY }}
                >
                  LIVE
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[220px_1fr] min-h-[480px]">
              {/* Sidebar */}
              <div
                className="border-r p-4 space-y-1"
                style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "#0d0d0d" }}
              >
                {[
                  { icon: <FaComments />, label: "Conversaciones", badge: "47", active: true },
                  { icon: <FaRobot />, label: "Agentes IA", badge: "5" },
                  { icon: <FaSitemap />, label: "Organigrama" },
                  { icon: <FaChartBar />, label: "Métricas" },
                  { icon: <FaCog />, label: "Workflows" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-all"
                    style={{
                      backgroundColor: item.active ? "rgba(189,246,29,0.1)" : "transparent",
                      color: item.active ? PRIMARY : "#71717a",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                        style={{
                          backgroundColor: item.active ? "rgba(189,246,29,0.2)" : "rgba(255,255,255,0.08)",
                          color: item.active ? PRIMARY : "#71717a",
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t mt-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 px-3 mb-2">Agentes activos</p>
                  {["SDRSoul", "SupportSoul", "AdminSoul"].map((agent) => (
                    <div key={agent} className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-400">
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: PRIMARY }}
                      />
                      {agent}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main dashboard area */}
              <div className="p-6 space-y-6">
                {/* Metric cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Conversaciones hoy", value: "347", delta: "+12%" },
                    { label: "Tasa de resolución", value: "94%", delta: "+3%" },
                    { label: "Tiempo promedio", value: "0.8s", delta: "-40%" },
                    { label: "Leads calificados", value: "23", delta: "+18%" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl p-4 border"
                      style={{
                        borderColor: "rgba(255,255,255,0.06)",
                        backgroundColor: "rgba(255,255,255,0.03)",
                      }}
                    >
                      <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2">
                        {m.label}
                      </p>
                      <p className="text-white text-2xl font-black">{m.value}</p>
                      <p className="text-[11px] font-semibold mt-1" style={{ color: PRIMARY }}>
                        {m.delta} vs ayer
                      </p>
                    </div>
                  ))}
                </div>

                {/* Conversation feed */}
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                      Conversaciones activas
                    </p>
                    <div className="space-y-2">
                      {[
                        { agent: "SupportSoul", user: "María González", msg: "¿Cuánto tarda el envío?", time: "ahora", status: "typing" },
                        { agent: "SDRSoul", user: "Carlos López", msg: "Me interesa el plan enterprise", time: "1m", status: "active" },
                        { agent: "SupportSoul", user: "Ana Rodríguez", msg: "Necesito cancelar mi orden", time: "3m", status: "resolved" },
                      ].map((conv, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl border"
                          style={{
                            borderColor: "rgba(255,255,255,0.06)",
                            backgroundColor: "rgba(255,255,255,0.02)",
                          }}
                        >
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-[#080808] flex-shrink-0"
                            style={{ backgroundColor: PRIMARY }}
                          >
                            <FaRobot />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="text-xs font-semibold text-white">{conv.user}</span>
                              <span className="text-[10px] text-zinc-600">{conv.time}</span>
                            </div>
                            <p className="text-[11px] text-zinc-400 truncate">{conv.msg}</p>
                            <p className="text-[10px] mt-0.5" style={{ color: PRIMARY }}>{conv.agent}</p>
                          </div>
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1"
                            style={{
                              backgroundColor:
                                conv.status === "typing"
                                  ? PRIMARY
                                  : conv.status === "resolved"
                                  ? "#22c55e"
                                  : "#f59e0b",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Agent performance */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                      Rendimiento por agente
                    </p>
                    <div className="space-y-3">
                      {[
                        { agent: "SupportSoul", score: 94, conv: 142 },
                        { agent: "SDRSoul", score: 87, conv: 89 },
                        { agent: "AdminSoul", score: 99, conv: 34 },
                        { agent: "OpsSoul", score: 91, conv: 67 },
                      ].map((a) => (
                        <div key={a.agent} className="flex items-center gap-3">
                          <span className="text-xs text-zinc-400 w-24 flex-shrink-0">{a.agent}</span>
                          <div className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-1000"
                              style={{ width: `${a.score}%`, backgroundColor: PRIMARY }}
                            />
                          </div>
                          <span className="text-xs font-bold text-white w-8">{a.score}%</span>
                          <span className="text-[10px] text-zinc-600 w-14">{a.conv} conv.</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: COMPARISON ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: PRIMARY }}
            >
              La diferencia es clara
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Empleado tradicional vs. Empleado IA
            </h2>
          </div>

          <div
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            {/* Header row */}
            <div
              className="grid grid-cols-3 text-xs uppercase tracking-widest font-bold"
              style={{ backgroundColor: "#111111" }}
            >
              <div className="px-6 py-4 text-zinc-500">Característica</div>
              <div className="px-6 py-4 text-zinc-400 border-l" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                Empleado Tradicional
              </div>
              <div
                className="px-6 py-4 border-l text-[#080808] font-bold"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  backgroundColor: PRIMARY,
                  color: "#080808",
                }}
              >
                Empleado IA ✦
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 border-t text-sm"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="px-6 py-4 font-semibold text-white"
                  style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}
                >
                  {row.feature}
                </div>
                <div
                  className="px-6 py-4 text-zinc-500 border-l"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                  }}
                >
                  {row.traditional}
                </div>
                <div
                  className="px-6 py-4 font-semibold border-l"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    color: PRIMARY,
                    backgroundColor:
                      i % 2 === 0
                        ? "rgba(189,246,29,0.04)"
                        : "rgba(189,246,29,0.02)",
                  }}
                >
                  {row.ai}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGO CAROUSEL (existing clients) ── */}
      <section className="py-20 border-t border-white/5 overflow-hidden">
        <div className="text-center mb-12 px-6 md:px-12">
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">Ya confían en DevSoul</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Empresas que eligieron transformar su operación</h2>
        </div>
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee-track">
            {Array.from({ length: 4 }, (_, loopIndex) =>
              trustedBy.map((logo) => ({ ...logo, loopIndex }))
            )
              .flat()
              .map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="logo-marquee-item opacity-40 hover:opacity-70 transition-opacity">
                  {logo.link ? (
                    <a href={logo.link} target="_blank" rel="noopener noreferrer" aria-label={logo.name}>
                      <img
                        src={logo.img}
                        alt={logo.name}
                        className="h-12 w-auto object-contain filter grayscale invert"
                      />
                    </a>
                  ) : (
                    <img
                      src={logo.img}
                      alt={logo.name}
                      className="h-12 w-auto object-contain filter grayscale invert"
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contacto" className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: PRIMARY }}
            >
              Empezá hoy
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Agendá una reunión con nuestro equipo
            </h2>
            <p className="text-zinc-400">
              Contanos tu operación y diseñamos juntos el primer empleado digital para tu empresa. Sin compromiso.
            </p>
          </div>
          <DarkContactForm />
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA ── */}
      <section
        className="py-28 border-t border-white/5 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(189,246,29,0.1) 0%, transparent 70%), #080808",
        }}
      >
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-8"
            style={{
              borderColor: "rgba(189,246,29,0.3)",
              color: PRIMARY,
              backgroundColor: "rgba(189,246,29,0.06)",
            }}
          >
            <FaBolt />
            Workforce digital disponible ahora
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Construí tu organización híbrida.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
            Incorporá empleados digitales especializados y transformá la operación de tu empresa. Tu equipo se enfoca en lo que importa; los agentes hacen el resto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() =>
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-10 py-4 rounded-xl font-black text-[#080808] text-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-1 shadow-[0_0_40px_rgba(189,246,29,0.3)]"
              style={{ backgroundColor: PRIMARY }}
            >
              Agendar reunión
              <FaArrowRight />
            </button>
            <button
              onClick={() =>
                document.querySelector("#empleados-ia")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-white border border-white/15 text-lg hover:border-white/30 transition-all duration-200 hover:-translate-y-1"
            >
              Ver empleados IA
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Dark contact form (inline) ───────────────────────────────────────────────
import axios from "axios";

function DarkContactForm() {
  const [data, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name) return alert("Completá tu nombre");
    if (!data.email) return alert("Completá tu email");
    if (!data.message) return alert("Contanos sobre tu empresa");
    setSubmitting(true);
    try {
      await axios.post("/api/sendmail", data);
      setSubmitted(true);
    } catch {
      alert("Ocurrió un error. Intentá nuevamente.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl border p-12 text-center"
        style={{ borderColor: "rgba(189,246,29,0.3)", backgroundColor: "rgba(189,246,29,0.05)" }}
      >
        <FaCheckCircle className="text-5xl mx-auto mb-6" style={{ color: PRIMARY }} />
        <h3 className="text-2xl font-black text-white mb-3">¡Mensaje recibido!</h3>
        <p className="text-zinc-400">
          Nos pondremos en contacto en las próximas 24 horas para arrancar con el diagnóstico.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/30 transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border p-8 space-y-5"
      style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className={inputClass}
          placeholder="Nombre *"
          value={data.name}
          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
        />
        <input
          className={inputClass}
          type="email"
          placeholder="Email *"
          value={data.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className={inputClass}
          placeholder="Empresa"
          value={data.company}
          onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
        />
        <input
          className={inputClass}
          placeholder="Teléfono"
          value={data.phone}
          onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
        />
      </div>
      <textarea
        className={`${inputClass} resize-none`}
        rows={4}
        placeholder="Contanos sobre tu operación y qué procesos querés automatizar *"
        value={data.message}
        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-black text-[#080808] text-base transition-all duration-200 hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: PRIMARY }}
      >
        {submitting ? "Enviando..." : "Agendar reunión gratuita"}
        {!submitting && <FaArrowRight />}
      </button>
      <p className="text-center text-zinc-600 text-xs">
        ✓ Sin compromiso · ✓ Respuesta en 24h · ✓ Diagnóstico inicial gratis
      </p>
    </form>
  );
}

const trustedBy = [
  { name: "Bronovios", img: "/img/quienes-confiaron/bronovios.jpg", link: "https://www.bronovios.com/" },
  { name: "Prendete al Camino", img: "/img/quienes-confiaron/prendete-al-camino.webp", link: "https://www.prendetealcamino.com/" },
  { name: "Belleza Femenina", img: "/img/quienes-confiaron/belleza-femenina.jpg", link: "https://www.instagram.com/belleza_femenina_bf74/" },
  { name: "Instituto San Cristobal", img: "/img/quienes-confiaron/instituto-superior-san-cristobal.png", link: "https://issc.com.ar/" },
  { name: "Willy Donuts", img: "/img/quienes-confiaron/willydonuts.jpg", link: "https://www.instagram.com/willy.donuts/" },
];
