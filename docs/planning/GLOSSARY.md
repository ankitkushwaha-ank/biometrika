# Glossary

- **Human verification:** a process used to assess whether an interaction is likely to come from a genuine person rather than automation.
- **Challenge:** an interaction presented to a visitor when additional verification is required.
- **Challenge session:** short-lived server-side state for a specific verification attempt.
- **Risk score/band:** an estimate derived from signals and context; not a definitive identity label.
- **Decision:** policy result such as allow, challenge, rate-limit, or block.
- **Public site key:** identifier used by browser-side integration; not a secret.
- **Private API key:** server-side credential used by a customer's backend.
- **Verification token:** signed, short-lived result that a customer backend validates before allowing a protected action.
- **Replay attack:** reusing a previously valid response/token in a different or later context.
- **False positive:** legitimate visitor incorrectly treated as suspicious or blocked.
- **False negative:** automated or abusive traffic incorrectly allowed.
- **Fail-open:** allow the action if the verification service is unavailable.
- **Fail-closed:** deny or hold the action if verification is unavailable.
- **Playground:** public demonstration area; its result is not a production verification token.
- **Tenant:** an organization/customer boundary used to scope data and permissions.