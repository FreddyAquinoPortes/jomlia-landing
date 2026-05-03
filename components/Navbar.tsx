"use client";
import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#marcas",   label: "Marcas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#003087] shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.svg"
            alt="Jomlia Solution Services"
            width={44}
            height={44}
            priority
            loading="eager"
            className="h-10 w-10 object-contain block shrink-0"
          />
          <span className="text-white font-black text-xl leading-none tracking-wide hidden sm:block">
            JOMLIA
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/85 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/18496581250"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CC0000] hover:bg-[#aa0000] text-white text-sm font-bold px-5 py-2 rounded transition-colors"
          >
            Contáctanos
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#002070] px-6 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/85 hover:text-white text-sm font-medium py-2 border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/18496581250"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CC0000] text-white text-sm font-bold px-5 py-2.5 rounded text-center mt-2"
          >
            Contáctanos
          </a>
        </nav>
      )}
    </header>
  );
}
