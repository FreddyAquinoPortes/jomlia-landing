const valores = [
  { icon: "🎯", titulo: "Visión", desc: "Ser líderes en soluciones de climatización en República Dominicana." },
  { icon: "⚡", titulo: "Urgencia", desc: "Atención al cliente con sentido de urgencia y respuesta inmediata." },
  { icon: "🏆", titulo: "Excelencia", desc: "Siguiendo los más altos estándares de profesionalismo." },
  { icon: "🤝", titulo: "Comunidad", desc: "Tu socio en el bienestar y la comodidad del hogar y negocio." },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image placeholder with brand visual */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative"
              style={{ background: "linear-gradient(135deg, #003087 0%, #001a50 100%)" }}
            >
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 12px)",
                }}
              />
              <div className="relative z-10 text-center px-8">
                <div className="text-8xl mb-4">🏢</div>
                <p className="text-white font-bold text-xl">Jomlia Solution Services</p>
                <p className="text-white/60 text-sm mt-2">Av. Yolanda Guzmán Esq. Samaná #126<br />Santo Domingo, RD</p>
              </div>

              {/* Red accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#CC0000]" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#003087] flex items-center justify-center text-white text-2xl">
                ❄️
              </div>
              <div>
                <div className="font-black text-[#1A1A2E] text-sm">Técnicos Certificados</div>
                <div className="text-gray-400 text-xs">Listos para servirte</div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="text-[#CC0000] text-sm font-bold tracking-widest uppercase">Quiénes somos</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mt-2 mb-6 leading-tight">
              Somos tu Socio en el Bienestar y la Comodidad
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              En Jomlia Solution Services nos especializamos en soluciones integrales de climatización, electricidad y refrigeración. Desde la instalación meticulosa de aires acondicionados hasta el mantenimiento experto de plantas eléctricas y cuartos fríos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Cada rincón de tus espacios recibe la dedicación que merece. No solo colocamos equipos, sino que creamos ambientes donde cada respiración es sinónimo de confort.
            </p>

            {/* Valores grid */}
            <div className="grid grid-cols-2 gap-4">
              {valores.map((v) => (
                <div key={v.titulo} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="font-black text-[#003087] text-sm mb-1">{v.titulo}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
