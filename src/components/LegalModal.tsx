import React from 'react';

export type LegalDocType = 'terminos' | 'cookies' | 'privacidad' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    terminos: {
      title: 'Términos y Condiciones',
      lastUpdated: 'Septiembre 2025',
      body: [
        'Bienvenido a Nexuss Studio. Al acceder y hacer uso de nuestros servicios de consultoría, branding, estrategia y diseño web, aceptas someterte a los presentes términos y condiciones.',
        '1. Propiedad Intelectual: Todos los entregables, propuestas creativas, marcas desarrolladas y documentación estratégica son propiedad confidencial de Nexuss Studio hasta la liquidación total de los honorarios pactados.',
        '2. Alcance del Proyecto: Las etapas de investigación, diseño conceptual, revisiones y entrega final se rigen por la orden de trabajo o brief firmado por ambas partes.',
        '3. Confidencialidad: Mantenemos reserva absoluta sobre información comercial, planes de negocio y material sensible compartido durante la colaboración.',
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      lastUpdated: 'Septiembre 2025',
      body: [
        'En Nexuss Studio utilizamos cookies esenciales y analíticas para optimizar la experiencia de navegación, asegurar el rendimiento fluido de nuestras galerías interactivas y analizar el tráfico de forma agregada y anónima.',
        '1. Cookies Técnicas: Necesarias para mantener el estado de la sesión, navegación entre pestañas y preferencias de visualización.',
        '2. Cookies de Rendimiento: Nos permiten evaluar la velocidad de carga de casos de estudio y optimizar la entrega de imágenes de alta resolución.',
        'Puedes gestionar o desactivar las cookies en cualquier momento desde la configuración de tu navegador.',
      ],
    },
    privacidad: {
      title: 'Política de Privacidad',
      lastUpdated: 'Septiembre 2025',
      body: [
        'La privacidad y la confianza de nuestros clientes son fundamentales. Nexuss Studio se compromete a proteger los datos personales suministrados a través de nuestros formularios de contacto y canales directos.',
        '1. Datos Recopilados: Nombre, correo electrónico, teléfono, país, información descriptiva del proyecto y rangos presupuestales compartidos voluntariamente.',
        '2. Finalidad del Tratamiento: Evaluación de viabilidad estratégica, elaboración de propuestas comerciales personalizadas y comunicación directa sobre el proyecto.',
        '3. Tus Derechos: Tienes derecho a acceder, rectificar o solicitar la supresión de tus datos en cualquier momento enviando un correo a nexuss.branding.ss@gmail.com.',
      ],
    },
  };

  const currentDoc = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FAF9F5] rounded-3xl max-w-2xl w-full p-8 md:p-12 shadow-2xl border border-neutral-200 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-800 flex items-center justify-center transition-colors text-lg"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <span className="text-xs uppercase tracking-widest text-[#BFA435] font-semibold">
          Información Legal • {currentDoc.lastUpdated}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#1b1c1a] font-normal mt-2 mb-6">
          {currentDoc.title}
        </h2>

        <div className="space-y-4 text-sm md:text-base text-neutral-700 leading-relaxed font-sans">
          {currentDoc.body.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#1b1c1a] text-white text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
