export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#CC0000] text-sm font-bold tracking-widest uppercase">Encuéntranos</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mt-2">Visítanos o Contáctanos</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {/* Dirección — clickeable a Google Maps */}
            <a
              href="https://www.google.com/maps?q=18.489100321242827,-69.88945497528967"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#003087] hover:shadow-md transition-all group"
            >
              <div className="text-3xl">📍</div>
              <div>
                <div className="font-black text-[#003087] text-sm mb-1 group-hover:underline underline-offset-2">Dirección</div>
                <div className="text-gray-600 text-sm group-hover:text-[#003087] transition-colors">Av. Yolanda Guzmán</div>
                <div className="text-gray-600 text-sm group-hover:text-[#003087] transition-colors">Esquina Samaná #126</div>
                <div className="text-gray-600 text-sm group-hover:text-[#003087] transition-colors">Santo Domingo, RD</div>
              </div>
            </a>

            {[
              {
                icon: "📞",
                titulo: "Teléfono",
                lineas: ["(849) 658-1250"],
              },
              {
                icon: "✉️",
                titulo: "Correo",
                lineas: ["proyectos@jomlia.com", "operacionesjomlia@gmail.com"],
              },
            ].map((c) => (
              <div key={c.titulo} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-3xl">{c.icon}</div>
                <div>
                  <div className="font-black text-[#003087] text-sm mb-1">{c.titulo}</div>
                  {c.lineas.map((l) => (
                    <div key={l} className="text-gray-600 text-sm">{l}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jomlia.srl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-pink-300 transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0 text-[#E1306C] fill-current" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <div>
                <div className="font-black text-[#003087] text-sm mb-1 group-hover:text-[#E1306C] transition-colors">Instagram</div>
                <div className="text-gray-600 text-sm">@Jomlia.srl</div>
              </div>
            </a>

            {/* Quick form */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-black text-[#1A1A2E] mb-4">Solicitar Cotización</h3>
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  required
                  className="border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#003087] transition-colors"
                />
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono / WhatsApp"
                  required
                  className="border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#003087] transition-colors"
                />
                <select
                  name="servicio"
                  className="border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#003087] transition-colors"
                >
                  <option value="">Tipo de servicio</option>
                  <option>Instalación de aires</option>
                  <option>Mantenimiento preventivo</option>
                  <option>Mantenimiento correctivo</option>
                  <option>Electricidad y suministros</option>
                  <option>Cuartos fríos / Plantas eléctricas</option>
                  <option>Fumigación</option>
                  <option>Otro</option>
                </select>
                <textarea
                  name="mensaje"
                  placeholder="Describe brevemente tu necesidad…"
                  rows={3}
                  className="border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#003087] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="bg-[#CC0000] hover:bg-[#aa0000] text-white font-bold py-3 rounded text-sm uppercase tracking-wider transition-colors"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 min-h-[500px] flex flex-col">
            {/* Open in Maps link */}
            <a
              href="https://www.google.com/maps?q=18.488912101259707,-69.88946570286477"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-4 py-2.5 text-sm font-semibold text-[#003087] hover:bg-gray-50 transition-colors border-b border-gray-200 shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Abrir en Maps
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d961.2!2d-69.88946570286477!3d18.488912101259707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzIwLjEiTiA2OcKwNTMnMjIuMSJX!5e0!3m2!1ses!2sdo!4v1234567890!5m2!1ses!2sdo&markers=color:red%7C18.488912101259707,-69.88946570286477"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "460px", flex: 1 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Jomlia Solution Services"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
