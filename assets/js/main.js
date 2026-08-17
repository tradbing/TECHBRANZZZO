/* TECHBRANZZO SERVICES — site behaviour.
   ponytail: one file, no framework, no build step. Header and footer are rendered here
   so every page shares one link list and nothing can drift out of sync. */

/* Where the contact form delivers to. Deliberately NOT shown anywhere on the site —
   no email address or phone number is published in the markup. Leave it empty and the
   form tells the visitor enquiries aren't connected; set it to deliver enquiries. */
const CONTACT_EMAIL = 'branzzotechnologies@gmail.com';

const NAV = [
  ['index.html', 'Home'],
  ['services.html', 'Services'],
  ['templates.html', 'Templates'],
  ['pricing.html', 'Pricing'],
  ['about.html', 'About'],
  ['contact.html', 'Contact']
];

const here = location.pathname.split('/').pop() || 'index.html';

const LOGO = `<a class="logo" href="index.html">
    <span class="logo-mark">TB</span>
    <span>TECHBRANZZO<small>SERVICES</small></span>
  </a>`;

/* ---------- header ---------- */
const headSlot = document.getElementById('site-header');
if (headSlot) {
  headSlot.outerHTML = `<header class="site-head">
    <div class="wrap nav">
      ${LOGO}
      <nav class="nav-links">
        ${NAV.map(([h, t]) => `<a href="${h}"${h === here ? ' class="active"' : ''}>${t}</a>`).join('')}
      </nav>
      <div class="nav-cta">
        <a class="btn btn-ghost btn-sm" href="templates.html">Templates</a>
        <a class="btn btn-primary btn-sm" href="contact.html">Get a quote</a>
        <button class="burger" aria-label="Toggle menu" aria-expanded="false"><span></span></button>
      </div>
    </div>
  </header>`;
}

/* ---------- footer ---------- */
const footSlot = document.getElementById('site-footer');
if (footSlot) {
  footSlot.outerHTML = `<footer class="site-foot">
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-about">
          ${LOGO}
          <p>A global technology company delivering end-to-end digital transformation — AI, software, cloud, automation and dedicated engineering teams.</p>
          <div class="socials">
            <a href="https://www.linkedin.com/company/techbranzzo" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
            <a href="https://x.com/techbranzzo" target="_blank" rel="noopener" aria-label="X">X</a>
            <a href="https://github.com/techbranzzo" target="_blank" rel="noopener" aria-label="GitHub">GH</a>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#web-development">Web Development</a></li>
            <li><a href="services.html#mobile-app-development">Mobile Apps</a></li>
            <li><a href="services.html#ai-solutions">AI Solutions</a></li>
            <li><a href="services.html#cloud-devops">Cloud &amp; DevOps</a></li>
            <li><a href="services.html#cybersecurity">Cybersecurity</a></li>
            <li><a href="services.html">All 20 verticals</a></li>
          </ul>
        </div>
        <div>
          <h4>Platforms</h4>
          <ul>
            <li><a href="templates.html?cat=Forex%20%26%20Trading">Forex &amp; Trading</a></li>
            <li><a href="templates.html?cat=Crypto%20%26%20Web3">Crypto &amp; Web3</a></li>
            <li><a href="templates.html?cat=SaaS">SaaS Starters</a></li>
            <li><a href="templates.html?cat=E-commerce">E-commerce</a></li>
            <li><a href="templates.html?cat=AI%20%26%20Automation">AI &amp; Automation</a></li>
            <li><a href="templates.html">All templates</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About us</a></li>
            <li><a href="about.html#process">How we work</a></li>
            <li><a href="pricing.html">Pricing &amp; rates</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="contact.html#form">Send a project brief</a></li>
            <li><a href="contact.html?service=Staff%20Augmentation">Request developer profiles</a></li>
            <li><a href="pricing.html">Request an estimate</a></li>
            <li><a href="legal.html#support">Support hours &amp; SLA</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bot">
        <span>© <span data-year></span> TECHBRANZZO SERVICES. All rights reserved.</span>
        <nav>
          <a href="legal.html#privacy">Privacy</a>
          <a href="legal.html#terms">Terms</a>
          <a href="legal.html#licence">Licence agreement</a>
          <a href="legal.html#refunds">Refunds</a>
        </nav>
      </div>
    </div>
  </footer>`;
}

/* ---------- header behaviour ---------- */
const head = document.querySelector('.site-head');
if (head) {
  const onScroll = () => head.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });
}

