"use client";
import Image from "next/image";

const marcas = [
  { nombre: "ComfortStar", logo: "/logos/comfortstar.png" },
  { nombre: "AirMax",      logo: "/logos/airmax.png" },
  { nombre: "Lennox",      logo: "/logos/lennox.png" },
  { nombre: "TGM",         logo: "/logos/tgm.png" },
  { nombre: "Comfort Time",logo: "/logos/comforttime.svg" },
  { nombre: "GAir",        logo: "/logos/gair.png" },
];

// Duplicar para el loop sin corte
const marqueeItems = [...marcas, ...marcas];

export default function Marcas() {
  return (
    <section id="marcas" className="py-16 bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">
          Marcas que distribuimos
        </span>
        <h2 className="text-2xl font-black text-[#1A1A2E] mt-2">
          Trabajamos con las Mejores Marcas
        </h2>
      </div>

      {/* Marquee infinito */}
      <div className="relative flex overflow-hidden">
        <div className="flex anim-marquee gap-12 whitespace-nowrap items-center">
          {marqueeItems.map((m, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 py-4 rounded-xl bg-white border border-gray-200 shadow-sm min-w-[180px] h-[88px] shrink-0 hover:shadow-md transition-shadow"
            >
              <div className="relative w-36 h-14 flex items-center justify-center">
                <Image
                  src={m.logo}
                  alt={`Logo ${m.nombre}`}
                  fill
                  sizes="144px"
                  className="object-contain"
                  unoptimized={m.logo.endsWith(".svg")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
