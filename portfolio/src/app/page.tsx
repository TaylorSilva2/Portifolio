import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Lightbulb,
  Target,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#080808] font-sans text-white">
      <Navbar />
      <main className="flex w-full flex-1 flex-col">
        <section
          id="home"
          aria-labelledby="hero-title"
          className="cyber-hero relative isolate flex min-h-screen scroll-mt-[88px] items-center overflow-hidden px-6 pb-16 pt-[112px] sm:px-10 lg:px-16 lg:py-28"
        >
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div className="relative mx-auto w-full max-w-[440px] lg:mx-0">
              <div className="absolute -inset-3 border border-[#A80F01]/35" aria-hidden="true" />
              <div className="absolute -left-3 -top-3 z-10 h-12 w-12 border-l-2 border-t-2 border-[#e53b2b]" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 z-10 h-12 w-12 border-b-2 border-r-2 border-[#e53b2b]" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#151515]">
                <Image
                  src="/images/hero/20250614_002147.jpg"
                  alt="Taylor Henrique"
                  fill
                  priority
                  sizes="(max-width: 1024px) 85vw, 440px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" aria-hidden="true" />
                <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
                  <span className="h-1.5 w-1.5 bg-[#e53b2b]" aria-hidden="true" />
                  Perfil <span aria-hidden="true">{"//"}</span> 001
                </div>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-white/25 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                  <span>Identidade digital</span>
                  <span>T.H / 001</span>
                </div>
              </div>
              <span className="absolute -bottom-9 left-0 font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">
                SERIAL <span aria-hidden="true">{"//"}</span> TH-001
              </span>
            </div>

            <div className="relative py-4 lg:py-12">
              <div className="mb-8 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[#e5685e] sm:text-xs">
                <span className="h-px w-10 bg-[#A80F01]" aria-hidden="true" />
                Portfólio digital
                <span className="text-white/30">{"//"} T.H-001</span>
              </div>

              <h1
                id="hero-title"
                className="font-mono text-[clamp(3.2rem,8vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.08em]"
              >
                Taylor
                <span className="mt-2 block text-white/55">Henrique<span className="text-[#d32f21]">.</span></span>
              </h1>

              <div className="my-8 flex items-center gap-3 sm:my-10">
                <span className="h-1 w-12 bg-[#A80F01]" aria-hidden="true" />
                <span className="h-px flex-1 max-w-40 bg-white/20" aria-hidden="true" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">TH / 001</span>
              </div>

              <p className="max-w-xl text-xl leading-relaxed text-white/75 sm:text-2xl lg:text-[1.7rem]">
                Transformando lógica e código em{" "}
                <span className="text-white">soluções reais.</span>
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 bg-[#A80F01] px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#d32f21]"
                >
                  Explorar projetos
                  <ArrowDownRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 border border-white/20 px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white/70 transition-colors hover:border-white/60 hover:text-white"
                >
                  Entrar em contato
                  <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-title"
          className="relative isolate overflow-hidden border-t border-white/10 bg-[#0b0b0b] px-6 py-24 scroll-mt-[88px] sm:px-10 sm:py-32 lg:px-16"
        >
          <div className="pointer-events-none absolute -right-10 top-12 -z-10 select-none font-mono text-[18rem] font-black leading-none text-white/[0.025]">
            02
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[#e5685e] sm:text-xs">
              <span className="h-px w-10 bg-[#A80F01]" aria-hidden="true" />
              02 <span className="text-white/30">{"//"}</span> Sobre mim
            </div>

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <h2
                  id="about-title"
                  className="max-w-xl font-mono text-4xl font-black uppercase leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl"
                >
                  Ideias ganham forma através do{" "}
                  <span className="text-[#d32f21]">código.</span>
                </h2>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-1 w-12 bg-[#A80F01]" aria-hidden="true" />
                  <span className="h-px w-24 bg-white/20" aria-hidden="true" />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-white/75 sm:text-xl">
                  Ola! sou <span className="font-semibold text-white">Taylor Henrique</span>, um desenvolvedor Full Stack em formação, apaixonado por tecnologia e pelo desenvolvimento de soluções que transformam ideias em aplicações reais.
                </p>
                <p className="mt-5 max-w-2xl leading-relaxed text-white/50 sm:text-lg">
                Atualmente, curso Análise e Desenvolvimento de Sistemas na FATEC Prof. Jessen Vidal e possuo formação técnica em Administração, combinação que contribui para minha visão analítica, organização e compreensão de processos.


                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: Code2, label: "Lógica", detail: "Pensar soluções" },
                    { icon: Lightbulb, label: "Criatividade", detail: "Explorar ideias" },
                    { icon: Target, label: "Propósito", detail: "Gerar impacto" },
                  ].map(({ icon: Icon, label, detail }, index) => (
                    <div
                      key={label}
                      className="group border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-[#A80F01]/60"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <Icon size={19} className="text-[#d34a3d]" aria-hidden="true" />
                        <span className="font-mono text-[9px] tracking-[0.16em] text-white/25">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/85">
                        {label}
                      </h3>
                      <p className="mt-1 text-xs text-white/40">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 border-t border-white/10 pt-12">
              <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                <div>
                  <div className="mb-7 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[#e5685e] sm:text-xs">
                    <span className="h-px w-10 bg-[#A80F01]" aria-hidden="true" />
                    Perfil
                  </div>
                  <p className="max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
                    Minha trajetória combina tecnologia, aprendizado contínuo e uma
                    visão organizada para resolver problemas.
                  </p>

                  <dl className="mt-9 space-y-6">
                    {[
                      { label: "Nome", value: "Taylor Henrique" },
                      { label: "Cargo", value: "Desenvolvedor Full Stack em formação" },
                      {
                        label: "Graduação",
                        value: "Análise e Desenvolvimento de Sistemas — FATEC Prof. Jessen Vidal",
                      },
                      { label: "Formação técnica", value: "Administração - ETEC Machado Assis" },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                          {label}
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-white/50 sm:text-base">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div id="skills" className="scroll-mt-28">
                  <div className="mb-7 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[#e5685e] sm:text-xs">
                    <span className="h-px w-10 bg-[#A80F01]" aria-hidden="true" />
                    Skills
                  </div>
                  <h3 className="font-mono text-2xl font-black uppercase tracking-[0.12em] sm:text-3xl">
                    Minhas tecnologias
                  </h3>
                  <p className="mt-3 text-sm text-white/50 sm:text-base">
                    Tecnologias que fazem parte da minha jornada.
                  </p>

                  <div className="mt-9 space-y-8">
                    {[
                      {
                        category: "Front-end",
                        technologies: [
                          { name: "React", icon: "devicon-react-original" },
                          { name: "Next.js", icon: "devicon-nextjs-plain" },
                          { name: "TypeScript", icon: "devicon-typescript-plain" },
                          { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
                        ],
                      },
                      {
                        category: "Back-end",
                        technologies: [
                          { name: "Python", icon: "devicon-python-plain" },
                          { name: "FastAPI", icon: "devicon-fastapi-plain" },
                          { name: "Java", icon: "devicon-java-plain" },
                          { name: "Node.js", icon: "devicon-nodejs-plain" },
                          { name: "Docker", icon: "devicon-docker-plain" },
                        ],
                      },
                      {
                        category: "Database",
                        technologies: [
                          { name: "MySQL", icon: "devicon-mysql-original" },
                          { name: "MongoDB", icon: "devicon-mongodb-plain" },
                          { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
                        ],
                      },
                    ].map(({ category, technologies }) => (
                      <section key={category} aria-label={category}>
                        <h4 className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
                          {category}
                        </h4>
                        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {technologies.map(({ name, icon }) => (
                            <li
                              key={name}
                              className="group flex min-h-24 flex-col justify-between border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-[#A80F01]/70 hover:bg-[#A80F01]/10"
                            >
                              <i
                                className={`${icon} text-2xl text-[#d34a3d] transition-transform group-hover:scale-110`}
                                aria-hidden="true"
                              />
                              <span className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/80 sm:text-xs">
                                {name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              <span>TH <span aria-hidden="true">{"//"}</span> Perfil pessoal</span>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
              >
                Vamos conversar
                <ArrowUpRight size={13} aria-hidden="true" className="text-[#d34a3d] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>
        <section
          id="services"
          aria-labelledby="services-title"
          className="relative isolate overflow-hidden border-t border-white/10 bg-[#101010] px-6 py-24 scroll-mt-[88px] sm:px-10 sm:py-28 lg:px-16"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(135deg, transparent 48%, rgb(255 255 255 / 3%) 49%, rgb(255 255 255 / 3%) 51%, transparent 52%)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl">
            <header className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#e5685e] sm:text-xs">
                Serviços <span className="text-white/30">{"//"} 03</span>
              </p>
              <h2
                id="services-title"
                className="mt-4 font-mono text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl lg:text-5xl"
              >
                Como posso ajudar<span className="text-[#d32f21]">?</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/55 sm:text-lg">
                Soluções digitais pensadas para transformar ideias em experiências úteis.
              </p>
            </header>

            <div className="mt-14">
              <ServicesCarousel />
            </div>
          </div>
        </section>
        <section
          id="projects"
          aria-labelledby="projects-title"
          className="relative isolate overflow-hidden border-t border-white/10 bg-[#0b0b0b] px-6 py-24 scroll-mt-[88px] sm:px-10 sm:py-32 lg:px-16"
        >
          <div className="pointer-events-none absolute -right-10 top-8 -z-10 select-none font-mono text-[18rem] font-black leading-none text-white/[0.025]">
            04
          </div>
          <div className="mx-auto max-w-7xl">
            <header className="mb-12 max-w-2xl">
              <div className="mb-7 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[#e5685e] sm:text-xs">
                <span className="h-px w-10 bg-[#A80F01]" aria-hidden="true" />
                04 <span className="text-white/30">{"//"}</span> Projetos
              </div>
              <h2
                id="projects-title"
                className="font-mono text-4xl font-black uppercase leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl"
              >
                Projetos em destaque<span className="text-[#d32f21]">.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/50 sm:text-lg">
                Alguns projetos dos quais participei. Selecione uma imagem para
                conhecer o repositório no GitHub.
              </p>
            </header>

            <a
              href="https://github.com/EquipeEcho/EchoRing"
              target="_blank"
              rel="noreferrer"
              aria-label="EchoRing: abrir repositório no GitHub (abre em nova aba)"
              className="group relative block overflow-hidden bg-[#080808] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d34a3d]"
            >
              <div className="relative aspect-[16/9] min-h-64 overflow-hidden bg-white/5 sm:aspect-[2/1] lg:aspect-[2.4/1]">
                <Image
                  src="/images/projetos/echoring.jpg"
                  alt="Página inicial do EchoRing, plataforma de tradução"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent"
                  aria-hidden="true"
                />
                <div className="project-info absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 sm:p-10">
                  <span className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#ff7770]">
                    Projeto em destaque <span aria-hidden="true">{"//"}</span> WEB / 01
                  </span>
                  <h3 className="font-mono text-3xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl">
                    EchoRing
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                    Experiência digital para conectar idiomas e pessoas. Acesse o
                    repositório do projeto no GitHub.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Ver no GitHub <span aria-hidden="true">↗</span>
                  </span>
                </div>
                <span className="absolute right-5 top-5 border border-white/25 bg-black/50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/80 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0">
                  Destaque / 01
                </span>
              </div>
            </a>

            <ul className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "EchoCAD",
                  image: "/images/projetos/Sem título.jpg",
                  alt: "Página inicial do EchoCAD, ferramenta de análise de dados CAD",
                  description: "Automação de documentos e análise de dados CAD.",
                  href: "https://github.com/EquipeEcho/EchoCAD",
                  code: "CAD / 02",
                },
                {
                  name: "EasyScrum",
                  image: "/images/projetos/easyscrum.jpg",
                  alt: "Página inicial do EasyScrum, projeto sobre metodologia Scrum",
                  description: "Plataforma para aprender e explorar Scrum.",
                  href: "https://github.com/EquipeEcho/EasyScrum",
                  code: "WEB / 03",
                },
                {
                  name: "EchoNova",
                  image: "/images/projetos/echonova.jpg",
                  alt: "Página inicial do projeto EchoNova",
                  description: "Aplicação web desenvolvida em equipe.",
                  href: "https://github.com/EquipeEcho/EchoNova",
                  code: "APP / 04",
                },
              ].map(({ name, image, alt, description, href, code }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name}: abrir repositório no GitHub (abre em nova aba)`}
                    className="group relative block h-full overflow-hidden bg-[#080808] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d34a3d]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                      <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div
                        className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/65 group-focus-visible:bg-black/65"
                        aria-hidden="true"
                      />
                      <span className="absolute right-4 top-4 border border-white/20 bg-black/50 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/80 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0">
                        {code}
                      </span>
                      <div className="project-info absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/45 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100">
                        <h3 className="font-mono text-base font-bold uppercase tracking-[0.1em] text-white">
                          {name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          {description}
                        </p>
                        <span className="mt-4 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#ff7770]">
                          Ver no GitHub ↗
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="relative isolate overflow-hidden border-t border-white/10 bg-[#080808] px-6 py-24 scroll-mt-[88px] sm:px-10 sm:py-32 lg:px-16"
        >
          <div
            className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-[#A80F01]/10 blur-[100px]"
            aria-hidden="true"
          />
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[#e5685e] sm:text-xs">
                <span className="h-px w-10 bg-[#A80F01]" aria-hidden="true" />
                05 <span className="text-white/30">{"//"}</span> Contato
              </div>
              <h2
                id="contact-title"
                className="max-w-3xl font-mono text-4xl font-black uppercase leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-7xl"
              >
                Vamos tirar sua ideia do{" "}
                <span className="text-[#d32f21]">papel?</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
                Estou aberto a conversar sobre projetos, oportunidades e novas
                ideias. Escolha um canal e me chame.
              </p>
            </div>

            <nav aria-label="Entre em contato pelas redes sociais">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {[
                  {
                    name: "Instagram",
                    handle: "@taylor.henrique.353",
                    href: "https://www.instagram.com/taylor.henrique.353/",
                  },
                  {
                    name: "LinkedIn",
                    handle: "Taylor Silva",
                    href: "https://www.linkedin.com/in/taylor-silva-859300330",
                  },
                  {
                    name: "GitHub",
                    handle: "TaylorSilva2",
                    href: "https://github.com/TaylorSilva2",
                  },
                  {
                    name: "E-mail",
                    handle: "taylor.hmsilva@outlook.com",
                    href: "mailto:taylor.hmsilva@outlook.com",
                  },
                ].map(({ name, handle, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#d34a3d]"
                    >
                      <span>
                        <span className="block font-mono text-xs font-bold uppercase tracking-[0.16em] text-white/85">
                          {name}
                        </span>
                        <span className="mt-1 block text-sm text-white/40">
                          {handle}
                        </span>
                      </span>
                      <span
                        className="font-mono text-lg text-[#d34a3d] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
}
