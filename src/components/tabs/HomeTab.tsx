import React, { useState } from 'react';
import { TabType } from '../../types';
import { curatedProjects } from '../../data/projectsData';

interface HomeTabProps {
  onNavigate: (tab: TabType, caseId?: string) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState<string>('conexion');
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const accordionItems = [
    {
      id: 'conexion',
      title: 'Conexión',
      subtitle: 'Brief · Videollamada · Inicio',
      description:
        'Todo comienza contigo. Nos conectamos con tu historia, tu visión y la esencia de tu marca. A través de una videollamada y un brief estratégico, entendemos a profundidad tu proyecto para construir desde lo auténtico.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAA4JkhLt9z-NiIFR1qN3OzKTLJ8cL6NCzuZaRnKVmmt-hHScAq8ypcLCOxAKk5M6RPaG_XmF5HxogE4fC1Uk6yeXcm0E6vRzQMDJWHklchjbhTc5BAPm5H8q-2dWHQlz7_0SqYl2sJn_UpkcZdRljPu-suZEiO2cve2kFBYy73OTQhonIGadW6DHpsefaq3F9gf_ahBue8rAGAeToDhg6o__ncah0FBexqcQcd__Py6GClJJ7e6DlcAA',
      alt: 'Papelería táctil y conceptualización inicial para proceso de conexión',
    },
    {
      id: 'estrategia',
      title: 'Estrategia',
      subtitle: 'Propósito · Concepto · Esencia',
      description:
        'Antes de diseñar, definimos. Creamos el propósito, el concepto y la personalidad de tu marca. Porque no existe identidad visual sin una idea clara que la sostenga.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCgo1Wrh0LqyrXH3LhQPk1IezLiNTEMs1wFe5Yp7J7z09e03MRVAV55ldpUn4SU_GloI9Xs3ABaxPa3nMRD2oDdlAkFN0lARn5KOryOPyu06eQIGWkma7iTAtDQDG720lELzKeGzt0egdIHryoFrZGDIesZiASTrKggrWaKYELII3hBkrrLuXUWGs3QQWI5GqzPyspx86t9srUXUIgMF11kWkKltIzuJf5ylWgfjAfo237VrykagFQT6g',
      alt: 'Exploración cromática y conceptualización estratégica',
    },
    {
      id: 'identidad',
      title: 'Identidad',
      subtitle: 'Diseño · Creatividad · Sistema visual',
      description:
        'Le damos forma a tu marca. Diseñamos una identidad visual coherente, estratégica y memorable. Desde el logotipo hasta su lenguaje visual completo, cada elemento tiene un porqué.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDl-2cnfoa0y-Ag6nPmGZmlaqrnnO066vbrKD7xWUsEzZKQCwFtSaxeTK4l3rv3VT2yBqOnjZDzopDixVcp_LVBFtbqMZVm5lJ4YD7cVMP_esN3H3SxX_zuvAbeQYLs0r4rztfw6lwEUpYLqwh6hbr7t6yRTlTiEGuTkglTmfDYsYC7iHIjIo1Vodzd6KbLozWeIyLEtXMMJyZc6mHYWj1gQd0dtclrdrvZW-GMHUx4kNiOQKKJfJ89lw',
      alt: 'Monografía tipográfica y manual de identidad visual',
    },
    {
      id: 'expansion',
      title: 'Expansión',
      subtitle: 'Aplicaciones · Papelería · Digital',
      description:
        'Llevamos tu marca a la realidad. Creamos las piezas y aplicaciones necesarias para que tu identidad cobre vida en cada espacio, adaptándose a tu proyecto y sus necesidades.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD_CkG28AFrM41nTyZyvLja2R3IYB0WYKluG6UZR_mehnF5yYjVc9HwAziE0I6J3s17fBZD5lpS3kNU54DOtEb3n_Jnlf4Lf7nNDcc-NfNjqsr27NxAPphWvfa2jrVbgCCnl7A_EB5ejSeN9xwMpw6-UWGP_QWCrLlXYJxqyAq564xQxPRQdFyOzmSsS9S675inIUTSSIF_K_8X5tVD9M55NZ3OfPhWPMtajA2dZOtWveNiOOda6aia4w',
      alt: 'Ecosistema digital y aplicaciones de marca en diferentes puntos de contacto',
    },
    {
      id: 'proyeccion',
      title: 'Proyección',
      subtitle: 'Entrega · Acompañamiento · Claridad',
      description:
        'Tu marca está lista para salir al mundo. En una sesión final, te entregamos todos los archivos, te enseñamos a usarlos y te damos las herramientas para proyectarte con claridad, coherencia y seguridad.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAZFGrtH5-imJ7VSMGBloomN8vEP6KtT-FqYSYtolbHJCDC6oXPzLEWDge_nvwETGxAI4VGPqhvBfWucPVEetLM64rmdkmeAStnphn0D9kDEunPj8VvQg7bLEyJo_6X06r_t6-ZgkHol3_XTNuLUN69859jqDhAh1SYCJcD_1bELw504Un5QlN_Q4o1qwneZ088ODqFVEAatdIxDLeeVamm03DznQDQ4sKsy04i3xFcCcnA-S02Tn4HPg',
      alt: 'Espacio físico e implantación arquitectónica de marca',
    },
  ];

