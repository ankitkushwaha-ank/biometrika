# Proposed data model

The schema below is conceptual. Adapt naming, types, indexing, and constraints to the selected database. Do not treat this as an existing database.

## Core entities

### users
- `id`
- `email` (unique, normalized)
- `password_hash` (if password auth is used)
- `email_verified_at`
- `status`
- `created_at`, `updated_at`

### organizations
- `id`
- `name`
- `owner_user_id`
- `created_at`, `updated_at`

### organization_members
- `organization_id`
- `user_id`
- `role` (`owner`, `developer`, `viewer`)
- `created_at`

### websites
- `id`
- `organization_id`
- `name`
- `primary_domain`
- `environment` (`development`, `production`)
- `public_site_key`
- `status`
- `created_at`, `updated_at`

### allowed_origins
- `id`
- `website_id`
- `origin`
- `created_at`

### api_keys
- `id`
- `website_id`
- `key_prefix`
- `secret_hash` or secure secret reference
- `key_type`
- `last_used_at`
- `expires_at`
- `revoked_at`
- `created_at`

Store only a hash or secure reference for private keys after creation. Show the plaintext secret once.

### site_policies
- `id`
- `website_id`
- `action_type`
- `risk_thresholds` (versioned JSON or normalized policy fields)
- `challenge_preferences`
- `outage_mode`
- `updated_at`

### verification_sessions
- `id`
- `website_id`
- `purpose`
- `status`
- `created_at`
- `expires_at`
- `consumed_at`
- `request_context_ref` (avoid storing unnecessary raw data)

### challenges
- `id`
- `verification_session_id`
- `challenge_type`
- `challenge_version`
- `challenge_payload_ref`
- `status`
- `attempt_count`
- `expires_at`
- `created_at`

### verification_results
- `id`
- `verification_session_id`
- `website_id`
- `decision`
- `reason_codes`
- `risk_band` (if used)
- `token_jti`
- `created_at`
- `expires_at`

### security_events
- `id`
- `website_id`
- `event_type`
- `decision`
- `reason_codes`
- `occurred_at`
- `metadata` (strictly allowlisted and minimized)

### usage_daily
- `website_id`
- `date`
- `requests_count`
- `challenges_count`
- `success_count`
- `failure_count`
- `blocked_count`

## Relationships

- A user can belong to multiple organizations.
- An organization can own multiple websites.
- A website can have multiple allowed origins, API keys, and policies.
- A verification session belongs to one website.
- A session can have one or more challenge attempts.
- A session can produce at most one consumed final verification result for a given purpose.

## Data rules

- Enforce tenant scoping in every dashboard query.
- Add indexes for `website_id`, `created_at`, `expires_at`, and event filters.
- Expire short-lived sessions and challenge data automatically.
- Define retention windows before collecting production telemetry.
- Do not store raw passwords, API secrets, or unnecessary interaction recordings.
- Audit key rotation, revocation, and policy changes.