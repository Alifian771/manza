"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em]">

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`transition-all duration-300 ${
          language === "en"
            ? "opacity-100"
            : "opacity-40 hover:opacity-70"
        }`}
      >
        EN
      </button>

      <span className="opacity-30">
        /
      </span>

      <button
        type="button"
        onClick={() => setLanguage("ja")}
        className={`transition-all duration-300 ${
          language === "ja"
            ? "opacity-100"
            : "opacity-40 hover:opacity-70"
        }`}
      >
        JP
      </button>

    </div>
  );
}