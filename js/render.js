// ════════════════════════════════════════
// js/render.js
// Reads all data/*.js objects and injects them into the DOM.
// You should not need to edit this file unless you want to
// change the visual structure of a section.
// ════════════════════════════════════════

'use strict';

/* ── NAV ── */
function renderNav() {
  const nav = document.getElementById('site-nav');
  nav.innerHTML = `
    <div class="nav-logo"><span>~/</span>${PERSONAL.handle}</div>
    <ul class="nav-links">
      <li><a href="#about">about</a></li>
      <li><a href="#skills">skills</a></li>
      <li><a href="#projects">projects</a></li>
      <li><a href="#experience">experience</a></li>
      <li><a href="#contact">contact</a></li>
    </ul>
    <div class="nav-status"><div class="dot"></div>${PERSONAL.statusText}</div>
  `;
}

/* ── HERO ── */
function renderHero() {
  const el = document.getElementById('section-hero');
  const ctaHTML = PERSONAL.ctas.map(c =>
    `<a href="${c.href}" class="btn ${c.style}">${c.label}</a>`
  ).join('');

  el.innerHTML = `
    <section id="hero">
      <div class="wrap">
        <div class="rev">
          <div class="term-shell" id="term-shell">
            <div class="term-bar">
              <div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div>
              <span class="term-title" id="tbar-title">Terminal</span>
            </div>
            <div id="tout"></div>
            <div id="thint"></div>
            <div id="tinrow">
              <span class="tp tp-user" id="p-user">${PERSONAL.username}</span>
              <span class="tp tp-sep">:</span>
              <span class="tp tp-path" id="p-path">~/portfolio</span>
              <span class="tp tp-sep">&nbsp;$&nbsp;</span>
              <input id="tin" type="text"
                inputmode="text"
                autocomplete="off" autocorrect="off"
                autocapitalize="off" spellcheck="false"
                placeholder="type 'help'…">
            </div>
            <div class="tap-hint" id="tap-hint" onclick="document.getElementById('tin').focus()">
              ↑ tap to type a command
            </div>
          </div>

          <h1 class="hero-name">${PERSONAL.heroLine1}<em>${PERSONAL.heroLine2}</em></h1>
          <p class="hero-tag">
            <span>${PERSONAL.heroTagline}</span> — ${PERSONAL.heroDesc.replace(/\n/g, '<br>')}
          </p>
          <div class="ctas">${ctaHTML}</div>
        </div>
      </div>
    </section>
  `;
}

