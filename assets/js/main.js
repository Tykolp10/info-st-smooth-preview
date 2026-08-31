// ===== DEVICE DETECTOR & CLASS TOGGLER =====
function updateDeviceClasses() {
  const width = window.innerWidth;
  const body = document.body;
  if (!body) return;
  
  body.classList.remove('is-mobile', 'is-tablet', 'is-desktop');
  
  if (width < 640) {
    body.classList.add('is-mobile');
  } else if (width >= 640 && width < 1024) {
    body.classList.add('is-tablet');
  } else {
    body.classList.add('is-desktop');
  }
}
window.addEventListener('resize', updateDeviceClasses);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateDeviceClasses);
} else {
  updateDeviceClasses();
}

// ===== AGE GATE =====
const ageGate = document.getElementById('age-gate');
const mainSite = document.getElementById('main-site');
const ageYes = document.getElementById('age-yes');
const ageNo = document.getElementById('age-no');

function playEpicHeroEntrance() {
  if (!mainSite) return;
  // CSS owns the small entrance animation; no animation engine is needed here.
  requestAnimationFrame(() => mainSite.classList.add('site-ready'));
}

if (sessionStorage.getItem('st-age-verified')) {
  ageGate.style.display = 'none';
  mainSite.classList.remove('hidden');
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', playEpicHeroEntrance);
  } else {
    playEpicHeroEntrance();
  }
} else {
  ageYes.addEventListener('click', () => {
    sessionStorage.setItem('st-age-verified', '1');
    ageGate.style.opacity = '0';
    ageGate.style.transition = 'opacity 0.8s ease';
    setTimeout(() => { ageGate.style.display = 'none'; }, 800);
    mainSite.classList.remove('hidden');
    mainSite.style.opacity = '0';
    setTimeout(() => { 
      mainSite.style.transition = 'opacity 0.6s'; 
      mainSite.style.opacity = '1'; 
      playEpicHeroEntrance();
    }, 50);
  });
  ageNo.addEventListener('click', () => {
    // Lebih lembut: tampilkan pesan terima kasih, jangan langsung redirect
    document.querySelector('.age-gate__content').innerHTML =
      '<p class="age-gate__tagline">Terima Kasih</p>' +
      '<h2 class="age-gate__title">Sampai Jumpa Lagi</h2>' +
      '<p class="age-gate__desc">Situs ini hanya untuk pengunjung dewasa berusia 21 tahun ke atas. ' +
      'Terima kasih atas kunjungan Anda.</p>' +
      '<p class="age-gate__warning">Merokok membunuh. Iklan ini ditujukan untuk perokok dewasa.</p>';
  });
  // Auto-focus tombol "Ya" untuk keyboard nav
  setTimeout(() => ageYes && ageYes.focus(), 100);
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');

// ===== HAMBURGER + BACKDROP =====
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
const navBackdrop = document.getElementById('nav-backdrop');

function setMenuOpen(open) {
  mainNav.classList.toggle('open', open);
  hamburger.classList.toggle('is-open', open);
  navBackdrop.classList.toggle('is-visible', open);
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => {
  setMenuOpen(!mainNav.classList.contains('open'));
});
navBackdrop.addEventListener('click', () => setMenuOpen(false));
mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});
// Close mobile menu dengan Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mainNav.classList.contains('open')) setMenuOpen(false);
});

// ===== HERO SLIDER =====
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');
const heroSection = document.getElementById('hero');
let currentSlide = 0;
let sliderTimer = null;
const SLIDE_INTERVAL = 5500;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');


function prepareHeroSlide(slide) {
  if (!slide || slide.dataset.loaded === 'true') return;
  const background = slide.dataset.background;
  if (!background) return;
  slide.style.backgroundImage = `url("${background}")`;
  slide.dataset.loaded = 'true';
}

function startSlider() {
  clearInterval(sliderTimer);
  if (!heroSection || slides.length < 2 || prefersReducedMotion.matches || document.hidden) return;
  sliderTimer = setInterval(() => goToSlide(currentSlide + 1), SLIDE_INTERVAL);
}

function pauseSlider() {
  clearInterval(sliderTimer);
  sliderTimer = null;
}

