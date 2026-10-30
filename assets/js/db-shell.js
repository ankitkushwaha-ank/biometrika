/* ─────────────────────────────────────────────────────
   BIOMETRIKA-CORE · Dashboard shell renderer
   Usage: call renderShell('nav-id') at end of <body>
   e.g.  renderShell('nav-websites')
───────────────────────────────────────────────────── */
function renderShell(activeId) {
  const nav = [
    { id:'nav-home',      href:'index.html',             icon:'home',       label:'Home' },
    { id:'nav-websites',  href:'websites.html',           icon:'globe',      label:'My Websites' },
    { id:'nav-analytics', href:'analytics.html',          icon:'bar-chart',  label:'Analytics' },
    { id:'nav-threats',   href:'threats.html',            icon:'shield',     label:'Protection' },
    { id:'nav-apikeys',   href:'api-keys.html',           icon:'key',        label:'API Keys' },
    { id:'nav-usage',     href:'usage.html',              icon:'pie-chart',  label:'Usage' },
    { id:'nav-docs',      href:'../pages/docs.html',      icon:'file-text',  label:'Docs' },
    { id:'nav-account',   href:'account.html',            icon:'user',       label:'Account' },
  ];

  const icons = {
    home:       '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    globe:      '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    'bar-chart':'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    shield:     '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    key:        '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
    'pie-chart':'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
    'file-text':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    user:       '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  };

  const navHTML = nav.map(n => `
    <a href="${n.href}" class="sb-link${n.id === activeId ? ' active' : ''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">${icons[n.icon]}</svg>
      ${n.label}
    </a>`).join('');

  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="sb-logo">
        <img src="../assets/images/logo-fingerprint.png" alt="Logo">
        <div class="sb-logo-text">Biometrika-<span>Core</span></div>
      </div>
      <nav class="sb-nav">${navHTML}</nav>
      <div class="sb-bottom">
        <div class="sb-plan-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span class="sb-plan-name">Free Plan</span>
        </div>
        <div class="sb-usage-lbl">2 / 3 websites</div>
        <div class="sb-bar"><div class="sb-bar-fill"></div></div>
        <button class="btn-upgrade" onclick="location.href='../pages/pricing.html'">Upgrade Plan →</button>
      </div>`;
  }

  // Inject topbar search + avatar
  const topbar = document.getElementById('topbar');
  if (topbar) {
    const existing = topbar.innerHTML;
    if (!topbar.querySelector('.search-box')) {
      topbar.insertAdjacentHTML('beforeend', `
        <div class="topbar-right">
          <div class="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Search...">
            <span class="search-kbd">Ctrl K</span>
          </div>
          <div class="topbar-avatar">A</div>
        </div>`);
    }
  }

  // Mobile hamburger
  if (window.innerWidth <= 900) {
    const sb = document.getElementById('sidebar');
    const btn = document.createElement('button');
    btn.setAttribute('aria-label','Open menu');
    btn.style.cssText = 'position:fixed;top:.9rem;left:.9rem;z-index:100;background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:.45rem;display:flex;align-items:center;justify-content:center;';
    btn.innerHTML = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    btn.onclick = () => { sb.classList.toggle('open'); };
    document.body.appendChild(btn);
    // Close on outside click
    document.addEventListener('click', e => {
      if (!sb.contains(e.target) && e.target !== btn) sb.classList.remove('open');
    });
  }
}
