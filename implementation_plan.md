# Phase 1 Implementation Plan (Updated)

## Goal Description

Set up the CA Practice Management SaaS project in `charted_accountweb` with a clean separation of frontend and backend, using the confirmed technology stack and architecture decisions.

## Confirmed Decisions
- **Dark mode**: Supported (default light).
- **Database**: PostgreSQL with Prisma ORM and migrations (no SQLite fallback for primary dev).
- **CI/CD**: GitHub Actions for lint, TypeScript checks, unit & e2e tests, and production builds.
- **Authentication**: Clerk, with a clear authentication boundary.
- **Frontend**: Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui.
- **Validation**: Zod.
- **Testing**: Vitest (unit/integration) and Playwright (e2e).

## Project Structure (Target)
```
charted_accountweb/
  frontend/
    src/
      app/
      components/
        ui/
        layout/
        shared/
      features/
        dashboard/
        clients/
        compliance/
        tasks/
        documents/
        team/
        reports/
        billing/
        settings/
      hooks/
      lib/
        api/
        auth/
        validation/
      types/
    public/
    tests/
    package.json
    tsconfig.json
    README.md

  backend/
    src/
      modules/
        auth/
        firms/
        memberships/
        invitations/
        clients/
        compliance/
        tasks/
        documents/
        team/
        reports/
        billing/
        audit/
      routes/
      middleware/
      services/
      repositories/
      validators/
      config/
      utils/
      app.ts
      server.ts
    prisma/
      schema.prisma
      migrations/
      seed.ts
    tests/
    package.json
    README.md

  shared/
    contracts/
      api/
      schemas/
      types/
    package.json

  docs/
    architecture/
    api/
    database/
    setup/
    decisions/

  .github/
    workflows/
      ci.yml

  .env.example
  .gitignore
  README.md
  implementation_plan.md
```

## Implementation Steps

1. **Initialize monorepo** using npm workspaces (frontend, backend, shared). Create root `package.json` with workspaces.
2. **Frontend setup** – `npx create-next-app@latest frontend --ts --app`. Install Tailwind, shadcn/ui, Clerk SDK, Zod, React Hook Form.
3. **Backend setup** – `npm init -y` in `backend`. Install Express (or Fastify), Prisma, Zod, Clerk server SDK, dotenv.
4. **Shared package** – create minimal TypeScript library for contracts (API request/response types, shared enums).
5. **Configure Prisma** – place `schema.prisma` under `backend/prisma`. Add models for User, Firm, FirmMembership, Invitation, FirmSettings, AuditLog.
6. **Create CI workflow** (`.github/workflows/ci.yml`) to run lint, typecheck, Vitest, Playwright, and build both packages.
7. **Add design system** – extend Tailwind config in `frontend/tailwind.config.js` with premium palette, dark mode, Inter font.
8. **Implement authentication boundary** – `frontend/lib/auth/` with Clerk provider, `backend/src/modules/auth/` with middleware verifying Clerk JWT.
9. **Create basic routes/layout** – `frontend/src/app/(dashboard)/layout.tsx` with collapsible sidebar, top bar, responsive drawer.
10. **Add placeholder feature pages** – create folders under `frontend/src/features/*` with index pages showing “Coming soon”.
11. **Add API scaffolding** – `backend/src/routes/` with `/api/firm`, `/api/client`, etc., protected by auth middleware.
12. **Write initial tests** – Vitest unit tests for auth utilities, Prisma client mock; Playwright smoke test for sign‑in flow (using Clerk test keys).
13. **Documentation** – update root README with setup steps, .env.example, and architecture overview.

## Open Questions
- None; all decisions have been captured.

## Verification Plan
- Run `npm install` at root; ensure workspace packages install.
- Execute `npm run lint` and `npm run typecheck` for both frontend and backend.
- Run `npx prisma migrate dev --schema=backend/prisma/schema.prisma` (requires PostgreSQL URL in `.env.example`).
- Start frontend dev server (`npm run dev --workspace=frontend`) and verify layout.
- Run backend (`npm run dev --workspace=backend`).
- Run CI workflow locally (`npm run test` and `npm run test:e2e`).

---
