# Proposed API contract

API paths and payloads are proposed examples. They are not live endpoints until implemented and versioned.

Base path: `/v1`

## Authentication

Server-to-server requests use a private website API key in an authorization header. Never place this key in browser JavaScript.

```http
Authorization: Bearer <private_site_api_key>
Content-Type: application/json