export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #003087 0%, #001a50 50%, #4a0000 85%, #CC0000 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-32 right-20 w-56 h-56 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/3 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8 anim-fade-up">
          <span className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" />
          <span className="text-white/80 text-sm font-medium">Santo Domingo, República Dominicana</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6 anim-fade-up-d1">
          Confort y Soluciones
          <span className="block text-[#ff6666]">para tu Hogar</span>
          <span className="block">y Negocio</span>
        </h1>

        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed anim-fade-up-d2">
          Instalación, mantenimiento y venta de aires acondicionados de las mejores marcas.
          Tu tranquilidad es nuestra misión.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center anim-fade-up-d3">
          <a
            href="#contacto"
            className="bg-[#CC0000] hover:bg-[#aa0000] text-white font-bold px-8 py-4 rounded text-base uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-lg shadow-red-900/30"
          >
            Solicitar Cotización
          </a>
          <a
            href="#servicios"
            className="border-2 border-white/50 hover:border-white text-white font-bold px-8 py-4 rounded text-base uppercase tracking-wider transition-all hover:bg-white/10"
          >
            Ver Servicios
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { num: "10+", label: "Categorías de Servicio" },
            { num: "6",   label: "Marcas Distribuidoras" },
            { num: "24/7", label: "Soporte disponible" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-white">{s.num}</div>
              <div className="text-white/60 text-xs mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
