/* Lightweight ID/EN switch for the main prototype. Content is kept local so
   the language choice does not send page text or visitor data to a translator. */
(function () {
  const translations = {
    id: {
      'age-gate__tagline': 'Sehat Tentrem', 'age-gate__title': 'Nafas Perjuangan Nusantara',
      'age-gate__desc': 'Situs ini hanya untuk pengunjung dewasa berusia 21 tahun ke atas. Apakah Anda berusia 21 tahun atau lebih?',
      'age-yes': 'Ya, Saya Berusia 21+', 'age-no': 'Tidak',
      'age-gate__warning': 'Merokok membunuh. Dilarang menjual dan memberi kepada orang di bawah usia 21 tahun dan perempuan hamil.',
      'sacred-bar__text': 'ATAS BERKAT ROCHMAT ALLOH YANG MAHA KUASA',
      'hero__eyebrow': 'Digagas 2013 · Berdiri 2017<span class="hero__eyebrow-tag">Untuk Indonesia Raya</span>',
      'hero__subtitle': 'Kretek warisan yang bertemu teknologi masa kini,<br>untuk kebanggaan dan kesejahteraan Indonesia.',
      'hero-cta-store': 'Temukan Outlet Terdekat', 'hero-explore-link': 'Jelajahi Produk Kami',
      'hero__scroll-hint': 'Scroll', 'about__badge-label': 'Berdiri Resmi',
      'about-eyebrow': 'Tentang Kami', 'about-title': 'Dari Jombang, <em>Untuk Indonesia Raya</em>',
      'products-eyebrow': 'Koleksi Produk', 'products-title': 'Sigaret Kretek Tangan <em>Pilihan Nusantara</em>',
      'products-desc': 'Diracik dari tembakau pilihan, cengkih, jinten, dan rempah-rempah Nusantara — setiap varian ST adalah karya yang lahir dari hati, untuk Indonesia Raya.',
      'event-eyebrow': 'Event Terbaru', 'event-title': 'Hadir <em>Di Tengah Masyarakat</em>',
      'event-desc': 'Berbagai kegiatan dan partisipasi Sehat Tentrem dalam merawat budaya dan kebersamaan.',
      'story-eyebrow': 'PERJALANAN ST', 'story-title': 'Perjalanan <em>Menemani Nusantara</em>',
      'csr-eyebrow': 'Tanggung Jawab Sosial', 'csr-title': 'Nyata <em>Untuk Sesama</em>',
      'contact-eyebrow': 'Hubungi Kami', 'contact-title': 'Temukan ST <em>di Dekat Anda</em>',
      'contact-desc': 'Untuk informasi produk, distribusi, atau pertanyaan lainnya, silakan hubungi kami melalui kontak di bawah ini.',
      'faq-eyebrow': 'Insight & Assistance', 'faq-title': 'Hal yang Perlu <em>Anda Ketahui</em>',
      'footer-since': 'Est. 2017 · Jombang, Jawa Timur', 'footer-store': 'Cari Outlet', 'footer-contact': 'Hubungi ST',
      'help': 'Bantuan'
    },
    en: {
      'age-gate__tagline': 'Sehat Tentrem', 'age-gate__title': 'The Spirit of the Archipelago',
      'age-gate__desc': 'This website is intended for adult visitors aged 21 and over. Are you 21 or older?',
      'age-yes': 'Yes, I am 21+', 'age-no': 'No',
      'age-gate__warning': 'Smoking kills. Do not sell or give to anyone under 21 or to pregnant women.',
      'sacred-bar__text': 'BY THE GRACE OF ALMIGHTY GOD',
      'hero__eyebrow': 'Founded in 2013 · Established in 2017<span class="hero__eyebrow-tag">For a Greater Indonesia</span>',
      'hero__subtitle': 'Heritage kretek meets today’s technology,<br>for the pride and prosperity of Indonesia.',
      'hero-cta-store': 'Find Your Nearest Outlet', 'hero-explore-link': 'Explore Our Products',
      'hero__scroll-hint': 'Scroll', 'about__badge-label': 'Officially Established',
      'about-eyebrow': 'About Us', 'about-title': 'From Jombang, <em>For a Greater Indonesia</em>',
      'products-eyebrow': 'Product Collection', 'products-title': 'Hand-Rolled Kretek <em>For the Archipelago</em>',
      'products-desc': 'Blended from selected tobacco, cloves, cumin, and Indonesian spices — every ST variant is made with care, for a greater Indonesia.',
      'event-eyebrow': 'Latest Events', 'event-title': 'Present <em>Among the People</em>',
      'event-desc': 'Activities and participation by Sehat Tentrem in caring for culture and togetherness.',
      'story-eyebrow': 'THE ST JOURNEY', 'story-title': 'A Journey <em>Across the Archipelago</em>',
      'csr-eyebrow': 'Social Responsibility', 'csr-title': 'Real Action <em>For Others</em>',
      'contact-eyebrow': 'Contact Us', 'contact-title': 'Find ST <em>Near You</em>',
      'contact-desc': 'For product, distribution, or other questions, please contact us through the channels below.',
      'faq-eyebrow': 'Insight & Assistance', 'faq-title': 'Things You <em>Should Know</em>',
      'footer-since': 'Est. 2017 · Jombang, East Java', 'footer-store': 'Find an Outlet', 'footer-contact': 'Contact ST',
      'help': 'Help'
    }
  };
  const selectors = {
    'age-gate__tagline': '.age-gate__tagline', 'age-gate__title': '.age-gate__title', 'age-gate__desc': '.age-gate__desc',
    'age-yes': '#age-yes', 'age-no': '#age-no', 'age-gate__warning': '.age-gate__warning', 'sacred-bar__text': '.sacred-bar__text', 'hero__eyebrow': '.hero__eyebrow',
    'hero__subtitle': '.hero__subtitle', 'hero-cta-store': '#hero-cta-store', 'hero-explore-link': '#hero-explore-link',
    'hero__scroll-hint': '.hero__scroll-hint span', 'about__badge-label': '.about__badge-label',
    'about-eyebrow': '#about .section-eyebrow', 'about-title': '#about .section-title', 'products-eyebrow': '#products .section-eyebrow',
    'products-title': '#products .section-title', 'products-desc': '#products .section-desc', 'event-eyebrow': '#inspirasi .section-eyebrow',
    'event-title': '#inspirasi .section-title', 'event-desc': '#inspirasi .section-desc', 'story-eyebrow': '#cerita .section-eyebrow',
    'story-title': '#cerita .section-title', 'csr-eyebrow': '#csr .section-eyebrow', 'csr-title': '#csr .section-title',
    'contact-eyebrow': '#kontak .section-eyebrow', 'contact-title': '#kontak .section-title', 'contact-desc': '.kontak__desc',
    'faq-eyebrow': '#faq .section-eyebrow', 'faq-title': '#faq .section-title', 'footer-since': '.footer__since',
    'footer-store': '.footer__action.cta-store-locator', 'footer-contact': '.footer__action[href="#kontak"]', 'help': '.quick-help__link span'
  };
  const nav = { id: ['Beranda','Tentang Kami','Produk','Ambassador','Event','CSR','Cerita ST','Kontak','Cari Outlet'], en: ['Home','About Us','Products','Ambassadors','Events','CSR','ST Story','Contact','Find an Outlet'] };
  const lists = {
    '#products-filter .filter-chip': { id: ['Semua','Premium','Seimbang','Bold','Electron','Slim','Putih'], en: ['All','Premium','Balanced','Bold','Electron','Slim','White'] },
    '.product-card__overlay a': { id: 'Cari Toko', en: 'Find a Store' },
    '.product-card__action': { id: 'Cari Outlet <span aria-hidden="true">→</span>', en: 'Find an Outlet <span aria-hidden="true">→</span>' },
    '#products-more': { id: 'Lihat semua produk <span aria-hidden="true">↓</span>', en: 'View all products <span aria-hidden="true">↓</span>' },
    '.amb-card__ig-label': { id: 'Lihat Instagram', en: 'View on Instagram' },
    '.insp-card__soon': { id: 'Lihat di Instagram →', en: 'View on Instagram →' },
    '.footer__group summary': { id: ['Navigasi','Produk','Legal'], en: ['Navigation','Products','Legal'] },
    '.footer__action': { id: ['Cari Outlet','Hubungi ST'], en: ['Find an Outlet','Contact ST'] },
    '.form-intro': { id: 'Pesan akan dikirim langsung ke WhatsApp resmi ST.', en: 'Your message will open in the official ST WhatsApp.' },
    'label[for="kategori"]': { id: 'Kategori Pesan', en: 'Message Category' },
    'label[for="nama"]': { id: 'Nama Lengkap', en: 'Full Name' },
    'label[for="pesan"]': { id: 'Pesan', en: 'Message' },
    '.contact-form button[type="submit"]': { id: '<span class="btn__icon" aria-hidden="true">💬</span> Kirim via WhatsApp', en: '<span class="btn__icon" aria-hidden="true">💬</span> Open WhatsApp Draft' },
    '.faq__question': { id: ['Apakah ST dijual di minimarket seperti Indomaret / Alfamart?','Bisa COD atau kirim ke seluruh Indonesia?','Bagaimana cara menjadi agen ST?'], en: ['Is ST sold in convenience stores such as Indomaret or Alfamart?','Can I pay on delivery or receive delivery across Indonesia?','How can I become an ST agent?'] }
  };
  function safeGet() { try { return localStorage.getItem('st-main-lang') || 'id'; } catch (_) { return 'id'; } }
  function safeSet(v) { try { localStorage.setItem('st-main-lang', v); } catch (_) {} }
  function setLanguage(lang) {
    const copy = translations[lang] || translations.id;
    document.documentElement.lang = lang;
    Object.entries(selectors).forEach(([key, selector]) => {
      document.querySelectorAll(selector).forEach(el => {
        if (key === 'hero-cta-store' || key === 'footer-store') {
          const icon = el.querySelector('svg'); el.textContent = copy[key]; if (icon) el.prepend(icon);
        } else el.innerHTML = copy[key];
      });
    });
    document.querySelectorAll('#main-nav .nav-link').forEach((el, i) => { if (nav[lang][i]) el.textContent = nav[lang][i]; });
    Object.entries(lists).forEach(([selector, values]) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        const value = Array.isArray(values[lang]) ? values[lang][i] : values[lang];
        if (value) el.innerHTML = value;
      });
    });
    document.querySelectorAll('[data-main-lang-toggle]').forEach(btn => { btn.textContent = lang === 'id' ? 'ID / EN' : 'EN / ID'; btn.setAttribute('aria-label', lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'); });
    safeSet(lang);
  }
  function init() {
    setLanguage(safeGet());
    document.querySelectorAll('[data-main-lang-toggle]').forEach(btn => btn.addEventListener('click', () => setLanguage(document.documentElement.lang === 'id' ? 'en' : 'id')));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