const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');
if (burger && links) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    links.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') { burger.classList.remove('open'); links.classList.remove('open'); }
  });
}

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px' });
const observeReveals = () => document.querySelectorAll('.rv:not(.in)').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 70 + 'ms';
  io.observe(el);
});
observeReveals();

/* ---------- accordion ---------- */
document.querySelectorAll('.vert-head').forEach(h => {
  h.addEventListener('click', () => {
    const v = h.parentElement;
    const body = v.querySelector('.vert-body');
    const open = v.classList.toggle('open');
    body.style.maxHeight = open ? body.scrollHeight + 'px' : 0;
  });
});

/* open the accordion a #hash points at */
function openHashVert() {
  const v = location.hash && document.querySelector(location.hash);
  if (v && v.classList && v.classList.contains('vert') && !v.classList.contains('open')) {
    v.querySelector('.vert-head').click();
  }
}
openHashVert();
addEventListener('hashchange', openHashVert);

/* ---------- toast ---------- */
let toastEl;
function toast(msg) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toastEl.classList.remove('show'), 3400);
}

/* ---------- shared helpers ---------- */
const money = n => '$' + n.toLocaleString('en-US');
const stars = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));

/* monochrome preview mockup — shade varies per template so cards stay distinguishable */
function shade(id) {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) % 997;
  const a = 9 + (h % 9), b = 22 + (h % 15);
  return `linear-gradient(150deg, hsl(220 6% ${a}%), hsl(220 5% ${b}%))`;
}

function mockup(t, big) {
  return `<div class="mock" style="background:${shade(t.id)}">
      <div class="mock-bar"><i></i><i></i><i></i><u></u></div>
      <div class="mock-body">
        <div class="mock-title">${t.name.split('—')[0].trim()}</div>
        <div class="mock-line" style="width:${big ? 60 : 80}%"></div>
        <div class="mock-line s"></div>
        <div class="mock-blocks"><u></u><u></u><u></u></div>
      </div>
    </div>`;
}

/* ---------- marketplace grid ---------- */
const grid = document.getElementById('market-grid');
if (grid && typeof TEMPLATES !== 'undefined') {
  const state = { q: '', cat: 'All', sort: 'popular', mode: 'buy' };

  const filterBar = document.getElementById('filters');
  const searchIn = document.getElementById('search');
  const sortSel = document.getElementById('sort');
  const countEl = document.getElementById('result-count');

  CATEGORIES.forEach(c => {
    const b = document.createElement('button');
    b.textContent = c;
    b.dataset.cat = c;
    if (c === state.cat) b.classList.add('on');
    filterBar.appendChild(b);
  });

  filterBar.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    state.cat = b.dataset.cat;
    filterBar.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    render();
  });

  searchIn.addEventListener('input', e => { state.q = e.target.value.toLowerCase().trim(); render(); });
  sortSel.addEventListener('change', e => { state.sort = e.target.value; render(); });

  document.querySelectorAll('.toggle button').forEach(b => {
    b.addEventListener('click', () => {
      state.mode = b.dataset.mode;
      document.querySelectorAll('.toggle button').forEach(x => x.classList.toggle('on', x === b));
      render();
    });
  });

  /* deep links: templates.html?cat=SaaS / ?q=forex / ?mode=rent */
  const qs = new URLSearchParams(location.search);
  if (qs.get('cat')) {
    const hit = CATEGORIES.find(c => c.toLowerCase() === qs.get('cat').toLowerCase());
    if (hit) {
      state.cat = hit;
      filterBar.querySelectorAll('button').forEach(x => x.classList.toggle('on', x.dataset.cat === hit));
    }
  }
  if (qs.get('q')) { state.q = qs.get('q').toLowerCase().trim(); searchIn.value = qs.get('q'); }
  if (qs.get('mode') === 'rent') {
    state.mode = 'rent';
    document.querySelectorAll('.toggle button').forEach(x => x.classList.toggle('on', x.dataset.mode === 'rent'));
  }

  function render() {
    const list = TEMPLATES.filter(t => {
      const okCat = state.cat === 'All' || t.cat === state.cat;
      const hay = (t.name + ' ' + t.cat + ' ' + t.desc + ' ' + t.stack.join(' ')).toLowerCase();
      return okCat && (!state.q || hay.includes(state.q));
    });

    const by = {
      popular: (a, b) => b.sales - a.sales,
      rating: (a, b) => b.rating - a.rating,
      'price-low': (a, b) => a[state.mode] - b[state.mode],
      'price-high': (a, b) => b[state.mode] - a[state.mode],
      newest: (a, b) => TEMPLATES.indexOf(a) - TEMPLATES.indexOf(b)
    };
    list.sort(by[state.sort]);

    countEl.textContent = `${list.length} template${list.length === 1 ? '' : 's'}`;

    grid.innerHTML = list.length ? list.map(cardHTML).join('')
      : `<div class="empty"><h3>No templates match that search</h3>
         <p>Try another keyword, or ask us to build it — custom platforms go live in 3–6 weeks.</p>
         <a class="btn btn-primary btn-sm" href="contact.html" style="margin-top:18px">Request a custom build</a></div>`;
    observeReveals();
  }

  function cardHTML(t) {
    const isRent = state.mode === 'rent';
    const label = { hot: 'Best seller', new: 'New', top: 'Top rated' }[t.badge];
    return `<article class="tpl rv">
      <div class="tpl-shot">
        ${mockup(t)}
        ${t.badge ? `<span class="tpl-badge ${t.badge}">${label}</span>` : ''}
        <div class="tpl-hover">
          <a class="btn btn-primary btn-sm" href="template.html?id=${t.id}">Live preview</a>
          <a class="btn btn-ghost btn-sm" href="template.html?id=${t.id}#buy">Pricing</a>
        </div>
      </div>
      <div class="tpl-body">
        <span class="tpl-cat">${t.cat}</span>
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
        <div class="tpl-meta">
          <span class="stars">${stars(t.rating)}</span>
          <span>${t.rating}</span>
          <span>·</span>
          <span>${t.sales.toLocaleString()} sales</span>
        </div>
        <div class="chips">${t.stack.slice(0, 3).map(s => `<span class="chip">${s}</span>`).join('')}</div>
        <div class="tpl-foot">
          <div class="price">
            <strong>${money(isRent ? t.rent : t.buy)}${isRent ? '<span style="font-size:.8rem"> /mo</span>' : ''}</strong>
            <span>${isRent ? 'Rent · cancel anytime' : `One-time licence <del>${money(t.was)}</del>`}</span>
          </div>
          <a class="btn btn-ghost btn-sm" href="template.html?id=${t.id}">View</a>
        </div>
      </div>
    </article>`;
  }

  render();
}

