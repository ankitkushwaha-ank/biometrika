// Load header and footer includes
async function loadIncludes() {
  try {
    // Determine path depth based on current location
    const path = window.location.pathname;
    let basePath = '';
    
    if (path.includes('/pages/')) {
      basePath = '../';
    } else if (path.includes('/auth/')) {
      basePath = '../';
    } else if (path.includes('/dashboard/')) {
      basePath = '../';
    }
    
    // Load header
    const headerResponse = await fetch(basePath + 'includes/header.html');
    const headerHTML = await headerResponse.text();
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = headerHTML;
      initMobileMenu();
    }
    
    // Load footer
    const footerResponse = await fetch(basePath + 'includes/footer.html');
    const footerHTML = await footerResponse.text();
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = footerHTML;
    }
  } catch (error) {
    console.error('Error loading includes:', error);
  }
}

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadIncludes);
} else {
  loadIncludes();
}
