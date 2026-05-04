"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

const slides: Slide[] = [
  { type: "image", src: "/slider/slider2-1.jpg", alt: "Técnicos Jomlia en trabajo" },
  { type: "video", src: "/slider/slider2-video.mp4" },
  { type: "image", src: "/slider/slider2-2.jpg", alt: "Servicio técnico certificado Jomlia" },
];

const IMAGE_DURATION = 4500;

export default function SecondarySlider() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const next = () => setActive((i) => (i + 1) % slides.length);

  useEffect(() => {
    const slide = slides[active];

    if (slide.type === "video") {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = 0;
      video.play().catch(() => {});
      video.addEventListener("ended", next, { once: true });
      return () => video.removeEventListener("ended", next);
    } else {
      // Image — use fixed timer
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      const id = setTimeout(next, IMAGE_DURATION);
      return () => clearTimeout(id);
    }
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-xl">
        {/* Top strip — Técnicos Certificados */}
        <div className="absolute top-0 left-0 right-0 bg-[#003087] px-5 py-3 z-20 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-lg flex-shrink-0">
            ❄️
          </div>
          <div>
            <div className="font-black text-white text-sm leading-tight">Técnicos Certificados</div>
            <div className="text-white/75 text-xs">Listos para servirte</div>
          </div>
        </div>

        {/* Image slides */}
        {slides.map((s, i) =>
          s.type === "image" ? (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={i === 0}
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : null
        )}

        {/* Video slide — no loop so ended fires */}
        {slides.map((s, i) =>
          s.type === "video" ? (
            <video
              key="video"
              ref={videoRef}
              src={s.src}
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : null
        )}

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