/* ---------- template detail page ---------- */
const detail = document.getElementById('detail');
if (detail && typeof TEMPLATES !== 'undefined') {
  const id = new URLSearchParams(location.search).get('id');
  const t = TEMPLATES.find(x => x.id === id) || TEMPLATES[0];
  document.title = `${t.name} — TECHBRANZZO SERVICES`;

  detail.innerHTML = `
    <div class="crumbs"><a href="index.html">Home</a> / <a href="templates.html">Templates</a> / <a href="templates.html?cat=${encodeURIComponent(t.cat)}">${t.cat}</a> / ${t.name.split('—')[0].trim()}</div>
    <div class="detail-grid">
      <div>
        <div class="preview rv"><div class="tpl-shot">${mockup(t, true)}</div></div>

        <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;margin:28px 0 10px">
          <h1 style="font-size:clamp(1.7rem,3.4vw,2.4rem);flex:1 1 320px">${t.name}</h1>
          <span class="stars" style="font-size:1.05rem">${stars(t.rating)}</span>
          <span style="color:var(--txt-mute);font-size:.9rem">${t.rating} · ${t.sales.toLocaleString()} sales</span>
        </div>
        <p style="font-size:1.05rem">${t.desc}</p>
        <div class="chips" style="margin-top:18px">${t.stack.map(s => `<span class="chip">${s}</span>`).join('')}</div>

        <h2 style="font-size:1.4rem;margin:40px 0 18px">What's included</h2>
        <ul class="feat-list rv">${t.features.map(f => `<li>${f}</li>`).join('')}</ul>

        <h2 style="font-size:1.4rem;margin:40px 0 18px">Rent vs. purchase</h2>
        <div class="table-wrap rv">
          <table>
            <thead><tr><th>What you get</th><th>Rent — ${money(t.rent)}/mo</th><th>Purchase — ${money(t.buy)}</th></tr></thead>
            <tbody>
              <tr><td>Hosted live platform</td><td>Included, managed by us</td><td>Optional add-on</td></tr>
              <tr><td>Full source code</td><td>Not included</td><td>Included, yours forever</td></tr>
              <tr><td>Your branding &amp; domain</td><td>Included</td><td>Included</td></tr>
              <tr><td>Updates &amp; security patches</td><td>Included while renting</td><td>12 months included</td></tr>
              <tr><td>Support</td><td>Priority, while renting</td><td>6 months</td></tr>
              <tr><td>Customisation</td><td>Quoted per request</td><td>Unlimited — it's your code</td></tr>
              <tr><td>Commercial use</td><td>Single live project</td><td>Single project (extended licence for resale)</td></tr>
              <tr><td>Minimum term</td><td>1 month, cancel anytime</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
        <p style="margin-top:14px;font-size:.88rem">Full terms in the <a href="legal.html#licence" style="text-decoration:underline">licence agreement</a>. Licence tiers are on the <a href="pricing.html" style="text-decoration:underline">pricing page</a>.</p>

        <h2 style="font-size:1.4rem;margin:40px 0 18px">Deployment in 4 steps</h2>
        <div class="steps">
          <div class="step rv"><h3>Pick a plan</h3><p>Rent to launch fast, or buy the source outright.</p></div>
          <div class="step rv"><h3>Brand it</h3><p>We apply your logo, palette, copy and domain.</p></div>
          <div class="step rv"><h3>Integrate</h3><p>Payments, SMS, WhatsApp, CRM and analytics wired up.</p></div>
          <div class="step rv"><h3>Go live</h3><p>Deployed to your cloud with monitoring and backups.</p></div>
        </div>
      </div>

      <aside id="buy" style="scroll-margin-top:100px">
        <div class="buy-box">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
            <span class="tpl-cat">${t.cat}</span>
            <span style="font-size:.8rem;color:var(--txt-mute)">Updated ${t.updated}</span>
          </div>

          <label class="plan on" data-plan="rent" data-price="${t.rent}">
            <input type="radio" name="plan" value="rent" checked>
            <span style="flex:1">
              <h4>Rent — hosted</h4>
              <small>We host, maintain and update it. Cancel anytime.</small>
            </span>
            <b>${money(t.rent)}<span style="font-size:.75rem;color:var(--txt-mute)">/mo</span></b>
          </label>

          <label class="plan" data-plan="buy" data-price="${t.buy}">
            <input type="radio" name="plan" value="buy">
            <span style="flex:1">
              <h4>Purchase — source code</h4>
              <small>Full source, single commercial project, 12 months of updates.</small>
            </span>
            <b>${money(t.buy)}</b>
          </label>

          <label class="plan" data-plan="extended" data-price="${t.buy * 3}">
            <input type="radio" name="plan" value="extended">
            <span style="flex:1">
              <h4>Extended licence</h4>
              <small>Resell or charge end users. White-label rights included.</small>
            </span>
            <b>${money(t.buy * 3)}</b>
          </label>

          <a class="btn btn-primary btn-block" style="margin:18px 0 10px" id="checkout" href="contact.html?tpl=${t.id}&plan=rent">Continue — ${money(t.rent)}/mo</a>
          <a class="btn btn-ghost btn-block" href="contact.html?tpl=${t.id}&plan=demo">Book a live walkthrough</a>

          <div style="margin-top:22px">
            <div class="spec"><span>Pages / screens</span><b>${t.pages}</b></div>
            <div class="spec"><span>Last updated</span><b>${t.updated}</b></div>
            <div class="spec"><span>Licence</span><b>${t.license}</b></div>
            <div class="spec"><span>Responsive</span><b>Yes — mobile first</b></div>
            <div class="spec"><span>Documentation</span><b>Included</b></div>
            <div class="spec"><span>Setup by our team</span><b>Free</b></div>
          </div>
        </div>

        <div class="card" style="margin-top:18px">
          <h3 style="font-size:1rem">Need it customised?</h3>
          <p style="font-size:.88rem;margin-top:8px">Every template can be extended with AI agents, new modules, integrations or a full white-label rebuild.</p>
          <a class="btn btn-ghost btn-sm btn-block" style="margin-top:14px" href="contact.html">Get a quote</a>
        </div>
      </aside>
    </div>`;

  const checkout = document.getElementById('checkout');
  detail.querySelectorAll('.plan').forEach(p => {
    p.addEventListener('click', () => {
      detail.querySelectorAll('.plan').forEach(x => x.classList.toggle('on', x === p));
      const price = Number(p.dataset.price);
      const suffix = p.dataset.plan === 'rent' ? '/mo' : '';
      checkout.textContent = `Continue — ${money(price)}${suffix}`;
      checkout.href = `contact.html?tpl=${t.id}&plan=${p.dataset.plan}`;
    });
  });

  const rel = document.getElementById('related');
  if (rel) {
    const others = TEMPLATES.filter(x => x.id !== t.id && x.cat === t.cat)
      .concat(TEMPLATES.filter(x => x.id !== t.id && x.cat !== t.cat))
      .slice(0, 3);
    rel.innerHTML = others.map(o => `
      <a class="tpl rv" href="template.html?id=${o.id}">
        <div class="tpl-shot">${mockup(o)}</div>
        <div class="tpl-body">
          <span class="tpl-cat">${o.cat}</span>
          <h3>${o.name}</h3>
          <div class="tpl-foot"><div class="price"><strong>${money(o.buy)}</strong><span>or ${money(o.rent)}/mo rent</span></div></div>
        </div>
      </a>`).join('');
  }

  observeReveals();
  if (location.hash === '#buy') document.getElementById('buy').scrollIntoView();
}

