import React, { useState } from 'react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: TabType) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: TabType; label: string }[] = [
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E8E6E0] shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="h-20 md:h-24 max-w-[1560px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center text-left group focus:outline-none"
          aria-label="Nexuss - Ir a Inicio"
        >
          <img
            src="/logo-nexuss.png"
            alt="Nexuss"
            className="h-12 md:h-14 w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-[13.5px] uppercase tracking-wider transition-all duration-200 py-1 ${
                  isActive
                    ? 'text-[#0d0d0d] font-semibold'
                    : 'text-[#444748] hover:text-[#0d0d0d] font-medium'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0d0d0d] rounded-full animate-fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => handleNavClick('contacto')}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#0d0d0d] text-[#ffffff] text-xs sm:text-[13px] uppercase tracking-wider hover:bg-[#232323] transition-all duration-300 shadow-sm active:scale-95"
          >
            <span>Trabajemos juntos</span>
            <span className="text-sm font-sans font-light">↗</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1b1c1a] hover:text-black focus:outline-none"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E6E0] bg-[#FAF9F5] px-6 py-6 space-y-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('inicio')}
              className={`text-left text-lg font-serif py-1 ${
                activeTab === 'inicio' ? 'text-black font-bold' : 'text-neutral-600'
              }`}
            >
              Inicio
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-medium py-1 uppercase tracking-wider ${
                  activeTab === item.id ? 'text-black font-bold' : 'text-neutral-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-200">
            <button
              onClick={() => handleNavClick('contacto')}
              className="w-full text-center py-3 rounded-full bg-[#0d0d0d] text-white text-xs uppercase tracking-widest font-semibold"
            >
              Iniciar proyecto ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
