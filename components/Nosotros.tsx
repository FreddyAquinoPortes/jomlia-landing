"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SecondarySlider from "./SecondarySlider";

const slides = [
  { src: "/slider/slider-1.jpg", alt: "Equipo Jomlia en obra" },
  { src: "/slider/slider-2.jpg", alt: "Instalación profesional Jomlia" },
];

const valores = [
  { icon: "🎯", titulo: "Visión", desc: "Ser líderes en soluciones de climatización en República Dominicana." },
  { icon: "⚡", titulo: "Urgencia", desc: "Atención al cliente con sentido de urgencia y respuesta inmediata." },
  { icon: "🏆", titulo: "Excelencia", desc: "Siguiendo los más altos estándares de profesionalismo." },
  { icon: "🤝", titulo: "Comunidad", desc: "Tu socio en el bienestar y la comodidad del hogar y negocio." },
];

export default function Nosotros() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="nosotros" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] gap-10 items-start">

          {/* ── Slider 1 ── */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-xl">
              {slides.map((s, i) => (
                <Image
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  priority={i === 0}
                  className={`object-cover transition-opacity duration-1000 ease-in-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />

              {/* Dots */}
              <div className="absolute bottom-[5.5rem] left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Ir a imagen ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              {/* Red strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#CC0000] px-6 py-4 z-10">
                <div className="text-white font-black text-base sm:text-lg leading-tight">
                  Jomlia Solution Services
                </div>
                <div className="text-white/85 text-xs sm:text-sm mt-0.5">
                  Av. Yolanda Guzmán Esq. Samaná #126 · Santo Domingo, RD
                </div>
              </div>
            </div>
          </div>

          {/* ── Text content ── */}
          <div>
            <span className="text-[#CC0000] text-sm font-bold tracking-widest uppercase">Quiénes somos</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-2 mb-6 leading-tight">
              Somos tu Socio en el Bienestar y la Comodidad
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              En Jomlia Solution Services nos especializamos en soluciones integrales de climatización, electricidad y refrigeración. Desde la instalación meticulosa de aires acondicionados hasta el mantenimiento experto de plantas eléctricas y cuartos fríos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Cada rincón de tus espacios recibe la dedicación que merece. No solo colocamos equipos, sino que creamos ambientes donde cada respiración es sinónimo de confort.
            </p>

            {/* Valores grid */}
            <div className="grid grid-cols-2 gap-3">
              {valores.map((v) => (
                <div key={v.titulo} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="text-xl mb-1">{v.icon}</div>
                  <div className="font-black text-[#003087] text-xs mb-0.5">{v.titulo}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Slider 2 ── */}
          <SecondarySlider />

        </div>
      </div>
    </section>
  );
}
