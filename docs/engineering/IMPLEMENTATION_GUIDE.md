# Implementation guide

## Before coding

1. Inspect the current repository and identify existing stack, routes, database, auth, and deployment.
2. Map existing code to the product areas in this documentation.
3. Record what already works and what is missing.
4. Confirm the frontend/backend stack and hosting.
5. Create a staging environment and secret-management plan.

## Recommended implementation order

### Phase 0 — foundation
- repository structure and lint/test setup;
- environment configuration;
- database migrations;
- authentication and tenant model;
- design tokens and reusable UI components.

### Phase 1 — public frontend
- home page;
- how-it-works page;
- threat/protection section;
- login/register/reset pages;
- responsive and accessibility pass.

### Phase 2 — challenge playground
- shared challenge interface;
- first 3 challenge modules;
- remaining challenge modules;
- retry, expiry, error, and accessibility states;
- clearly labelled demo-only validation.

### Phase 3 — customer dashboard
- overview;
- websites/projects;
- API key creation/rotation/revocation;
- docs links;
- usage view;
- account settings.

### Phase 4 — authoritative backend
- verification session creation;
- challenge issuance and validation;
- signed short-lived token;
- server-side verification endpoint;
- replay protection;
- rate limiting and audit events.

### Phase 5 — integrations
- browser widget;
- first server SDK;
- quick-start guides;
- staging/production key separation;
- integration tests.

### Phase 6 — risk and operations
- risk feature evaluation;
- decision policy configuration;
- event pipeline and usage aggregation;
- monitoring and alerts;
- performance and abuse testing.

## Definition of done

A feature is not done merely because its screen looks complete. It needs:

- validated inputs;
- loading/empty/error/success states;
- authorization checks;
- tests;
- accessibility checks;
- updated docs;
- logging/metrics where appropriate;
- security and privacy review if it processes visitor data.

## Avoid these implementation mistakes

- trusting client-side challenge success;
- putting private keys in frontend code;
- using fake dashboard metrics in production;
- presenting a demo challenge as a real security guarantee;
- adding all challenge types before the shared challenge lifecycle works;
- building microservices before there is a demonstrated need;
- storing more behavioural data than necessary;
- creating admin-panel features in the customer dashboard.