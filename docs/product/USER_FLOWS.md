# User flows

## 1. Website visitor — low friction

1. Visitor opens a customer website protected by Biometrika-Core.
2. Customer site requests a verification session from its backend.
3. Biometrika-Core evaluates the request context and available signals.
4. If policy permits, the visitor continues without a visible challenge.
5. Customer backend validates the short-lived result before granting the protected action.

## 2. Website visitor — challenge required

1. Risk/policy decision requests a challenge.
2. Widget displays concise instructions and an accessible interaction.
3. Visitor completes the challenge.
4. Client submits the challenge response to the verification service.
5. Server validates challenge state, timing, attempt limits, and token binding.
6. Service returns a signed, short-lived result.
7. Customer backend verifies the result and continues or denies the action.
8. Visitor receives clear success, retry, or fallback messaging.

## 3. Developer onboarding

1. Developer creates an account and verifies email.
2. Developer opens the dashboard.
3. Developer adds a website and registers its allowed origin/domain.
4. Dashboard creates a public site identifier and a private server-side API key.
5. Developer follows a quick-start guide.
6. Developer installs/configures the client widget and server verification.
7. Developer tests in a development environment.
8. Developer switches to production credentials and monitors usage.

## 4. Dashboard management

- Overview: see protected sites, recent activity, usage, and integration health.
- Websites: create or manage site configurations and allowed domains.
- API Keys: create, reveal once, rotate, and revoke secrets.
- Docs: access guides, API reference, and examples.
- Usage: view requests, challenges, completions, denials, and plan limits.
- Account: manage profile, password, MFA, billing, and account deletion.

## 5. Recovery and fallback

If a challenge fails or expires:

- explain what happened in plain language;
- allow a limited retry;
- provide an alternative challenge where available;
- avoid endless loops;
- allow the protected website to define a safe fallback such as a slower path or support escalation.

If the service is unavailable, the customer must choose an explicit fail-open or fail-closed policy appropriate to the protected action. The platform must not silently choose this for them.