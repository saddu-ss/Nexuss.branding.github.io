import React, { useState } from 'react';
import { TabType } from '../../types';

interface ServicesTabProps {
  onNavigate: (tab: TabType, caseId?: string) => void;
}

export const ServicesTab: React.FC<ServicesTabProps> = ({ onNavigate }) => {
  const [activeProcessPhase, setActiveProcessPhase] = useState<number>(1);
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);
  const [galleryOffset, setGalleryOffset] = useState<number>(0);

  const testimonials = [
    {
      company: 'Aurea Studio',
      author: 'Valeria Cruz',
      role: 'Fundadora de Aurea Studio',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA0n511VgbG9Y7Mx3Fw3lmGtLtkwhI-5EMYscviIT8vdVJW7s2qMfrVmzDHjMlSGKz9bASUTHrXs3SuGI5GLGv9oNIUJxt6VtePDPUupYsMPjCSs4Ll4mF8WF_a6EdGsqa6CMJ_cYLsYJLKd3qkoN0G5NpPZGzTEUW3HN3DrdneigDIY5Uw2xFWhZWLr4zyqxCclkfWMyxFNkJz9pOd6p0xVNHW9UzwOBLKCWj-CaGiHvYgNSaSRSzZcQ',
      paragraphs: [
        'Trabajar con Nexuss nos permitió redescubrir y redefinir la esencia de nuestra marca, alineando nuestra identidad con una visión mucho más clara, profunda y estratégica.',
        'La conexión que logramos hoy con nuestra audiencia y la coherencia en cada punto de contacto —desde el packaging primario hasta la experiencia digital— superó cualquier expectativa.',
        'Destacamos el acompañamiento constante, la sensibilidad estética impecable y la claridad en cada una de las fases del proceso de transformación.',
      ],
    },
    {
      company: 'Botanica Spirits Co.',
      author: 'Mateo Roldán',
      role: 'Director de Destilería',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAFS7rNCrcW3CnBy11XGUvDGQxZchu1x1kD5wm1XP74xe3_Vug7x4cdKBQOeR7nzuiQmOINsxoUTMVEQd-aAYLhUDzHc74aaJIigJ0QW_jNHN7LcEmsVOWWBJzNdhHfghNMHclqA1hvOIygNCXB2yDWboeszdgUbIDbrAhtmXIbdsv0h_FVMdzx14HLuPyqjw3fFK80Rs59QFzLIEzenhQVJqP9AEyKoM00f-4il8FKZ7klzAigg7iaAA',
      paragraphs: [
        'Nexuss logró capturar el alma botánica de nuestro origen en los Andes peruanos con una elegancia que compite en las barras más exclusivas de Europa.',
        'No diseñaron un etiquetado tradicional; crearon un ritual completo de descorche y una monografía visual que enamora a nuestros distribuidores.',
        'La calidad de los acabados táctiles y el respeto por los procesos sostenibles hacen de este rebranding nuestra mejor inversión estratégica.',
      ],
    },
    {
      company: 'Lumen Lounge & Bar',
      author: 'Clara Del Val',
      role: 'Managing Partner',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDzbtQ0VpaZ3a4i39yNakrsz0_Hwfv7_5nE1Gybom5O7fP5rzjPDa0SyfBOasm171aiGSXkhjTXH1565aIaF6eR94yCby-_cyCGgDD_mEeOHp5wRYxfYVyjustAjLDLHzWJ-MElP-b_3EVnY452t-e-mrSW9-rfl7gXS6hus_pN2rORN8Tg5T6dxhOYdcnsObkSdCu1t54Uk3i4CrtnRYnNlXyjWpafblxPFOXPBvsU0aSiduakjEsqnw',
      paragraphs: [
        'Encontrar un equipo que entienda la acústica, la penumbra y la atmósfera nocturna como parte del sistema de marca es excepcional.',
        'Lumen tiene hoy una presencia inconfundible en Madrid gracias al meticuloso estudio tipográfico y a los materiales nobles elegidos.',
        'El menú de cuero con hot stamping y los posavasos en bajorrelieve se han convertido en sellos identitarios comentados por cada cliente.',
      ],
    },
  ];

  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB35kFuuKUEllsiSI9CjgL9_H3w5g_9q9f0SvIqE1hYqZXpPUx2jM2iVI84FE-jXMCD1UCUBQM8LAhTXHhGPGo4qNNoHU3nyMb5SLUJoA3fpH4U7YjtG50NsH-ixrlXAgGVvRM8pjlSLofbOdieznVZ2fJbtiqoMgDIEMN27JSSsRyP_R55u67GwGnUAKCX38I-cQop6m7tcJLptQ6mILvLgnvFYpdeP3FsExEiw_FtnsARLAvnCgU5Jg',
      alt: 'Packaging y diseño de frascos',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA4JkhLt9z-NiIFR1qN3OzKTLJ8cL6NCzuZaRnKVmmt-hHScAq8ypcLCOxAKk5M6RPaG_XmF5HxogE4fC1Uk6yeXcm0E6vRzQMDJWHklchjbhTc5BAPm5H8q-2dWHQlz7_0SqYl2sJn_UpkcZdRljPu-suZEiO2cve2kFBYy73OTQhonIGadW6DHpsefaq3F9gf_ahBue8rAGAeToDhg6o__ncah0FBexqcQcd__Py6GClJJ7e6DlcAA',
      alt: 'Papelería con relieve',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUz81weJuZGFK4s7ZABRItTHA4wkIXafix0LeJWGlE8K1N-syEOojMFob35vRJ3uEW_3aG-74965-egshavEd7_XoRIAkPnAz08w6ch3ZojP9Xy9KGwrpal_58CfKCtDX3MHr4cD-s1UcnTLi-G9WdBTc6DiF7pEO2gJeb2nStXn4QkCOueFGVH0kbazKCvLAAYAMtwAtNxeL85qUI7sAp1vb-j32yMawsS_MENIYCTUhsPkKGdYr26A',
      alt: 'Refracción de luz en botella',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl-2cnfoa0y-Ag6nPmGZmlaqrnnO066vbrKD7xWUsEzZKQCwFtSaxeTK4l3rv3VT2yBqOnjZDzopDixVcp_LVBFtbqMZVm5lJ4YD7cVMP_esN3H3SxX_zuvAbeQYLs0r4rztfw6lwEUpYLqwh6hbr7t6yRTlTiEGuTkglTmfDYsYC7iHIjIo1Vodzd6KbLozWeIyLEtXMMJyZc6mHYWj1gQd0dtclrdrvZW-GMHUx4kNiOQKKJfJ89lw',
      alt: 'Monografía tipográfica Bodoni',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_CkG28AFrM41nTyZyvLja2R3IYB0WYKluG6UZR_mehnF5yYjVc9HwAziE0I6J3s17fBZD5lpS3kNU54DOtEb3n_Jnlf4Lf7nNDcc-NfNjqsr27NxAPphWvfa2jrVbgCCnl7A_EB5ejSeN9xwMpw6-UWGP_QWCrLlXYJxqyAq564xQxPRQdFyOzmSsS9S675inIUTSSIF_K_8X5tVD9M55NZ3OfPhWPMtajA2dZOtWveNiOOda6aia4w',
      alt: 'Diseño de interfaz digital',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADPcOjDDNuEBGyq0SZJkt8lsehcepLoxmMCSS44uL-O2cc4mddr6QawAI_6dxdrWYvd-PdKKtE1ugTGQWikeeEanx-JwZCI4S-Vu8x7jtbgETdvhy8TGVesEacXjfcnAo8sxP1EDecKBnzdB2EqFL0pg6DlDg7thlFkz7axOTFyvy_iC2oBBpe9axnn5DH4GfOO79Q6pL2UsNjsfem0NVNXoRH5NMGCC7YoUyw0MIjUuSSL_Sh-NzlLg',
      alt: 'Instalación de arte y proyección',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI806bdVh-Ic5b9az0p3-wsFz2kMwD_Q20dHQK4gZaihhv-4buJghkH8CUP4QTjnuZjh3CJ8RgmNmva3M-XjPb-hdV-Jjn4ro771xzlUAA2bszN_ZAPweKCQDs67oyH7_5-H3_BJREMDnFOR7IAo3-4qdnhWyWx2K4buB0aBHHfqY9MkH_Vt8V3sh3rDhWK64zyVHjrKsWUT3Ky5GIdz0jDo6Q3891B6HrDQcrlbNaZmqiLWk7hETVDg',
      alt: 'Botella sérum con cuentagotas',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgo1Wrh0LqyrXH3LhQPk1IezLiNTEMs1wFe5Yp7J7z09e03MRVAV55ldpUn4SU_GloI9Xs3ABaxPa3nMRD2oDdlAkFN0lARn5KOryOPyu06eQIGWkma7iTAtDQDG720lELzKeGzt0egdIHryoFrZGDIesZiASTrKggrWaKYELII3hBkrrLuXUWGs3QQWI5GqzPyspx86t9srUXUIgMF11kWkKltIzuJf5ylWgfjAfo237VrykagFQT6g',
      alt: 'Muestra textil y dirección cromática',
    },
  ];

  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* 1. HeroSection in soft Lemonade Tint (#E6E8B4) */}
      <section className="bg-[#E6E8B4] pt-12 pb-20 md:pt-16 md:pb-28 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          {/* Top Title & Upper Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 md:mb-16">
            <div className="lg:col-span-8 flex flex-col justify-start">
              <span className="text-xs uppercase tracking-widest text-[#49491a] font-semibold mb-3">
                Servicios • Branding & Rebranding
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-tight text-neutral-900 mb-8 max-w-3xl">
                Damos vida a marcas que <span className="italic font-normal">conectan.</span>
              </h1>
              <div>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="inline-flex items-center gap-1.5 border border-neutral-900 rounded-full px-6 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors duration-200 active:scale-95"
                >
                  <span>Contáctanos</span>
                  <span>↗</span>
                </button>
              </div>
            </div>

            {/* Upper Hero Image Card */}
            <div className="lg:col-span-4 flex justify-end">
              <div className="w-full max-w-sm sm:max-w-md aspect-[4/5] bg-neutral-800 rounded-[36px] md:rounded-[48px] overflow-hidden shadow-md relative group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0n511VgbG9Y7Mx3Fw3lmGtLtkwhI-5EMYscviIT8vdVJW7s2qMfrVmzDHjMlSGKz9bASUTHrXs3SuGI5GLGv9oNIUJxt6VtePDPUupYsMPjCSs4Ll4mF8WF_a6EdGsqa6CMJ_cYLsYJLKd3qkoN0G5NpPZGzTEUW3HN3DrdneigDIY5Uw2xFWhZWLr4zyqxCclkfWMyxFNkJz9pOd6p0xVNHW9UzwOBLKCWj-CaGiHvYgNSaSRSzZcQ"
                  alt="Nexuss Identity"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-white text-xs uppercase tracking-widest font-mono">
                  Nexuss Identity
                </div>
              </div>
            </div>
          </div>

          {/* Lower Floating Rounded Image & Manifest Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-4">
            <div className="lg:col-span-4">
              <div className="w-full max-w-[340px] flex items-center justify-start relative group py-2">
                <img
                  src="/logo-nexuss-sin-fondo.png"
                  alt="Logotipo Nexuss"
                  className="w-full max-w-[320px] sm:max-w-[340px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:col-span-8 flex justify-end">
              <div className="max-w-2xl text-left md:text-right">
                <p className="font-sans text-xl sm:text-2xl md:text-[27px] leading-snug md:leading-relaxed text-neutral-800 font-normal">
                  Somos una <strong className="font-semibold text-neutral-950">agencia creativa</strong> especializada en branding y rebranding. Construimos marcas desde su esencia: estrategia, identidad y experiencia, transformando ideas en conexiones reales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GridShowcaseGallery with Arrow Navigation */}
      <section className="bg-neutral-900 py-6 relative group" data-purpose="gallery-preview">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {galleryImages
              .slice(galleryOffset, galleryOffset + 4)
              .concat(galleryImages.slice(0, Math.max(0, 4 - (galleryImages.length - galleryOffset))))
              .map((img, i) => (
                <div
                  key={i}
                  className="aspect-square bg-[#2D2F2E] rounded-xl overflow-hidden relative group/item shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-900/30 hover:bg-transparent transition-colors" />
                </div>
              ))}
          </div>

          <button
            onClick={() => setGalleryOffset((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            aria-label="Previous Slide"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-105 shadow-md"
          >
            ←
          </button>
          <button
            onClick={() => setGalleryOffset((prev) => (prev + 1) % galleryImages.length)}
            aria-label="Next Slide"
            className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-105 shadow-md"
          >
            →
          </button>
        </div>
      </section>

      {/* 3. Branding Section with Central Rotating Badge */}
      <section className="py-20 md:py-28 px-5 sm:px-8 md:px-12 bg-[#FAF9F5] relative" id="branding">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 relative items-center">
            {/* Left Column: Branding Text Card + Lower Image */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-[38px] p-8 sm:p-12 shadow-sm border border-neutral-100 flex flex-col justify-center min-h-[300px] text-center">
                <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-4">
                  Branding
                </h2>
                <p className="text-sm md:text-base font-semibold text-neutral-800 mb-4 font-sans">
                  Creamos marcas desde su esencia.
                </p>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-md mx-auto font-sans">
                  En Nexuss no diseñamos solo lo visual. Construimos marcas completas con estrategia, identidad y una forma auténtica de conectar con las personas.
                </p>
              </div>

              {/* Lower Image Box */}
              <div className="w-full aspect-[16/10] bg-[#3B3D3B] rounded-[38px] overflow-hidden shadow-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA4JkhLt9z-NiIFR1qN3OzKTLJ8cL6NCzuZaRnKVmmt-hHScAq8ypcLCOxAKk5M6RPaG_XmF5HxogE4fC1Uk6yeXcm0E6vRzQMDJWHklchjbhTc5BAPm5H8q-2dWHQlz7_0SqYl2sJn_UpkcZdRljPu-suZEiO2cve2kFBYy73OTQhonIGadW6DHpsefaq3F9gf_ahBue8rAGAeToDhg6o__ncah0FBexqcQcd__Py6GClJJ7e6DlcAA"
                  alt="Case Concept 01 - Papelería táctil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Central Decorative Seal "Nuestra especialidad" (with sunburst floral SVG animation) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:block">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full text-[#C0A635] animate-spin-slow"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" fill="#C0A635" r="46" />
                  <g fill="#A58D27">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <path
                        key={i}
                        d="M50 0 L53 20 L50 22 L47 20 Z"
                        transform={`rotate(${i * 15} 50 50)`}
                      />
                    ))}
                  </g>
                </svg>
                <span className="relative z-10 font-serif italic font-medium text-white text-xs leading-tight text-center px-2">
                  Nuestra<br />
                  <span className="font-sans not-italic text-[13px] uppercase tracking-wider font-semibold">
                    especialidad
                  </span>
                </span>
              </div>
            </div>

            {/* Right Column: Tall Main Image Box */}
            <div className="flex flex-col">
              <div className="w-full h-full min-h-[500px] bg-[#343634] rounded-[42px] overflow-hidden shadow-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl-2cnfoa0y-Ag6nPmGZmlaqrnnO066vbrKD7xWUsEzZKQCwFtSaxeTK4l3rv3VT2yBqOnjZDzopDixVcp_LVBFtbqMZVm5lJ4YD7cVMP_esN3H3SxX_zuvAbeQYLs0r4rztfw6lwEUpYLqwh6hbr7t6yRTlTiEGuTkglTmfDYsYC7iHIjIo1Vodzd6KbLozWeIyLEtXMMJyZc6mHYWj1gQd0dtclrdrvZW-GMHUx4kNiOQKKJfJ89lw"
                  alt="Brand Visual System"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WhyBrandingSection: 3 Cards */}
      <section className="py-24 md:py-32 px-5 sm:px-8 md:px-12 bg-[#6E6D6B] text-neutral-900">
        <div className="max-w-[1360px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal">
              ¿Por qué necesitas <span className="italic">branding?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[36px] p-8 sm:p-12 shadow-sm flex flex-col justify-between min-h-[340px] transition-all hover:-translate-y-1">
              <div>
                <h3 className="font-bold text-lg md:text-xl text-neutral-900 leading-tight mb-6 font-sans">
                  No es un logo.<br />
                  Es lo que proyectas.
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed mb-4 font-sans">
                  Tu marca no vive en un símbolo, vive en la mente de las personas.
                </p>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans">
                  El branding define cómo te perciben, cómo te recuerdan y por qué te eligen.
                </p>
              </div>
              <p className="text-xs text-neutral-500 pt-4 border-t border-neutral-100 font-sans">
                Sin una base clara, todo comunica... pero nada conecta.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[36px] p-8 sm:p-12 shadow-sm flex flex-col justify-between min-h-[340px] transition-all hover:-translate-y-1">
              <div>
                <h3 className="font-bold text-lg md:text-xl text-neutral-900 leading-tight mb-6 font-sans">
                  No es vender más.<br />
                  Es vender mejor.
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed mb-4 font-sans">
                  Cuando tu marca está bien construida, deja de competir por precio.
                </p>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans">
                  Atraes a las personas correctas, generas confianza y creas valor real.
                </p>
              </div>
              <p className="text-xs text-neutral-500 pt-4 border-t border-neutral-100 font-sans">
                El branding convierte atención en decisión.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[36px] p-8 sm:p-12 shadow-sm flex flex-col justify-between min-h-[340px] transition-all hover:-translate-y-1">
              <div>
                <h3 className="font-bold text-lg md:text-xl text-neutral-900 leading-tight mb-6 font-sans">
                  No es estar.<br />
                  Es trascender.
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed mb-4 font-sans">
                  Las marcas que perduran no son las más visibles, sino las más coherentes.
                </p>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans">
                  El branding te da dirección, identidad y propósito en el tiempo.
                </p>
              </div>
              <p className="text-xs text-neutral-500 pt-4 border-t border-neutral-100 font-sans">
                No se trata de existir hoy, sino de permanecer mañana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. StoryConnectionSection: "¿Tu marca está conectando la historia correcta?" */}
      <section className="py-24 md:py-32 px-5 sm:px-8 md:px-12 bg-[#EAE4D9] relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[66px] leading-[1.08] text-neutral-900 max-w-2xl font-normal">
              ¿Tu marca está conectando la historia correcta?
            </h2>

            {/* Badge Circular Right */}
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#C0A635] flex items-center justify-center p-4 text-center text-white shrink-0 shadow-md">
              <span className="font-serif italic text-sm leading-tight">
                Nuestra<br />
                <span className="font-sans not-italic font-semibold tracking-normal text-xs uppercase">
                  especialidad
                </span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Box */}
            <div className="lg:col-span-6 relative">
              <div className="w-full aspect-[4/3] bg-[#353634] rounded-[42px] overflow-hidden relative shadow-md">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5XwjolhILapviuAYY3grBXtIJk0ADloi5SRxOFy0uN5rM8pKoTj5bVWyh1dYMFCw5kQRV_0jhP6NTKNwBCJqzqDiV5YOAo0ZKFU1uM-bunlfZvEXgaHlFRzRmvNJba7tsiklxczm-yjt83L0yGOQu-WkgckIwm0aJszT0iqr7_Bcvaid6PLCkkaMJY7RcjqKDFlSK137F7k5jjtzKjvS3K_giAjrKNUUliDVDm6hbygCWJoBxde7DKQ"
                  alt="Editorial Visual - Proceso artesanal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Editorial Paragraph Column */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left md:text-right">
              <div className="space-y-6 text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl ml-auto font-sans">
                <p>En un entorno donde todo comunica, no basta con verse bien: hay que tener dirección.</p>
                <p>Las marcas que conectan son las que entienden a su audiencia y construyen experiencias coherentes en cada punto de contacto.</p>
                <p>Desde lo visual hasta lo estratégico, cada detalle influye en cómo te perciben. En NEXUSS alineamos tu marca para que todo hable el mismo idioma: el tuyo.</p>
                <p className="font-medium text-neutral-900">
                  Y cuando es necesario, no solo ajustamos... transformamos para llevarla al siguiente nivel.
                </p>
              </div>

              <div className="mt-8 flex justify-start md:justify-end">
                <button
                  onClick={() => onNavigate('contacto')}
                  className="border border-neutral-900 rounded-full px-7 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors duration-200 shadow-sm active:scale-95"
                >
                  Comienza ya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RebrandingSection */}
      <section className="py-20 md:py-28 px-5 sm:px-8 md:px-12 bg-[#FAF9F5]">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Column: Large Image Box */}
            <div>
              <div className="w-full h-full min-h-[480px] bg-[#3B3D3B] rounded-[42px] overflow-hidden shadow-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHCjQmm0MJOAw9Q-4wIj_88OqUO5jPA5tulFz_QgCQf88r1y6iihUdjlTprddCxDe-35eAfq7ZpeyRgPyuiEI3-TGESTG1O5xPEk3tPUN35AnXN5xK8MRUMph1q1HTg9yyiCECHPNg_MTbb6zNM_2Xc4QGfVVw368lzYhTB3hUnm1bBX6feQD2kwEeFPMW5siYhBT3SNKtJ61QbjlRHUhvl3PKNfNT9nMpjVvIspAu-4iWFPiiK1bzdg"
                  alt="Rebranding Case Visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: White Card + Lower Box */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-[38px] p-8 sm:p-12 shadow-sm border border-neutral-100 flex flex-col justify-center min-h-[280px] text-center">
                <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-4">
                  Rebranding
                </h2>
                <p className="text-sm md:text-base font-semibold text-neutral-800 mb-4 font-sans">
                  Transformamos marcas para que vuelvan a conectar.
                </p>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-md mx-auto font-sans">
                  Reinterpretamos lo que ya existe para llevarlo a otro nivel. Redefinimos su esencia, su identidad y su forma de comunicarse, alineándola con lo que hoy necesita ser.
                </p>
              </div>

              <div className="w-full aspect-[16/9] bg-[#353735] rounded-[38px] overflow-hidden shadow-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpKXntkVsEw_3ixFde9aO4nSej0FWrpry1EwSDlpWbWd6cJPdGQesLN3oWSfeeQw2hmO3Q7XU_GHZ0jY2TH5BGU9-eaeYOfcbupmngfJ-BGaWHRR02pAdoj7g8uUFEQgy5rkPvA0Eva41lqP2KFDvyNtCvhgokmVmlYrf8zRQsEpIbUr0nsOGYWK0PFm1lU0RrLZvc8b5zEBJgfrQsd26dgAoo-__iJILp3WAYlpCFQEkAjt7aGUep0A"
                  alt="Transformation Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ProcessSection: Así sería nuestro proceso */}
      <section className="py-24 md:py-32 px-5 sm:px-8 md:px-12 bg-[#FAF9F5] border-t border-neutral-200" id="proceso-servicios">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#BFA435] font-semibold block mb-2">
              Metodología Estratégica
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-900 font-normal">
              Así sería nuestro proceso
            </h2>
          </div>

          {/* 3 Interactive Phase Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phase 1 */}
            <div
              onClick={() => setActiveProcessPhase(1)}
              className={`rounded-[32px] p-8 md:p-10 cursor-pointer transition-all duration-300 ${
                activeProcessPhase === 1
                  ? 'bg-white shadow-md ring-2 ring-neutral-900 scale-[1.02]'
                  : 'bg-white/80 border border-neutral-200 opacity-80 hover:opacity-100'
              }`}
            >
              <p className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-2">Fase 1</p>
              <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-2">CONECTAR</h3>
              <h4 className="font-semibold text-sm text-neutral-800 mb-4 font-sans">Primero entendemos</h4>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans">
                Para crear, conectamos contigo y con tu marca. A través de un brief estratégico y una videollamada, nos sumergimos en su esencia, su historia y todo lo que aspira a ser.
                <br /><br />
                Analizamos tu contexto y, si hace falta, redefinimos el rumbo en el que estás hoy.
              </p>
            </div>

            {/* Phase 2 */}
            <div
              onClick={() => setActiveProcessPhase(2)}
              className={`rounded-[32px] p-8 md:p-10 cursor-pointer transition-all duration-300 ${
                activeProcessPhase === 2
                  ? 'bg-white shadow-md ring-2 ring-neutral-900 scale-[1.02]'
                  : 'bg-white/80 border border-neutral-200 opacity-80 hover:opacity-100'
              }`}
            >
              <p className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-2">Fase 2</p>
              <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-2">CONSTRUIR</h3>
              <h4 className="font-semibold text-sm text-neutral-800 mb-4 font-sans">Luego damos forma</h4>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans">
                Con lo que descubrimos, empezamos a construir contigo. Definimos la estrategia, el concepto y la identidad que va a representar tu marca.
                <br /><br />
                Desde lo visual hasta lo conceptual, cada decisión tiene intención: que todo comunique, conecte y tenga coherencia.
              </p>
            </div>

            {/* Phase 3 */}
            <div
              onClick={() => setActiveProcessPhase(3)}
              className={`rounded-[32px] p-8 md:p-10 cursor-pointer transition-all duration-300 ${
                activeProcessPhase === 3
                  ? 'bg-white shadow-md ring-2 ring-neutral-900 scale-[1.02]'
                  : 'bg-white/80 border border-neutral-200 opacity-80 hover:opacity-100'
              }`}
            >
              <p className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-2">Fase 3</p>
              <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-2">PROYECTAR</h3>
              <h4 className="font-semibold text-sm text-neutral-800 mb-4 font-sans">Finalmente la llevamos al mundo</h4>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans">
                Tu marca deja de ser una idea y se convierte en experiencia. Desarrollamos todo lo necesario para que se exprese, se comunique y conecte en cada punto de contacto.
                <br /><br />
                Te equipamos con recursos que potencian tu mensaje con claridad, autenticidad y fuerza.
              </p>
            </div>
          </div>

          {/* Interactive Timeline Needle Indicator */}
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative flex items-center h-4">
              <div className="w-full h-[2px] bg-neutral-300 rounded-full" />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-16 h-3 bg-neutral-900 rounded-full flex items-center justify-center shadow-md transition-all duration-500"
                style={{
                  left:
                    activeProcessPhase === 1
                      ? '16%'
                      : activeProcessPhase === 2
                      ? '50%'
                      : '84%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex justify-between text-[11px] uppercase tracking-wider text-neutral-500 mt-2 font-mono">
              <button onClick={() => setActiveProcessPhase(1)}>01 Conectar</button>
              <button onClick={() => setActiveProcessPhase(2)}>02 Construir</button>
              <button onClick={() => setActiveProcessPhase(3)}>03 Proyectar</button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-20 md:py-28 px-5 sm:px-8 md:px-12 bg-[#FAF9F5] border-t border-neutral-200">
        <div className="max-w-[1240px] mx-auto">
          {/* Controls Top Right */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#BFA435] font-semibold">
              Casos Reales • Testimonios
            </span>
            <div className="flex gap-4">
              <button
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center text-neutral-700 hover:text-black transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center text-neutral-700 hover:text-black transition-colors"
              >
                →
              </button>
            </div>
          </div>

          {/* Testimonial Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5">
              <div className="w-full aspect-[4/3] bg-[#3B3D3B] rounded-[32px] overflow-hidden shadow-md">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.company}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">
                {currentTestimonial.company}
              </h3>
              <div className="space-y-4 text-sm md:text-[15px] text-neutral-600 leading-relaxed max-w-xl font-sans">
                {currentTestimonial.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-200">
                <p className="text-sm font-semibold text-neutral-900 font-sans">{currentTestimonial.author}</p>
                <p className="text-xs text-neutral-500 font-sans">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Client Logos Strip */}
          <div className="mt-20 pt-12 border-t border-neutral-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center opacity-40">
              <div className="font-serif tracking-widest text-lg font-bold">AURA LABS</div>
              <div className="font-serif tracking-widest text-lg font-bold">LUMEN BAR</div>
              <div className="font-serif tracking-widest text-lg font-bold">BOTANICA</div>
              <div className="font-serif tracking-widest text-lg font-bold">AURORA</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
