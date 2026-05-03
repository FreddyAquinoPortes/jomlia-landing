const marcas = [
  "ComfortStar", "AirMax", "Lennox", "TGM", "Comfort Time", "GAir",
  "ComfortStar", "AirMax", "Lennox", "TGM", "Comfort Time", "GAir",
];

export default function Marcas() {
  return (
    <section id="marcas" className="py-16 bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">Marcas que distribuimos</span>
        <h2 className="text-2xl font-black text-[#1A1A2E] mt-2">Trabajamos con las Mejores Marcas</h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex anim-marquee gap-16 whitespace-nowrap">
          {marcas.map((m, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 py-3 rounded-lg bg-gray-50 border border-gray-200 min-w-[160px]"
            >
              <span className="font-black text-[#003087] text-lg tracking-wide">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
