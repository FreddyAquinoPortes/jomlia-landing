"use client";
import { useState } from "react";

export default function Contacto() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      nombre:   (form.elements.namedItem("nombre")   as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      servicio: (form.elements.namedItem("servicio") as HTMLSelectElement).value,
      mensaje:  (form.elements.namedItem("mensaje")  as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
                lineas: ["C. Jose Cabrera 16", "Santo Domingo Este 11501", "República Dominicana"],
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
                onSubmit={handleSubmit}
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
                  disabled={status === "sending"}
                  className="bg-[#CC0000] hover:bg-[#aa0000] disabled:opacity-60 text-white font-bold py-3 rounded text-sm uppercase tracking-wider transition-colors"
                >
                  {status === "sending" ? "Enviando..." : "Enviar Solicitud"}
                </button>
                {status === "ok" && (
                  <p className="text-green-600 text-sm font-medium text-center">
                    ✅ ¡Solicitud enviada! Te contactaremos pronto.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm font-medium text-center">
                    ❌ Error al enviar. Llámanos al (849) 658-1250.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 min-h-[500px]">
            <iframe
              src="https://maps.google.com/maps?q=18.494926405201987,-69.87003328220872&hl=es&z=17&output=embed"
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