function goToSlide(idx) {
  if (!slides.length) return;
  prepareHeroSlide(slides[(idx + slides.length) % slides.length]);
  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  currentSlide = (idx + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  const activeDot = dots[currentSlide];
  if (activeDot) {
    activeDot.classList.remove('active');
    void activeDot.offsetWidth;
    activeDot.classList.add('active');
  }
}

if (heroSection && slides.length) {
  prepareHeroSlide(slides[0]);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.idx, 10) || 0);
      startSlider();
    });
  });

  // Pause while the hero is off-screen or the tab is backgrounded.
  heroSection.addEventListener('mouseenter', pauseSlider);
  heroSection.addEventListener('mouseleave', startSlider);
  document.addEventListener('visibilitychange', () => document.hidden ? pauseSlider() : startSlider());

  document.addEventListener('keydown', e => {
    const heroVisible = heroSection.getBoundingClientRect().bottom > 0;
    if (!heroVisible) return;
    if (e.key === 'ArrowLeft')  { goToSlide(currentSlide - 1); startSlider(); }
    if (e.key === 'ArrowRight') { goToSlide(currentSlide + 1); startSlider(); }
  });

  if (typeof IntersectionObserver !== 'undefined') {
    const heroSliderObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) startSlider();
      else pauseSlider();
    }, { threshold: 0.05 });
    heroSliderObserver.observe(heroSection);
  } else {
    startSlider();
  }

  const motionChange = () => prefersReducedMotion.matches ? pauseSlider() : startSlider();
  if (typeof prefersReducedMotion.addEventListener === 'function') {
    prefersReducedMotion.addEventListener('change', motionChange);
  } else if (typeof prefersReducedMotion.addListener === 'function') {
    prefersReducedMotion.addListener(motionChange);
  }
}

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const revealOptions = {
  root: null,
  rootMargin: '0px 0px -8% 0px',
  threshold: 0
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (!entry.isIntersecting || el.classList.contains('visible')) return;
    const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
    if (delay > 0) {
      window.setTimeout(() => el.classList.add('visible'), delay);
    } else {
      el.classList.add('visible');
    }
    // Reveal once; re-running animations while scrolling wastes work and feels jumpy.
    entry.target && revealObserver.unobserve(entry.target);
  });
}, revealOptions);

revealEls.forEach(el => revealObserver.observe(el));

// ===== SMOOTH NAV SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href === '#' || href.length < 2) return; // skip dummy links
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
    }
  });
});

// ===== CONTACT FORM → WHATSAPP =====
const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nama = form.nama.value.trim();
    const email = form.email.value.trim();
    const kategori = form.kategori.value;
    const pesan = form.pesan.value.trim();
    
    if (!nama || !pesan || !kategori) {
      formNote.textContent = '⚠ Mohon isi Kategori, Nama, dan Pesan.';
      formNote.style.color = '#cc8a2a';
      return;
    }

    const templates = {
      stok: `Halo min, saya ingin tanya tentang stok produk.`,
      agen: `Halo min, saya tertarik untuk menjadi agen/mitra distribusi resmi Sehat Tentrem.`,
      kerjasama: `Halo min, kami tertarik untuk berkolaborasi / menjalin kerjasama.`,
      media: `Halo min, saya ingin menanyakan perihal kemitraan media.`,
      lainnya: `Halo min, saya ingin menyampaikan hal berikut.`
    };

    const kategoriLabels = {
      stok: 'Pertanyaan Stok / Distribusi',
      agen: 'Jadi Agen / Mitra Distribusi',
      kerjasama: 'Kolaborasi / Kerjasama',
      media: 'Pertanyaan Media',
      lainnya: 'Lainnya'
    };
    const kategoriLabel = kategoriLabels[kategori] || kategori;

    const messageText =
      `*Pesan dari Website InfoST*\n\n` +
      `*Pengirim:* ${nama}\n` +
      (email ? `*Email:* ${email}\n` : '') +
      `*Kategori:* ${kategoriLabel}\n\n` +
      `*Pesan:*\n${templates[kategori] ? templates[kategori] + '\n' : ''}${pesan}`;
      
    // ST_CONFIG loaded from config.js
    const waUrl = typeof ST_CONFIG !== 'undefined' 
      ? ST_CONFIG.buildWhatsappUrl(messageText) 
      : `https://wa.me/6281335730002?text=${encodeURIComponent(messageText)}`;
      
    window.open(waUrl, '_blank', 'noopener');
    formNote.textContent = '✓ Membuka WhatsApp...';
    formNote.style.color = 'var(--gold)';
  });
}

// ===== ACTIVE NAV HIGHLIGHT (class-based) =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const backTop = document.getElementById('back-to-top');
let scrollFrame = null;

function updateScrollUI() {
  const scrollY = window.scrollY;
  if (navbar) navbar.classList.toggle('scrolled', scrollY > 60);
  if (backTop) backTop.classList.toggle('is-visible', scrollY > 600);

  let current = '';
  sections.forEach(s => {
    if (scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
  });
  scrollFrame = null;
}

window.addEventListener('scroll', () => {
  if (scrollFrame !== null) return;
  scrollFrame = requestAnimationFrame(updateScrollUI);
}, { passive: true });
updateScrollUI();

// ===== PRODUCT FILTER =====
const filterChips = document.querySelectorAll('.filter-chip');
const productCards = document.querySelectorAll('#products-grid .product-card');
filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    filterChips.forEach(c => {
      c.classList.toggle('is-active', c === chip);
      c.setAttribute('aria-selected', c === chip ? 'true' : 'false');
    });
    productCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !match);
    });
  });
});

