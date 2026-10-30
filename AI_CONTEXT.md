# Biometrika-Core — AI project context

Read this file first when using an AI coding assistant.

## Product identity

Biometrika-Core is a human-first verification and adaptive website-protection platform. It helps website owners assess whether incoming interactions appear genuine, automated, or suspicious. It combines configurable challenges, contextual risk assessment, and server-side decisions.

## What the user wants

- A premium, minimal security website in warm ivory, charcoal/black, and restrained red.
- A clear home page, How It Works page, Protection explanation, sign-in/account pages, developer docs, and a working CAPTCHA playground.
- A challenge gallery containing the interaction types in `docs/product/CAPTCHA_CATALOG.md`.
- A minimal developer/customer dashboard with Overview, Websites, API Keys, Docs, Usage, and Account.
- A developer-friendly integration with public site key, private server key, widget, server-side verification, and usage visibility.
- An original abstract 2D brand symbol; no approved final logo exists yet.

## Critical engineering truths

- This documentation describes intended product scope, not completed implementation.
- The browser is untrusted. Never trust client-only challenge success.
- Private API keys stay server-side.
- Risk scores are probabilistic, not certainty.
- Do not promise perfect detection or prevention.
- Minimize data collection and define retention.
- Build accessible challenge alternatives.
- Do not fabricate dashboard metrics or claim unimplemented APIs are live.

## Reading order

1. `AGENTS.md`
2. `docs/product/PRODUCT_OVERVIEW.md`
3. `docs/product/REQUIREMENTS.md`
4. `docs/product/CAPTCHA_CATALOG.md`
5. `docs/design/DESIGN_SYSTEM.md`
6. `docs/design/PAGE_SPECIFICATIONS.md`
7. `docs/engineering/ARCHITECTURE.md`
8. `docs/engineering/DATA_MODEL.md`
9. `docs/api/API_CONTRACT.md`
10. `docs/security/SECURITY_AND_PRIVACY.md`
11. `docs/planning/ROADMAP.md`
12. `docs/planning/DECISIONS_AND_OPEN_QUESTIONS.md`

Before editing an existing codebase, inspect it and map actual implementation against these documents. Do not overwrite working code based only on this specification.