/* ---------- pricing page billing toggle ---------- */
document.querySelectorAll('[data-billing]').forEach(b => {
  b.addEventListener('click', () => {
    const yearly = b.dataset.billing === 'yearly';
    document.querySelectorAll('[data-billing]').forEach(x => x.classList.toggle('on', x === b));
    document.querySelectorAll('[data-monthly]').forEach(el => {
      const m = Number(el.dataset.monthly);
      el.querySelector('.amt').textContent = (yearly ? Math.round(m * 10) : m).toLocaleString();
      el.querySelector('.per').textContent = yearly ? '/year' : '/month';
    });
    document.querySelectorAll('[data-save]').forEach(el => el.style.display = yearly ? '' : 'none');
  });
});

/* ---------- contact form ---------- */
const form = document.getElementById('contact-form');
if (form) {
  const qs = new URLSearchParams(location.search);
  const tplId = qs.get('tpl');
  if (tplId && typeof TEMPLATES !== 'undefined') {
    const t = TEMPLATES.find(x => x.id === tplId);
    const plan = qs.get('plan') || 'buy';
    if (t) {
      const label = {
        rent: `rent it at ${money(t.rent)}/mo`,
        buy: `purchase the source at ${money(t.buy)}`,
        extended: `take the extended licence at ${money(t.buy * 3)}`,
        demo: 'book a live walkthrough'
      }[plan] || `purchase it at ${money(t.buy)}`;
      form.querySelector('[name=service]').value = 'Templates & Platforms';
      form.querySelector('[name=message]').value = `Hi TECHBRANZZO team,\n\nI'm interested in "${t.name}" and would like to ${label}.\n\nPlease share the next steps.`;
    }
  }
  if (qs.get('service')) {
    const sel = form.querySelector('[name=service]');
    const opt = [...sel.options].find(o => o.text.toLowerCase() === qs.get('service').toLowerCase());
    if (opt) sel.value = opt.value;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (!data.name || !data.email || !data.message) { toast('Please fill in name, email and message.'); return; }
    if (!/^\S+@\S+\.\S+$/.test(data.email)) { toast('That email address does not look right.'); return; }
    if (!CONTACT_EMAIL) {
      toast('Enquiries are not connected yet — set CONTACT_EMAIL in assets/js/main.js.');
      return;
    }
    // ponytail: mailto handoff — no backend to post to. Swap for Formspree/your API when one exists.
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company || '-'}\nEmail: ${data.email}\nPhone: ${data.phone || '-'}\nCountry: ${data.country || '-'}\nService: ${data.service}\nBudget: ${data.budget || '-'}\nTimeline: ${data.timeline || '-'}\n\n${data.message}`
    );
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('New enquiry — ' + data.service)}&body=${body}`;
    toast('Opening your email client — we reply within 12 hours.');
  });
}

