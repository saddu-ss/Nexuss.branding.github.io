import React, { useState } from 'react';
import { TabType } from '../../types';

interface AboutTabProps {
  onNavigate: (tab: TabType, caseId?: string) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ onNavigate }) => {
  const [expandedMision, setExpandedMision] = useState(false);
  const [expandedVision, setExpandedVision] = useState(false);
  const [trustedProjectIndex, setTrustedProjectIndex] = useState(0);

  const trustedProjects = [
    {
      id: 'aura',
      name: 'AURA Laboratories',
      category: 'Cosmética Sensorial',
      location: 'Barcelona / CDMX',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAA4JkhLt9z-NiIFR1qN3OzKTLJ8cL6NCzuZaRnKVmmt-hHScAq8ypcLCOxAKk5M6RPaG_XmF5HxogE4fC1Uk6yeXcm0E6vRzQMDJWHklchjbhTc5BAPm5H8q-2dWHQlz7_0SqYl2sJn_UpkcZdRljPu-suZEiO2cve2kFBYy73OTQhonIGadW6DHpsefaq3F9gf_ahBue8rAGAeToDhg6o__ncah0FBexqcQcd__Py6GClJJ7e6DlcAA',
    },
    {
      id: 'lumen',
      name: 'Lumen Lounge & Bar',
      category: 'Hospitality de Autor',
      location: 'Madrid • Salamanca',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ_vBIsLBi4OE9NuMuUNSzDY2QP2W01-MBf7OoBzCMfI95NPwHB3sCJgfk7_sw2NdfQJRD3ksaF-9ITmpqCrv0sMt15tiGdad6cKyPTImgixgMJwk2yl70BOiKx4b7tP89Y_gsNHu-yRvbqLXfibH8cmrdoKlU46G230L-Rmq-GxKa3ITqPFi6tUdpftVhVW_nu7L6GVWH2xJ0tvXpIPjOosPbHP4ZuwjBYLq8F08srW0ko5v7zW48hg',
    },
    {
      id: 'botanica',
      name: 'Botanica Spirits Co.',
      category: 'Destilería & Packaging',
      location: 'Valle Sagrado',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA552M-cFswwK_PoWzGkyaO3493DxubVZAvq9hI1FBxrc5WfiL2D4k2_hQYlO6EJn0lrQ4Cpy9WnuzplsYMmg77rGr6nQJ0oueST1tPy7lAuY57gjuH08twjX8SimP-wAue70RxcT13tD9oRIyGCcPZrQFcExLmnprn5iomlb_ik-P7nbYK8poJSRSC-pwP1QleGX7ll4Afed2MsYRLDuJbCN2uMvc4wvVJHqSiSBwR83j_1rtlaOg8Kw',
    },
    {
      id: 'aurora',
      name: 'Aurora Ceramics',
      category: 'Objetos & Artesanía',
      location: 'Mallorca',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1rqBZqNi_tXrUFxYSHmh5atBZSMtrSJd9oy9BpbAk5yYjkzqXm_51RTtZwNa4QTR6cbtG14K1jtEQHA2GehH-Uas7pLfScvWy-nikFNWX0Fro7zbW1tdsY8jBJOJhAXyOoTiOjFUSZQemU9l6SGIKSVkqdjRBZEaMax7bGW-D5MKtDaTNqU24PEfedwhoQcmCXJvLRYD8gm7JRVp26AJxy1ZAoYwn3O0wby_LgREWiIs3mwNE-4iew',
    },
  ];

  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* 1. Hero Manifesto & Founder Letter Section */}
      <section className="pt-10 pb-16 lg:pt-16 lg:pb-24 max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Manifesto & Founder Letter */}
          <div className="lg:col-span-6 flex flex-col justify-start pr-0 lg:pr-6">
            <span className="text-xs uppercase tracking-widest text-[#BFA435] font-semibold mb-3 block">
              Sobre Nexuss
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.14] font-serif font-bold text-[#141414] mb-8">
              Diseñamos marcas que nos gustaría ver conectar
            </h1>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-600 font-sans">
              <p>No encontré el diseño por casualidad, encontré una forma de crear con intención.</p>
              <p>Lo que empezó como curiosidad se convirtió en una visión: construir marcas que no solo existan, sino que conecten.</p>
              <p>Con el tiempo entendí que el branding va más allá de lo visual — es esencia, dirección y la forma en la que una marca se vive.</p>
              <p>A través de NEXUSS, desarrollo marcas con propósito, trabajando cada proyecto de forma cercana y estratégica.</p>
              <p>Hoy, estoy enfocado en colaborar con marcas con personalidad, intención y algo real que decir.</p>
              <p>Y, sobre todo, estoy agradecida de poder crear, conectar y construir proyectos que realmente significan algo.</p>
            </div>

            {/* Signature Block */}
            <div className="mt-8 pt-4 flex items-center gap-4">
              <span className="text-sm font-medium text-neutral-800">Att.</span>
              <div className="relative">
                {/* Original Signature Image */}
                <img
                  src="/firma-sara-duque.png"
                  alt="Firma original Sara Duque"
                  className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
                <span className="text-xs text-neutral-500 font-serif italic mt-1 block">
                  Sara Duque · Directora Creativa
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Canvas */}
          <div className="lg:col-span-6">
            <div className="w-full aspect-[4/5] bg-[#2E2E2E] rounded-3xl overflow-hidden shadow-md relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAboUkmB3f2hDk5OFysR92-Bjp4KRA0M60aP7S1-a5hs_HimFRR30NgInSmI6iJjUipURqwGQnehPB88Wh43RHMotsojOQKIRDYW8D-by4e5Y9Gxbtlo62NqQ5ceAfgswXP-5L6kHQyEwSgx-QruhHV6nIyucmAsxglM2YhImdtCscytSaS_pAa7ro0eufzygnSZl38A2ALNMC5l_s1tkyEq3t_P6e6f6EKr0e2QOHEGBveM9SS10hHQQ"
                alt="Retrato editorial Nexuss Studio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-center">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#E6E8B4] font-semibold block">
                    Nexuss Studio
                  </span>
                  <p className="font-serif text-lg text-white">Estrategia & Dirección de Arte</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center font-serif text-white">
                  N
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission and Vision Cards */}
      <section className="py-12 lg:py-16 bg-[#F5F5F3]">
        <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Misión */}
            <article className="bg-[#ECECE8] rounded-3xl p-8 lg:p-12 flex flex-col justify-between min-h-[420px] shadow-sm relative transition-all duration-300 hover:shadow-md">
              <div className="h-16 w-full flex items-center">
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                  01 • Filosofía de Acción
                </span>
              </div>
              <div>
                <div className="flex items-center justify-between border-b border-black/10 pb-5 mb-5">
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 tracking-tight">
                    Misión
                  </h2>
                  <button
                    onClick={() => setExpandedMision(!expandedMision)}
                    className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-xl text-gray-800 hover:bg-black hover:text-white hover:border-black transition-colors"
                    aria-label="Expandir Misión"
                  >
                    {expandedMision ? '−' : '+'}
                  </button>
                </div>
                <p className="text-sm sm:text-[14px] leading-relaxed text-gray-700 pr-2 font-sans">
                  Como consultoría de branding multidisciplinaria, que integra comunicación, estrategia, diseño con experiencia para crear marcas duraderas que conectan emocionalmente con las personas, se busca apoyar a emprendedores, empresas y clientes en general aumentando el volumen de su negocio, su visibilidad y su valor mediante estrategias que impulsen el crecimiento e innovación.
                </p>
                {expandedMision && (
                  <div className="mt-4 pt-4 border-t border-black/5 text-xs text-neutral-600 leading-relaxed animate-fade-in font-sans">
                    Garantizamos consistencia en todos los puntos de contacto, evolucionando para enfrentar los desafíos del futuro con rigor tipográfico, profundidad sensorial y autenticidad visual.
                  </div>
                )}
              </div>
            </article>

            {/* Card 2: Visión */}
            <article className="bg-[#ECECE8] rounded-3xl overflow-hidden flex flex-col justify-between min-h-[420px] shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center">
                <div className="w-full h-44 rounded-2xl bg-[#E2E2DE] border border-black/5 overflow-hidden relative group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl-2cnfoa0y-Ag6nPmGZmlaqrnnO066vbrKD7xWUsEzZKQCwFtSaxeTK4l3rv3VT2yBqOnjZDzopDixVcp_LVBFtbqMZVm5lJ4YD7cVMP_esN3H3SxX_zuvAbeQYLs0r4rztfw6lwEUpYLqwh6hbr7t6yRTlTiEGuTkglTmfDYsYC7iHIjIo1Vodzd6KbLozWeIyLEtXMMJyZc6mHYWj1gQd0dtclrdrvZW-GMHUx4kNiOQKKJfJ89lw"
                    alt="Visión conceptual de Nexuss Studio"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest text-white font-mono bg-black/50 px-3 py-1 rounded-full">
                      Visual Concept
                    </span>
                  </div>
                </div>
              </div>

              {/* Solid Mustard Olive Banner Bar */}
              <div className="bg-[#BFA435] px-8 lg:px-10 py-7 text-white flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-serif font-semibold tracking-tight text-white">
                    Visión
                  </h2>
                  {expandedVision && (
                    <p className="mt-2 text-xs text-white/90 max-w-sm font-sans">
                      Ser el estudio referente que redefine el lujo consciente y el branding emocional en el ámbito hispanohablante e internacional.
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setExpandedVision(!expandedVision)}
                  className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-xl text-white hover:bg-white hover:text-[#BFA435] transition-colors shrink-0"
                  aria-label="Expandir Visión"
                >
                  {expandedVision ? '−' : '+'}
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Trusted Client Projects Carousel */}
      <section className="py-16 lg:py-24 bg-[#FAF9F5]">
        <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#BFA435] mb-2 block">
              Proyectos que han confiado en nosotros
            </span>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 mt-2 font-sans">
              Marcas que han confiado en nosotros para construir algo más que una imagen: una conexión real. Cada proyecto representa una visión, una historia y una oportunidad de crear algo con propósito. Aquí es donde las ideas se transforman en marcas que conectan y se diferencian de verdad.
            </p>
          </div>

          {/* Interactive Carousel of Brands */}
          <div className="relative flex items-center justify-between gap-4">
            <button
              onClick={() => setTrustedProjectIndex((prev) => (prev - 1 + trustedProjects.length) % trustedProjects.length)}
              className="w-10 h-10 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-800 flex items-center justify-center text-sm shrink-0 transition-all"
              aria-label="Anterior"
            >
              ←
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {trustedProjects
                .slice(trustedProjectIndex, trustedProjectIndex + 3)
                .concat(
                  trustedProjectIndex + 3 > trustedProjects.length
                    ? trustedProjects.slice(0, (trustedProjectIndex + 3) % trustedProjects.length)
                    : []
                )
                .map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => onNavigate('portafolio', proj.id)}
                    className="h-44 sm:h-48 bg-[#282828] rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm transition-all duration-300 hover:scale-[1.02]"
                  >
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-end">
                      <span className="text-[10px] uppercase tracking-widest text-[#E6E8B4] font-mono">
                        {proj.category} • {proj.location}
                      </span>
                      <h4 className="font-serif text-xl text-white font-medium mt-1">
                        {proj.name}
                      </h4>
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={() => setTrustedProjectIndex((prev) => (prev + 1) % trustedProjects.length)}
              className="w-10 h-10 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-800 flex items-center justify-center text-sm shrink-0 transition-all"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* 4. Lucky Olive Manifesto Banner */}
      <section className="bg-[#BFA435] text-white py-20 lg:py-28 px-5 sm:px-8 md:px-12 my-6">
        <div className="max-w-[1340px] mx-auto">
          <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-normal leading-[1.2] text-left">
            “Creo en marcas que conectan, que tienen propósito y que dejan algo en quien las vive. Para mí, de eso se trata el diseño.”
          </blockquote>
        </div>
      </section>

      {/* 5. Bottom Contact Teaser Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5]" id="about-contacto">
        <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Visual Block */}
            <div className="lg:col-span-5 flex">
              <div className="w-full min-h-[360px] lg:min-h-full bg-[#2F2F2F] rounded-3xl overflow-hidden relative shadow-md">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZFGrtH5-imJ7VSMGBloomN8vEP6KtT-FqYSYtolbHJCDC6oXPzLEWDge_nvwETGxAI4VGPqhvBfWucPVEetLM64rmdkmeAStnphn0D9kDEunPj8VvQg7bLEyJo_6X06r_t6-ZgkHol3_XTNuLUN69859jqDhAh1SYCJcD_1bELw504Un5QlN_Q4o1qwneZ088ODqFVEAatdIxDLeeVamm03DznQDQ4sKsy04i3xFcCcnA-S02Tn4HPg"
                  alt="Espacio creativo Nexuss Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content & Action Block */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#BFA435] font-semibold">
                  Inicia tu proyecto
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#141414] leading-tight">
                  creamos marcas que conectan y se recuerdan
                </h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed font-sans">
                  Trabajamos contigo estés donde estés, con una experiencia totalmente personalizada. Hablemos de tu proyecto.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('contacto')}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-400 text-xs font-semibold uppercase tracking-wider text-gray-800 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm active:scale-95"
                  >
                    <span>Contáctanos</span>
                    <span>↗</span>
                  </button>
                </div>
              </div>

              {/* Lower Graphic Box */}
              <div className="w-full h-52 sm:h-60 bg-[#353635] rounded-2xl overflow-hidden relative shadow-inner">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB35kFuuKUEllsiSI9CjgL9_H3w5g_9q9f0SvIqE1hYqZXpPUx2jM2iVI84FE-jXMCD1UCUBQM8LAhTXHhGPGo4qNNoHU3nyMb5SLUJoA3fpH4U7YjtG50NsH-ixrlXAgGVvRM8pjlSLofbOdieznVZ2fJbtiqoMgDIEMN27JSSsRyP_R55u67GwGnUAKCX38I-cQop6m7tcJLptQ6mILvLgnvFYpdeP3FsExEiw_FtnsARLAvnCgU5Jg"
                  alt="Muestra de Marca y Packaging"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
