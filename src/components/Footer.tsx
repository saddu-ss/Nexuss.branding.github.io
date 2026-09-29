import React, { useState } from 'react';
import { TabType } from '../types';
import { LegalDocType, LegalModal } from './LegalModal';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);

  const handleNav = (tab: TabType) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="w-full bg-[#f3f2ee] border-t border-[#e3e2df] text-[#1b1c1a] transition-colors">
        <div className="max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12 pt-16 md:pt-24 pb-12">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#e3e2df]">
            {/* Brand Logo & Monogram */}
            <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start">
              <button
                onClick={() => handleNav('inicio')}
                className="flex items-center text-left group focus:outline-none"
                aria-label="Nexuss - Ir a Inicio"
              >
                <img
                  src="/logosimbolo-nexuss.png"
                  alt="Nexuss Logosímbolo"
                  className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </button>
              <p className="mt-4 text-xs text-[#716b58] max-w-xs leading-relaxed">
                Estudio creativo especializado en branding, dirección de arte y arquitectura de marcas que conectan desde lo sensorial.
              </p>
            </div>

            {/* Quick Links & Meta Columns */}
            <div className="md:col-span-8 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              {/* Primary Navigation */}
              <div className="flex flex-col space-y-3 font-serif text-xl md:text-2xl font-light text-[#252525]">
                <button
                  onClick={() => handleNav('servicios')}
                  className="text-left hover:text-[#715c00] transition-colors focus:outline-none"
                >
                  Servicios
                </button>
                <button
                  onClick={() => handleNav('nosotros')}
                  className="text-left hover:text-[#715c00] transition-colors focus:outline-none"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => handleNav('contacto')}
                  className="text-left hover:text-[#715c00] transition-colors focus:outline-none"
                >
                  Contacto
                </button>
                <button
                  onClick={() => handleNav('portafolio')}
                  className="text-left hover:text-[#715c00] transition-colors focus:outline-none"
                >
                  Portafolio
                </button>
              </div>

              {/* Legal Information */}
              <div className="flex flex-col space-y-2 text-xs text-[#716b58] font-sans">
                <span className="text-xs font-semibold text-[#252525] mb-2 uppercase tracking-wider">
                  Legal
                </span>
                <button
                  onClick={() => setLegalDoc('terminos')}
                  className="text-left hover:text-[#0d0d0d] transition-colors"
                >
                  Términos y condiciones
                </button>
                <button
                  onClick={() => setLegalDoc('cookies')}
                  className="text-left hover:text-[#0d0d0d] transition-colors"
                >
                  Política de cookies
                </button>
                <button
                  onClick={() => setLegalDoc('privacidad')}
                  className="text-left hover:text-[#0d0d0d] transition-colors"
                >
                  Política de privacidad
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex flex-col space-y-2 text-xs text-[#716b58] font-sans">
                <span className="text-xs font-semibold text-[#252525] mb-2 uppercase tracking-wider">
                  Síguenos
                </span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0d0d0d] transition-colors inline-flex items-center gap-1"
                >
                  Instagram <span>↗</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0d0d0d] transition-colors inline-flex items-center gap-1"
                >
                  Youtube <span>↗</span>
                </a>
                <a
                  href="mailto:nexuss.branding.ss@gmail.com"
                  className="hover:text-[#0d0d0d] transition-colors pt-2 text-[11px] break-all opacity-80"
                >
                  nexuss.branding.ss@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Strip */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#716b58] font-sans">
            <p>© 2025 Nexuss Studio. Todos los derechos reservados.</p>
            <p className="opacity-80">Diseñado con propósito e intención.</p>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal type={legalDoc} onClose={() => setLegalDoc(null)} />
    </>
  );
};
