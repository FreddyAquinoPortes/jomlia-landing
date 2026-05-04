"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: { translate: { TranslateElement: new (opts: object, el: string) => void } };
    googleTranslateElementInit: () => void;
  }
}

export default function TranslateButton() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [ready, setReady] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Hidden container for the Google Translate widget
    const div = document.createElement("div");
    div.id = "google_translate_element";
    div.style.display = "none";
    document.body.appendChild(div);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "es", includedLanguages: "en,es", autoDisplay: false },
        "google_translate_element"
      );
      setReady(true);
    };

    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const switchTo = (target: "es" | "en") => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) return;
    select.value = target === "en" ? "en" : "es";
    select.dispatchEvent(new Event("change"));
    setLang(target);
  };

  if (!ready) return null;

  return (
    <div className="flex items-center gap-1 bg-white/15 rounded-full px-1 py-1 border border-white/25">
      <button
        onClick={() => switchTo("es")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          lang === "es"
            ? "bg-white text-[#003087]"
            : "text-white/80 hover:text-white"
        }`}
        aria-label="Español"
      >
        ES
      </button>
      <button
        onClick={() => switchTo("en")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          lang === "en"
            ? "bg-white text-[#003087]"
            : "text-white/80 hover:text-white"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
