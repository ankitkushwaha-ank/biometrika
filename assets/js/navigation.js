// Global navigation and utilities
function createHeader() {
  return `
    <header>
      <div class="header-inner container">
        <a href="/index.html" class="logo">
          <img src="/assets/images/logo-fingerprint.png" alt="Biometrika-Core">
          <span>Biometrika-<span class="core">Core</span></span>
        </a>
        <nav>
          <a href="/pages/how-it-works.html">How It Works</a>
          <a href="/pages/playground.html">Playground</a>
          <a href="/pages/protection.html">Protection</a>
          <a href="/pages/pricing.html">Pricing</a>
          <a href="/pages/developers.html">Developers</a>
          <a href="/pages/docs.html">Docs</a>
          <a href="/auth/login.html">Sign In</a>
          <button class="btn-red" onclick="location.href='/auth/register.html'">Get Started</button>
        </nav>
      </div>
    </header>
  `;
}

function createFooter() {
  return `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Product</h4>
            <a href="/pages/how-it-works.html">How It Works</a>
            <a href="/pages/playground.html">Playground</a>
            <a href="/pages/protection.html">Protection</a>
            <a href="/pages/pricing.html">Pricing</a>
          </div>
          <div class="footer-section">
            <h4>Developers</h4>
            <a href="/pages/developers.html">Overview</a>
            <a href="/pages/docs.html">Documentation</a>
            <a href="/dashboard/api-keys.html">API Keys</a>
          </div>
          <div class="footer-section">
            <h4>Company</h4>
            <a href="/pages/about.html">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          <div class="footer-section">
            <h4>Biometrika-Core</h4>
            <p style="max-width:250px;font-size:0.9rem;">Human-first security for the modern internet.</p>
          </div>
        </div>
      </div>
    </footer>
  `;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}

function initPage() {
  const headerEl = document.querySelector('[data-header]');
  const footerEl = document.querySelector('[data-footer]');
  if (headerEl) headerEl.outerHTML = createHeader();
  if (footerEl) footerEl.outerHTML = createFooter();
}
