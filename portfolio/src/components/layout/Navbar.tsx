
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Projetos", href: "#projects" },
  { label: "Stack", href: "#skills" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
        if (entry.isIntersecting) setMenuOpen(false);
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      aria-hidden={!isVisible}
      inert={!isVisible}
      className={`fixed top-0 z-50 w-full border-b border-white/15 bg-[#080808]/95 backdrop-blur-xl transition-[opacity,transform] duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6"
      >
        <Link
          href="#home"
          className="group flex items-center gap-3 font-mono text-xl font-black uppercase tracking-[0.16em] text-white"
        >
          <span className="h-3 w-3 rotate-45 bg-[#A80F01] transition-transform group-hover:rotate-90" />
          Taylor<span className="text-white/45">.</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#A80F01] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] border border-[#A80F01] bg-[#A80F01] px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black md:block"
        >
          Contato <span aria-hidden="true" className="ml-1">↗</span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="border border-white/25 p-2 text-white transition-colors hover:border-[#A80F01] hover:text-[#d34a3d] md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/15 bg-[#080808] p-6 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white"
              >
                <span className="mr-3 text-[#A80F01]">/</span>
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 bg-[#A80F01] px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Entre em contato <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