  // Carousel projects (take 5 for preview)
  const carouselItems = curatedProjects.slice(0, 5);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* 1. Large Dark Hero Canvas Container */}
      <section className="w-full pt-4 pb-12 md:pb-20">
        <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12">
          {/* Main Cinematic Visual Box */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#2A2B2A] rounded-2xl md:rounded-[32px] overflow-hidden relative shadow-lg group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0n511VgbG9Y7Mx3Fw3lmGtLtkwhI-5EMYscviIT8vdVJW7s2qMfrVmzDHjMlSGKz9bASUTHrXs3SuGI5GLGv9oNIUJxt6VtePDPUupYsMPjCSs4Ll4mF8WF_a6EdGsqa6CMJ_cYLsYJLKd3qkoN0G5NpPZGzTEUW3HN3DrdneigDIY5Uw2xFWhZWLr4zyqxCclkfWMyxFNkJz9pOd6p0xVNHW9UzwOBLKCWj-CaGiHvYgNSaSRSzZcQ"
              alt="Nexuss Cinematic Hero - Visual identity exhibition"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E6E8B4] block mb-1">
                Nexuss Studio • 2025
              </span>
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                Branding con propósito, identidad y conexión real.
              </h1>
            </div>
          </div>

          {/* Statement & Action Row */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="w-full aspect-[16/10] bg-[#353635] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB35kFuuKUEllsiSI9CjgL9_H3w5g_9q9f0SvIqE1hYqZXpPUx2jM2iVI84FE-jXMCD1UCUBQM8LAhTXHhGPGo4qNNoHU3nyMb5SLUJoA3fpH4U7YjtG50NsH-ixrlXAgGVvRM8pjlSLofbOdieznVZ2fJbtiqoMgDIEMN27JSSsRyP_R55u67GwGnUAKCX38I-cQop6m7tcJLptQ6mILvLgnvFYpdeP3FsExEiw_FtnsARLAvnCgU5Jg"
                  alt="Dirección de arte y diseño de packaging"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col items-start justify-center md:pl-6">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-[34px] font-normal leading-[1.25] text-[#1b1c1a] max-w-xl">
                Conectamos marcas con lo que realmente importa en un mundo que necesita conexión.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-lg leading-relaxed font-sans">
                Construimos identidades visuales que trascienden lo estético para convertirse en experiencias sensoriales duraderas y memorables.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => onNavigate('contacto')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#1b1c1a] rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider text-[#1b1c1a] hover:bg-[#1b1c1a] hover:text-white transition-all duration-300 shadow-sm active:scale-95"
                >
                  <span>Contáctanos</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Portfolio Carousel Strip */}
      <section className="w-full py-10 md:py-16 border-t border-[#E8E6E0]" id="portafolio-preview">
        <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12">
          {/* Section Sub-header */}
          <div className="flex items-center justify-between pb-6 text-sm font-medium uppercase tracking-wider text-[#444748]">
            <span className="text-[#1b1c1a] font-semibold">Portafolio Curado</span>
            <button
              onClick={() => onNavigate('portafolio')}
              className="hover:text-black transition-colors flex items-center gap-1 group"
            >
              <span>Ver proyectos</span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </button>
          </div>

          {/* Carousel Slider */}
          <div className="relative group/carousel">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {carouselItems.slice(carouselIndex, carouselIndex + 3).concat(
                carouselIndex + 3 > carouselItems.length
                  ? carouselItems.slice(0, (carouselIndex + 3) % carouselItems.length)
                  : []
              ).map((project) => (
                <div
                  key={project.id}
                  onClick={() => onNavigate('portafolio', project.hasDetailedCase ? project.id : undefined)}
                  className="group relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-[#2D2F2E] cursor-pointer shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-[#E6E8B4] font-semibold block mb-1">
                        {project.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-normal text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-transform group-hover:scale-110">
                      ↗
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Anterior proyecto"
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-black shadow-lg flex items-center justify-center transition-transform hover:scale-105"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente proyecto"
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-black shadow-lg flex items-center justify-center transition-transform hover:scale-105"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* 3. Lemonade Highlight Section: "Todo lo que una marca necesita..." */}
      <section className="w-full bg-[#E6E8B4] py-16 md:py-24 px-5 sm:px-8 md:px-12 my-8">
        <div className="max-w-[1340px] mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[54px] lg:text-[60px] leading-[1.1] font-normal text-[#1F1F1F] tracking-tight max-w-4xl mx-auto">
            Todo lo que una marca necesita para <span className="italic font-serif">conectar de verdad.</span>
          </h2>

          {/* 3 Pillar Cards */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1: Estrategia */}
            <div className="bg-[#DFE1A6]/80 rounded-[32px] p-8 md:p-10 flex flex-col justify-start min-h-[220px] transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <h3 className="font-serif italic text-2xl md:text-[28px] font-semibold text-[#252525] mb-4 text-center">
                Estrategia
              </h3>
              <p className="text-[#3F3F3F] text-sm md:text-[14.5px] leading-relaxed text-center font-sans">
                Definimos el propósito, posicionamiento y dirección de la marca, creando una base sólida que guía cada decisión.
              </p>
            </div>

            {/* Card 2: Diseño */}
            <div className="bg-[#DFE1A6]/80 rounded-[32px] p-8 md:p-10 flex flex-col justify-start min-h-[220px] transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <h3 className="font-serif italic text-2xl md:text-[28px] font-semibold text-[#252525] mb-4 text-center">
                Diseño
              </h3>
              <p className="text-[#3F3F3F] text-sm md:text-[14.5px] leading-relaxed text-center font-sans">
                Construimos una identidad que integra lo visual y lo verbal, asegurando coherencia en lo que la marca es y cómo se expresa.
              </p>
            </div>

            {/* Card 3: Experiencia */}
            <div className="bg-[#DFE1A6]/80 rounded-[32px] p-8 md:p-10 flex flex-col justify-start min-h-[220px] transition-transform duration-300 hover:-translate-y-1 shadow-sm">
              <h3 className="font-serif italic text-2xl md:text-[28px] font-semibold text-[#252525] mb-4 text-center">
                Experiencia
              </h3>
              <p className="text-[#3F3F3F] text-sm md:text-[14.5px] leading-relaxed text-center font-sans">
                Diseñamos cómo la marca se vive en cada punto de contacto, generando conexión, coherencia y relaciones significativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Accordion Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">
          {/* Top Metadata Header */}
          <div className="flex items-center justify-between pb-8 text-sm font-normal tracking-tight text-[#4B4B4B]">
            <span className="text-[#333333] uppercase text-xs tracking-widest font-semibold">Branding</span>
            <button
              onClick={() => onNavigate('servicios')}
              className="hover:text-black transition-colors flex items-center gap-1 text-[#333333] text-xs uppercase tracking-wider font-semibold"
            >
              <span>Ver más</span>
              <span>↗</span>
            </button>
          </div>

          <div className="mb-10 text-sm md:text-base font-normal text-[#2C2C2C]">
            <p className="text-neutral-500">Así es nuestro</p>
            <p className="font-serif text-2xl sm:text-3xl text-black font-normal mt-1">
              Proceso de branding:
            </p>
          </div>

          {/* Accordion Container */}
          <div className="border-t border-neutral-400 divide-y divide-neutral-200">
            {accordionItems.map((item) => {
              const isOpen = activeAccordion === item.id;
              return (
                <div key={item.id} className="py-2 transition-colors">
                  <button
                    onClick={() => setActiveAccordion(isOpen ? '' : item.id)}
                    className="w-full py-5 md:py-6 flex items-center justify-between text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-serif text-3xl sm:text-4xl md:text-[44px] font-light tracking-tight transition-colors duration-300 ${
                        isOpen
                          ? 'text-black font-normal'
                          : 'text-[#222222] group-hover:text-[#715c00]'
                      }`}
                    >
                      {item.title}
                    </span>
                    <div
                      className={`w-9 h-9 md:w-11 md:h-11 rounded-full border flex items-center justify-center text-lg md:text-xl font-light transition-all duration-300 shrink-0 ${
                        isOpen
                          ? 'bg-neutral-900 border-neutral-900 text-white'
                          : 'border-neutral-300 text-neutral-700 group-hover:border-neutral-900 group-hover:text-black group-hover:bg-neutral-100 group-hover:scale-105'
                      }`}
                    >
                      <span className="leading-none select-none transition-transform duration-300">
                        {isOpen ? '—' : '+'}
                      </span>
                    </div>
                  </button>

                  {/* Smooth cubic-bezier reveal container */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                          {/* Lado izquierdo: Miniatura visual con esquinas redondeadas */}
                          <div className="md:col-span-5 lg:col-span-4">
                            <div className="aspect-[4/3] bg-neutral-900 rounded-2xl md:rounded-[24px] overflow-hidden shadow-sm">
                              <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                              />
                            </div>
                          </div>

                          {/* Lado derecho: Subtítulo/hito y explicación detallada */}
                          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
                            <h4 className="font-serif italic text-lg sm:text-xl text-neutral-900 mb-3 tracking-wide font-normal">
                              {item.subtitle}
                            </h4>
                            <p className="text-sm sm:text-base leading-relaxed text-[#555555] max-w-xl font-sans font-light">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Leadership Section: Sara Duque */}
      <section className="w-full pb-20 md:pb-28 border-t border-[#E8E6E0] pt-16" id="nosotros-preview">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Left Big Portrait Canvas */}
            <div className="lg:col-span-6">
              <div className="w-full aspect-[4/5] bg-[#2A2B2A] rounded-2xl md:rounded-[32px] overflow-hidden shadow-md">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD89AwQKCdNPTIBOsV840yknCGL6JEfUsYdO5PWXPvcN4FCy-bcXZDkIEhnlVBcw5i_AknKSt6I3AILG5y1YiJQRgYI1tamUE3ePSzAXnrG4nD5HxxlOH7mRxp5sROeY7B604ozm4dGBDXI6ZaQVcv4bIEn-7qRHP1U7c1uUL4ZafRJXxMSR4-C4uWFLggKNF4SmcfH2rWgXI1jqbOPcuJZBWU0dSDyirdwalNYM5Cihj8UwossISaqIA"
                  alt="Sara Duque - Directora Creativa de Nexuss Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Leadership Statement Column */}
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#BFA435] font-semibold block mb-2">
                  Dirección & Filosofía
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-[54px] leading-[1.08] font-normal text-[#1F1F1F]">
                  Liderado por Sara Duque
                </h2>
              </div>

              <div className="mt-8 pt-6 border-b border-[#CCCCCC] pb-8">
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#4A4A4A] max-w-lg font-sans">
                  <p>
                    Empecé Nexuss con la idea de crear marcas que realmente conecten. Creo en el diseño como una forma de dar vida, construir identidad y transformar cómo una marca se percibe en el mundo.
                  </p>
                  <p>
                    Esto es solo el comienzo de lo que NEXUSS puede llegar a ser... y de lo que podemos construir juntos.
                  </p>
                </div>

                {/* Pill Action Button */}
                <div className="mt-8 flex justify-start">
                  <button
                    onClick={() => onNavigate('nosotros')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C0A635] text-white hover:bg-[#b0972e] transition-colors text-xs uppercase tracking-wider font-semibold shadow-sm active:scale-95"
                  >
                    <span>Sobre nosotros</span>
                    <span className="text-base leading-none">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
