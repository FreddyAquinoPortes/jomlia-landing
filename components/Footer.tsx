import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Jomlia" width={48} height={48} className="object-contain" />
              <div>
                <div className="font-black text-xl">JOMLIA</div>
                <div className="text-white/50 text-xs">SOLUTION SERVICES</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Tu socio en el bienestar y la comodidad. Líderes en climatización, electricidad y refrigeración en Santo Domingo.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-4 text-white/80">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                "Instalación de Aires Acondicionados",
                "Mantenimiento Preventivo",
                "Mantenimiento Correctivo",
                "Electricidad y Suministros",
                "Cuartos Fríos y Plantas Eléctricas",
                "Fumigación y Anticorrosivo",
              ].map((s) => (
                <li key={s} className="hover:text-white transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-4 text-white/80">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>📍 Av. Yolanda Guzmán Esq. Samaná #126<br />
                <span className="ml-6">Santo Domingo, RD</span>
              </li>
              <li>📞 (849) 658-1250</li>
              <li>✉️ proyectos@jomlia.com</li>
              <li>
                <a
                  href="https://instagram.com/jomlia.srl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  📱 @Jomlia.srl
                </a>
              </li>
            </ul>

            <a
              href="https://wa.me/18496581250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.126 1.523 5.867L.057 23.88a.5.5 0 00.617.617l6.001-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.523-5.178-1.434l-.37-.22-3.832.932.95-3.74-.24-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/40 text-xs">
          <span>© {year} Jomlia Solution Services. Todos los derechos reservados.</span>
          <span>Diseñado para tu confort. 🇩🇴</span>
        </div>
      </div>
    </footer>
  );
}
