# Decisions and open questions

## Established product direction

- Product name/code name: **Biometrika-Core**.
- Product category: human-first verification and website protection.
- Core concept: digital trust.
- Intended threat coverage: AI agents, bots, scrapers, credential stuffing, and suspicious application traffic.
- Product should provide several CAPTCHA/verification interaction types, not just one.
- A public playground should let visitors explore and try challenge options.
- A developer/customer dashboard is required.
- Dashboard should be minimal and developer-friendly, not an internal admin dashboard.
- Dashboard areas requested: Overview, Websites, API Keys, Docs, Usage, Account.
- Public website design: warm ivory/off-white, black/charcoal, restrained red accents, premium security aesthetic.
- User wants a distinctive abstract 2D logo; final logo has not been approved.
- The supplied architectural glass/fingerprint security images are visual references for the brand.
- Threat animation should move the actual stone fragments in the supplied artwork toward the glass shield, not add unrelated particles.

## Proposed technical direction — not yet confirmed

- Modular monolith for first backend release.
- Relational database for core records.
- Cache for short-lived verification state and rate limits.
- Queue for asynchronous usage aggregation.
- Versioned REST API.
- Signed short-lived verification tokens.
- Server-authoritative challenge validation.
- Browser widget plus server-side verification SDK.

## Decisions that must be made before production

1. Frontend framework and current repository structure.
2. Backend language/framework.
3. Database and cache.
4. Hosting, CDN, and object storage.
5. First target customer segment and expected traffic.
6. Authentication provider or custom auth.
7. First server SDK language.
8. Pricing, quotas, and billing provider.
9. Data retention periods and privacy/legal review.
10. Exact risk signals that will be collected and their lawful basis.
11. Fail-open/fail-closed defaults by protected action.
12. Whether organization/team features are required in the first release.

## Important product validation questions

- Which two challenge types should be production-ready first?
- What is the minimum acceptable false-positive rate?
- Which actions are protected first: signup, login, checkout, forms, or all?
- What customer-visible event details are useful without exposing sensitive visitor data?
- What accessibility alternatives will be supported at launch?