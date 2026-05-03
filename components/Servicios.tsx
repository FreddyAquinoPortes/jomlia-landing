const servicios = [
  {
    icon: "❄️",
    titulo: "Instalación y Desmonte",
    color: "#003087",
    items: ["Instalación de aires acondicionados", "Desmonte e instalación", "Instalación de luminarias"],
  },
  {
    icon: "🔧",
    titulo: "Mantenimiento y Reparación",
    color: "#CC0000",
    items: ["Mantenimiento correctivo", "Reparación de tarjetas electrónicas", "Mantenimiento preventivo"],
  },
  {
    icon: "⚡",
    titulo: "Electricidad y Suministros",
    color: "#1B5EAD",
    items: ["Electricidad en general", "Suministros para aires y luminarias", "Termostatos y breakers"],
  },
  {
    icon: "🏪",
    titulo: "Variedad de Productos",
    color: "#003087",
    items: ["Aires acondicionados", "Luminarias y lámparas", "Materiales eléctricos y refrigeración"],
  },
  {
    icon: "🏭",
    titulo: "Mantenimientos Especializados",
    color: "#CC0000",
    items: ["Cuartos fríos", "Plantas eléctricas", "Mantenimiento predictivo y preventivo"],
  },
  {
    icon: "🛡️",
    titulo: "Servicios Adicionales",
    color: "#1B5EAD",
    items: ["Fumigación", "Aplicación anticorrosiva", "Asesoría en tamaño de aires"],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#CC0000] text-sm font-bold tracking-widest uppercase">Lo que hacemos</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mt-2">
            Soluciones Completas
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Desde la instalación hasta el mantenimiento especializado. Una sola empresa para todas tus necesidades de climatización.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="group bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ borderTop: `4px solid ${s.color}` }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-black text-[#1A1A2E] mb-4">{s.titulo}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/18496581250"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-bold transition-colors"
                style={{ color: s.color }}
              >
                Cotizar este servicio →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
