# User Guidance

## Initial Steering Priorities

1. **Start with a working foundation** — The scaffold is a Next.js + React + TypeScript + Tailwind CSS application. Keep it minimal and functional as the base for iterative feature development.

2. **Validate early and often** — Use the existing Vitest setup to add tests for each new feature. Run `yarn lint`, `yarn test`, and `yarn build` before every commit to catch regressions.

3. **Keep scope tight** — The product vision is exploratory. Focus on shipping small, demonstrable increments rather than building large features up front.

4. **Respect the style system** — Refer to `.fish-bowl/style.md` and `.fish-bowl/style.tokens.json` for visual direction. Use theme tokens consistently to maintain a cohesive look and feel.

5. **Request capabilities explicitly** — If a feature requires restricted capabilities (external APIs, new dependencies, etc.), add an entry to `capabilities.md` before implementation.

6. **Prioritize clarity over cleverness** — Write straightforward code that is easy to read, review, and extend. Prefer established patterns from the Next.js and React ecosystems.
