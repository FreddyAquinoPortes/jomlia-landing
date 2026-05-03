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
            {[
              {
                icon: "📍",
                titulo: "Dirección",
                lineas: ["Av. Yolanda Guzmán", "Esquina Samaná #126", "Santo Domingo, RD"],
              },
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
              {
                icon: "📱",
                titulo: "Instagram",
                lineas: ["@Jomlia.srl"],
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
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7!2d-69.9312!3d18.4861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQXYuIFlvbGFuZGEgR3V6bcOhbiBFc3EuIFNhbWFuw6EgIzEyNg!5e0!3m2!1ses!2sdo!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Jomlia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
