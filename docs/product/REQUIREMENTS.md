# Product requirements

Status labels: **P0** essential for a safe MVP; **P1** important next; **P2** later enhancement. These are proposed priorities, not a claim that functionality already exists.

## 1. Public website

- P0: explain the product with a concise hero statement and a clear Protect Website / Sign In action.
- P0: provide a CAPTCHA playground where visitors can preview and try available challenge types.
- P0: provide a How It Works page explaining observe → assess → verify → decide.
- P1: provide product/security overview, developer documentation, pricing, and contact pages.
- P1: responsive layout and accessible navigation.
- P1: clear privacy and terms pages before production launch.

## 2. Authentication and account

- P0: sign up, sign in, sign out, password reset.
- P0: secure session management and server-side authorization.
- P1: email verification and optional multi-factor authentication.
- P1: account profile and security settings.
- P2: organization/team members and role-based access.

## 3. Developer dashboard

- P0: overview showing protected websites, recent verification activity, and usage summary.
- P0: add, edit, and remove a website/project.
- P0: create, reveal once, rotate, and revoke API credentials.
- P0: show integration status and copyable setup snippets.
- P0: show usage for a selectable time range.
- P1: event log with filters and decision details.
- P1: documentation and API reference access.
- P1: account settings and billing entry point.
- P2: webhooks, team access, export, and advanced policy controls.

## 4. Verification service

- P0: create a verification session bound to a site and short-lived context.
- P0: return a challenge or allow decision according to policy.
- P0: verify challenge completion on the server.
- P0: issue a short-lived, signed verification result.
- P0: prevent replay and cross-site token misuse.
- P0: enforce expiration and attempt limits.
- P1: configurable challenge selection.
- P1: risk and event analytics.
- P2: adaptive challenge selection based on measured performance and risk.

## 5. Challenge playground

- P0: show a gallery of available challenge types.
- P0: allow a visitor to start, complete, reset, and retry a demo challenge.
- P0: show a clear result state and short explanation.
- P1: show accessibility alternatives and challenge difficulty settings.
- P1: allow developers to inspect a safe demo event/result payload.
- Important: demo completion is not a production verification token.

## 6. Non-functional requirements

- Security: server-authoritative decisions, secure secret handling, input validation, abuse controls.
- Privacy: data minimization, documented purpose, retention limits, deletion process.
- Accessibility: keyboard support, screen-reader labels, adequate contrast, alternatives to motion/audio/vision tasks.
- Performance: challenge loading should be lightweight; avoid unnecessary third-party dependencies.
- Reliability: graceful fallback if the risk service is unavailable.
- Observability: structured logs, metrics, traces, and alerting without logging secrets.
- Compatibility: current evergreen desktop and mobile browsers.
- Maintainability: modular challenge implementations and versioned APIs.
