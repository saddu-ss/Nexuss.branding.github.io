import React, { useState, useEffect } from 'react';
import { TabType, PortfolioCategory } from '../../types';
import { curatedProjects, caseStudies } from '../../data/projectsData';

interface PortfolioTabProps {
  initialCaseId?: string | null;
  onNavigate: (tab: TabType, caseId?: string) => void;
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({ initialCaseId, onNavigate }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(initialCaseId || null);
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('todos');

  useEffect(() => {
    if (initialCaseId) {
      setSelectedCaseId(initialCaseId);
    }
  }, [initialCaseId]);

  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToIndex = () => {
    setSelectedCaseId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a case study is currently selected and exists in caseStudies:
  if (selectedCaseId && caseStudies[selectedCaseId]) {
    const caseData = caseStudies[selectedCaseId];
    return (
      <div className="flex flex-col w-full animate-fade-in">
        {/* Minimal Sub-Header / Case Metadata Bar */}
        <section className="w-full bg-[#FAF9F5] border-b border-[#E8E6E0]">
          <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12 py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-widest text-neutral-600">
            <button
              onClick={handleBackToIndex}
              className="inline-flex items-center gap-2 text-black hover:text-[#715c00] transition-colors group focus:outline-none"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
              <span>Regresar al portafolio</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#BFA435]" />
              <span className="text-black font-semibold">
                {caseData.caseNumber} • {caseData.categoryTag}
              </span>
            </div>
          </div>
        </section>

        {/* Hero Section with Theme Color from Case */}
        <section
          className="w-full py-16 md:py-24"
          style={{
            backgroundColor: caseData.themeColor,
            color: caseData.themeTextColor || '#1b1c1a',
          }}
        >
          <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12">
            <div className="max-w-5xl space-y-6">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.18] tracking-tight font-normal">
                {caseData.heroManifesto}
              </h1>
              <p className="text-base sm:text-lg opacity-90 leading-relaxed font-sans max-w-4xl font-light">
                {caseData.heroDescription}
              </p>

              {/* Case Metadata Strip */}
              <div className="pt-8 mt-6 border-t border-black/10 flex flex-wrap items-center gap-y-3 gap-x-8 lg:gap-x-12 text-xs uppercase tracking-widest font-sans">
                <div>
                  <span className="opacity-60 mr-2">Cliente:</span>
                  <span className="font-semibold">{caseData.meta.client}</span>
                </div>
                <div>
                  <span className="opacity-60 mr-2">Disciplina:</span>
                  <span className="font-semibold">{caseData.meta.discipline}</span>
                </div>
                <div>
                  <span className="opacity-60 mr-2">Año:</span>
                  <span className="font-semibold">{caseData.meta.year}</span>
                </div>
                <div>
                  <span className="opacity-60 mr-2">Ubicación:</span>
                  <span className="font-semibold">{caseData.meta.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Gallery Layout — Exact Alignment with AURA Reference Layout */}
        <section className="w-full bg-[#FAF9F5] py-12 md:py-20">
          <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12">
            {caseData.gallery.length >= 9 ? (
              <div className="space-y-6 md:space-y-8">
                {/* 1. Full-width wide banner image */}
                <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden bg-neutral-900 shadow-sm aspect-[16/8] md:aspect-[21/9]">
                  <img
                    src={caseData.gallery[0].image}
                    alt={caseData.gallery[0].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-[11px] sm:text-xs uppercase tracking-widest font-semibold font-sans shadow-sm inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                    <span>{caseData.gallery[0].tag}</span>
                  </div>
                </div>

                {/* 2. Two equal columns (50% / 50%) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden bg-neutral-900 shadow-sm aspect-[16/10] md:aspect-[4/3]">
                    <img
                      src={caseData.gallery[1].image}
                      alt={caseData.gallery[1].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-[11px] sm:text-xs uppercase tracking-widest font-semibold font-sans shadow-sm inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                      <span>{caseData.gallery[1].tag}</span>
                    </div>
                  </div>

                  <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden bg-neutral-900 shadow-sm aspect-[16/10] md:aspect-[4/3]">
                    <img
                      src={caseData.gallery[2].image}
                      alt={caseData.gallery[2].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-[11px] sm:text-xs uppercase tracking-widest font-semibold font-sans shadow-sm inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                      <span>{caseData.gallery[2].tag}</span>
                    </div>
                  </div>
                </div>

                {/* 3. Asymmetric Layout: Left Tall Image + Right Two Stacked Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
                  {/* Left Column: Tall vertical image */}
                  <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden bg-neutral-900 shadow-sm h-full min-h-[460px] md:min-h-[640px]">
                    <img
                      src={caseData.gallery[3].image}
                      alt={caseData.gallery[3].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-[11px] sm:text-xs uppercase tracking-widest font-semibold font-sans shadow-sm inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                      <span>{caseData.gallery[3].tag}</span>
                    </div>
                  </div>

                  {/* Right Column: Two stacked horizontal images */}
                  <div className="flex flex-col gap-6 md:gap-8 justify-between h-full">
                    <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden bg-neutral-900 shadow-sm flex-1 min-h-[220px] md:min-h-[300px] aspect-[16/10]">
                      <img
                        src={caseData.gallery[4].image}
                        alt={caseData.gallery[4].alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-[11px] sm:text-xs uppercase tracking-widest font-semibold font-sans shadow-sm inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                        <span>{caseData.gallery[4].tag}</span>
                      </div>
                    </div>

                    <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden bg-neutral-900 shadow-sm flex-1 min-h-[220px] md:min-h-[300px] aspect-[16/10]">
                      <img
                        src={caseData.gallery[5].image}
                        alt={caseData.gallery[5].alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-[11px] sm:text-xs uppercase tracking-widest font-semibold font-sans shadow-sm inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                        <span>{caseData.gallery[5].tag}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Two equal columns (portrait/square) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden bg-neutral-900 shadow-sm aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
                    <img
                      src={caseData.gallery[6].image}
                      alt={caseData.gallery[6].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-[11px] sm:text-xs uppercase tracking-widest font-semibold font-sans shadow-sm inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                      <span>{caseData.gallery[6].tag}</span>
                    </div>
                  </div>

                  <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden bg-neutral-900 shadow-sm aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
                    <img
                      src={caseData.gallery[7].image}
                      alt={caseData.gallery[7].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-[11px] sm:text-xs uppercase tracking-widest font-semibold font-sans shadow-sm inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                      <span>{caseData.gallery[7].tag}</span>
                    </div>
                  </div>
                </div>

                {/* 5. Closing full-width dramatic hero image with text overlay */}
                <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden bg-neutral-900 shadow-sm aspect-[16/9] md:aspect-[21/8]">
                  <img
                    src={caseData.gallery[8].image}
                    alt={caseData.gallery[8].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-14">
                    <div className="inline-flex items-center gap-2 self-start mb-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-[11px] sm:text-xs uppercase tracking-widest font-semibold font-sans shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                      <span>{caseData.gallery[8].tag}</span>
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white font-normal leading-[1.15] max-w-3xl">
                      {caseData.gallery[8].title || 'Donde la marca se convierte en atmósfera.'}
                    </h3>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 md:space-y-8">
                {caseData.gallery.map((item, index) => {
                  const isLarge = index === 0 || index === caseData.gallery.length - 1;
                  return (
                    <div
                      key={index}
                      className={`group relative rounded-2xl md:rounded-[32px] overflow-hidden bg-neutral-900 shadow-md ${
                        isLarge ? 'w-full aspect-[16/8.5] md:aspect-[21/9]' : 'w-full aspect-[16/10] md:aspect-[16/9]'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-black text-xs uppercase tracking-widest font-semibold font-sans shadow-sm inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                        <span>{item.tag}</span>
                      </div>
                      {item.title && (
                        <div className="absolute bottom-16 left-6 md:bottom-20 md:left-8 max-w-xl text-white">
                          <h3 className="font-serif text-2xl md:text-3xl font-normal">{item.title}</h3>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Editorial Narrative Section: "LA HISTORIA" */}
        <section className="w-full py-16 md:py-24 bg-white border-t border-[#E8E6E0]">
          <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Sticky Sidebar on Desktop */}
              <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-32 self-start">
                <span className="font-serif text-4xl sm:text-5xl text-[#F16328] uppercase font-bold tracking-tight">
                  LA HISTORIA
                </span>
                <p className="text-sm md:text-base text-neutral-600 mt-4 max-w-xs font-sans leading-relaxed">
                  {caseData.storySubtitle}
                </p>

                {caseData.storyDetails && (
                  <div className="hidden lg:flex flex-col gap-2 mt-8 pt-6 border-t border-neutral-200 w-full max-w-xs text-xs uppercase tracking-wider text-neutral-600 font-sans">
                    {caseData.storyDetails.map((det, i) => (
                      <div key={i} className="flex justify-between py-1">
                        <span>{det.label}</span>
                        <span className="text-black font-semibold">{det.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Story Chapters List */}
              <div className="lg:col-span-8 space-y-12 md:space-y-16">
                {caseData.stories.map((story, i) => (
                  <article key={i} className="space-y-3 pb-8 md:pb-12 border-b border-neutral-100 last:border-b-0">
                    {story.number && (
                      <span className="text-xs uppercase tracking-widest text-[#F16328] font-bold font-mono">
                        {story.number}
                      </span>
                    )}
                    <h3 className="font-sans text-xl uppercase tracking-wider text-neutral-900 font-semibold">
                      {story.title}
                    </h3>
                    {story.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm sm:text-base text-neutral-700 leading-relaxed font-sans">
                        {p}
                      </p>
                    ))}
                    {story.italicQuote && (
                      <p className="font-serif text-lg italic text-[#F16328] pt-2">
                        {story.italicQuote}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next Case Study Navigation */}
        {caseData.nextCaseId && (
          <section className="w-full bg-[#f3f2ee] py-16 md:py-20 border-t border-neutral-200">
            <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-3 font-sans">
                    Siguiente caso de estudio
                  </span>
                  <button
                    onClick={() => handleSelectCase(caseData.nextCaseId!)}
                    className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 hover:text-[#715c00] transition-colors text-left font-normal tracking-tight block"
                  >
                    {caseData.nextCaseTitle}
                  </button>
                  <p className="text-sm sm:text-base text-neutral-600 mt-3 font-sans font-light">
                    {caseData.nextCaseSubtitle}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={handleBackToIndex}
                    className="px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-100 transition-colors shadow-sm border border-neutral-300"
                  >
                    Todos los casos
                  </button>
                  <button
                    onClick={() => handleSelectCase(caseData.nextCaseId!)}
                    className="px-8 py-3 rounded-full bg-black text-white text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors shadow-sm inline-flex items-center gap-2"
                  >
                    <span>Ver Siguiente</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  // Otherwise, render the Main Curated Portfolio Index (Image 9)
  const filteredProjects =
    selectedCategory === 'todos'
      ? curatedProjects
      : curatedProjects.filter((p) => p.category === selectedCategory);

  const categories: { id: PortfolioCategory; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'branding', label: 'Branding' },
    { id: 'rebranding', label: 'Rebranding' },
    { id: 'direccion-creativa', label: 'Dirección creativa' },
    { id: 'identidad-visual', label: 'Identidad Visual' },
  ];

  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Portfolio Header Section */}
      <section className="w-full max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12 pt-12 md:pt-16 lg:pt-20 pb-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold mb-3">
            PORTAFOLIO 2025 - 2026
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-neutral-900 font-normal tracking-tight mb-4">
            Nuestro trabajo
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-sans max-w-2xl leading-relaxed">
            De la esencia al proceso, y del proceso a la proyección. Así es como cada marca que creamos cobra sentido y conexión.
          </p>
        </div>
      </section>

      {/* Filter & Archive Meta Ribbon */}
      <section className="w-full max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-neutral-300 text-neutral-600">
          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-widest text-black font-semibold font-sans">
              Índice [{filteredProjects.length} Casos Selectos]
            </span>
            <div className="flex items-center gap-4 text-xs uppercase tracking-wider font-sans">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`transition-colors font-sans ${
                    selectedCategory === cat.id
                      ? 'text-black font-bold underline underline-offset-4 decoration-2'
                      : 'hover:text-black font-medium text-neutral-500'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-sans text-neutral-500">
            <span>Vistas en Galería</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#F16328]" />
          </div>
        </div>
      </section>

      {/* 2-Column Projects Showcase Grid */}
      <section className="w-full max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                if (project.hasDetailedCase) {
                  handleSelectCase(project.id);
                } else {
                  onNavigate('contacto');
                }
              }}
              className="group flex flex-col cursor-pointer focus:outline-none"
            >
              <div className="w-full aspect-[16/10] bg-neutral-900 rounded-[28px] overflow-hidden relative shadow-md transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-black">
                  <span className="text-base font-light">↗</span>
                </div>
                {project.hasDetailedCase && (
                  <div className="absolute bottom-6 left-6 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-mono">
                    Caso Completo Disponible
                  </div>
                )}
              </div>

              <div className="mt-4 px-1 flex flex-col">
                <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#F16328] group-hover:opacity-90 transition-opacity">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base text-neutral-600 font-sans mt-1">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Call to Action Ribbon */}
      <section className="w-full bg-[#f3f2ee] py-20 px-5 sm:px-8 md:px-12 border-t border-neutral-200">
        <div className="max-w-[1560px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#F16328] font-bold font-sans">
              ¿Tiene un nuevo proyecto en mente?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-neutral-900 mt-2 font-normal">
              Construyamos una presencia de marca inconfundible.
            </h3>
          </div>
          <button
            onClick={() => onNavigate('contacto')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-all duration-300 shadow-md active:scale-95"
          >
            <span>Iniciar conversación</span>
            <span>↗</span>
          </button>
        </div>
      </section>
    </div>
  );
};
