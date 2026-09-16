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
      'hero__eyebrow': 'Digagas 2013 · Berdiri 2017 <span class="hero__eyebrow-tag">Untuk Indonesia Raya</span>',
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
      'hero__eyebrow': 'Founded in 2013 · Established in 2017 <span class="hero__eyebrow-tag">For a Greater Indonesia</span>',
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
    '.faq__question': { id: ['Apakah ST dijual di minimarket seperti Indomaret / Alfamart?','Bisa COD atau kirim ke seluruh Indonesia?','Bagaimana cara menjadi agen ST?'], en: ['Is ST sold in convenience stores such as Indomaret or Alfamart?','Can I pay on delivery or receive delivery across Indonesia?','How can I become an ST agent?'] },
    '#about .about__body': { en: [
      'PT Sehat Tentrem Jaya Lestari was officially established in 2017, after being initiated in 2013 by M. Subchi Azal Tsani (Mas Bechi), son of Kiai Moch. Mukhtar Mu\'thi, Mursyid of Thoriqoh Shiddiqiyyah. Concerned about the economic conditions of the community, he began the business within the Majma\'al Bachroin Chubbul Wathon Minal Iman Shiddiqiyyah Islamic boarding school in Jombang.',
      'More than a tobacco company, ST is a movement of faith, humanity, and care for the natural world. Every hand-rolled kretek expresses the spirit of “For a Greater Indonesia” and the pursuit of economic independence for communities in East Java.',
      'ST has grown into a business ecosystem that includes Kopi Tombo, Susu Tombo ST, ST Beverage, Klambi ST, Mumtaaj Scarf, and Musik Sehat Tentrem (MST) — all moving with one shared spirit: a greater Indonesia.'
    ] },
    '#cerita .timeline__title': { en: ['The First Recipe Blends','PR Sehat Tentrem Jaya Lestari Is Established','The ST Group Ecosystem Is Born','Business Expansion','Today — A New Chapter of Growth'] },
    '#cerita .timeline__desc': { en: [
      'At the Shiddiqiyyah Islamic boarding school in Jombang, M. Subchi Azal Tsani, founder of Sehat Tentrem, began developing a kretek recipe with an Indonesian character. Four years of exploration followed: selecting tobacco, measuring cloves, and blending spices from Indonesia. One purpose guided the journey: For a Greater Indonesia.',
      'After the recipe and formula became stable, ST was formally established as PR Sehat Tentrem Jaya Lestari in Kabuh, Jombang, East Java. This marked Sehat Tentrem’s expansion across Indonesia.',
      'Over time, ST grew beyond kretek with Kopi Tombo ST, Susu Tombo ST, Klambi ST, and Musik Sehat Tentrem (MST), forming an integrated business ecosystem.',
      'With hundreds of employees, agents in 34 provinces, and active CSR programs, PR Sehat Tentrem Jaya Lestari officially became PT Sehat Tentrem Jaya Lestari in 2022, marking a new phase of growth.',
      'In 2026, ST enters a new chapter: strengthening distribution, collaborating with partners across the archipelago, and accelerating growth. From Jombang to the nation, the spirit of “For a Greater Indonesia” lives in every work.'
    ] },
    '#csr .csr-card__title': { en: ['A Decent Home of Gratitude','Community Support','A Foundation for Progress'] },
    '#csr .csr-card__desc': { en: [
      'Rumah Syukur Layak Huni Shiddiqiyyah is a free home-building program that helps eligible families live in safer, more suitable homes.',
      'Food packages and financial support are distributed to orphans and people in need on national holidays or around the founder’s birthday.',
      'Supporting economic independence by helping sustain faith and humanitarian work at the Shiddiqiyyah Islamic boarding school in Jombang.'
    ] },
    '.insp-card__text': { en: ['An intimate Jazz Night with ST ambassador Indro Hardjodikoro at Ruang Putih Bandung.','Sharing inspiration, stories, and the warmth of Ramadan with Sehat Tentrem in Mojokerto.','ST joined the thanksgiving gathering for Isra Mi’raj of Prophet Muhammad SAW and Shiddiqiyyah Day 1447 H.'] },
    '.faq__answer p': { en: ['Not yet. We currently do not distribute through national convenience stores. We focus on empowering our agents and distribution partners across 34 provinces in Indonesia.','Yes. Many official agents deliver across the archipelago. Find the nearest agent through our Locator or contact the official WhatsApp number for assistance.','Use the contact form above, select “Become an agent / distribution partner,” and our team will contact you on WhatsApp with the requirements.'] }
  };
  lists['.hero__slide-caption'] = { en: ['From Jombang — For a Greater Indonesia','The Spirit of the Archipelago','ST Brand Ambassador · For a Greater Indonesia'] };
  lists['.marquee-track > span:not(.sep)'] = { en: ['Sehat Tentrem','For a Greater Indonesia','Premium Hand-Rolled Kretek','Since 2013','Jombang · East Java','Sehat Tentrem','For a Greater Indonesia','Premium Hand-Rolled Kretek','Since 2013','Jombang · East Java'] };
  lists['.social-validation .section-eyebrow'] = { en: 'Closer Than You Think' };
  lists['.social-validation .container > div > div > span:last-child'] = { en: ['Provinces','Registered Outlets','The Archipelago'] };
  lists['.about__stats .stat-label'] = { en: ['Product Variants','Employees','Partners / Branches'] };
  lists['.philosophy__quote'] = { en: '<span class="philosophy__open-q">"</span>Heritage kretek meets today’s technology —<br/><em>for the pride and prosperity of Indonesia.</em><span class="philosophy__close-q">"</span>' };
  lists['#products .section-note'] = { en: 'Prices vary by region · <a href="https://info-st.com/location" target="_blank" rel="noopener">Find a store near you →</a>' };
  lists['#ambassador .section-desc'] = { en: 'People who represent the spirit of “For a Greater Indonesia” — authentic souls inspiring millions across Indonesia.' };
  lists['#csr .section-desc'] = { en: '“For a Greater Indonesia” is more than a slogan — it takes shape in actions that touch people’s lives every day.' };
  lists['.insp-card__cat'] = { en: ['Music & Culture','Ramadan Event','Religion & Culture'] };
  lists['.csr-card__tag'] = { en: ['Social Infrastructure','Humanity & Care','Community Economy'] };
  lists['#products .section-note a'] = { en: 'Find a store near you →' };
  lists['#kategori option'] = { en: ['Choose a category...','Product Stock','Become an Agent / Partner','Partnership / Collaboration','Media Question','Other'] };
  lists['#nama'] = { en: 'Your name' };
  lists['#pesan'] = { en: 'Write your message here...' };
  lists['#email'] = { en: 'email@example.com' };
  lists['.kontak__list li:nth-child(1) span:last-child'] = { en: 'Jln Soekarno Hatta No. 22, Nglungge, Peterongan, Jombang — East Java, Indonesia' };
  lists['.kontak__list li:nth-child(4) span:last-child'] = { en: 'Monday–Friday, 08:00–17:00 WIB' };
  lists['.form-optional'] = { en: '(optional)' };
  lists['.footer__group-list a'] = { en: ['Home','About Us','Products','Inspiration','ST Story','Contact','Matur Suwon','Getszemani','Blokosutho','RNP & RNM','Merah Putih','Privacy Policy','Terms & Conditions'] };
  lists['.footer__copy'] = { en: '© 2026 PT Sehat Tentrem Jaya Lestari. All Rights Reserved.' };
  lists['.footer__warning'] = { en: '<span class="footer__warning-mark" aria-hidden="true">!</span> SMOKING KILLS. DO NOT SELL OR GIVE TO ANYONE UNDER 21 OR TO PREGNANT WOMEN.' };
  const ariaCopy = {
    '#age-gate': { id: 'Verifikasi usia 21 tahun ke atas', en: 'Age verification for visitors aged 21 and over' },
    '.navbar__logo': { id: 'Kembali ke beranda', en: 'Back to home' },
    '#products-filter': { id: 'Filter kategori produk', en: 'Filter products by category' },
    '.hero__dot': { id: ['Tampilkan slide 1', 'Tampilkan slide 2', 'Tampilkan slide 3'], en: ['Show slide 1', 'Show slide 2', 'Show slide 3'] },
    '.amb-card': { id: ['Lihat Instagram Indra Q (@indraqadarsih)', 'Lihat Instagram Indro H (@indrobass)', 'Lihat Instagram Pay (@payburman)'], en: ['View Indra Q on Instagram (@indraqadarsih)', 'View Indro H on Instagram (@indrobass)', 'View Pay on Instagram (@payburman)'] }
  };
  lists['.product-card__desc'] = { en: [
    'Matur Suwon SM is Sehat Tentrem’s most accessible variant, with a rich yet smooth taste. In Javanese, Matur Suwon means “Thank You” — an expression of gratitude to the people of Indonesia.',
    'Raos Ngeten Puron is blended with tobacco and a range of spices. Its boldest profile among ST variants suits those who enjoy a stronger taste. The name expresses the idea of accepting things as they are.',
    'Raos Ngeten Mawon balances strength and smoothness. Its medium-grade tobacco is blended with spices inspired by ST’s premium variants, offering a premium character at a more accessible price.',
    'Merah Putih was first released to celebrate Indonesia’s independence and the founding of the Republic in August. It later became a permanent ST kretek variant with a smooth, savory profile and a refreshed pack.',
    'In Javanese, Blokosutho means “straightforward” or “as it is”. Alastu Blokosutho uses high-quality tobacco and a distinctive spice blend for a characterful taste.',
    'Getszemani is Sehat Tentrem’s slim kretek. It keeps a distinctive kretek character while staying smooth and light, bringing together the experience of kretek and a slim format.',
    'In Javanese, Raos Paling Eco means “the best taste”. It blends quality tobacco and cloves with Indonesian spices and pure honey, creating a fragrant, smooth, and savory profile.',
    'Alastu Caffetin is a white kretek that challenges the assumption that white cigarettes must be filtered. Its name combines “caffeine” and “nicotine”, with a light yet savory spice profile.',
    'Raos Paling Eco Spesial Oxy offers a distinctive taste experience with Oxytron technology. High-quality tobacco and cloves meet Indonesian spices for a sharper, lively profile with a smooth draw.',
    'The name Syifaa comes from the Arabic word for “healing”. It is an ultra-premium ST variant made with selected tobacco, an intense spice blend, and high-quality pure honey.'
  ] };
  lists['.product-card__tag'] = { en: ['SKT · Bold','SKT · Bold','SKT · Balanced','SKT · Balanced','SKT · Electron','SKT · Slim','SKT · Premium','White SKT · Caffeine','SKT · Oxytron','SKT · Ultra Premium'] };
  lists['#sticky-btn'] = { en: 'Find Your Nearest Outlet <span aria-hidden="true">→</span>' };
  const originalHTML = new WeakMap();
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
        if (!originalHTML.has(el)) originalHTML.set(el, el.innerHTML);
        const value = lang === 'id' ? originalHTML.get(el) : (Array.isArray(values[lang]) ? values[lang][i] : values[lang]);
        if (value) el.innerHTML = value;
      });
    });
    Object.entries(ariaCopy).forEach(([selector, values]) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        const value = lang === 'id' ? (Array.isArray(values.id) ? values.id[i] : values.id) : (Array.isArray(values.en) ? values.en[i] : values.en);
        if (value) el.setAttribute('aria-label', value);
      });
    });
    const placeholders = { '#nama': ['Nama Anda', 'Your name'], '#email': ['email@anda.com', 'email@example.com'], '#pesan': ['Tulis pesan Anda di sini...', 'Write your message here...'] };
    Object.entries(placeholders).forEach(([selector, values]) => document.querySelectorAll(selector).forEach(el => { el.placeholder = values[lang === 'en' ? 1 : 0]; }));
    document.querySelectorAll('[data-main-lang-toggle]').forEach(btn => { btn.textContent = lang === 'id' ? 'ID / EN' : 'EN / ID'; btn.setAttribute('aria-label', lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'); });
    const stickyCta = document.querySelector('#sticky-cta-mobile');
    if (stickyCta) stickyCta.setAttribute('aria-label', lang === 'en' ? 'Quick mobile action' : 'Aksi cepat mobile');
    safeSet(lang);
    window.dispatchEvent(new CustomEvent('st:main-language-change', { detail: { lang } }));
  }
  function init() {
    setLanguage(safeGet());
    document.querySelectorAll('[data-main-lang-toggle]').forEach(btn => btn.addEventListener('click', () => setLanguage(document.documentElement.lang === 'id' ? 'en' : 'id')));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.applyMainLanguage = setLanguage;
})();
