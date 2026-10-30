# Proposed system architecture

This is a recommended starting architecture, not a record of an existing implementation. Confirm the stack and deployment constraints before coding.

## 1. Logical components

1. **Marketing frontend** — public pages, playground, auth entry points.
2. **Dashboard frontend** — authenticated customer/developer interface.
3. **API gateway** — authentication, request validation, rate limits, version routing.
4. **Identity/account service** — accounts, sessions, organizations, permissions.
5. **Site configuration service** — registered websites, origins, policies, keys.
6. **Verification orchestrator** — creates sessions and coordinates risk/challenge decisions.
7. **Challenge service** — creates and validates challenge instances.
8. **Risk evaluation module** — evaluates request context and approved derived signals.
9. **Decision/policy module** — allow, challenge, rate-limit, or block.
10. **Usage/event pipeline** — aggregate usage and customer-visible events.
11. **Dashboard API** — scoped access to customer configuration and analytics.

## 2. High-level request flow

Visitor browser
   |
   v
Customer website + Biometrika widget
   |
   | create verification session
   v
Customer backend ----> Biometrika API Gateway
                           |
                           v
                    Site/auth validation
                           |
                           v
                 Verification Orchestrator
                    /       |        \
                   v        v         v
                Risk    Challenge   Policy
              Evaluation Service   Engine
                   \        |        /
                    \       v       /
                     Decision result
                           |
                 signed short-lived token
                           |
                           v
Customer backend verifies token
                           |
                           v
              Protected action continues/denied

## 3. Trust boundaries

- Browser code is untrusted.
- Customer backend credentials are private.
- Public site identifiers may be exposed; private API keys must not.
- Challenge answers and validation rules must remain server-authoritative.
- Signed tokens must be bound to a site, purpose, expiry, and unique identifier.
- Dashboard access must be scoped to the authenticated account/organization.

## 4. Recommended technology-neutral deployment

- Frontend: static/SSR web app.
- Backend: modular API service.
- Database: relational database for accounts, sites, policies, and records.
- Cache: short-lived session/challenge state and rate-limit counters.
- Queue: asynchronous usage aggregation and event processing.
- Object storage: challenge assets where needed.
- Observability: structured logs, metrics, traces, alerting.

Do not introduce microservices prematurely. A modular monolith is likely easier for the first version; split services only when scale or isolation requires it.

## 5. Environments

- Local development
- Staging
- Production

Use separate credentials, databases, signing keys, and allowed origins per environment. Never reuse production secrets in local development.

## 6. Failure behaviour

Define explicit customer policy for service outage:

- fail-open for low-risk actions where availability is paramount;
- fail-closed or alternate verification for high-risk actions;
- always make the policy configurable and visible.

Do not silently make a universal choice.