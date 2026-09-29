/**
 * NEXUSS STUDIO — LÓGICA DE APLICACIÓN EN JAVASCRIPT VANILLA
 * Control de pestañas, filtrado de portafolio, acordeones, carruseles y validación de formulario.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. GESTIÓN DE PESTAÑAS (TABS)
  const navButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function switchTab(tabId) {
    // Actualizar botones de navegación activos
    navButtons.forEach(btn => {
      if (btn.getAttribute('data-tab-target') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Actualizar paneles visibles
    tabPanes.forEach(pane => {
      if (pane.id === `tab-${tabId}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Si se navega fuera de portafolio o a portafolio desde menú, ocultar casos detallados
    if (tabId === 'portafolio') {
      const caseViews = document.querySelectorAll('.case-study-view');
      const portfolioIndex = document.getElementById('portfolio-index');
      if (portfolioIndex) portfolioIndex.style.display = 'block';
      caseViews.forEach(cv => cv.style.display = 'none');
    }

    // Scroll suave a la parte superior
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Cerrar menú móvil si está abierto
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (mobileDrawer) mobileDrawer.classList.remove('open');
  }

  // Event Listeners para botones de pestañas
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-tab-target');
      if (target) switchTab(target);
    });
  });

  // 2. TOGGLE DE MENÚ MÓVIL
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  // 3. ACORDEONES INTERACTIVOS (PROCESO DE BRANDING)
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parentItem = trigger.closest('.accordion-item');
      const isOpen = parentItem.classList.contains('open');
      const icon = trigger.querySelector('.accordion-icon');

      // Cerrar otros acordeones
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('open');
        const itemIcon = item.querySelector('.accordion-icon');
        if (itemIcon) itemIcon.textContent = '+';
      });

      if (!isOpen) {
        parentItem.classList.add('open');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // 4. FILTRADO DE CASOS DE PORTAFOLIO
  const filterButtons = document.querySelectorAll('[data-filter]');
  const portfolioCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Botón activo
      filterButtons.forEach(b => b.classList.remove('active', 'font-bold'));
      btn.classList.add('active', 'font-bold');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'todos' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. NAVEGACIÓN A CASOS DE ESTUDIO EN DETALLE
  window.openCaseStudy = function(caseId) {
    switchTab('portafolio');
    const portfolioIndex = document.getElementById('portfolio-index');
    const caseView = document.getElementById(`case-${caseId}`);

    if (portfolioIndex && caseView) {
      portfolioIndex.style.display = 'none';
      document.querySelectorAll('.case-study-view').forEach(cv => cv.style.display = 'none');
      caseView.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  window.backToPortfolioIndex = function() {
    const portfolioIndex = document.getElementById('portfolio-index');
    if (portfolioIndex) {
      document.querySelectorAll('.case-study-view').forEach(cv => cv.style.display = 'none');
      portfolioIndex.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 6. FORMULARIO DE CONTACTO Y VALIDACIÓN
  const contactForm = document.getElementById('contact-form');
  const formSuccessModal = document.getElementById('form-success-modal');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('form-nombre')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const proyecto = document.getElementById('form-proyecto')?.value.trim();
      const checkedServices = document.querySelectorAll('input[name="servicios"]:checked');

      if (!nombre || !email || !proyecto || checkedServices.length === 0) {
        alert('Por favor completa todos los campos requeridos marcados con (*).');
        return;
      }

      // Simulación de envío exitoso
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.textContent = 'Enviando...';

      setTimeout(() => {
        if (formSuccessModal) {
          document.getElementById('modal-client-name').textContent = nombre;
          formSuccessModal.style.display = 'flex';
        }
        contactForm.reset();
        if (submitBtn) submitBtn.textContent = 'Enviar';
      }, 700);
    });
  }

  window.closeSuccessModal = function() {
    if (formSuccessModal) formSuccessModal.style.display = 'none';
  };

  // 7. MODALES LEGALES (TÉRMINOS, COOKIES, PRIVACIDAD)
  const legalModal = document.getElementById('legal-modal');
  const legalTitle = document.getElementById('legal-modal-title');
  const legalBody = document.getElementById('legal-modal-body');

  const legalContent = {
    terminos: {
      title: 'Términos y Condiciones',
      body: '<p>Bienvenido a Nexuss Studio. Al acceder y hacer uso de nuestros servicios de consultoría, branding, estrategia y diseño web, aceptas someterte a los presentes términos y condiciones.</p><p>1. Propiedad Intelectual: Todos los entregables, propuestas creativas y marcas desarrolladas son propiedad confidencial de Nexuss Studio hasta la liquidación total de los honorarios pactados.</p><p>2. Confidencialidad: Mantenemos reserva absoluta sobre información comercial y sensible compartida durante el proyecto.</p>'
    },
    cookies: {
      title: 'Política de Cookies',
      body: '<p>En Nexuss Studio utilizamos cookies esenciales y analíticas para optimizar la experiencia de navegación, asegurar el rendimiento fluido de nuestras galerías interactivas y analizar el tráfico de forma anónima.</p><p>Puedes gestionar o desactivar las cookies en cualquier momento desde la configuración de tu navegador.</p>'
    },
    privacidad: {
      title: 'Política de Privacidad',
      body: '<p>La privacidad de nuestros clientes es fundamental. Nexuss Studio protege los datos personales suministrados a través de formularios con el fin de evaluar proyectos y elaborar propuestas a medida.</p><p>Puedes solicitar la rectificación o supresión de tus datos en nexuss.branding.ss@gmail.com.</p>'
    }
  };

  window.openLegal = function(type) {
    if (legalModal && legalContent[type]) {
      legalTitle.textContent = legalContent[type].title;
      legalBody.innerHTML = legalContent[type].body;
      legalModal.style.display = 'flex';
    }
  };

  window.closeLegal = function() {
    if (legalModal) legalModal.style.display = 'none';
  };
});
