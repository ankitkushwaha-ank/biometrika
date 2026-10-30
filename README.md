# Biometrika-Core

> **Human-First Cybersecurity** — Stop AI agents, bots, and scrapers before they reach your site using natural human behavioral signals.

Live demo: [biometrika.vercel.app](https://biometrika.vercel.app) *(deploy URL — update after Vercel deploy)*

---

## What is Biometrika-Core?

Biometrika-Core is a premium cybersecurity platform that uses **behavioral biometrics** to distinguish real humans from bots and AI agents in real time. Unlike traditional CAPTCHAs that frustrate users, Biometrika-Core analyzes natural interaction patterns — mouse movement, typing rhythm, touch dynamics — invisibly in the background.

---

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/index.html` | Landing page with hero, verification demo, how it works |
| Playground | `/pages/playground.html` | Interactive human verification demo with 6 challenges |
| How It Works | `/pages/how-it-works.html` | Detailed explanation of the technology |
| Protection | `/pages/protection.html` | Threat coverage — AI agents, scrapers, bots |
| Pricing | `/pages/pricing.html` | Free / Pro / Enterprise plans |
| Developers | `/pages/developers.html` | API integration guide |
| Docs | `/pages/docs.html` | Full documentation |
| About | `/pages/about.html` | Mission, technology, team |
| Contact | `/pages/contact.html` | Contact form |
| Privacy Policy | `/pages/privacy.html` | Data handling policy |
| Terms of Service | `/pages/terms.html` | Usage terms |
| Security | `/pages/security.html` | Security practices |
| Login | `/auth/login.html` | Sign-in page |
| Register | `/auth/register.html` | Sign-up page |
| Dashboard | `/dashboard/index.html` | User dashboard |

---

## Playground Challenges

The interactive verification playground (`/pages/playground.html`) demonstrates 6 real human-verification methods:

1. **Click to Verify** — Behavioral click pattern with animated spinner
2. **Rotate Image** — Spatial orientation recognition
3. **Slider Puzzle** — Hand-eye coordination via drag
4. **Image Ordering** — Temporal sequence reasoning (drag & drop)
5. **Draw Shape** — Fine motor skill analysis via canvas
6. **Hold to Verify** — Sustained interaction with SVG progress ring

All challenges use randomised assets from `assets/playground/biometrica_captcha_assets/` so users get a different experience each time.

---

## Tech Stack

- **Pure HTML5, CSS3, Vanilla JavaScript** — zero frameworks, zero build tools
- **Google Fonts** — Playfair Display + DM Sans
- **CSS Custom Properties** — full design-token system in `styles.css`
- **SVG animations** — progress rings, glow effects, trajectory paths
- **Responsive** — mobile-first with hamburger menu + horizontal challenge tabs on mobile
- **Static** — deploys directly to Vercel / GitHub Pages / Netlify with no build step

---

## Project Structure

```
biometrika/
├── index.html                  # Homepage
├── styles.css                  # Global stylesheet (design tokens, components)
├── script.js                   # Homepage interactions (typing animation, cursor tracking)
├── pages/
│   ├── playground.html         # Verification playground (6 challenges)
│   ├── about.html
│   ├── contact.html
│   ├── pricing.html
│   ├── protection.html
│   ├── how-it-works.html
│   ├── developers.html
│   ├── docs.html
│   ├── privacy.html
│   ├── terms.html
│   └── security.html
├── auth/
│   ├── login.html
│   ├── register.html
│   └── forgot-password.html
├── dashboard/
│   ├── index.html
│   └── websites.html
├── assets/
│   ├── images/                 # Site images (hero, logo, backgrounds)
│   ├── js/
│   │   └── playground.js       # Playground challenge logic
│   └── playground/
│       ├── Biometrika-Core-logo.png
│       ├── fingerprint-press-hold-white.png
│       └── biometrica_captcha_assets/   # 60 challenge images
└── includes/
    ├── header.html
    └── footer.html
```

---

## Deploying to Vercel

This is a **static site** — Vercel deploys it directly with no configuration needed.

### Steps

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the `biometrika` GitHub repository
4. Leave all settings as default (Framework: **Other**, Output directory: blank)
5. Click **Deploy**

Vercel will serve `index.html` as the root automatically.

### Custom Domain (optional)

In Vercel project settings → Domains → add your custom domain.

---

## Design System

Defined in `styles.css` `:root`:

```css
--ivory:       #F5F2EB   /* main background */
--ivory-alt:   #F0EBE7   /* footer / alternate sections */
--red-deep:    #B21310   /* primary CTA */
--red-accent:  #C52B1A   /* highlights, interactive elements */
--near-black:  #111111   /* headings */
--charcoal:    #383838   /* body text */
--font-serif:  'Playfair Display'
--font-sans:   'DM Sans'
```

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Safari | ✅ Full |
| Chrome Android | ✅ Full |

---

## Phase 2 Roadmap

- [ ] Backend API (Node.js / Python) for real verification scoring
- [ ] Dashboard with live analytics
- [ ] SDK / npm package for easy integration
- [ ] Webhook support for verification events
- [ ] Enterprise SSO integration

---

## License

© 2026 Biometrika-Core. All rights reserved.

This is a proprietary project. No part of this codebase may be reproduced, distributed, or used without explicit written permission.

---

## Contact

- Email: support@biometrika-core.com
- Website: [biometrika-core.com](https://biometrika-core.com)
- Security: security@biometrika-core.com
