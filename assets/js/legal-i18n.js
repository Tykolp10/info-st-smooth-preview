/* English/Indonesian copy for the standalone Legal pages. The selected
   language follows the main site's st-main-lang preference, so a visitor who
   opens Legal from the English site stays in English. */
(function () {
  const root = document.querySelector('.legal-page__inner');
  const page = document.body && document.body.dataset.legalPage;
  if (!root || !page) return;

  const original = {
    sacred: document.querySelector('.sacred-bar__text')?.innerHTML || '',
    back: root.querySelector('.legal-page__back')?.innerHTML || '',
    title: root.querySelector('.legal-page__title')?.innerHTML || '',
    updated: root.querySelector('.legal-page__updated')?.innerHTML || '',
    paragraphs: Array.from(root.querySelectorAll(':scope > p:not(.legal-page__updated)')).map(el => el.innerHTML),
    headings: Array.from(root.querySelectorAll('h2')).map(el => el.innerHTML),
    listItems: Array.from(root.querySelectorAll('li')).map(el => el.innerHTML),
    footer: Array.from(root.querySelectorAll('.legal-page__footer p')).map(el => el.innerHTML)
  };

  const copy = {
    privacy: {
      title: 'Privacy <em>Policy</em>',
      updated: 'Effective: January 1, 2026 · Last updated: May 4, 2026',
      back: '← Back to Home',
      description: 'Privacy Policy of PT Sehat Tentrem Jaya Lestari — how we collect, use, and protect visitor data.',
      headings: ['1. Age Verification', '2. Data We Collect', '3. Cookies & Similar Technologies', '4. How We Use Data', '5. Your Rights', '6. Security', '7. Third-Party Services & Links', '8. Policy Changes', '9. Contact Us'],
      paragraphs: [
        'PT Sehat Tentrem Jaya Lestari ("ST", "we", "us") respects the privacy of every visitor to <a href="https://info-st.com" target="_blank" rel="noopener">info-st.com</a> and related official websites. This policy explains how we collect, use, and protect information when you access our services.',
        'This website is intended only for adult visitors aged <strong>21 and over</strong>. When you first enter, you will be asked to confirm your age through the age gate. This status is stored temporarily on your device using browser <em>session storage</em> — it is not sent to our server and is deleted when you close the tab.',
        'Through the contact form, we collect information that you voluntarily provide, including:',
        'The form does not send your data to our server. When you press <strong>Open WhatsApp</strong>, the information is assembled into a message draft on your device and opened through WhatsApp’s <em>wa.me</em> link — the official ST number receives it only after you press send in WhatsApp. We do not store a copy on the site server.',
        'We use limited browser storage (<em>session storage</em>) to:',
        'We do not use third-party tracking cookies or advertising pixels for individual profiling.',
        'The site loads the <strong>Umami</strong> analytics script (Umami Cloud, <em>cloud.umami.is</em>) without cookies. The provider receives aggregated visit data such as pages viewed, referrer URL, browser type, operating system, device type, estimated country, and clicks on the "Find an Outlet" button with campaign labels and clicked product names. Because the script is loaded from Umami servers, your IP address is received by that provider under the <a href="https://umami.is/privacy" target="_blank" rel="noopener">Umami Privacy Policy</a>.',
        'We use the data you send only to:',
        'We <strong>do not</strong> sell, rent, or share your data with third parties for marketing purposes.',
        'Under Law No. 27 of 2022 on Personal Data Protection, you have the right to:',
        'To exercise these rights, please contact us using the details below.',
        'We are committed to protecting your information through reasonable technical and administrative measures. However, no internet transmission method is completely secure.',
        'Every page of our site loads web fonts from Google Fonts (<em>fonts.googleapis.com</em>, <em>fonts.gstatic.com</em>) and the Umami visit-statistics script (<em>cloud.umami.is</em>). When a page opens, your browser automatically contacts both services, so your IP address and browser type are received by each provider, including under the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>.',
        'Our site links to external platforms such as Instagram, Facebook, YouTube, X (Twitter), and WhatsApp. The privacy policies of those platforms are outside our control — we recommend reading each platform’s policy.',
        'This policy may be updated from time to time to reflect regulatory or operational changes. The latest version is always available on this page, with the update date shown at the top.',
        'If you have questions about this policy or your data rights, please contact:'
      ],
      listItems: [
        '<strong>Full name</strong> — so we can address you correctly when replying.',
        '<strong>Email address</strong> (optional) — for follow-up correspondence when needed.',
        '<strong>Message</strong> — questions, suggestions, or information you send us.',
        'Remembering your age verification during one visit.',
        'Replying to your questions, suggestions, or requests for information.',
        'Meeting applicable legal obligations, if any.',
        'Accessing the personal data we hold about you.',
        'Requesting correction or updating of inaccurate data.',
        'Requesting deletion of your data from our records.',
        'Withdrawing your consent at any time.',
        '<strong>PT Sehat Tentrem Jaya Lestari</strong>',
        'Jln Soekarno Hatta No. 22, Nglungge, Peterongan, Jombang — East Java, Indonesia',
        'WhatsApp: <a href="https://wa.me/6281335730002" target="_blank" rel="noopener">+62 813-3573-0002</a>',
        'Website: <a href="https://info-st.com" target="_blank" rel="noopener">info-st.com</a>'
      ],
      // The sanitized GitHub Pages preview removes the analytics/provider
      // explanation paragraphs. Keep the remaining copy in the same semantic
      // order instead of shifting every later paragraph under the wrong heading.
      omittedParagraphs: [6, 12],
      footer: ['© 2026 PT Sehat Tentrem Jaya Lestari · For a Greater Indonesia', '⚠️ SMOKING KILLS. DO NOT SELL OR GIVE TO ANYONE UNDER 21 OR TO PREGNANT WOMEN.']
    },
    terms: {
      title: 'Terms &amp; <em>Conditions</em>',
      updated: 'Effective: January 1, 2026 · Last updated: May 4, 2026',
      back: '← Back to Home',
      description: 'Terms and Conditions for using the website of PT Sehat Tentrem Jaya Lestari.',
      headings: ['1. Age Requirement', '2. Website Purpose', '3. Health Warning', '4. Intellectual Property', '5. Prohibited Use', '6. Information Accuracy', '7. External Links', '8. Limitation of Liability', '9. Changes to These Terms', '10. Governing Law', '11. Contact Us'],
      paragraphs: [
        'Welcome to the official website of <strong>PT Sehat Tentrem Jaya Lestari</strong> ("ST", "we", "us"). By accessing and using this website, you confirm that you have read, understood, and agreed to these Terms and Conditions. If you do not agree with any part of these terms, please stop using the website.',
        'This website is intended exclusively for adult visitors aged <strong>21 and over</strong>. By confirming your age through the age gate, you state and warrant that you meet this age requirement. ST may deny access without prior notice if we have reasonable grounds to question your age statement.',
        'The content on this website is provided for information about PT Sehat Tentrem Jaya Lestari, Hand-Rolled Kretek (SKT) products, social responsibility programs, and the ST business ecosystem. This website is <strong>not</strong> a direct sales platform — products are purchased through the official distribution network.',
        '<strong>SMOKING KILLS.</strong> The products shown are tobacco products that may cause cancer, heart attacks, impotence, and pregnancy and fetal disorders. Do not sell or give them to anyone under 21 or to pregnant women. Advertising and product information on this website are intended only for adult smokers, not to promote smoking to non-smokers or encourage increased consumption.',
        'All content on this website — including text, images, logos, trademarks, design, and layout — belongs to PT Sehat Tentrem Jaya Lestari or third parties that have licensed it to us, and is protected by copyright and intellectual-property laws applicable in the Republic of Indonesia.',
        'You may not copy, reproduce, redistribute, modify, or use this content for commercial purposes without our written permission.',
        'You agree not to use this website for:',
        'We try to keep the information on this website accurate. However, ST does not guarantee that all content is error-free or always current. Product specifications, prices, availability, and other information may change at any time without notice.',
        'This website contains links to third-party platforms (social media, distribution locations, and others). ST is not responsible for the content, policies, or practices of external websites. Access to third-party websites is your responsibility as a visitor.',
        'To the extent permitted by applicable law, PT Sehat Tentrem Jaya Lestari is not liable for direct or indirect losses arising from use of, or inability to use, this website, including data loss, business interruption, or financial loss.',
        'We may change, add, or remove parts of these Terms and Conditions at any time. The latest version will be published on this page with the update date shown. Using the website after changes are published means you accept the new terms.',
        'These Terms and Conditions are governed by and interpreted under the laws of the Republic of Indonesia. Disputes will first be resolved through deliberation. If no agreement is reached, the dispute will be resolved through the Jombang District Court as the competent forum.',
        'For questions about these Terms & Conditions, please contact:'
      ],
      listItems: [
        'Any purpose that violates applicable laws, regulations, or rules.',
        'Submitting information that is false, misleading, or harmful to others.',
        'Attempting to access our systems, servers, or networks without authorization.',
        'Disrupting website operations through viruses, malware, or other cyberattacks.',
        'Collecting other visitors’ data without our written permission.',
        '<strong>PT Sehat Tentrem Jaya Lestari</strong>',
        'Jln Soekarno Hatta No. 22, Nglungge, Peterongan, Jombang — East Java, Indonesia',
        'WhatsApp: <a href="https://wa.me/6281335730002" target="_blank" rel="noopener">+62 813-3573-0002</a>',
        'Website: <a href="https://info-st.com" target="_blank" rel="noopener">info-st.com</a>'
      ],
      footer: ['© 2026 PT Sehat Tentrem Jaya Lestari · For a Greater Indonesia', '⚠️ SMOKING KILLS. DO NOT SELL OR GIVE TO ANYONE UNDER 21 OR TO PREGNANT WOMEN.']
    }
  };

  const safeGet = () => { try { return localStorage.getItem('st-main-lang') || 'id'; } catch (_) { return 'id'; } };
  function setLanguage(lang) {
    const useEnglish = lang === 'en';
    const data = copy[page];
    document.documentElement.lang = useEnglish ? 'en' : 'id';
    document.querySelector('.sacred-bar__text').innerHTML = useEnglish ? 'BY THE GRACE OF ALMIGHTY GOD' : original.sacred;
    root.querySelector('.legal-page__back').innerHTML = useEnglish ? data.back : original.back;
    root.querySelector('.legal-page__title').innerHTML = useEnglish ? data.title : original.title;
    root.querySelector('.legal-page__updated').innerHTML = useEnglish ? data.updated : original.updated;
    const paragraphNodes = root.querySelectorAll(':scope > p:not(.legal-page__updated)');
    const englishParagraphs = data.paragraphs.length === paragraphNodes.length
      ? data.paragraphs
      : data.paragraphs.filter((_, i) => !(data.omittedParagraphs || []).includes(i));
    if (englishParagraphs.length === paragraphNodes.length) {
      paragraphNodes.forEach((el, i) => { el.innerHTML = useEnglish ? englishParagraphs[i] : original.paragraphs[i]; });
    }
    root.querySelectorAll('h2').forEach((el, i) => { el.innerHTML = useEnglish ? data.headings[i] : original.headings[i]; });
    root.querySelectorAll('li').forEach((el, i) => { el.innerHTML = useEnglish ? data.listItems[i] : original.listItems[i]; });
    root.querySelectorAll('.legal-page__footer p').forEach((el, i) => { el.innerHTML = useEnglish ? data.footer[i] : original.footer[i]; });
    document.title = useEnglish ? `${page === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'} – ST Sehat Tentrem` : (page === 'privacy' ? 'Kebijakan Privasi – ST Sehat Tentrem' : 'Syarat & Ketentuan – ST Sehat Tentrem');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = useEnglish ? data.description : (page === 'privacy' ? 'Kebijakan Privasi PT Sehat Tentrem Jaya Lestari — bagaimana kami mengumpulkan, menggunakan, dan melindungi data pengunjung.' : 'Syarat dan Ketentuan penggunaan situs PT Sehat Tentrem Jaya Lestari.');
    document.querySelectorAll('[data-legal-lang-toggle]').forEach(btn => { btn.textContent = useEnglish ? 'EN / ID' : 'ID / EN'; btn.setAttribute('aria-label', useEnglish ? 'Switch to Indonesian' : 'Switch to English'); });
    try { localStorage.setItem('st-main-lang', useEnglish ? 'en' : 'id'); } catch (_) {}
  }

  setLanguage(safeGet());
  document.querySelectorAll('[data-legal-lang-toggle]').forEach(btn => btn.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'id' : 'en')));
})();
