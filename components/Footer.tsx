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
              <li>
                <a
                  href="https://www.google.com/maps?q=18.489100321242827,-69.88945497528967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-white transition-colors group"
                >
                  <span>📍</span>
                  <span className="group-hover:underline underline-offset-2">
                    Av. Yolanda Guzmán Esq. Samaná #126<br />
                    <span className="ml-0">Santo Domingo, RD</span>
                  </span>
                </a>
              </li>
              <li>📞 (849) 658-1250</li>
              <li>✉️ proyectos@jomlia.com</li>
              <li>
                <a
                  href="https://www.instagram.com/jomlia.srl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-current text-[#E1306C]" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  @Jomlia.srl
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

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/40 text-xs">
          <span>© {year} Jomlia Solution Services &amp; Getwavely. Todos los derechos reservados.</span>
          <a
            href="https://getwavely.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white/80 transition-colors group"
          >
            <span className="text-white/30 group-hover:text-white/60 transition-colors">Powered by</span>
            <Image
              src="/getwavely_logo.png"
              alt="Getwavely"
              width={80}
              height={20}
              className="object-contain opacity-40 group-hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
