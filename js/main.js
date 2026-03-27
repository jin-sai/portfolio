// ════════════════════════════════════════
// js/main.js
// Page-level behaviour: custom cursor, scroll reveal,
// smooth scroll. You should not need to edit this file.
// ════════════════════════════════════════

'use strict';

const isTouch = () => window.matchMedia('(hover:none),(pointer:coarse)').matches;

// ── Custom cursor (desktop only) ──
(function initCursor() {
  const cur  = document.getElementById('cur');
  const curT = document.getElementById('cur-t');
  if (isTouch()) return;

  cur.style.display  = 'block';
  curT.style.display = 'block';
  document.body.style.cursor = 'none';

  document.addEventListener('mousemove', e => {
    cur.style.left  = e.clientX + 'px';
    cur.style.top   = e.clientY + 'px';
    curT.style.left = e.clientX + 'px';
    curT.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, .proj-card, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.transform  = 'translate(-50%,-50%) scale(2)';
      curT.style.borderColor = 'rgba(0,255,136,.6)';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.transform  = 'translate(-50%,-50%) scale(1)';
      curT.style.borderColor = 'rgba(0,255,136,.3)';
    });
  });

  // Suppress system cursor on interactive elements
  const s = document.createElement('style');
  s.textContent = 'a,button,.proj-card,.btn{cursor:none!important;}';
  document.head.appendChild(s);
})();

// ── Scroll reveal ──
(function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('.rev').forEach(el => obs.observe(el));
})();

// ── Smooth scroll for nav links ──
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
})();

// ── Auto-focus input on desktop ──
if (!isTouch()) {
  window.addEventListener('load', () => {
    const tin = document.getElementById('tin');
    if (tin) tin.focus();
  });
}
