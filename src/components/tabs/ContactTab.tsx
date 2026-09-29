import React, { useState } from 'react';
import { ContactFormData } from '../../types';

export const ContactTab: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    servicios: [],
    pais: '',
    motivo: '',
    proyecto: '',
    redes: '',
    presupuesto: '',
    conocido: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const availableServices = [
    'Branding',
    'Re-branding',
    'Dirección creativa',
    'Identidad Visual',
    'Consultoría',
  ];

  const budgetOptions = [
    'Menos de $500.000 COP',
    '$500.000 – $1.500.000 COP',
    '$1.500.000 – $3.000.000 COP',
    'Más de $3.000.000 COP',
  ];

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicios.includes(service);
      return {
        ...prev,
        servicios: exists
          ? prev.servicios.filter((s) => s !== service)
          : [...prev.servicios, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (
      !formData.nombre.trim() ||
      !formData.apellido.trim() ||
      !formData.email.trim() ||
      formData.servicios.length === 0 ||
      !formData.pais.trim() ||
      !formData.motivo.trim() ||
      !formData.proyecto.trim() ||
      !formData.redes.trim() ||
      !formData.presupuesto ||
      !formData.conocido.trim()
    ) {
      setErrorMsg('Por favor completa todos los campos requeridos marcados con (*).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      servicios: [],
      pais: '',
      motivo: '',
      proyecto: '',
      redes: '',
      presupuesto: '',
      conocido: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col w-full animate-fade-in bg-white">
      {/* 1. Hero Image Banner with Monogram Watermark */}
      <section
        className="w-full bg-[#2E2E2E] h-64 sm:h-80 md:h-[360px] relative overflow-hidden flex items-center justify-center"
        data-purpose="hero-banner"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#383838] to-[#252525] flex items-center justify-center opacity-40">
          <svg viewBox="0 0 100 100" className="w-80 h-80 text-white transform scale-150">
            <path
              d="M22 18 C22 18, 30 18, 36 28 L66 74 C72 82, 78 82, 78 82 L78 28 C78 22, 74 18, 68 18 L62 18 L62 26 L68 26 C70 26, 71 27, 71 29 L71 68 L44 26 C38 17, 28 17, 22 18 Z"
              fill="currentColor"
            />
            <path
              d="M78 82 C78 82, 70 82, 64 72 L34 26 C28 18, 22 18, 22 18 L22 72 C22 78, 26 82, 32 82 L38 82 L38 74 L32 74 C30 74, 29 73, 29 71 L29 32 L56 74 C62 83, 72 83, 78 82 Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#E6E8B4] block mb-2">
            Nexuss Studio Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight">
            Empecemos una conversación
          </h2>
        </div>
      </section>

      {/* 2. Editorial Intro Section in sand/cream (#EAE8E2) */}
      <section
        className="w-full bg-[#EAE8E2] border-b border-[#dedbd3] py-16 lg:py-24 px-5 sm:px-8 md:px-12"
        data-purpose="editorial-intro"
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Headline Column */}
          <div className="lg:col-span-6">
            <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-neutral-900 leading-[1.08] max-w-lg">
              Las ideas que valen la pena merecen ser contadas.
            </h1>
          </div>

          {/* Description Column */}
          <div className="lg:col-span-6 text-neutral-800 space-y-6 pt-2 text-[15px] sm:text-base leading-relaxed font-sans">
            <p className="font-normal">
              Cuéntanos sobre tu proyecto y empecemos a construir algo que realmente represente lo que quieres crear.
              <br className="hidden sm:inline" />
              ¡Escríbenos y conectemos tus ideas!
            </p>
            <p className="font-normal text-neutral-700">
              Para cualquier otra consulta, puedes contactarnos directamente a nuestro correo:
              <br />
              <a
                href="mailto:nexuss.branding.ss@gmail.com"
                className="font-semibold text-black hover:underline transition-all"
              >
                nexuss.branding.ss@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Form Section */}
      <main className="w-full bg-white py-16 lg:py-24 px-5 sm:px-8 md:px-12" id="formulario-contacto">
        <div className="max-w-[820px] mx-auto">
          {submitted ? (
            <div className="bg-[#FAF9F5] border border-neutral-300 rounded-3xl p-10 md:p-14 text-center shadow-lg animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center mx-auto mb-6 text-2xl">
                ✓
              </div>
              <span className="text-xs uppercase tracking-widest text-[#BFA435] font-semibold block mb-2 font-mono">
                Mensaje Recibido con Éxito
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-neutral-900 mb-4">
                ¡Gracias, {formData.nombre}!
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 max-w-lg mx-auto leading-relaxed font-sans mb-8">
                Hemos recibido la información de tu proyecto para <strong>{formData.proyecto}</strong>. Nuestro equipo de dirección de arte y estrategia revisará tu propuesta y te contactará en menos de 24 horas a <strong>{formData.email}</strong>.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200 text-left max-w-md mx-auto mb-8 text-xs space-y-2 font-sans">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-neutral-500">Servicios seleccionados:</span>
                  <span className="font-semibold">{formData.servicios.join(', ')}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-neutral-500">Presupuesto estimado:</span>
                  <span className="font-semibold">{formData.presupuesto}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">País de origen:</span>
                  <span className="font-semibold">{formData.pais}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-black text-white text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" data-purpose="contact-form">
              {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm font-sans">
                  {errorMsg}
                </div>
              )}

              {/* Nombre */}
              <div className="space-y-2">
                <label className="block text-sm font-normal text-neutral-800" htmlFor="nombre">
                  Nombre <span className="text-neutral-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  className="w-full border border-neutral-800 bg-white p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Apellido */}
              <div className="space-y-2">
                <label className="block text-sm font-normal text-neutral-800" htmlFor="apellido">
                  Apellido <span className="text-neutral-500">*</span>
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                  required
                  className="w-full border border-neutral-800 bg-white p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-normal text-neutral-800" htmlFor="email">
                  Email <span className="text-neutral-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border border-neutral-800 bg-white p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <label className="block text-sm font-normal text-neutral-800" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full border border-neutral-800 bg-white p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Servicio de Interés (Checkboxes) */}
              <div className="space-y-4 pt-3">
                <label className="block text-sm font-normal text-neutral-800">
                  ¿Qué servicio te interesa? <span className="text-neutral-500">*</span>
                </label>
                <div className="space-y-3 pl-0.5">
                  {availableServices.map((service) => (
                    <label key={service} className="flex items-center space-x-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.servicios.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                        className="w-4 h-4 border border-neutral-800 rounded-none text-black focus:ring-0"
                      />
                      <span className="text-sm text-neutral-800 font-light font-sans">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* País de residencia */}
              <div className="space-y-2 pt-2">
                <label className="block text-sm font-normal text-neutral-800" htmlFor="pais">
                  ¿En qué país te encuentras? *
                </label>
                <input
                  type="text"
                  id="pais"
                  name="pais"
                  value={formData.pais}
                  onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                  required
                  className="w-full border border-neutral-800 bg-white p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Motivo de trabajo */}
              <div className="space-y-2">
                <label className="block text-sm font-normal text-neutral-800" htmlFor="motivo">
                  ¿Por qué quieres trabajar con nosotras? *
                </label>
                <textarea
                  id="motivo"
                  name="motivo"
                  rows={3}
                  value={formData.motivo}
                  onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                  required
                  className="w-full border border-neutral-800 bg-white p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black resize-none"
                />
              </div>

              {/* Proyecto o marca descripción */}
              <div className="space-y-2">
                <label className="block text-sm font-normal text-neutral-800" htmlFor="proyecto">
                  Cuéntanos más sobre tu proyecto o marca *
                </label>
                <textarea
                  id="proyecto"
                  name="proyecto"
                  rows={3}
                  value={formData.proyecto}
                  onChange={(e) => setFormData({ ...formData, proyecto: e.target.value })}
                  required
                  className="w-full border border-neutral-800 bg-white p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black resize-none"
                />
              </div>

              {/* Web o Instagram */}
              <div className="space-y-2">
                <label className="block text-sm font-normal text-neutral-800" htmlFor="redes">
                  ¿Cuál es la Web o Instagram de tu marca? *
                </label>
                <input
                  type="text"
                  id="redes"
                  name="redes"
                  value={formData.redes}
                  onChange={(e) => setFormData({ ...formData, redes: e.target.value })}
                  required
                  className="w-full border border-neutral-800 bg-white p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Presupuesto estimado (Radios) */}
              <div className="space-y-4 pt-2">
                <label className="block text-sm font-normal text-neutral-800">
                  ¿Cuál es tu presupuesto para este proyecto? *
                </label>
                <div className="space-y-3 pl-0.5">
                  {budgetOptions.map((budget) => (
                    <label key={budget} className="flex items-center space-x-3 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="presupuesto"
                        value={budget}
                        checked={formData.presupuesto === budget}
                        onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                        required
                        className="w-4 h-4 border border-neutral-800 text-black focus:ring-0"
                      />
                      <span className="text-sm text-neutral-800 font-light font-sans">{budget}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fuente / Dónde nos has conocido */}
              <div className="space-y-2 pt-2">
                <label className="block text-sm font-normal text-neutral-800" htmlFor="conocido">
                  ¿Dónde nos has conocido? *
                </label>
                <input
                  type="text"
                  id="conocido"
                  name="conocido"
                  value={formData.conocido}
                  onChange={(e) => setFormData({ ...formData, conocido: e.target.value })}
                  required
                  className="w-full border border-neutral-800 bg-white p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Submit Button Row */}
              <div className="pt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-80 py-3.5 px-8 border border-neutral-900 text-neutral-900 bg-white hover:bg-neutral-900 hover:text-white transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-none disabled:opacity-50 active:scale-95 shadow-sm"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};
