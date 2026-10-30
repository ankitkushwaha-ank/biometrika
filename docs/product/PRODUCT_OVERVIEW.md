# Product overview

## 1. One-line description

Biometrika-Core is a human-first verification and adaptive protection platform that helps websites distinguish genuine user interaction from automated or suspicious traffic.

## 2. Vision

Make the internet safer for real people and legitimate businesses without forcing every visitor through frustrating, repetitive CAPTCHA puzzles.

## 3. Problem

Traditional protection often relies on static rules or familiar image puzzles. These approaches can create friction for real visitors and may be bypassed by increasingly capable automation. Website owners also need a practical way to integrate verification, understand traffic decisions, and manage protection.

## 4. Proposed solution

Biometrika-Core is designed as a layered system:

1. **Observe:** collect narrowly scoped interaction and request signals needed for the verification decision.
2. **Assess:** evaluate context and signals to estimate automation or abuse risk.
3. **Verify:** select a challenge when passive assessment is insufficient.
4. **Decide:** return a policy outcome such as allow, challenge, rate-limit, or block.
5. **Explain:** show website owners useful event, usage, and decision information in their dashboard.

This is a proposed product model. The exact signals, scoring model, and enforcement rules must be validated during implementation.

## 5. Threat categories

- AI-driven and scripted agents;
- conventional bots and headless automation;
- high-volume scraping;
- credential stuffing and repeated authentication attempts;
- suspicious interaction and request patterns;
- application-layer abuse.

Do not claim that the platform prevents every attack. It is one layer in a website's overall security architecture.

## 6. Target users

### Primary: website developers and owners

People who need to add verification and abuse protection to a website or web application.

### Secondary: product and security teams

People who need visibility into verification outcomes, usage, and protection configuration.

### End visitor

A person visiting a protected website. They should experience as little friction as possible and receive clear, accessible instructions if a challenge is required.

## 7. Value proposition

- A choice of verification challenge types.
- A developer-oriented integration experience.
- A central place to manage protected websites and API credentials.
- Usage and event visibility.
- A human-first experience with accessibility and fallback paths.
- A layered decision model rather than a single puzzle.

## 8. Product boundaries

Biometrika-Core is not:

- a replacement for a WAF, DDoS mitigation, secure authentication, or sound application security;
- a guarantee that every AI agent or bot will be detected;
- a biometric identity provider that identifies a named person;
- a tool for covert tracking or invasive fingerprinting.

## 9. Product success measures

Measure:

- legitimate visitor completion rate;
- challenge abandonment rate;
- false-positive rate;
- false-negative rate measured with controlled test traffic;
- median verification latency;
- integration time for a developer;
- API availability and error rate;
- cost per verification;
- accessibility completion rate;
- customer retention and protected-site activation.

Every metric needs a clear definition and privacy-conscious collection policy.
