/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeTab } from './components/tabs/HomeTab';
import { AboutTab } from './components/tabs/AboutTab';
import { ServicesTab } from './components/tabs/ServicesTab';
import { PortfolioTab } from './components/tabs/PortfolioTab';
import { ContactTab } from './components/tabs/ContactTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  // Handle tab switching
  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    if (tab !== 'portafolio') {
      setSelectedCaseId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cross-component navigation helper (e.g. from Home or Services to a specific case in Portfolio)
  const handleNavigate = (tab: TabType, caseId?: string) => {
    setActiveTab(tab);
    if (caseId) {
      setSelectedCaseId(caseId);
    } else if (tab !== 'portafolio') {
      setSelectedCaseId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keep page title synchronized
  useEffect(() => {
    const titles: Record<TabType, string> = {
      inicio: 'Nexuss — Estudio Creativo de Branding & Diseño Estratégico',
      nosotros: 'Nosotros — Sobre Nexuss Studio & Filosofía',
      servicios: 'Servicios — Branding, Rebranding & Estrategia | Nexuss',
      portafolio: 'Portafolio — Casos de Estudio & Trabajos Selectos | Nexuss',
      contacto: 'Contacto — Inicia tu Proyecto | Nexuss',
    };
    document.title = titles[activeTab] || 'Nexuss Studio';
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1b1c1a] antialiased">
      {/* Semantic Top Navigation Header */}
      <Header activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Main Dynamic Viewport Container */}
      <main className="w-full flex-grow pt-20 md:pt-24 bg-[#FAF9F5]">
        {activeTab === 'inicio' && <HomeTab onNavigate={handleNavigate} />}
        {activeTab === 'nosotros' && <AboutTab onNavigate={handleNavigate} />}
        {activeTab === 'servicios' && <ServicesTab onNavigate={handleNavigate} />}
        {activeTab === 'portafolio' && (
          <PortfolioTab initialCaseId={selectedCaseId} onNavigate={handleNavigate} />
        )}
        {activeTab === 'contacto' && <ContactTab />}
      </main>

      {/* Semantic Global Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}

