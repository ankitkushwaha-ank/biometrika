# Security and privacy requirements

## 1. Security model

Biometrika-Core is a security-sensitive service. Treat browser input, challenge responses, request headers, and customer-supplied metadata as untrusted.

## 2. Key management

- Public site keys may be embedded in browser code.
- Private API keys must remain server-side.
- Display private keys only once at creation/rotation.
- Store a secure hash or secret-manager reference, not plaintext.
- Support rotation and revocation.
- Separate development and production keys.
- Never log keys.

## 3. Verification token requirements

A production token should be:

- signed using a managed signing key;
- short-lived;
- bound to website/site ID;
- bound to purpose/action where possible;
- include a unique token identifier to prevent replay;
- validated server-side;
- rotated with key IDs and a documented key lifecycle.

## 4. Challenge security

- Keep answers and authoritative validation server-side.
- Enforce challenge expiry and attempt limits.
- Prevent reuse across sessions/sites.
- Use unpredictable challenge IDs and seeds.
- Validate all geometry/order/selection responses server-side.
- Rate-limit challenge creation and submission.
- Avoid leaking challenge answers in static assets or source maps.

## 5. Risk engine limitations

Risk scores are probabilistic. Do not label an individual as an AI or malicious actor based on one signal. Calibrate decisions against representative test data and measure false positives and false negatives. Offer customer-configurable policies and human-friendly recovery paths.

## 6. Privacy principles

- Data minimization: collect only what is necessary for a stated purpose.
- Purpose limitation: do not reuse verification telemetry for unrelated tracking.
- Transparency: document signal categories and retention.
- Retention: define and enforce expiry/deletion windows.
- Access control: restrict event and account data by tenant.
- User rights: provide a process for access/deletion requests where applicable.
- Avoid storing raw interaction recordings unless a documented need and retention policy justify it.
- Do not attempt to identify a person's real-world identity from interaction signals.

## 7. Operational security

- TLS in transit and encryption at rest.
- Secure password hashing if passwords are stored.
- CSRF protection where cookie sessions are used.
- CORS allowlists.
- Content Security Policy.
- Dependency scanning and patching.
- Backup and restore testing.
- Audit key and policy changes.
- Incident response plan and status communication.

## 8. Accessibility and fairness

A challenge must not unfairly exclude people with disabilities, slow devices, limited bandwidth, or assistive technology. Provide alternatives to visual, audio, motion, and fine-motor challenges. Monitor false-positive rates across different device and accessibility contexts where lawful and appropriate.