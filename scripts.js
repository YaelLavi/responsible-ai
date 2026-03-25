/**
 * Responsible AI — Global Scripts
 * Handles: reading progress bar, cursor dot, page transitions, scroll reveal
 */

(function() {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  /* ─────────────────────────────────────
     READING PROGRESS BAR
  ───────────────────────────────────── */
  const progressBar = document.createElement('div');
  progressBar.id = 'reading-progress';
  progressBar.setAttribute('role', 'progressbar');
  progressBar.setAttribute('aria-label', 'Reading progress');
  progressBar.setAttribute('aria-valuemin', '0');
  progressBar.setAttribute('aria-valuemax', '100');
  progressBar.setAttribute('aria-valuenow', '0');

  const style = document.createElement('style');
  style.textContent = `
    #reading-progress {
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, var(--color-secondary, #6B9E5E), var(--color-accent, #C4623A));
      z-index: 9999;
      transition: width 0.1s linear;
      pointer-events: none;
    }

    /* ── Custom cursor ── */
    #cursor-dot {
      position: fixed;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-secondary, #6B9E5E);
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: transform 0.15s ease, opacity 0.3s ease, background 0.2s ease;
      opacity: 0;
    }
    #cursor-ring {
      position: fixed;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1.5px solid rgba(107, 158, 94, 0.4);
      pointer-events: none;
      z-index: 9997;
      transform: translate(-50%, -50%);
      transition: transform 0.35s ease, opacity 0.3s ease, width 0.2s ease, height 0.2s ease, border-color 0.2s ease;
      opacity: 0;
    }
    body:hover #cursor-dot,
    body:hover #cursor-ring { opacity: 1; }

    /* ── Page fade-out ── */
    body.page-leaving {
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    /* ── Enhanced scroll reveal ── */
    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
    @media (prefers-reduced-motion: reduce) {
      .reveal { transform: none; transition: opacity 0.3s ease; }
      #reading-progress { transition: none; }
      #cursor-dot, #cursor-ring { display: none; }
      body.page-leaving { transition: none; }
    }
  `;
  document.head.appendChild(style);
  document.body.insertAdjacentElement('afterbegin', progressBar);

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    progressBar.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', pct);
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ─────────────────────────────────────
     CUSTOM CURSOR DOT (desktop only)
  ───────────────────────────────────── */
  if (!isTouchDevice && !prefersReducedMotion) {
    const dot  = document.createElement('div');
    dot.id = 'cursor-dot';
    const ring = document.createElement('div');
    ring.id = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
    });

    // Ring follows with lag
    function animateRing() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Expand ring on hoverable elements
    document.addEventListener('mouseover', e => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .habit-item, .checklist-item, .pillar-card, .reg-card');
      if (target) {
        ring.style.width  = '48px';
        ring.style.height = '48px';
        ring.style.borderColor = 'rgba(107, 158, 94, 0.7)';
        dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
      } else {
        ring.style.width  = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'rgba(107, 158, 94, 0.4)';
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    });
  }

  /* ─────────────────────────────────────
     SMOOTH PAGE TRANSITIONS
  ───────────────────────────────────── */
  if (!prefersReducedMotion) {
    document.addEventListener('click', e => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      // Only internal .html links
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('javascript')) return;
      e.preventDefault();
      document.body.classList.add('page-leaving');
      setTimeout(() => { window.location.href = href; }, 300);
    });
  }

  /* ─────────────────────────────────────
     HAMBURGER MENU (shared)
  ───────────────────────────────────── */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
  }

  /* ─────────────────────────────────────
     SCROLL REVEAL (enhanced)
  ───────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

})();
