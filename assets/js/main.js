/**
* Template Name: Personal - v4.7.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()
/**
 * Language System (English/Spanish)
 */
(function() {
  "use strict";

  const translations = {
    en: {
      header_title: "Senior",
      header_subtitle: "Service Architecture · Platforms · IT Governance",
      nav_home: "Home",
      nav_about: "About",
      nav_experience: "Experience",
      nav_focus: "Focus",
      nav_contact: "Contact",
      about_title: "About",
      about_subtitle: "Professional Overview",
      about_heading: "Senior IT Consultant · Service & Platform Architecture",
      about_p1: "Senior IT consultant with more than 20 years of experience designing, structuring and evolving technology services and platforms in complex and heterogeneous environments.",
      about_p2: "My work focuses on translating business needs into concrete, scalable and governable technology decisions, participating from early-stage analysis and business shadowing through solution design, service modeling and operational transition.",
      about_p3: "I have operated across multiple industries, assuming responsibility for service models, platform standardization, automation initiatives, observability, security by design and IT governance, with measurable impact on efficiency, continuity and operational clarity.",
      about_p4: "My technical background supports architectural judgment and decision-making rather than isolated execution, leaving behind structured models, automation and internal capability instead of dependency.",
      experience_title: "Experience",
      experience_subtitle: "Professional Trajectory",
      exp1_title: "Senior IT Consultant",
      exp1_company: "Independent / Consulting Engagements",
      exp1_li1: "Design of service and platform architectures in organizations with low and medium IT maturity.",
      exp1_li2: "Business shadowing and documentation of fragmented, undocumented operational processes.",
      exp1_li3: "Design of automated endpoint provisioning and configuration platforms.",
      exp1_li4: "Reduction of provisioning times from manual processes to fully automated workflows.",
      exp1_li5: "Architecture of centralized observability and monitoring platforms.",
      exp1_li6: "Redesign of service management models, metrics and ticketing structures.",
      exp1_li7: "Organizational enablement through documentation, training platforms and knowledge transfer.",
      exp1_li8: "Design of automation and IoT-based solutions in constrained-budget environments.",
      exp2_title: "IT Operations Engineer / Service Design & Transition",
      exp2_company: "Enterprise Consulting Environment",
      exp2_li1: "Participation in long-term service transformation initiatives.",
      exp2_li2: "Business shadowing and end-to-end process analysis.",
      exp2_li3: "Construction of service, process and dependency matrices.",
      exp2_li4: "Design of service models and preparation of operational transitions.",
      exp2_li5: "Definition of KPIs, metrics and governance structures.",
      exp2_li6: "Responsibility as technical counterpart for specific business domains.",
      exp3_title: "Infrastructure & Platform Administrator",
      exp3_company: "Critical Operational Environments",
      exp3_li1: "Design and administration of IT infrastructure.",
      exp3_li2: "Definition of continuity mechanisms (RTO, RPO, high availability).",
      exp3_li3: "Active Directory governance and configuration management.",
      exp3_li4: "Budget planning and operational support.",
      exp3_li5: "System deployments, QA, documentation and user training.",
      focus_title: "Focus Areas",
      focus1_title: "Service Architecture",
      focus1_desc: "Design of scalable and governable service models aligned with real business and operational context.",
      focus2_title: "Platform & Automation",
      focus2_desc: "Platform standardization, automation, observability and security by design to reduce operational friction and risk.",
      focus3_title: "IT Governance",
      focus3_desc: "Service governance, metrics, transitions and sustainable improvement in complex environments.",
      focus4_title: "Social & Community Technology",
      focus4_desc: "Design of efficient, low-cost technology solutions for communities without access to resources, including support for structuring and leveraging external funding. These initiatives operate as reciprocal laboratories, strengthening professional consulting practice.",
      contact_title: "Contact",
      contact_subtitle: "Get in touch",
      contact_address: "Address",
      contact_email: "Email",
      contact_social: "Social"
    },
    es: {
      header_title: "Senior",
      header_subtitle: "Arquitectura de Servicios · Plataformas · Gobernanza TI",
      nav_home: "Inicio",
      nav_about: "Acerca",
      nav_experience: "Experiencia",
      nav_focus: "Enfoque",
      nav_contact: "Contacto",
      about_title: "Acerca",
      about_subtitle: "Resumen Profesional",
      about_heading: "Consultor Senior TI · Arquitectura de Servicios y Plataformas",
      about_p1: "Consultor senior de TI con más de 20 años de experiencia diseñando, estructurando y evolucionando servicios tecnológicos y plataformas en entornos complejos y heterogéneos.",
      about_p2: "Mi trabajo se enfoca en traducir necesidades de negocio en decisiones tecnológicas concretas, escalables y gobernables, participando desde análisis tempranos y shadowing de negocio hasta diseño de soluciones, modelamiento de servicios y transición operacional.",
      about_p3: "He operado en múltiples industrias, asumiendo responsabilidad por modelos de servicios, estandarización de plataformas, iniciativas de automatización, observabilidad, seguridad por diseño y gobernanza TI, con impacto medible en eficiencia, continuidad y claridad operacional.",
      about_p4: "Mi formación técnica soporta juicio arquitectónico y toma de decisiones en lugar de ejecución aislada, dejando atrás modelos estructurados, automatización y capacidad interna en lugar de dependencia.",
      experience_title: "Experiencia",
      experience_subtitle: "Trayectoria Profesional",
      exp1_title: "Consultor Senior TI",
      exp1_company: "Independiente / Consultorías",
      exp1_li1: "Diseño de arquitecturas de servicios y plataformas en organizaciones con madurez TI baja y media.",
      exp1_li2: "Shadowing de negocio y documentación de procesos operativos fragmentados y no documentados.",
      exp1_li3: "Diseño de plataformas automatizadas de aprovisionamiento y configuración de endpoints.",
      exp1_li4: "Reducción de tiempos de aprovisionamiento desde procesos manuales hasta flujos de trabajo completamente automatizados.",
      exp1_li5: "Arquitectura de plataformas centralizadas de observabilidad y monitoreo.",
      exp1_li6: "Rediseño de modelos de gestión de servicios, métricas y estructuras de ticketing.",
      exp1_li7: "Habilitación organizacional a través de documentación, plataformas de capacitación y transferencia de conocimiento.",
      exp1_li8: "Diseño de soluciones basadas en automatización e IoT en entornos con presupuesto limitado.",
      exp2_title: "Ingeniero de Operaciones TI / Diseño y Transición de Servicios",
      exp2_company: "Entorno de Consultoría Empresarial",
      exp2_li1: "Participación en iniciativas de transformación de servicios a largo plazo.",
      exp2_li2: "Shadowing de negocio y análisis de procesos de extremo a extremo.",
      exp2_li3: "Construcción de matrices de servicios, procesos y dependencias.",
      exp2_li4: "Diseño de modelos de servicios y preparación de transiciones operacionales.",
      exp2_li5: "Definición de KPIs, métricas y estructuras de gobernanza.",
      exp2_li6: "Responsabilidad como contraparte técnica para dominios de negocio específicos.",
      exp3_title: "Administrador de Infraestructura y Plataformas",
      exp3_company: "Entornos Operacionales Críticos",
      exp3_li1: "Diseño y administración de infraestructura TI.",
      exp3_li2: "Definición de mecanismos de continuidad (RTO, RPO, alta disponibilidad).",
      exp3_li3: "Gobernanza de Active Directory y gestión de configuración.",
      exp3_li4: "Planificación de presupuesto y soporte operacional.",
      exp3_li5: "Despliegues de sistemas, QA, documentación y capacitación de usuarios.",
      focus_title: "Áreas de Enfoque",
      focus1_title: "Arquitectura de Servicios",
      focus1_desc: "Diseño de modelos de servicios escalables y gobernables alineados con el contexto real de negocio y operaciones.",
      focus2_title: "Plataformas y Automatización",
      focus2_desc: "Estandarización de plataformas, automatización, observabilidad y seguridad por diseño para reducir fricción operacional y riesgo.",
      focus3_title: "Gobernanza TI",
      focus3_desc: "Gobernanza de servicios, métricas, transiciones y mejora sostenible en entornos complejos.",
      focus4_title: "Tecnología Social y Comunitaria",
      focus4_desc: "Diseño de soluciones tecnológicas eficientes y de bajo costo para comunidades sin acceso a recursos, incluyendo apoyo para estructurar y aprovechar financiamiento externo. Estas iniciativas operan como laboratorios recíprocos, fortaleciendo la práctica de consultoría profesional.",
      contact_title: "Contacto",
      contact_subtitle: "Contáctame",
      contact_address: "Dirección",
      contact_email: "Email",
      contact_social: "Social"
    }
  };

  let currentLang = localStorage.getItem('lang') || 'en';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    const flag = document.getElementById('lang-flag');
    if (flag) {
      flag.textContent = lang === 'en' ? '🇬🇧' : '🇪🇸';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.documentElement.lang = lang;
  }

  function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    setLanguage(newLang);
  }

  document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);
    
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', toggleLanguage);
    }
  });

})();
