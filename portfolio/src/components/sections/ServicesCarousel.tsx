"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Database,
  PanelsTopLeft,
  Smartphone,
  Workflow,
  Monitor,
  DraftingCompass,
} from "lucide-react";

const services = [
  {
    icon: PanelsTopLeft,
    title: "Desenvolvimento web",
    description:
      "Criação de sites e interfaces responsivas, com atenção à navegação, ao visual e à experiência em diferentes telas.",
    code: "WEB / 01",
  },
  {
    icon: Workflow,
    title: "APIs e integrações",
    description:
      "Desenvolvimento de APIs e conexão entre serviços para facilitar a troca de informações entre aplicações.",
    code: "API / 02",
  },
  {
    icon: Database,
    title: "Sistemas e dados",
    description:
      "Estruturação de aplicações e bancos de dados para organizar informações e apoiar funcionalidades do sistema.",
    code: "DATA / 03",
  },
  {
    icon: Smartphone,
    title: "Aplicação mobile",
    description:
      "Interfaces pensadas para smartphones, com navegação simples e uma experiência adaptada a telas menores.",
    code: "MOBILE / 04",
  },
  {
    icon: Monitor,
    title: "Aplicação desktop",
    description:
      "Soluções para desktop com foco em organização, legibilidade e fluxos de uso adequados a cada aplicação.",
    code: "DESKTOP / 05",
  },
  {
    icon: DraftingCompass,
    title: "UI/UX design",
    description:
      "Planejamento de interfaces e fluxos que tornam produtos digitais mais claros, consistentes e fáceis de usar.",
    code: "UI/UX / 06",
  },
];

export function ServicesCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const getMaxIndex = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;
    if (!viewport || !track || !firstCard) return 0;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const visibleCards = Math.max(
      1,
      Math.floor((viewport.clientWidth + gap) / (cardWidth + gap)),
    );

    return Math.max(0, services.length - visibleCards);
  }, []);

  const scrollToService = useCallback((index: number) => {
    const viewport = viewportRef.current;
    const card = trackRef.current?.children[index];
    if (!viewport || !card) return;

    const left =
      card.getBoundingClientRect().left -
      viewport.getBoundingClientRect().left +
      viewport.scrollLeft;

    viewport.scrollTo({ left, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  const updateActiveService = useCallback(() => {
    const viewport = viewportRef.current;
    const cards = trackRef.current?.children;
    if (!viewport || !cards?.length) return;

    const viewportLeft = viewport.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(cards).forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - viewportLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(Math.min(closestIndex, getMaxIndex()));
  }, [getMaxIndex]);

  useEffect(() => {
    function updateCarouselBounds() {
      const nextMaxIndex = getMaxIndex();
      setMaxIndex(nextMaxIndex);
      setActiveIndex((currentIndex) => Math.min(currentIndex, nextMaxIndex));
    }

    updateCarouselBounds();
    window.addEventListener("resize", updateCarouselBounds);
    return () => window.removeEventListener("resize", updateCarouselBounds);
  }, [getMaxIndex]);

  return (
    <div>
      <div
        ref={viewportRef}
        onScroll={updateActiveService}
        role="region"
        aria-label="Serviços oferecidos"
        aria-roledescription="carrossel"
        tabIndex={0}
        className="overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#A80F01]"
      >
        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4"
        >
          {services.map(({ icon: Icon, title, description, code }) => (
            <li
              key={title}
              className="group relative flex min-h-72 w-full shrink-0 snap-start flex-col border border-white/10 bg-[#0b0b0b]/90 p-7 transition-colors hover:border-[#A80F01]/60 sm:w-[calc((100%-1rem)/2)] sm:p-8 lg:w-[calc((100%-2rem)/3)]"
            >
              <div className="mb-9 flex items-center justify-between">
                <Icon
                  size={36}
                  strokeWidth={1.5}
                  className="text-[#d34a3d] transition-transform group-hover:-translate-y-1"
                  aria-hidden="true"
                />
                <span className="font-mono text-[9px] tracking-[0.18em] text-white/30">
                  {code}
                </span>
              </div>
              <h3 className="font-mono text-base font-bold uppercase tracking-[0.08em] text-white sm:text-lg">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
                {description}
              </p>
              <span
                className="absolute bottom-0 left-7 h-px w-10 bg-[#A80F01] transition-all group-hover:w-20 sm:left-8"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => scrollToService(Math.max(activeIndex - 1, 0))}
          disabled={activeIndex === 0}
          aria-label="Serviço anterior"
          className="border border-white/15 p-2 text-white/60 transition-colors hover:border-[#A80F01] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft size={16} aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" aria-label="Selecionar grupo de serviços">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToService(index)}
              aria-label={`Ir para o grupo ${index + 1} de serviços`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 transition-all ${
                activeIndex === index
                  ? "w-6 bg-[#A80F01]"
                  : "w-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToService(Math.min(activeIndex + 1, maxIndex))}
          disabled={activeIndex === maxIndex}
          aria-label="Próximo serviço"
          className="border border-white/15 p-2 text-white/60 transition-colors hover:border-[#A80F01] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
