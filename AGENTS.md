# Instructions for AI coding assistants

You are working on **Biometrika-Core**, a human-first verification and adaptive website-protection platform. Read this file and the linked product documents before changing architecture, UX, APIs, or data models.

## 1. Product understanding

Biometrika-Core helps website operators assess whether incoming interactions appear human, automated, or suspicious. It is intended to protect against:

- automated agents and scripted bots;
- high-speed scraping and abusive automation;
- credential-stuffing and repeated login attempts;
- suspicious interaction and request patterns.

The intended approach combines configurable interactive challenges, interaction/behaviour signals, contextual risk scoring, and server-side enforcement. A CAPTCHA is one part of the system, not the whole product.

## 2. Product experience

The public website uses a premium, minimal security aesthetic:

- warm off-white / ivory backgrounds;
- charcoal or near-black text;
- restrained signal red accents;
- editorial serif display headings paired with a clean sans-serif UI font;
- architectural glass, layered transparent barriers, fingerprint/identity imagery, subtle grid details;
- generous whitespace, thin borders, soft shadows, and minimal copy.

Avoid generic neon blue/purple cyber visuals, excessive gradients, busy dashboards, unnecessary cards, and repeated use of the same hero image in every section.

The dashboard is a **customer/developer dashboard**, not an internal admin panel. Keep navigation minimal. The main areas are Overview, Websites/Projects, API Keys, Docs, Usage, and Account. Do not add admin-only user management, global moderation, or internal platform operations unless explicitly requested.

## 3. Core challenge library

The planned challenge types are listed in `docs/product/CAPTCHA_CATALOG.md`. Build them as separate, testable challenge modules behind a common challenge interface. The public demo/playground should let visitors explore and try supported challenge types.

Every challenge must have:

- clear instructions;
- keyboard and touch support where applicable;
- reset/retry;
- success, failure, and expired states;
- server-verifiable result or signed completion token;
- accessible alternative / fallback;
- telemetry limited to what is necessary.

Never trust a client-side `success=true` value as proof of verification.

## 4. Engineering rules

- Inspect the existing repository before proposing a rewrite.
- Preserve working code and existing conventions unless there is a clear reason to change them.
- Do not invent existing files, routes, environment variables, database tables, or API endpoints.
- Separate frontend presentation from authoritative backend decisions.
- Keep secrets server-side. Never expose private API keys in browser bundles.
- Validate all untrusted input on the server.
- Use migrations for schema changes.
- Add tests for security-sensitive decisions and challenge verification.
- Use environment variables for configuration; provide `.env.example` with placeholders only.
- Do not commit secrets, real customer data, private keys, or production credentials.
- Prefer small, reviewable changes and explain any breaking change.

## 5. Risk and verification principles

Risk scores are signals, not identity claims. A score must not be treated as a guaranteed statement that a visitor is human or AI. Avoid hard-coded universal thresholds; thresholds should be configurable and calibrated using evaluation data.

Support four broad outcomes:

1. `allow` — continue without an additional challenge;
2. `challenge` — ask for a suitable verification interaction;
3. `rate_limit` — slow or temporarily restrict repeated activity;
4. `block` — deny a request when policy and evidence justify it.

Do not silently collect invasive device fingerprints. Document every collected signal, its purpose, retention, and controls.

## 6. Documentation discipline

When adding a feature:

- update the relevant product or engineering document;
- document new routes and API contracts;
- document data collected and retention;
- add tests and usage examples;
- mark implementation status accurately (`planned`, `in progress`, `implemented`, or `deprecated`).

If a requirement is ambiguous, state the assumption and ask for confirmation rather than silently changing the product.