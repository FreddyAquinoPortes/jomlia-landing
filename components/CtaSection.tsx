export default function CtaSection() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "#CC0000" }}>
      {/* Diagonal stripes decoration */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          ¿Necesitas un Mantenimiento o Instalación?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Cotiza con nosotros hoy mismo. Técnicos certificados, respuesta rápida e instalaciones con criterio y calidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/18496581250"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-[#CC0000] font-black px-8 py-4 rounded text-base uppercase tracking-wider hover:bg-gray-100 transition-all shadow-xl"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.126 1.523 5.867L.057 23.88a.5.5 0 00.617.617l6.001-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.523-5.178-1.434l-.37-.22-3.832.932.95-3.74-.24-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Contáctanos por WhatsApp
          </a>

          <div className="text-white/90">
            <div className="text-3xl font-black">(849) 658-1250</div>
            <div className="text-sm text-white/60">Llámanos directamente</div>
          </div>
        </div>
      </div>
    </section>
  );
}
