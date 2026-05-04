"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  duration?: number;          // total ms (default 3000)
  onFinish?: () => void;      // called once animation completes
};

// Temperature gradient stops: hot → cold
const STOPS: { t: number; c: [number, number, number] }[] = [
  { t: 0,    c: [220, 38, 38]   }, // 40°C red-600
  { t: 0.25, c: [249, 115, 22]  }, // 30°C orange-500
  { t: 0.5,  c: [250, 204, 21]  }, // ~26°C yellow-400
  { t: 0.75, c: [255, 255, 255] }, // ~24°C white
  { t: 1,    c: [125, 211, 252] }, // 21°C sky-300
];

function lerpColor(p: number) {
  for (let i = 0; i < STOPS.length - 1; i++) {
    const a = STOPS[i], b = STOPS[i + 1];
    if (p <= b.t) {
      const k = (p - a.t) / (b.t - a.t);
      const r = Math.round(a.c[0] + (b.c[0] - a.c[0]) * k);
      const g = Math.round(a.c[1] + (b.c[1] - a.c[1]) * k);
      const bl = Math.round(a.c[2] + (b.c[2] - a.c[2]) * k);
      return `rgb(${r} ${g} ${bl})`;
    }
  }
  return `rgb(${STOPS.at(-1)!.c.join(" ")})`;
}

// Zig-zag coil path — refrigeration evaporator shape
const COIL_PATH =
  "M 20 60 L 80 60 Q 110 60 110 30 Q 110 0 140 0 L 200 0 Q 230 0 230 30 Q 230 60 260 60 L 320 60 Q 350 60 350 30 Q 350 0 380 0 L 440 0 Q 470 0 470 30 Q 470 60 500 60 L 560 60";

export default function SplashScreen({ duration = 3000, onFinish }: Props) {
  const [progress, setProgress] = useState(0); // 0..1
  const [done, setDone] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(p);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350); // post-coil pause
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [duration]);

  useEffect(() => {
    if (done) onFinish?.();
  }, [done, onFinish]);

  const temp = (40 - 19 * progress).toFixed(1);
  const color = lerpColor(progress);
  const coilLen = 900; // approx path length for stroke-dasharray
  const isCold = progress > 0.6;

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#05091a",
        backgroundImage: `radial-gradient(circle at 50% 45%,
          rgb(${Math.round(40 - progress * 30)} ${Math.round(50 - progress * 30)} ${Math.round(90 + progress * 20)}) 0%,
          #05091a 70%)`,
      }}
    >
      {/* Heat shimmer (fades out as it cools) */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: Math.max(0, 1 - progress * 1.6),
          background:
            "repeating-linear-gradient(0deg, rgba(255,120,40,0.05) 0 2px, transparent 2px 6px)",
          animation: "shimmer 2s linear infinite",
        }}
      />

      {/* Embers (hot phase) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity: Math.max(0, 1 - progress * 1.8) }}
      >
        {Array.from({ length: 28 }).map((_, i) => {
          const size = 2 + (i % 4);
          return (
            <span
              key={i}
              className="absolute rounded-full particle-ember"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${(i * 37) % 100}%`,
                top: `-10px`,
                background:
                  "radial-gradient(circle, #fff5b0 0%, #ffae33 35%, #ff3a1f 70%, transparent 100%)",
                boxShadow: "0 0 8px 2px rgba(255,120,40,0.6)",
                ["--p-dur" as string]: `${3.5 + (i % 5) * 0.6}s`,
                ["--p-delay" as string]: `${i * 0.12}s`,
              }}
            />
          );
        })}
      </div>

      {/* Snowflakes (cold phase) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity: Math.max(0, (progress - 0.45) * 2) }}
      >
        {Array.from({ length: 26 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-sky-100 particle-snow"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `-20px`,
              fontSize: `${10 + (i % 5) * 3}px`,
              opacity: 0.7 + ((i % 3) * 0.1),
              filter: "drop-shadow(0 0 4px rgba(186,230,253,0.7))",
              ["--p-dur" as string]: `${6 + (i % 6)}s`,
              ["--p-delay" as string]: `${i * 0.2}s`,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      {/* Logo */}
      <div
        className="relative mb-12"
        style={{
          filter: `drop-shadow(0 0 ${10 + progress * 30}px ${color})`,
          animation: "logoIn 900ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        }}
      >
        <Image
          src="/logo.png"
          alt="Jomlia Solution Services"
          width={140}
          height={140}
          priority
          className="block w-32 h-32 sm:w-36 sm:h-36 object-contain"
        />
      </div>

      {/* Coil progress bar */}
      <svg
        viewBox="0 0 580 80"
        className="w-[80vw] max-w-xl h-20"
        aria-label="Refrigeration coil progress"
      >
        <defs>
          <filter id="coilGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Track (faint) */}
        <path
          d={COIL_PATH}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Active coil */}
        <path
          d={COIL_PATH}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={coilLen}
          strokeDashoffset={coilLen * (1 - progress)}
          filter="url(#coilGlow)"
          style={{ transition: "stroke 80ms linear" }}
        />
      </svg>

      {/* Temperature + percent */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <span
          className="text-5xl sm:text-6xl font-black tabular-nums tracking-tight transition-colors duration-100"
          style={{ color, textShadow: `0 0 24px ${color}` }}
        >
          {temp}°C
        </span>
        <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
          Enfriando sistema · {Math.round(progress * 100)}%
        </span>
      </div>

      {/* Frost overlay edges (appears when cold) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: isCold ? (progress - 0.6) * 2.5 : 0,
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(186,230,253,0.18) 100%)",
        }}
      />

    </div>
  );
}
