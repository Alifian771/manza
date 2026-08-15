"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navigation = [
  { label: "Stay", href: "/stay" },
  { label: "Onsen", href: "/onsen" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Access", href: "/access" },
];

const GOLD = "#b69150";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open, close on Escape
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-black/10 bg-[#f7f4ed]/90 text-[#20231f] shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
          : "border-white/15 bg-gradient-to-b from-black/35 to-transparent text-white"
      }`}
    >
      <div className="container-premium relative flex h-[82px] items-center justify-between md:h-[94px]">
        <a href="#home" className="relative z-20 flex items-center gap-3">
          <Image
            src="/images/manza-logo.png"
            alt="Manza Onsen Nisshinkan"
            width={160}
            height={50}
            priority
            className="h-auto w-[130px] md:w-[160px]"
          />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex xl:gap-11">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 hover:text-[#b69150]"
            >
              {item.label}
              <span
                className="absolute bottom-1 left-0 h-px w-0 bg-[#b69150] transition-all duration-300 ease-out group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        <div className="relative z-20 flex items-center gap-3">

          <LanguageSwitcher />
          
          <a
            href="/booking"
            className={`hidden min-w-[132px] border px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.17em] transition-all duration-300 sm:block ${
              scrolled
                ? "border-[#b69150] bg-[#b69150] text-[#20231f] hover:bg-transparent hover:text-[#b69150]"
                : "border-[#b69150]/80 bg-[#b69150] text-[#20231f] hover:bg-transparent hover:text-white hover:border-white"
            }`}
          >
            Book now
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((current) => !current)}
            className={`flex size-11 items-center justify-center border transition-colors duration-300 lg:hidden ${
              scrolled ? "border-black/20" : "border-white/30"
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden bg-[#172019] text-white transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <nav className="container-premium flex flex-col py-8">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-white/15 py-5 text-sm uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#b69150]"
            >
              <span>{item.label}</span>
              <span className="text-white/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}

          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-8 bg-[#b69150] px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#20231f] transition-colors duration-300 hover:bg-[#c9a668]"
          >
            Book your stay
          </a>
        </nav>
      </div>
    </header>
  );
}