/* ── ABOUT ── */
function renderAbout() {
  const el = document.getElementById('section-about');
  const statsHTML = ABOUT.stats.map(s => `
    <div class="stat">
      <span class="sk">${s.key}</span>
      <span class="sv">${s.value}</span>
    </div>
  `).join('');

  el.innerHTML = `
    <section id="about">
      <div class="wrap">
        <div class="sec-lbl rev">whoami</div>
        <div class="about-grid">
          <div class="about-card rev">
            <div class="card-hd">about.md</div>
            <div class="card-body">${ABOUT.bio}</div>
          </div>
          <div class="about-card rev" style="transition-delay:.1s">
            <div class="card-hd">stats.json</div>
            <div class="stats">${statsHTML}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── SKILLS ── */
function renderSkills() {
  const el = document.getElementById('section-skills');

  const groupsHTML = SKILLS.groups.map((g, i) => {
    const delay = (i * 0.04).toFixed(2);
    const pillsHTML = g.pills.map(p => `<span class="pill">${p}</span>`).join('');
    return `
      <div class="sg rev" style="transition-delay:${delay}s">
        <div class="sg-ttl">${g.title}</div>
        <div>${pillsHTML}</div>
      </div>
    `;
  }).join('');

  el.innerHTML = `
    <section id="skills">
      <div class="wrap">
        <div class="sec-lbl rev">tech_stack</div>
        <div class="skills-grid">
          ${groupsHTML}
        </div>
      </div>
    </section>
  `;
}

/* ── PROJECTS ── */
function renderProjects() {
  const el = document.getElementById('section-projects');

  const cardsHTML = PROJECTS.map((p, i) => {
    const tagsHTML    = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const metricsHTML = p.metrics.map(m => `
      <div class="pm"><span class="pm-v">${m.value}</span><span class="pm-l">${m.label}</span></div>
    `).join('');
    const linksHTML = p.links.map(l => `<a href="${l.href}" class="plink">${l.label}</a>`).join('');
    const mt = i === 0 ? '' : ' style="margin-top:2px"';

    return `
      <div class="proj-card"${mt} onclick="this.classList.toggle('open')">
        <div class="proj-hd">
          <div class="proj-hd-l">
            <span class="proj-idx">${String(i + 1).padStart(2, '0')}</span>
            <span class="proj-name">${p.title}</span>
            <div class="proj-tags">${tagsHTML}</div>
          </div>
          <span class="proj-arr">▶</span>
        </div>
        <div class="proj-body">
          <div class="proj-section">
            <div class="proj-sec-lbl">problem</div>
            <p class="proj-sec-txt">${p.problem}</p>
          </div>
          <div class="proj-section">
            <div class="proj-sec-lbl">built</div>
            <p class="proj-sec-txt">${p.built}</p>
          </div>
          <div class="proj-section">
            <div class="proj-sec-lbl">impact</div>
            <div class="proj-metrics">${metricsHTML}</div>
          </div>
          <div class="proj-section">
            <div class="proj-sec-lbl">challenge</div>
            <p class="proj-sec-txt">${p.challenge}</p>
          </div>
          <div class="proj-links">${linksHTML}</div>
        </div>
      </div>
    `;
  }).join('');

  el.innerHTML = `
    <section id="projects">
      <div class="wrap">
        <div class="sec-lbl rev">projects</div>
        <div class="proj-list rev">${cardsHTML}</div>
      </div>
    </section>
  `;
}

/* ── EXPERIENCE ── */
function renderExperience() {
  const el = document.getElementById('section-experience');

  const itemsHTML = EXPERIENCE.map(e => {
    const ptsHTML = e.points.map(pt => `<li>${pt}</li>`).join('');
    return `
      <div class="exp-item">
        <div class="exp-date">${e.period}</div>
        <div class="exp-role">${e.role}</div>
        <div class="exp-co">${e.company}</div>
        <ul class="exp-pts">${ptsHTML}</ul>
      </div>
    `;
  }).join('');

  el.innerHTML = `
    <section id="experience">
      <div class="wrap">
        <div class="sec-lbl rev">git log --experience</div>
        <div class="exp-list rev">${itemsHTML}</div>
      </div>
    </section>
  `;
}

/* ── CONTACT ── */
function renderContact() {
  const el = document.getElementById('section-contact');

  // Contact links are defined inline here — edit them directly
  const links = [
    { icon: '✉', label: 'alex@example.com',        href: 'mailto:alex@example.com' },
    { icon: '⌥', label: 'github.com/alexrowe',      href: '#' },
    { icon: '◈', label: 'linkedin.com/in/alexrowe', href: '#' },
    { icon: '↓', label: 'Resume (.pdf)',             href: '#' },
  ];

  const linksHTML = links.map(l => `
    <a href="${l.href}" class="clink">
      <div class="clink-l"><span class="clink-ico">${l.icon}</span><span>${l.label}</span></div>
      <span class="clink-arr">→</span>
    </a>
  `).join('');

  el.innerHTML = `
    <section id="contact">
      <div class="wrap">
        <div class="sec-lbl rev">contact</div>
        <div class="contact-block rev">
          <div>
            <div class="contact-hd">Let's build<em>something great.</em></div>
            <p class="contact-sub">
              Open to senior backend, staff engineer, and founding engineer roles.
              Working on an interesting technical problem? Let's talk.<br><br>
              <span style="color:var(--green)">Response time:</span> usually within 24h.
            </p>
          </div>
          <div class="clinks">${linksHTML}</div>
        </div>
      </div>
    </section>
  `;
}

/* ── FOOTER ── */
function renderFooter() {
  const el = document.getElementById('site-footer');
  el.innerHTML = `
    <span>${PERSONAL.handle}</span> — ${PERSONAL.footerTagline}
    <div>${PERSONAL.footerRight}</div>
  `;
}

/* ── Run all renderers ── */
renderNav();
renderHero();
renderAbout();
renderSkills();
renderProjects();
renderExperience();
renderContact();
renderFooter();
