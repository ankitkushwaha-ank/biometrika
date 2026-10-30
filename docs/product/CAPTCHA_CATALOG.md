# Verification challenge catalogue

The following challenge types are part of the requested product direction. Each should be implemented as an independent module using a shared challenge lifecycle.

## Shared lifecycle

created → presented → submitted → verified | failed | expired

Every challenge needs:

- instruction text and accessible name;
- unique session/challenge ID;
- server-generated challenge data or seed;
- attempt counter and expiry;
- client interaction;
- server-side validation;
- retry/reset;
- accessible alternative;
- telemetry events with minimal data.

## Planned challenge types

| Challenge | Visitor action | Validation concept |
|---|---|---|
| Human checkbox / quick check | Activate a verification control | Must be backed by server-issued session and risk policy; checkbox alone is not proof |
| Select image category | Select tiles matching a prompt, e.g. traffic lights | Validate selected tile set against server-side answer |
| Arrange in order | Put images in the correct sequence | Validate order against server-side sequence |
| Slide puzzle | Drag a piece into the matching gap | Validate final position within tolerance and session constraints |
| Rotate image | Rotate an image until upright | Validate target orientation within tolerance |
| Slide to complete | Move a slider to target | Validate trajectory and final state; avoid treating speed alone as proof |
| Draw a shape | Draw a simple requested shape | Validate coarse shape properties, with accessible alternative |
| Number sequence | Select numbers in ascending order | Validate selected order |
| Audio challenge | Listen and enter spoken digits/words | Provide accessible audio, rate limits, and alternative |
| Simple arithmetic | Solve a simple arithmetic task | Treat as a friction challenge, not strong proof on its own |
| Match categories | Drag items to matching categories | Validate item-to-category mapping |
| Press and hold | Hold a control for a defined duration | Validate session/timing; not sufficient alone |

## Important challenge design rules

- Do not make any single challenge the sole source of trust.
- Challenge content should be generated or selected from a controlled pool.
- Avoid copyrighted or sensitive imagery without rights.
- Do not use culturally biased knowledge questions.
- Support reduced motion and touch devices.
- Provide a non-visual path and a way to request another challenge.
- Prevent replay, answer leakage, brute force, and automated harvesting.
- Avoid recording raw mouse/touch traces indefinitely. Prefer short-lived, purpose-limited derived features where justified.
- Do not expose correct answers in client JavaScript or public challenge payloads.

## Playground behaviour

The public playground is a demonstration. It should:

1. display a grid/list of challenge cards;
2. open a selected challenge in a focused test area;
3. explain the visitor action in one short sentence;
4. support reset and retry;
5. show a demo result;
6. clearly state that playground success is not a production site verification token.

## Challenge result states

- Ready: instructions and challenge visible.
- In progress: user is interacting.
- Success: demo or server validation passed.
- Try again: response did not pass.
- Expired: session timed out.
- Unavailable: challenge could not load; offer another method.