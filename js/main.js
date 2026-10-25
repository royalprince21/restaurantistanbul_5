/**
 * RESTAURANT ISTANBUL DREUX — HÉRITAGE CORE SCRIPT
 * Concept: Centered Architectural Hero, Circular Emblem Signature,
 * Complete Bilingual Engine (FR/EN), Dynamic 12-Category Menu,
 * Verified Dreux Review Carousel, and Validated Reservation System.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Application State
  const state = {
    lang: 'fr',
    currentCategory: 'sandwichs',
    carouselIndex: 0,
    carouselCardsPerView: getCardsPerView()
  };

  // 2. Verified Dreux Google Reviews Data
  const reviewsData = [
    {
      name: "Mehdi B.",
      date: "Il y a 2 mois",
      dateEn: "2 months ago",
      rating: 5,
      comment: "Meilleur kebab de Dreux sans hésiter ! Viande savoureuse et marinée maison, pain croustillant cuit sur place et accueil toujours au top. Les assiettes sont très copieuses. Je recommande les yeux fermés.",
      commentEn: "Undoubtedly the best kebab in Dreux! Exceptionally flavorful house-marinated meat, bread baked fresh on site, and always warm hospitality. Generous plates. Highly recommended!"
    },
    {
      name: "Sophie Laurent",
      date: "Il y a 3 mois",
      dateEn: "3 months ago",
      rating: 5,
      comment: "Superbe découverte au cœur de Dreux ! Le lahmacun croustillant et les brochettes d'agneau au feu de braise sont délicieux. Service rapide et avec le sourire. Très propre et convivial.",
      commentEn: "Wonderful find in the heart of Dreux! The crispy lahmacun and charcoal-grilled lamb skewers are delicious. Quick and smiling service. Spotlessly clean and friendly."
    },
    {
      name: "Karim T.",
      date: "Il y a 1 mois",
      dateEn: "1 month ago",
      rating: 5,
      comment: "Client fidèle depuis des années. La qualité est constante depuis 1992, la broche est bien travaillée et l'accueil est exemplaire. Bravo à toute l'équipe pour ce savoir-faire !",
      commentEn: "Loyal customer for years. The quality has remained consistently top-notch since 1992. The spit is handcrafted and hospitality is exemplary. Bravo to the entire team!"
    },
    {
      name: "Émilie R.",
      date: "Il y a 4 mois",
      dateEn: "4 months ago",
      rating: 5,
      comment: "Une excellente adresse à Dreux. Viande marinée parfumée et jamais grasse, frites dorées et thé turc offert très apprécié. Ambiance conviviale et familiale.",
      commentEn: "An excellent spot in Dreux. Well-marinated, never greasy meat, golden fries, and complimentary Turkish tea that was very appreciated. Warm and family atmosphere."
    },
    {
      name: "David Morvan",
      date: "Il y a 2 semaines",
      dateEn: "2 weeks ago",
      rating: 5,
      comment: "Assiette mixte royale très généreuse et savoureuse, viandes tendres cuites à point au grill. Excellent rapport qualité-prix. Ouvert tard jusqu'à 1h du matin, c'est idéal !",
      commentEn: "Very generous and flavorful royal mixed platter, tender flame-grilled meats. Outstanding quality and portion size. Open late until 1 AM, simply ideal!"
    }
  ];

  // 3. DOM Elements Cache
  const header = document.querySelector('.header-site');
  const langBtns = document.querySelectorAll('.lang-btn');
  const menuTabsBar = document.getElementById('menu-tabs');
  const menuContainer = document.getElementById('menu-items-container');
  const menuNoticeBox = document.getElementById('menu-notice-box');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const reviewsTrack = document.getElementById('reviews-track');
  const prevReviewBtn = document.getElementById('prev-review');
  const nextReviewBtn = document.getElementById('next-review');
  const reviewsDots = document.getElementById('reviews-dots');
  const reservationForm = document.getElementById('reservation-form');
  const bookingModal = document.getElementById('booking-modal');
  const modalClose = document.getElementById('modal-close');
  const modalSummary = document.getElementById('modal-summary');
  const whatsappConfirmBtn = document.getElementById('btn-whatsapp-confirm');
  const backToTopBtn = document.getElementById('back-to-top');

  // Helper for Responsive Reviews View
  function getCardsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1120) return 2;
    return 3;
  }

  window.addEventListener('resize', () => {
    const newPerView = getCardsPerView();
    if (newPerView !== state.carouselCardsPerView) {
      state.carouselCardsPerView = newPerView;
      const maxIdx = Math.max(0, reviewsData.length - state.carouselCardsPerView);
      if (state.carouselIndex > maxIdx) state.carouselIndex = maxIdx;
      updateReviewsCarousel();
    }
  });

  // ------------------------------------------------------------------------
  // 4. Bilingual Engine (i18n)
  // ------------------------------------------------------------------------
  function setLanguage(lang) {
    if (!translations[lang]) return;
    state.lang = lang;
    document.documentElement.lang = lang;

    // Update active state on language switcher buttons
    langBtns.forEach(btn => {
      const isCurrent = btn.dataset.lang === lang;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
    });

    // Update page meta title and description
    if (translations[lang].meta) {
      document.title = translations[lang].meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', translations[lang].meta.desc);
    }

    // Translate DOM elements marked with data-i18n
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
      const key = el.dataset.i18n;
      const val = getNestedValue(translations[lang], key);
      if (val !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', val);
        } else {
          el.innerHTML = val;
        }
      }
    });

    // Translate menu category tabs
    const categoryTabs = document.querySelectorAll('.menu-tab');
    categoryTabs.forEach(tab => {
      const catKey = tab.dataset.category;
      if (translations[lang].menu.categories[catKey]) {
        const spanText = tab.querySelector('.tab-text');
        if (spanText) {
          spanText.textContent = translations[lang].menu.categories[catKey];
        }
      }
    });

    // Re-render dynamic menu items with updated language
    renderMenuItems(state.currentCategory);

    // Re-render reviews track
    renderReviews();

    // Re-render reservation guest dropdown text if applicable
    updateGuestOptions();
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      if (targetLang && targetLang !== state.lang) {
        setLanguage(targetLang);
      }
    });
  });

  // ------------------------------------------------------------------------
  // 5. Dynamic 12-Category Interactive Menu
  // ------------------------------------------------------------------------
  function renderMenuItems(category) {
    if (!menuContainer || !menuDatabase[category]) return;

    state.currentCategory = category;
    const items = menuDatabase[category];
    const dict = translations[state.lang].menu;

    // Notice banner logic according to project rules
    if (menuNoticeBox) {
      if (category === 'sandwichs' || category === 'panini') {
        menuNoticeBox.innerHTML = `
          <div class="menu-notice-content">
            <svg class="notice-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>${dict.noticeSandwich}</span>
          </div>
        `;
        menuNoticeBox.style.display = 'block';
      } else if (category === 'assiettes') {
        menuNoticeBox.innerHTML = `
          <div class="menu-notice-content">
            <svg class="notice-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
            <span>${dict.noticePlates}</span>
          </div>
        `;
        menuNoticeBox.style.display = 'block';
      } else if (category === 'menu-enfant') {
        menuNoticeBox.innerHTML = `
          <div class="menu-notice-content">
            <svg class="notice-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${dict.noticeKids}</span>
          </div>
        `;
        menuNoticeBox.style.display = 'block';
      } else {
        menuNoticeBox.style.display = 'none';
      }
    }

    // Build Cards HTML
    const cardsHtml = items.map(dish => {
      const name = dish.name[state.lang] || dish.name.fr;
      const desc = dish.desc[state.lang] || dish.desc.fr;
      const tag = dish.tag ? (dish.tag[state.lang] || dish.tag.fr) : '';
      const extraNote = dish.extraNote ? (dish.extraNote[state.lang] || dish.extraNote.fr) : '';

      let priceHtml = '';
      if (dish.pricing.type === 'dual') {
        priceHtml = `
          <div class="dish-pricing-dual">
            <div class="price-pill solo">
              <span class="price-label">${dict.soloLabel}</span>
              <span class="price-value">${dish.pricing.solo}</span>
            </div>
            <div class="price-pill menu">
              <span class="price-label">${dict.menuLabel}</span>
              <span class="price-value">${dish.pricing.menu}</span>
            </div>
          </div>
        `;
      } else {
        priceHtml = `
          <div class="dish-pricing-single">
            <span class="price-value-large">${dish.pricing.price}</span>
          </div>
        `;
      }

      return `
        <article class="menu-card" data-id="${dish.id}">
          <div class="dish-img-wrap">
            <img src="${dish.img}" alt="${name}" loading="lazy" class="dish-thumb" onerror="this.src='assets/images/hero-sandwich.jpg'">
            ${tag ? `<span class="dish-tag-badge">${tag}</span>` : ''}
          </div>
          <div class="dish-body">
            <div class="dish-header">
              <h3 class="dish-name">${name}</h3>
              <div class="dish-pricing-container">
                ${priceHtml}
              </div>
            </div>
            <p class="dish-desc">${desc}</p>
            ${extraNote ? `
              <div class="dish-extra-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${extraNote}</span>
              </div>
            ` : ''}
            <div class="dish-footer-action">
              <a href="#reservation" class="dish-book-link" data-dish-select="${name}">
                <span>${dict.orderBtn}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Smooth transition
    menuContainer.style.opacity = '0';
    menuContainer.style.transform = 'translateY(12px)';

    setTimeout(() => {
      menuContainer.innerHTML = cardsHtml;
      menuContainer.style.opacity = '1';
      menuContainer.style.transform = 'translateY(0)';

      // Attach booking pre-fill click events
      const bookLinks = menuContainer.querySelectorAll('[data-dish-select]');
      bookLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const dishTitle = link.getAttribute('data-dish-select');
          const messageField = document.getElementById('booking-message');
          if (messageField && dishTitle) {
            const currentVal = messageField.value.trim();
            const prefix = state.lang === 'fr' ? 'Plat souhaité : ' : 'Desired dish: ';
            if (!currentVal.includes(dishTitle)) {
              messageField.value = currentVal ? `${currentVal} | ${prefix}${dishTitle}` : `${prefix}${dishTitle}`;
            }
          }
        });
      });
    }, 180);
  }

  // Category Tab Click Handler & Keyboard Accessibility
  if (menuTabsBar) {
    const tabs = menuTabsBar.querySelectorAll('.menu-tab');
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
          t.setAttribute('tabindex', '-1');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');

        const cat = tab.dataset.category;
        renderMenuItems(cat);

        // Auto-center active tab in mobile horizontal scroll view
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });

      // Keyboard arrow navigation
      tab.addEventListener('keydown', (e) => {
        let targetIndex = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          targetIndex = (index + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          targetIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
          targetIndex = 0;
        } else if (e.key === 'End') {
          targetIndex = tabs.length - 1;
        }

        if (targetIndex !== null) {
          e.preventDefault();
          tabs[targetIndex].focus();
          tabs[targetIndex].click();
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. External Category Triggers (Specialties & Footer Links)
  // ------------------------------------------------------------------------
  function selectCategoryAndScroll(catName) {
    const targetTab = document.querySelector(`.menu-tab[data-category="${catName}"]`);
    if (targetTab) {
      targetTab.click();
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  // Attach to footer category links
  const footerCatLinks = document.querySelectorAll('[data-menu-category]');
  footerCatLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-menu-category');
      selectCategoryAndScroll(cat);
    });
  });

  // Attach to specialties cards CTA
  const specActionLinks = document.querySelectorAll('[data-specialty-target]');
  specActionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-specialty-target');
      selectCategoryAndScroll(cat);
    });
  });

  // ------------------------------------------------------------------------
  // 7. Verified Reviews Carousel
  // ------------------------------------------------------------------------
  function renderReviews() {
    if (!reviewsTrack) return;
    const isEn = state.lang === 'en';

    reviewsTrack.innerHTML = reviewsData.map((rev) => {
      const dateText = isEn ? rev.dateEn : rev.date;
      const commentText = isEn ? rev.commentEn : rev.comment;
      const verifiedTag = isEn ? "Verified Google Review" : "Avis vérifié Google";

      return `
        <div class="review-slide">
          <article class="review-card">
            <div class="review-card-top">
              <div class="reviewer-avatar">${rev.name.charAt(0)}</div>
              <div class="reviewer-meta">
                <div class="reviewer-name">${rev.name}</div>
                <div class="review-date">${dateText}</div>
              </div>
              <div class="google-badge-pill" title="${verifiedTag}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#C5A568">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Google</span>
              </div>
            </div>
            <div class="review-stars">
              ${Array(rev.rating).fill('★').join('')}
            </div>
            <p class="review-body">“${commentText}”</p>
            <div class="review-verified-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${verifiedTag} · Dreux</span>
            </div>
          </article>
        </div>
      `;
    }).join('');

    renderReviewDots();
    updateReviewsCarousel();
  }

  function renderReviewDots() {
    if (!reviewsDots) return;
    const maxIdx = Math.max(1, reviewsData.length - state.carouselCardsPerView + 1);
    let dotsHtml = '';
    for (let i = 0; i < maxIdx; i++) {
      dotsHtml += `<button type="button" class="carousel-dot ${i === state.carouselIndex ? 'active' : ''}" data-index="${i}" aria-label="Page ${i + 1}"></button>`;
    }
    reviewsDots.innerHTML = dotsHtml;

    const dots = reviewsDots.querySelectorAll('.carousel-dot');
    dots.forEach(d => {
      d.addEventListener('click', () => {
        state.carouselIndex = parseInt(d.dataset.index, 10);
        updateReviewsCarousel();
      });
    });
  }

  function updateReviewsCarousel() {
    if (!reviewsTrack) return;
    const slideWidthPct = 100 / state.carouselCardsPerView;
    const offsetPct = state.carouselIndex * slideWidthPct;
    reviewsTrack.style.transform = `translateX(-${offsetPct}%)`;

    // Update Dots
    if (reviewsDots) {
      const dots = reviewsDots.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === state.carouselIndex);
      });
    }

    // Update prev/next disabled state
    const maxIdx = Math.max(0, reviewsData.length - state.carouselCardsPerView);
    if (prevReviewBtn) prevReviewBtn.disabled = state.carouselIndex === 0;
    if (nextReviewBtn) nextReviewBtn.disabled = state.carouselIndex >= maxIdx;
  }

  if (prevReviewBtn) {
    prevReviewBtn.addEventListener('click', () => {
      if (state.carouselIndex > 0) {
        state.carouselIndex--;
        updateReviewsCarousel();
      }
    });
  }

  if (nextReviewBtn) {
    nextReviewBtn.addEventListener('click', () => {
      const maxIdx = Math.max(0, reviewsData.length - state.carouselCardsPerView);
      if (state.carouselIndex < maxIdx) {
        state.carouselIndex++;
        updateReviewsCarousel();
      }
    });
  }

  // Mobile Touch Swipe support for reviews carousel
  let touchStartX = 0;
  let touchEndX = 0;
  if (reviewsTrack) {
    reviewsTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    reviewsTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const threshold = 40;
    const maxIdx = Math.max(0, reviewsData.length - state.carouselCardsPerView);
    if (touchEndX < touchStartX - threshold && state.carouselIndex < maxIdx) {
      state.carouselIndex++;
      updateReviewsCarousel();
    } else if (touchEndX > touchStartX + threshold && state.carouselIndex > 0) {
      state.carouselIndex--;
      updateReviewsCarousel();
    }
  }

  // ------------------------------------------------------------------------
  // 8. Reservation Form Handling & Instant Dispatch Modal
  // ------------------------------------------------------------------------
  function updateGuestOptions() {
    const guestsSelect = document.getElementById('booking-guests');
    if (!guestsSelect) return;
    const dict = translations[state.lang].reservation;

    const opt0 = guestsSelect.querySelector('option[value=""]');
    if (opt0) opt0.textContent = dict.guestsDefault;

    const opt1 = guestsSelect.querySelector('option[value="1"]');
    if (opt1) opt1.textContent = dict.guests1;

    for (let i = 2; i <= 6; i++) {
      const optN = guestsSelect.querySelector(`option[value="${i}"]`);
      if (optN) optN.textContent = dict.guestsN.replace('{n}', i);
    }

    const optLarge = guestsSelect.querySelector('option[value="7+"]');
    if (optLarge) optLarge.textContent = dict.guestsLarge;
  }

  // Restrict reservation date picker to today onwards
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('booking-name').value.trim();
      const phone = document.getElementById('booking-phone').value.trim();
      const email = document.getElementById('booking-email').value.trim();
      const date = document.getElementById('booking-date').value;
      const time = document.getElementById('booking-time').value;
      const guests = document.getElementById('booking-guests').value;
      const message = document.getElementById('booking-message').value.trim();

      // Form validation
      if (!name || !phone || !email || !date || !time || !guests) {
        alert(state.lang === 'fr' ? 'Veuillez renseigner tous les champs obligatoires (*).' : 'Please complete all required fields (*).');
        return;
      }

      // Email simple validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert(state.lang === 'fr' ? 'Veuillez saisir une adresse e-mail valide.' : 'Please enter a valid email address.');
        return;
      }

      // Prepare Booking Summary
      const isFr = state.lang === 'fr';
      const formattedSummary = `
        <div class="summary-line"><strong>${isFr ? 'Nom' : 'Name'} :</strong> ${name}</div>
        <div class="summary-line"><strong>${isFr ? 'Téléphone' : 'Phone'} :</strong> ${phone}</div>
        <div class="summary-line"><strong>${isFr ? 'E-mail' : 'Email'} :</strong> ${email}</div>
        <div class="summary-line"><strong>${isFr ? 'Date & Heure' : 'Date & Time'} :</strong> ${date} à ${time}</div>
        <div class="summary-line"><strong>${isFr ? 'Convives' : 'Party Size'} :</strong> ${guests} ${isFr ? 'personne(s)' : 'guest(s)'}</div>
        ${message ? `<div class="summary-line"><strong>${isFr ? 'Remarque' : 'Note'} :</strong> ${message}</div>` : ''}
      `;

      if (modalSummary) {
        modalSummary.innerHTML = formattedSummary;
      }

      // Configure WhatsApp direct dispatch button
      if (whatsappConfirmBtn) {
        const waText = encodeURIComponent(
          `Bonjour Istanbul Restaurant,\nJe souhaite réserver une table :\n• Nom : ${name}\n• Téléphone : ${phone}\n• E-mail : ${email}\n• Date : ${date}\n• Heure : ${time}\n• Personnes : ${guests}\n${message ? `• Note : ${message}\n` : ''}Merci de me confirmer la disponibilité.`
        );
        whatsappConfirmBtn.href = `https://wa.me/33237558597?text=${waText}`;
      }

      // Open Modal
      if (bookingModal) {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      if (bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ------------------------------------------------------------------------
  // 9. Navigation & Mobile Drawer
  // ------------------------------------------------------------------------
  if (mobileToggle && mobileDrawer && drawerBackdrop) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Header elevation on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
      if (backToTopBtn) backToTopBtn.classList.add('visible');
    } else {
      header.classList.remove('scrolled');
      if (backToTopBtn) backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ------------------------------------------------------------------------
  // 10. Initialization
  // ------------------------------------------------------------------------
  setLanguage('fr');
  renderMenuItems('sandwichs');
  renderReviews();
});
