# Fish Bowl Template
Minimal scaffold template for create-project provisioning in Oz Fish Bowl.
## What this template includes
- Next.js + React + TypeScript
- Tailwind CSS
- Vitest smoke test setup
- Static fish-bowl landing page (`public/fish-bowl-static.svg`)
- Vercel-ready project config (`vercel.json`)
## What this template intentionally excludes
- Any generated product features from `warpdotdev/fish-bowl`
- Any project-specific runtime logic from downstream apps
## Local commands
Use Yarn:
```bash
yarn install
yarn lint
yarn test
yarn build
yarn dev
```
## Vercel behavior
When this repository is imported into Vercel with default Git integration settings:
- Pull requests get Preview deployments
- Merges to `main` trigger Production deployments
No additional in-repo workflow is required for this baseline behavior.