/* ---------- counters ---------- */
document.querySelectorAll('[data-count]').forEach(el => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    const start = performance.now(), dur = 1400;
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, { threshold: 0.5 });
  obs.observe(el);
});

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

/* =========================================================
   AI ASSISTANT
   ponytail: keyword-matched knowledge base, no backend, no API key in the client.
   To make it a real LLM agent, POST the message to your own endpoint from send()
   and stream the reply back — everything else here stays as-is.
   ========================================================= */
const BOT = {
  greet: "Hi — I'm the TECHBRANZZO assistant. I can help with services, pricing, our ready-made platforms, or putting you in touch with an engineer.\n\nWhat are you working on?",
  quick: ['What do you build?', 'How much does it cost?', 'Show me templates', 'Payment methods'],
  intents: [
    {
      k: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'namaste'],
      a: "Hello. I can answer questions about our services, pricing, or the ready-made platforms you can rent or buy. Where would you like to start?",
      q: ['What do you build?', 'How much does it cost?', 'Show me templates']
    },
    {
      k: ['what do you', 'service', 'offer', 'capab', 'vertical'],
      a: "We work across 20 verticals — web and mobile development, AI solutions, business automation, SaaS, UI/UX, cloud and DevOps, custom software, APIs, digital marketing, blockchain, cybersecurity, data and analytics, QA, e-commerce, IoT and AR/VR, managed IT, staff augmentation and product development.\n\nThe full breakdown is on the <a href=\"services.html\">services page</a>.",
      q: ['AI solutions', 'How much does it cost?', 'How long does it take?']
    },
    {
      k: ['ai', 'chatbot', 'gpt', 'claude', 'gemini', 'agent', 'llm', 'automation bot', 'whatsapp bot', 'voice', 'assistant', 'machine learning'],
      a: "AI is our biggest practice. We build support chatbots, WhatsApp and voice assistants, RAG knowledge bases over your own documents, AI document processing, email and sales assistants, and full workflow automation — with Claude, GPT or Gemini behind them.\n\nAI projects typically start at $2,500 and go live in 2–4 weeks. There's also a ready-made <a href=\"template.html?id=aidesk-chatbot\">AI support agent platform</a> from $47/month.",
      q: ['Book a call', 'How much does it cost?', 'Show me templates']
    },
    {
      k: ['price', 'cost', 'how much', 'budget', 'rate', 'charge', 'quote', 'pricing'],
      a: "Short version: websites start at $899, mobile apps at $3,900, AI solutions at $2,500, and dedicated engineers from $1,800/month. Ready-made platforms rent from $18/month or sell outright from $119.\n\nEvery tier is broken down on the <a href=\"pricing.html\">pricing page</a>, and a scoped written estimate takes us 72 hours.",
      q: ['Payment methods', 'Rent or buy?', 'Book a call']
    },
    {
      k: ['template', 'ready', 'platform', 'demo', 'preview', 'marketplace', 'script'],
      a: "We have 24 production platforms ready to deploy — forex and trading, crypto exchange, NFT, SaaS starters, hospital management, LMS, real estate, multi-vendor commerce, neobank, logistics, POS, hotel PMS, manufacturing ERP and more.\n\nBrowse them on the <a href=\"templates.html\">template marketplace</a>. Every one has a live preview and free setup by our team.",
      q: ['Rent or buy?', 'Forex trading platform', 'Crypto exchange']
    },
    {
      k: ['rent', 'buy', 'own', 'licence', 'license', 'purchase', 'extended', 'resell'],
      a: "Three options on every platform:\n\n• Rent — $18–58/month, hosted and maintained by us, cancel anytime\n• Purchase — $119–399 one-time, full source code, yours forever\n• Extended — 3× the purchase price, with resale and white-label rights\n\nIf you rent first, everything you pay in the first six months is credited toward buying the source. Details on the <a href=\"templates.html#licences\">licence comparison</a>.",
      q: ['Payment methods', 'Show me templates', 'Book a call']
    },
    {
      k: ['forex', 'trading', 'broker', 'mt4', 'mt5'],
      a: "<a href=\"template.html?id=forex-pro-trading\">ForexPro</a> is our forex brokerage platform — live rate tickers, KYC/AML onboarding, investor and IB dashboards, deposit and withdrawal flows, and MT4/MT5 deep links.\n\n$39/month to rent, or $289 to own the source.",
      q: ['Rent or buy?', 'Book a call', 'Show me templates']
    },
    {
      k: ['crypto', 'exchange', 'wallet', 'blockchain', 'web3', 'nft', 'token', 'smart contract', 'staking'],
      a: "On the Web3 side we build wallets, exchange platforms, tokens, smart contracts, NFT marketplaces and staking systems.\n\nReady to deploy: <a href=\"template.html?id=cryptoexchange-x\">CryptoExchange X</a> (spot + P2P, $49/mo or $349) and <a href=\"template.html?id=nfthub-market\">NFTHub</a> ($38/mo or $279).",
      q: ['Rent or buy?', 'How much does it cost?', 'Book a call']
    },
    {
      k: ['payment', 'pay', 'card', 'visa', 'mastercard', 'paypal', 'stripe', 'bank', 'wire', 'upi', 'invoice', 'installment', 'instal'],
      a: "We accept Visa, Mastercard, Amex, PayPal, Stripe, bank/SWIFT wire transfers, UPI and NEFT/IMPS for India, and USDT/USDC for crypto payments.\n\nProjects are milestone-billed (typically 40/30/30), retainers are billed monthly in advance, and every invoice is issued before payment. Full breakdown on the <a href=\"pricing.html\">pricing page</a>.",
      q: ['How much does it cost?', 'Refund policy', 'Book a call']
    },
    {
      k: ['refund', 'guarantee', 'money back', 'cancel'],
      a: "Rentals cancel anytime and stop at the end of the billing month. Source-code purchases are refundable within 7 days if the platform hasn't been deployed or the code hasn't been delivered. Custom project milestones are refundable up to the point work on that milestone starts.\n\nThe exact wording is in our <a href=\"legal.html#refunds\">refund policy</a>.",
      q: ['Payment methods', 'Book a call']
    },
    {
      k: ['how long', 'timeline', 'time', 'deadline', 'fast', 'when can', 'delivery', 'weeks'],
      a: "Typical timelines:\n\n• Template deployment — 3 to 7 days\n• Website — 2 to 4 weeks\n• Mobile app — 6 to 10 weeks\n• AI agent or automation — 2 to 4 weeks\n• Custom platform — 3 to 6 weeks\n\nYou get a written estimate with a firm date within 72 hours of sending a brief.",
      q: ['Book a call', 'How much does it cost?']
    },
    {
      k: ['hire', 'developer', 'team', 'outsourc', 'dedicated', 'staff', 'augment', 'engineer', 'resource'],
      a: "You can hire dedicated engineers monthly with no recruitment fee: full-stack from $2,400, AI engineers from $3,200, DevOps from $2,900, QA from $1,800, designers from $2,100 and project managers from $2,600.\n\nThey work in your stack and your time zone, you own all the code, and any team member can be replaced within five working days.",
      q: ['Book a call', 'How much does it cost?']
    },
    {
      k: ['contact', 'call', 'talk', 'human', 'sales', 'email', 'phone', 'whatsapp', 'meeting', 'book'],
      a: "Happy to connect you. Send a brief through the <a href=\"contact.html#form\">contact form</a> — an engineer replies within 12 business hours, and you'll have a scoped written estimate inside 72 hours.\n\nTell us the outcome you need and any deadline, and we'll come back with scope, team and cost.",
      q: ['How much does it cost?', 'What do you build?']
    },
    {
      k: ['support', 'maintenance', 'sla', 'uptime', 'monitor', 'after launch'],
      a: "Every delivery includes a support window — 6 months on purchases, and ongoing priority support for as long as you rent or hold a retainer.\n\nManaged retainers add 24/7 monitoring, backups, security patching and a 99.98% uptime SLA, starting at $299/month.",
      q: ['How much does it cost?', 'Book a call']
    },
    {
      k: ['custom', 'bespoke', 'from scratch', 'my idea', 'build for me', 'mvp', 'startup'],
      a: "That's most of what we do. Send us the outcome you need — not a spec — and we'll come back with scope, team, timeline and cost in 72 hours.\n\nMVPs usually run 4 to 8 weeks. If an existing template gets you 80% of the way there, we'll tell you that instead of quoting a full build.",
      q: ['Show me templates', 'Book a call', 'How much does it cost?']
    },
    {
      k: ['industr', 'sector', 'healthcare', 'fintech', 'education', 'real estate', 'logistics', 'insurance', 'hospital', 'hotel', 'restaurant'],
      a: "We've shipped in 18 sectors — FinTech, healthcare, education, real estate, e-commerce, logistics, manufacturing, hospitality, legal, government, insurance, travel, media, automotive and construction, for startups through to enterprises.\n\nRegulated sectors get audit logging, role-based access and data-residency options as standard.",
      q: ['Show me templates', 'Book a call']
    },
    {
      k: ['who are you', 'about', 'company', 'where are you', 'location', 'country'],
      a: "TECHBRANZZO SERVICES is a global technology company delivering end-to-end digital transformation — AI, custom software, web and mobile, cloud, automation, SaaS, DevOps, cybersecurity, blockchain and IT outsourcing.\n\n480+ projects across 20+ countries, with overlapping hours for the Americas, Europe, the Middle East and APAC. More on the <a href=\"about.html\">about page</a>.",
      q: ['What do you build?', 'Book a call']
    },
    {
      k: ['seo', 'marketing', 'ads', 'google ads', 'social media', 'traffic', 'rank'],
      a: "Our digital marketing team covers SEO, Google/Meta/LinkedIn ads, email and content marketing, social media management and conversion optimisation. Retainers start at $499/month.\n\nIt pairs well with a build — we tune Core Web Vitals and schema markup during development, not after.",
      q: ['How much does it cost?', 'Book a call']
    },
    {
      k: ['security', 'pentest', 'penetration', 'audit', 'vulnerab', 'hack', 'compliance', 'gdpr', 'firewall'],
      a: "We run security audits, penetration testing, vulnerability assessments, firewall configuration and continuous monitoring. A standard application pentest with a written report starts at $1,200.\n\nEvery platform we ship goes through dependency scanning and OWASP checks before release.",
      q: ['How much does it cost?', 'Book a call']
    },
    {
      k: ['thank', 'thanks', 'cheers', 'ok', 'great', 'cool', 'nice'],
      a: "Glad to help. Anything else you'd like to know — pricing, timelines, or a specific platform?",
      q: ['How much does it cost?', 'Show me templates', 'Book a call']
    }
  ],
  fallback: {
    a: "I don't have a canned answer for that one, but an engineer will. Send it through the <a href=\"contact.html#form\">contact form</a> and you'll get a reply within 12 business hours.\n\nIn the meantime I can help with services, pricing, timelines or our ready-made platforms.",
    q: ['What do you build?', 'How much does it cost?', 'Show me templates', 'Book a call']
  }
};

