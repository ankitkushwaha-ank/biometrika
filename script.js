
  /* ——— helpers ——————————————————————————————————————————————— */
  function openModal(id) {
    const m = document.getElementById(id);
    if (m) { m.classList.add('open'); }
  }

  function closeModal(id) {
    const m = document.getElementById(id);
    if (m) { m.classList.remove('open'); }
  }

  window.openModal = openModal;
  window.closeModal = closeModal;

  /* Close on overlay click */
  document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  /* Close button inside modals */
  document.querySelectorAll('[data-close]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      closeModal(btn.dataset.close);
    });
  });

  /* Close modals on Escape */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(function(m) {
        m.classList.remove('open');
      });
    }
  });

  /* ——— Protect Website buttons ——————————————————————————————— */
  ['btn-protect-hero', 'btn-protect-cta', 'nav-protect', 'mobile-protect'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', function(e) {
      e.preventDefault();
      openModal('modal-protect');
    });
  });

  /* ——— Sign In button (direct navigation to welcome.html) ———— */
  ['btn-signin-header', 'mobile-signin'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el && el.tagName === 'BUTTON') {
      el.addEventListener('click', function() {
        window.location.href = 'welcome.html';
      });
    }
  });

  /* ——— Try It Live — animate trajectory path ————————————————— */
  var trajPath = document.getElementById('traj-path');
  var trajBtn  = document.getElementById('btn-try-live');
  var trajAnimated = false;

  if (trajBtn && trajPath) trajBtn.addEventListener('click', function() {
    if (!trajAnimated) {
      trajPath.classList.add('animate');
      trajAnimated = true;

      /* Animate cursor glow */
      var cursor = document.getElementById('traj-cursor');
      cursor.style.transition = 'opacity 0.4s';
      cursor.style.opacity = '0';
      setTimeout(function() {
        cursor.style.opacity = '1';
      }, 1400);

      /* Reset after 3s so it can be replayed */
      setTimeout(function() {
        trajPath.classList.remove('animate');
        trajAnimated = false;
      }, 3200);
    }
  });

  /* ——— See How It Works — smooth scroll ———————————————————— */
  var seeHowBtn = document.getElementById('btn-see-how');
  if (seeHowBtn) seeHowBtn.addEventListener('click', function() {
    document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* ——— Mobile hamburger menu ————————————————————————————————— */
  var hamburger   = document.getElementById('hamburger-btn');
  var mobileMenu  = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) hamburger.addEventListener('click', function() {
    var isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  /* Close mobile menu when a link inside is clicked */
  if (mobileMenu && hamburger) mobileMenu.querySelectorAll('a, button').forEach(function(el) {
    el.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ——— Animate trajectory on section enter (IntersectionObserver) — */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !trajAnimated) {
          setTimeout(function() {
            trajPath.classList.add('animate');
            trajAnimated = true;
          }, 400);
        }
      });
    }, { threshold: 0.4 });
    var demoSvg = document.getElementById('demo-svg');
    if (demoSvg && trajPath) observer.observe(demoSvg);
  }


// Typing animation for hero text
document.addEventListener('DOMContentLoaded', () => {
  const words = ['human', 'safe', 'secure'];
  let wordIndex = 0;
  let isDeleting = false;
  let text = '';
  let typingSpeed = 150;
  
  const typingElement = document.getElementById('typing-text');
  
  function type() {
    if (!typingElement) return;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      text = currentWord.substring(0, text.length - 1);
      typingSpeed = 100;
    } else {
      text = currentWord.substring(0, text.length + 1);
      typingSpeed = 150;
    }
    
    typingElement.textContent = text;
    
    if (!isDeleting && text === currentWord) {
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && text === '') {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // Pause before next word
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Start typing animation after 500ms
  setTimeout(type, 500);
  
  // Add animation classes to other elements
  const heroContent = document.querySelector('.hero-left');
  if (heroContent) {
    const children = heroContent.children;
    Array.from(children).forEach((child, index) => {
      if (!child.querySelector('#typing-text')) {
        child.classList.add('animate-on-load', `animate-delay-${index + 1}`);
      }
    });
  }
  
  // Animate cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-load');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Observe cards
  document.querySelectorAll('.card, .stat-card, .demo-card-container, .threat-item').forEach(card => {
    observer.observe(card);
  });

  // ——— INTERACTIVE CURSOR TRACKING IN VERIFICATION SECTION ———
  const demoCanvas = document.querySelector('.demo-canvas-box');
  const demoSvg = document.getElementById('demo-svg');
  const trajPath = document.getElementById('traj-path');
  const trajCursor = document.getElementById('traj-cursor');
  
  if (demoCanvas && demoSvg && trajPath && trajCursor) {
    let isTracking = false;
    let pathData = 'M ';
    let points = [];
    const maxPoints = 50; // Limit number of points for smooth path
    
    demoCanvas.addEventListener('mouseenter', () => {
      isTracking = true;
      points = [];
      pathData = 'M ';
    });
    
    demoCanvas.addEventListener('mouseleave', () => {
      isTracking = false;
      // Reset to default after a short delay
      setTimeout(() => {
        if (!isTracking) {
          resetToDefaultPath();
        }
      }, 1000);
    });
    
    demoCanvas.addEventListener('mousemove', (e) => {
      if (!isTracking) return;
      
      const rect = demoCanvas.getBoundingClientRect();
      const svgRect = demoSvg.getBoundingClientRect();
      
      // Convert mouse position to SVG coordinates
      const x = ((e.clientX - svgRect.left) / svgRect.width) * 320;
      const y = ((e.clientY - svgRect.top) / svgRect.height) * 180;
      
      // Add point to array
      points.push({ x, y });
      
      // Keep only recent points
      if (points.length > maxPoints) {
        points.shift();
      }
      
      // Build smooth curve path
      if (points.length >= 2) {
        pathData = `M ${points[0].x} ${points[0].y}`;
        
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          pathData += ` Q ${points[i].x} ${points[i].y}, ${xc} ${yc}`;
        }
        
        // Add last point
        const last = points[points.length - 1];
        pathData += ` L ${last.x} ${last.y}`;
        
        trajPath.setAttribute('d', pathData);
        
        // Move cursor to follow mouse
        trajCursor.setAttribute('transform', `translate(${x - 275}, ${y - 38})`);
      }
    });
    
    function resetToDefaultPath() {
      const defaultPath = 'M 45 135 C 75 90, 110 65, 145 75 C 180 85, 205 120, 240 70 C 255 50, 265 42, 275 38';
      trajPath.setAttribute('d', defaultPath);
      trajCursor.setAttribute('transform', 'translate(0, 0)');
      points = [];
    }
  }
  
  // Make feature pills interactive
  const featurePills = document.querySelectorAll('.feature-pill-card');
  featurePills.forEach(pill => {
    pill.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(4px) scale(1.02)';
    });
    pill.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0) scale(1)';
    });
  });
});
