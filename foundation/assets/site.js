'use strict';

(() => {
  /* ---------- Bahasa ----------
   * Bahasa ditentukan dari preferensi peramban pengunjung, bukan dari lokasi IP.
   * Preferensi peramban diset sendiri oleh pemiliknya, tersedia seketika, tidak
   * memerlukan permintaan jaringan, dan tidak mengirim data apa pun ke pihak lain.
   * Alamat IP hanya menunjukkan letak jaringan: orang Indonesia yang sedang di luar
   * negeri akan salah dilayani, begitu pula sebaliknya.
   * Pilihan manual selalu menang dan diingat di perangkat. */
  const LANG_KEY = 'st-lang';
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* pilihan berlaku untuk halaman ini saja */ } },
    clear(key) { try { localStorage.removeItem(key); } catch (e) { /* diabaikan */ } },
  };

  function detectLang() {
    const saved = store.get(LANG_KEY);
    if (saved === 'id' || saved === 'en') return saved;
    const prefs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];
    return prefs.some(code => String(code).toLowerCase().startsWith('id')) ? 'id' : 'en';
  }

  let lang = detectLang();
  const t = key => (ST_I18N[lang] && ST_I18N[lang][key]) || ST_I18N.id[key] || '';

  function applyLanguage() {
    document.documentElement.lang = t('html.lang');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    // Hanya kunci yang sengaja diberi akhiran _html yang dipasang sebagai markup,
    // dan seluruh isinya ditulis tangan di assets/i18n.js — bukan masukan pengguna.
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      el.setAttribute('aria-label', t(el.dataset.i18nLabel));
    });
    const title = document.querySelector('[data-i18n-title]');
    if (title) document.title = t(title.dataset.i18nTitle);
    const desc = document.querySelector('[data-i18n-meta]');
    if (desc) desc.setAttribute('content', t(desc.dataset.i18nMeta));

    // Peringatan kesehatan tidak pernah digantikan terjemahan. Teks Indonesia yang
    // diwajibkan selalu tampil; versi Inggris hanya ditambahkan sebagai bantuan baca.
    document.querySelectorAll('[data-health-warning]').forEach(block => {
      block.querySelector('.hw-statutory').textContent = ST_HEALTH_WARNING.statutory;
      const courtesy = block.querySelector('.hw-courtesy');
      courtesy.textContent = ST_HEALTH_WARNING.courtesy;
      courtesy.hidden = lang !== 'en';
    });

    document.dispatchEvent(new CustomEvent('st:langchange'));
  }

  document.querySelectorAll('[data-lang-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      lang = lang === 'id' ? 'en' : 'id';
      store.set(LANG_KEY, lang);
      applyLanguage();
    });
  });

  applyLanguage();

  /* ---------- Konfirmasi usia ---------- */
  const gate = document.getElementById('age-gate');
  const content = document.getElementById('main-site');
  if (!gate || !content) return;
  const ageKey = 'st-foundation-age-verified';
  const ageMessage = document.getElementById('age-message');
  const actions = document.getElementById('age-actions');
  let verified = false;
  try { verified = sessionStorage.getItem(ageKey) === '21+'; } catch (e) { /* tanpa penyimpanan, konfirmasi tetap diminta */ }

  function showContent(moveFocus) {
    gate.hidden = true;
    content.hidden = false;
    if (moveFocus) document.getElementById('intro-title').focus();
  }
  if (verified) showContent(false);

  document.getElementById('age-yes').addEventListener('click', () => {
    try { sessionStorage.setItem(ageKey, '21+'); } catch (e) { /* konfirmasi berlaku untuk halaman ini saja */ }
    showContent(true);
  });

  let denied = false;
  document.getElementById('age-no').addEventListener('click', () => {
    denied = true;
    actions.hidden = true;
    ageMessage.textContent = t('gate.denied');
    ageMessage.tabIndex = -1;
    ageMessage.focus();
  });

  document.getElementById('reset-age').addEventListener('click', () => {
    try { sessionStorage.removeItem(ageKey); } catch (e) { /* keadaan di memori tetap direset di bawah */ }
    denied = false;
    content.hidden = true;
    gate.hidden = false;
    actions.hidden = false;
    ageMessage.textContent = '';
    document.getElementById('age-yes').focus();
    window.scrollTo(0, 0);
  });

  // Pesan penolakan ikut berganti bahasa selama layarnya masih tampil.
  document.addEventListener('st:langchange', () => {
    if (denied) ageMessage.textContent = t('gate.denied');
  });

  /* ---------- Menu ---------- */
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });

  /* ---------- Formulir kontak ---------- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const draftLink = document.getElementById('whatsapp-draft');

  function clearDraft() {
    draftLink.hidden = true;
    draftLink.removeAttribute('href');
    status.textContent = '';
  }
  form.addEventListener('input', clearDraft);
  form.addEventListener('change', clearDraft);
  // Draf yang sudah dibuat memakai bahasa lama; buang agar tidak terkirim campur.
  document.addEventListener('st:langchange', clearDraft);

  form.addEventListener('submit', event => {
    event.preventDefault();
    clearDraft();
    if (!form.reportValidity()) return;
    const name = form.elements.namedItem('name').value.trim();
    const message = form.elements.namedItem('message').value.trim();
    const email = form.elements.namedItem('email').value.trim();
    const categoryKey = form.elements.namedItem('category').value;
    const category = categoryKey ? t('form.cat.' + categoryKey) : '';
    if (!name || !message || !category) {
      status.textContent = t('form.invalid');
      return;
    }
    const lines = [
      t('form.waHeading'),
      `${t('form.waName')}: ${name}`,
      email ? `${t('form.waEmail')}: ${email}` : '',
      `${t('form.waCategory')}: ${category}`,
      '',
      message,
    ].filter((value, index) => value || index === 4);
    // URLSearchParams mengubah spasi menjadi "+"; wa.me hanya melakukan
    // percent-decode, sehingga draf akan tiba sebagai "Nama:+Budi".
    draftLink.href = `https://wa.me/6281335730002?text=${encodeURIComponent(lines.join('\n'))}`;
    draftLink.hidden = false;
    status.textContent = t('form.ready');
    draftLink.focus();
  });
})();
