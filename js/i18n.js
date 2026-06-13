const I18n = (() => {
  const STORAGE_KEY = 'portfolio-lang';
  const DEFAULT_LANG = 'en';

  const translations = {
    en: {
      meta: {
        description:
          'Whitney Fernando — Marketing Professional specializing in brand strategy, B2B partner acquisition, and campaign management.',
        title: 'Whitney Fernando | Marketing Professional',
      },
      nav: {
        portfolio: 'Portfolio',
        about: 'About',
        contact: 'Contact',
        toggleNav: 'Toggle navigation',
        langLabel: 'Language selection',
      },
      hero: {
        eyebrow: 'Marketing Professional',
        summary:
          'Marketing professional with a foundation in financial accounting and operations, bringing commercial rigour to campaign management, partner acquisition, and B2B outreach across retail, tech, and aesthetics.',
        cta: 'View Portfolio',
      },
      portfolio: {
        eyebrow: 'Portfolio',
        title: 'Selected work',
        desc: 'Campaigns, brand photography, and video content from Crocodile Sri Lanka and Ekwa Marketing.',
        tabPhotos: 'Photography',
        tabCampaigns: 'Campaigns',
        tabVideos: 'Videos',
      },
      photos: {
        alt1: 'Crocodile fashion campaign — outdoor lifestyle shoot',
        alt2: 'Crocodile SUPIMA Polo Collection',
        alt3: 'Crocodile athletic wear campaign',
        alt4: 'Crocodile professional fashion shoot',
        alt5: 'Crocodile footwear product photography',
        alt6: 'Crocodile brand photography',
        alt7: 'Crocodile lifestyle campaign',
        alt8: 'Crocodile product showcase',
        alt9: 'Crocodile brand visual',
        alt10: 'Crocodile marketing photography',
        alt11: 'Crocodile campaign visual',
        alt12: 'Crocodile brand content',
        alt13: 'Crocodile promotional photography',
        alt14: 'Crocodile marketing visual',
      },
      campaigns: {
        tagB2B: 'B2B Outreach',
        tagLaunch: 'Launch Event',
        tagSeasonal: 'Seasonal Campaign',
        tagProduct: 'Product Campaign',
        c1Title: 'Business of Aesthetics Panel Discussion',
        c1Desc:
          'Partner acquisition and content coordination for the Business of Aesthetics expert panel webinar series, driving registrations and post-event engagement.',
        c1Link: 'View Webinar Series →',
        c2Title: 'Crocodile Kids Launch',
        c2Desc:
          'Managed the end-to-end launch of the Crocodile Kids Collection, coordinating campaign planning, radio promotions, creative development, and the "Shop, Snap & Win" in-store activation to drive engagement.',
        c2Alt: 'Crocodile Kids launch campaign — Shop, Snap and Win',
        c3Title: "Valentine's Day 2024 — Love Wild",
        c3Desc:
          "Creative Valentine's promotion offering 20% off across all Crocodile outlets from 9th–14th February, featuring bold brand storytelling with the signature crocodile motif.",
        c3Alt: "Crocodile Valentine's Day 2024 — Love Wild campaign",
        c4Title: 'Crocodile Luggage Collection',
        c4Desc:
          'Professional campaign photography for the Crocodile luggage line, positioning the brand at the intersection of travel, style, and functionality.',
        c4Alt: 'Crocodile luggage campaign photography',
        c5Title: 'Crocodile Handbag Collection',
        c5Desc:
          'Developed campaign imagery for a premium handbag line, positioning the collection at the intersection of modern travel, refined style, and practical design.',
        c5Alt: 'Crocodile handbag campaign photography',
      },
      videos: {
        v1: 'Hi Events — Crocodile Sri Lanka Launch Kids Collection',
        v2: 'Crocodile SUPIMA Polo Collection',
        v3: 'Crocodile Kids Collection',
        v4: '#IAMcrocodile',
        v5: '#IAMCrocodile',
        v6: '#IAMCrocodile',
        v7: '#IAMCrocodile',
      },
      about: {
        eyebrow: 'About',
        title: 'Bridging commercial rigour with creative marketing',
        p1: 'Proven track record managing 20+ stakeholders, onboarding 50+ partners, and delivering measurable category growth in fast-paced environments. From spearheading retail category growth at Crocodile Sri Lanka to driving B2B outreach for Ekwa Marketing\'s aesthetics panel, I combine data-informed decision-making with hands-on campaign execution.',
        p2: 'Based in Antibes, France, I hold a Postgraduate Diploma in Professional Marketing (CIM, UK) and a CIMA Diploma in Management Accounting — giving me a unique edge in aligning marketing strategy with business outcomes.',
        location: 'Location',
        nationality: 'Nationality',
        workAuth: 'Work Authorization',
        languages: 'Languages',
        locationValue: 'Antibes, France',
        nationalityValue: 'Sri Lankan',
        workAuthValue: 'Talent Passport Family — Authorized to work in France',
        languagesValue: 'English (Professional) · French (Intermediate) · Sinhala (Native)',
      },
      contact: {
        eyebrow: 'Contact',
        title: "Let's connect",
        desc: 'Open to marketing, business development, and partnership opportunities.',
        email: 'Email',
        phone: 'Phone',
        linkedin: 'LinkedIn',
        location: 'Location',
      },
      footer: {
        copyright: '© 2026 Whitney Fernando. All rights reserved.',
        backToTop: 'Back to top ↑',
      },
      lightbox: {
        close: 'Close lightbox',
      },
    },
    fr: {
      meta: {
        description:
          'Whitney Fernando — Professionnelle du marketing spécialisée en stratégie de marque, acquisition de partenaires B2B et gestion de campagnes.',
        title: 'Whitney Fernando | Professionnelle du marketing',
      },
      nav: {
        portfolio: 'Portfolio',
        about: 'À propos',
        contact: 'Contact',
        toggleNav: 'Ouvrir le menu',
        langLabel: 'Sélection de la langue',
      },
      hero: {
        eyebrow: 'Professionnelle du marketing',
        summary:
          'Professionnelle du marketing avec une formation en comptabilité financière et en opérations, apportant une rigueur commerciale à la gestion de campagnes, l\'acquisition de partenaires et la prospection B2B dans la distribution, la tech et l\'esthétique.',
        cta: 'Voir le portfolio',
      },
      portfolio: {
        eyebrow: 'Portfolio',
        title: 'Travaux sélectionnés',
        desc: 'Campagnes, photographie de marque et contenu vidéo pour Crocodile Sri Lanka et Ekwa Marketing.',
        tabPhotos: 'Photographie',
        tabCampaigns: 'Campagnes',
        tabVideos: 'Vidéos',
      },
      photos: {
        alt1: 'Campagne mode Crocodile — shooting lifestyle en extérieur',
        alt2: 'Collection Crocodile SUPIMA Polo',
        alt3: 'Campagne vêtements de sport Crocodile',
        alt4: 'Shooting mode professionnel Crocodile',
        alt5: 'Photographie produit chaussures Crocodile',
        alt6: 'Photographie de marque Crocodile',
        alt7: 'Campagne lifestyle Crocodile',
        alt8: 'Mise en valeur produit Crocodile',
        alt9: 'Visuel de marque Crocodile',
        alt10: 'Photographie marketing Crocodile',
        alt11: 'Visuel de campagne Crocodile',
        alt12: 'Contenu de marque Crocodile',
        alt13: 'Photographie promotionnelle Crocodile',
        alt14: 'Visuel marketing Crocodile',
      },
      campaigns: {
        tagB2B: 'Prospection B2B',
        tagLaunch: 'Lancement',
        tagSeasonal: 'Campagne saisonnière',
        tagProduct: 'Campagne produit',
        c1Title: 'Table ronde Business of Aesthetics',
        c1Desc:
          'Acquisition de partenaires et coordination de contenu pour la série de webinaires Business of Aesthetics, stimulant les inscriptions et l\'engagement post-événement.',
        c1Link: 'Voir la série de webinaires →',
        c2Title: 'Lancement Crocodile Kids',
        c2Desc:
          'Gestion du lancement de bout en bout de la collection Crocodile Kids, incluant planification de campagne, promotions radio, développement créatif et activation en magasin « Shop, Snap & Win » pour stimuler l\'engagement.',
        c2Alt: 'Campagne de lancement Crocodile Kids — Shop, Snap and Win',
        c3Title: 'Saint-Valentin 2024 — Love Wild',
        c3Desc:
          'Promotion créative pour la Saint-Valentin offrant 20 % de réduction dans tous les points de vente Crocodile du 9 au 14 février, avec un storytelling de marque audacieux autour du motif crocodile.',
        c3Alt: 'Campagne Saint-Valentin 2024 Crocodile — Love Wild',
        c4Title: 'Collection bagages Crocodile',
        c4Desc:
          'Photographie de campagne professionnelle pour la ligne bagages Crocodile, positionnant la marque à l\'intersection du voyage, du style et de la fonctionnalité.',
        c4Alt: 'Photographie de campagne bagages Crocodile',
        c5Title: 'Collection sacs à main Crocodile',
        c5Desc:
          'Création d\'imagery de campagne pour une ligne de sacs à main premium, positionnant la collection à l\'intersection du voyage moderne, du style raffiné et du design pratique.',
        c5Alt: 'Photographie de campagne sacs à main Crocodile',
      },
      videos: {
        v1: 'Hi Events — Lancement collection Kids Crocodile Sri Lanka',
        v2: 'Collection Crocodile SUPIMA Polo',
        v3: 'Collection Crocodile Kids',
        v4: '#IAMcrocodile',
        v5: '#IAMCrocodile',
        v6: '#IAMCrocodile',
        v7: '#IAMCrocodile',
      },
      about: {
        eyebrow: 'À propos',
        title: 'Allier rigueur commerciale et marketing créatif',
        p1: 'Expérience avérée dans la gestion de plus de 20 parties prenantes, l\'intégration de plus de 50 partenaires et la croissance mesurable de catégories dans des environnements dynamiques. De la croissance retail chez Crocodile Sri Lanka à la prospection B2B pour le panel esthétique d\'Ekwa Marketing, j\'allie prise de décision fondée sur les données et exécution opérationnelle des campagnes.',
        p2: 'Basée à Antibes, France, je suis titulaire d\'un diplôme post-universitaire en marketing professionnel (CIM, Royaume-Uni) et d\'un diplôme CIMA en comptabilité de gestion — un atout unique pour aligner stratégie marketing et résultats business.',
        location: 'Lieu',
        nationality: 'Nationalité',
        workAuth: 'Autorisation de travail',
        languages: 'Langues',
        locationValue: 'Antibes, France',
        nationalityValue: 'Sri Lankaise',
        workAuthValue: 'Passeport Talent Famille — Autorisée à travailler en France',
        languagesValue: 'Anglais (Professionnel) · Français (Intermédiaire) · Singhalais (Langue maternelle)',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Restons en contact',
        desc: 'Ouverte aux opportunités en marketing, développement commercial et partenariats.',
        email: 'E-mail',
        phone: 'Téléphone',
        linkedin: 'LinkedIn',
        location: 'Lieu',
      },
      footer: {
        copyright: '© 2026 Whitney Fernando. Tous droits réservés.',
        backToTop: 'Retour en haut ↑',
      },
      lightbox: {
        close: 'Fermer',
      },
    },
  };

  let currentLang = DEFAULT_LANG;

  function t(key, lang = currentLang) {
    const value = key.split('.').reduce((obj, part) => obj?.[part], translations[lang]);
    return value ?? key;
  }

  function getSavedLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch {
      /* localStorage unavailable */
    }
    return null;
  }

  function getBrowserLang() {
    const browserLang = navigator.language?.slice(0, 2).toLowerCase();
    if (browserLang === 'fr') return 'fr';
    return DEFAULT_LANG;
  }

  async function detectCountryFromIP() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    try {
      const res = await fetch('https://api.country.is/', { signal: controller.signal });
      if (res.ok) {
        const data = await res.json();
        if (data.country) return data.country;
      }
    } catch {
      /* try fallback */
    } finally {
      clearTimeout(timeoutId);
    }

    const fallbackController = new AbortController();
    const fallbackTimeoutId = setTimeout(() => fallbackController.abort(), 2500);

    try {
      const res = await fetch('https://ipwho.is/', {
        signal: fallbackController.signal,
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.country_code) return data.country_code;
      }
    } catch {
      /* geolocation unavailable */
    } finally {
      clearTimeout(fallbackTimeoutId);
    }

    return null;
  }

  async function resolveDefaultLang() {
    const country = await detectCountryFromIP();
    if (country === 'FR') return 'fr';
    return getBrowserLang();
  }

  function updateLangButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function applyTranslations(lang, persist = false) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const text = t(el.dataset.i18n, lang);
      if (el.tagName === 'IMG') {
        el.alt = text;
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.dataset.i18nAria, lang));
    });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t('meta.description', lang);
    document.title = t('meta.title', lang);

    updateLangButtons(lang);

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* localStorage unavailable */
      }
    }
  }

  async function init() {
    const saved = getSavedLang();
    if (saved) {
      applyTranslations(saved);
    } else {
      const lang = await resolveDefaultLang();
      applyTranslations(lang);
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextLang = btn.dataset.lang;
        if (nextLang && nextLang !== currentLang) {
          applyTranslations(nextLang, true);
        }
      });
    });
  }

  return { init, t, getLang: () => currentLang };
})();