if (backTop) {
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
  });
}

// ===== LIGHTWEIGHT TEMPORARY ASSISTANT =====
// Mas Bloko AI/canvas/video sengaja tidak diinisialisasi di prototype ini.
const quickHelp = document.getElementById('quick-help');
const quickHelpToggle = document.getElementById('quick-help-toggle');
const quickHelpPanel = document.getElementById('quick-help-panel');
const quickHelpClose = document.getElementById('quick-help-close');

if (quickHelp && quickHelpToggle && quickHelpPanel) {
  const setQuickHelpOpen = open => {
    quickHelpPanel.hidden = !open;
    quickHelpToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  quickHelpToggle.addEventListener('click', () => {
    setQuickHelpOpen(quickHelpPanel.hidden);
  });
  if (quickHelpClose) quickHelpClose.addEventListener('click', () => setQuickHelpOpen(false));
  quickHelpPanel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setQuickHelpOpen(false));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setQuickHelpOpen(false);
  });
}

// ===== STORE LOCATOR PROTOTYPE LOGIC =====
if (typeof ST_CONFIG !== 'undefined') {
  function openLocator(utmCampaign = 'general', utmContent = 'button-click') {
    // Redirect langsung ke URL luar dengan parameter UTM sesuai feedback atasan
    const targetUrl = ST_CONFIG.buildStoreLocatorUrl({
      utm_campaign: utmCampaign,
      utm_content: utmContent
    });
    // Track via Umami if active
    if (typeof umami !== 'undefined') {
      umami.track('Open Store Locator', { campaign: utmCampaign, content: utmContent });
    }
    window.open(targetUrl, '_blank', 'noopener');
  }

  // Hero CTA Button
  const heroCtaStore = document.getElementById('hero-cta-store');
  if (heroCtaStore) {
    heroCtaStore.addEventListener('click', (e) => {
      e.preventDefault();
      openLocator('hero-cta', 'primary-button');
    });
  }

  // Product Card CTAs
  document.querySelectorAll('.product-card__overlay a, .cta-store-locator').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const product = link.dataset.product || 'general';
      const ctaType = link.dataset.ctaType || 'product-card';
      openLocator(ctaType, product);
    });
  });

  // Sticky Mobile CTA
  const stickyCtaMobile = document.getElementById('sticky-cta-mobile');
  const stickyBtn = document.getElementById('sticky-btn');
  if (stickyCtaMobile && stickyBtn) {
    stickyBtn.addEventListener('click', () => {
      openLocator('sticky-mobile', 'persistent-cta');
    });

    // Hide when hero is in view
    const heroObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        stickyCtaMobile.classList.remove('is-visible');
      } else {
        stickyCtaMobile.classList.add('is-visible');
      }
    }, { rootMargin: '-10% 0px 0px 0px', threshold: 0 });
    if (heroSection) heroObserver.observe(heroSection);
  }
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq__question').forEach(button => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);
    const answer = button.nextElementSibling;
    if (!isExpanded) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
});

// ===== MOBILE TIMELINE ACCORDION =====
document.querySelectorAll('.timeline__title').forEach(title => {
  title.addEventListener('click', () => {
    if (window.innerWidth <= 640) {
      const item = title.closest('.timeline__item');
      item.classList.toggle('is-open');
    }
  });
});



// ===== DYNAMIC EVENTS LOADER (from events.json) =====
function loadDynamicEvents() {
  const inspirasiGrid = document.getElementById('inspirasi-grid');
  if (!inspirasiGrid) return;

  fetch('events.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(events => {
      if (!Array.isArray(events) || events.length === 0) return;
      
      // Build HTML for the top 3 events
      const html = events.slice(0, 3).map((event, idx) => `
        <a href="${event.link}" target="_blank" rel="noopener" class="insp-card reveal-up" style="text-decoration:none; color:inherit;" data-delay="${idx * 100}">
          <div class="insp-card__img">
            <img src="${event.image}" width="900" height="900" alt="${event.title}" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('insp-card__img--fallback-${idx + 1}')" />
          </div>
          <div class="insp-card__body">
            <span class="insp-card__cat">${event.category}</span>
            <h3 class="insp-card__title">${event.title}</h3>
            <p class="insp-card__text">${event.desc}</p>
            <span class="insp-card__soon" style="color:var(--gold); border-color:var(--gold)">Lihat di Instagram →</span>
          </div>
        </a>
      `).join('');

      inspirasiGrid.innerHTML = html;

      // Re-observe for scroll reveal animations
      if (typeof revealObserver !== 'undefined') {
        inspirasiGrid.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));
      }
    })
    .catch(error => {
      console.log('Using hardcoded fallback events. Info:', error.message);
    });
}
document.addEventListener('DOMContentLoaded', loadDynamicEvents);
