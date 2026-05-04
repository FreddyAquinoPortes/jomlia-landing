"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: { translate: { TranslateElement: new (opts: object, el: string) => void } };
    googleTranslateElementInit: () => void;
  }
}

/** Dispara el evento de cambio de idioma en el select oculto de Google Translate.
 *  Google Translate requiere que el evento se dispare DOS veces con bubbles:true. */
function fireGTranslate(value: string) {
  const selects = document.querySelectorAll<HTMLSelectElement>(".goog-te-combo");
  selects.forEach((sel) => {
    sel.value = value;
    sel.dispatchEvent(new Event("change", { bubbles: true }));
    // Segunda llamada: quirk conocido de Google Translate
    sel.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

export default function TranslateButton() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [ready, setReady] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Contenedor oculto para el widget de Google Translate
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
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  // Un solo click alterna entre ES y EN sin importar el estado actual
  const toggle = () => {
    const next = lang === "es" ? "en" : "es";
    fireGTranslate(next);
    setLang(next);
  };

  if (!ready) return null;

  return (
    /* translate="no" evita que Google Translate traduzca el contenido del botón */
    <button
      onClick={toggle}
      translate="no"
      className="notranslate flex items-center gap-0.5 bg-white/15 hover:bg-white/25 border border-white/30 rounded-full px-1.5 py-1 transition-all select-none"
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span
        translate="no"
        className={`notranslate px-2.5 py-0.5 rounded-full text-xs font-black transition-all ${
          lang === "es" ? "bg-white text-[#003087]" : "text-white/60"
        }`}
      >
        ES
      </span>
      <span translate="no" className="notranslate text-white/40 text-xs font-light px-0.5">
        |
      </span>
      <span
        translate="no"
        className={`notranslate px-2.5 py-0.5 rounded-full text-xs font-black transition-all ${
          lang === "en" ? "bg-white text-[#003087]" : "text-white/60"
        }`}
      >
        EN
      </span>
    </button>
  );
}
