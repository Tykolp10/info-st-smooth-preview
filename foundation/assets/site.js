'use strict';

(() => {
  const gate = document.getElementById('age-gate');
  const content = document.getElementById('main-site');
  if (!gate || !content) return;
  const storageKey = 'st-foundation-age-verified';
  const ageMessage = document.getElementById('age-message');
  const actions = document.getElementById('age-actions');
  let verified = false;
  try { verified = sessionStorage.getItem(storageKey) === '21+'; } catch { /* Require confirmation if storage is unavailable. */ }

  function showContent(moveFocus) {
    gate.hidden = true;
    content.hidden = false;
    if (moveFocus) document.getElementById('intro-title').focus();
  }
  if (verified) showContent(false);
  document.getElementById('age-yes').addEventListener('click', () => {
    try { sessionStorage.setItem(storageKey, '21+'); } catch { /* Confirmation lasts for this page only. */ }
    showContent(true);
  });
  document.getElementById('age-no').addEventListener('click', () => {
    actions.hidden = true;
    ageMessage.textContent = 'Akses tidak dilanjutkan. Situs ini hanya untuk pengunjung berusia 21 tahun ke atas.';
    ageMessage.tabIndex = -1;
    ageMessage.focus();
  });
  document.getElementById('reset-age').addEventListener('click', () => {
    try { sessionStorage.removeItem(storageKey); } catch { /* In-memory state is reset below. */ }
    content.hidden = true;
    gate.hidden = false;
    actions.hidden = false;
    ageMessage.textContent = '';
    document.getElementById('age-yes').focus();
    window.scrollTo(0, 0);
  });

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

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const draftLink = document.getElementById('whatsapp-draft');
  const categories = {
    company: 'Keterangan perusahaan', media: 'Pertanyaan media',
    correction: 'Koreksi informasi', privacy: 'Privasi dan data pribadi', other: 'Pertanyaan lainnya'
  };
  function clearDraft() {
    draftLink.hidden = true;
    draftLink.removeAttribute('href');
    status.textContent = '';
  }
  form.addEventListener('input', clearDraft);
  form.addEventListener('change', clearDraft);
  form.addEventListener('submit', event => {
    event.preventDefault();
    clearDraft();
    if (!form.reportValidity()) return;
    const name = form.elements.namedItem('name').value.trim();
    const message = form.elements.namedItem('message').value.trim();
    const email = form.elements.namedItem('email').value.trim();
    const category = categories[form.elements.namedItem('category').value];
    if (!name || !message || !category) {
      status.textContent = 'Isi nama, keperluan, dan pesan. Kolom tidak boleh hanya berisi spasi.';
      return;
    }
    const text = ['Pertanyaan melalui website ST', `Nama: ${name}`, email ? `Email: ${email}` : '', `Keperluan: ${category}`, '', message].filter((value, index) => value || index === 4).join('\n');
    // URLSearchParams encodes spaces as "+"; wa.me only percent-decodes, so the draft
    // would arrive as "Nama:+Budi". encodeURIComponent keeps them as %20.
    draftLink.href = `https://wa.me/6281335730002?text=${encodeURIComponent(text)}`;
    draftLink.hidden = false;
    status.textContent = 'Draf siap. Buka WhatsApp untuk memeriksa dan mengirim pesan. Pesan belum terkirim.';
    draftLink.focus();
  });
})();