(function chatbot() {
  const el = document.createElement('div');
  el.innerHTML = `
    <button class="bot-launch" id="bot-launch" aria-label="Open the AI assistant">
      <i>AI</i> Ask us anything <span class="pip"></span>
    </button>
    <aside class="bot" id="bot" role="dialog" aria-label="TECHBRANZZO AI assistant">
      <div class="bot-head">
        <div class="bot-avatar">TB</div>
        <div>
          <b>TECHBRANZZO Assistant</b>
          <span>Online — replies instantly</span>
        </div>
        <button class="bot-close" id="bot-close" aria-label="Close assistant">✕</button>
      </div>
      <div class="bot-log" id="bot-log"></div>
      <div class="bot-quick" id="bot-quick"></div>
      <form class="bot-input" id="bot-form">
        <input id="bot-text" type="text" placeholder="Ask about services, pricing or templates…" autocomplete="off" aria-label="Your message">
        <button type="submit" aria-label="Send">→</button>
      </form>
      <div class="bot-foot">Automated assistant · for anything it can't answer, <a href="contact.html#form" style="text-decoration:underline">talk to an engineer</a></div>
    </aside>`;
  document.body.appendChild(el);

  const launch = document.getElementById('bot-launch');
  const panel = document.getElementById('bot');
  const log = document.getElementById('bot-log');
  const quick = document.getElementById('bot-quick');
  const input = document.getElementById('bot-text');
  let started = false;

  const scroll = () => log.scrollTop = log.scrollHeight;

  function say(html, who = 'bot') {
    const m = document.createElement('div');
    m.className = 'msg msg-' + who; // msg-bot / msg-me — not ".bot", which is the panel itself
    m.innerHTML = html;
    log.appendChild(m);
    scroll();
  }

  function setQuick(list) {
    quick.innerHTML = '';
    (list || []).forEach(q => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = q;
      b.addEventListener('click', () => send(q));
      quick.appendChild(b);
    });
  }

  /* Score every intent by how much of it the question actually matched, rather than
     taking the first keyword hit — otherwise "how much for a forex platform" lands on
     generic pricing instead of forex. Word-start matching keeps "ai" out of "email". */
  function reply(text) {
    const q = text.toLowerCase();
    let best = null, bestScore = 0;
    for (const intent of BOT.intents) {
      const score = intent.k.reduce((sum, k) => {
        const re = new RegExp('\\b' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        return re.test(q) ? sum + k.length : sum;
      }, 0);
      if (score > bestScore) { bestScore = score; best = intent; }
    }
    return best || BOT.fallback;
  }
  window.botMatch = reply; // exposed for test-bot.html

  function send(text) {
    text = (text || '').trim();
    if (!text) return;
    say(text, 'me');
    input.value = '';
    setQuick([]);

    const dots = document.createElement('div');
    dots.className = 'typing';
    dots.innerHTML = '<i></i><i></i><i></i>';
    log.appendChild(dots);
    scroll();

    setTimeout(() => {
      dots.remove();
      const r = reply(text);
      say(r.a);
      setQuick(r.q || BOT.quick);
    }, 420 + Math.random() * 380);
  }

  function open() {
    panel.classList.add('open');
    launch.classList.add('hide');
    if (!started) {
      started = true;
      say(BOT.greet);
      setQuick(BOT.quick);
    }
    setTimeout(() => input.focus(), 260);
  }
  function close() {
    panel.classList.remove('open');
    launch.classList.remove('hide');
  }

  launch.addEventListener('click', open);
  document.getElementById('bot-close').addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape' && panel.classList.contains('open')) close(); });
  document.getElementById('bot-form').addEventListener('submit', e => { e.preventDefault(); send(input.value); });

  /* any element with data-ask opens the assistant with that question */
  document.querySelectorAll('[data-ask]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    open();
    setTimeout(() => send(b.dataset.ask), 300);
  }));
})();
