# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project purpose

A starter project for learning Playwright + TypeScript test automation. It serves two parallel goals:

1. **Working Playwright suite** under `tests/` (UI + API examples) using Page Object Pattern and custom fixtures.
2. **TypeScript learning track** — paired Polish-language docs in `docs/typescript/` and runnable examples in `examples/typescript-lessons/`, executed via `npm run learn:NN`.

Most prose (README, docs, lesson files) is in Polish; identifiers and code stay in English. Preserve that split when editing — do not translate Polish content unless asked.

## Common commands

```bash
npm install && npx playwright install   # first-time setup (browsers must be installed separately)

npm test                # run all Playwright tests across chromium, firefox, webkit
npm run test:ui         # Playwright UI mode
npm run test:headed     # run with visible browser
npm run test:debug      # Playwright inspector
npm run report          # open last HTML report

npm run typecheck       # tsc --noEmit (covers src, tests, examples, playwright.config.ts)
npm run lint            # eslint .
npm run lint:fix
npm run format          # prettier --write .
npm run format:check

npm run learn:NN        # run lesson NN (01..10) via ts-node
npm run learn:all       # run all lessons sequentially
```

Run a single test file or filter by title:

```bash
npx playwright test tests/e2e/home.spec.ts
npx playwright test -g "opens docs from home page"
npx playwright test --project=chromium               # one browser only
npx playwright test tests/e2e/home.spec.ts:5         # by line number
```

Node 22+ is required (`engines.node`); `.nvmrc` pins `25.9.0` for local dev.

## Architecture

### Test layering

- **`tests/fixtures/base.ts`** — extends `@playwright/test`'s `test` with page-object fixtures (`homePage`, `zooplusPage`). New POMs should be wired in here so specs receive them by destructuring. The file also re-exports `expect`, so specs import both `test` and `expect` from this fixture module — not from `@playwright/test` directly. The GitHub API spec is the exception: pure-API tests import straight from `@playwright/test` because they don't need a page object.
- **`src/pages/*.ts`** — Page Objects. Constructor takes `Page`, methods return `Promise<void>`, and assertions live inside the POM (`expect` is called on `this.page`). Prefer role-based locators (`getByRole`, `getByText`). `ZooplusPage` shows the pattern for external sites: `blockHeavyAssets` route handler + a defensive `acceptCookiesIfVisible` that swallows the timeout.
- **`src/utils/testData.ts`** — small static data module imported by specs. Keep it shape-stable; specs assert against its values.
- **`tests/api/*.spec.ts`** — Playwright's `request` fixture for HTTP tests, no browser involved.

### Playwright config (`playwright.config.ts`)

- `baseURL: "https://playwright.dev"` — POMs use relative paths like `page.goto("/")`. External-site POMs (e.g. Zooplus) pass an absolute URL explicitly.
- Three projects: `chromium`, `firefox`, `webkit`. Tests that only make sense in one browser must skip themselves explicitly — see `tests/e2e/zooplus.spec.ts` for `test.skip(({ browserName }) => browserName !== "chromium", ...)`.
- CI-aware: `headless`, `retries: 2`, `workers: 1`, and `forbidOnly` toggle on when `process.env.CI` is set. Don't hard-code these — branch on `process.env.CI` instead.
- Reporters: HTML (not auto-opened) + list. Reports land in `playwright-report/`, traces/screenshots/videos in `test-results/` (both gitignored).

### Learning track (parallel to the test suite)

- `docs/typescript/NN-*.md` ↔ `examples/typescript-lessons/NN-*.ts` ↔ `npm run learn:NN`. The three are kept 1:1; when adding or renaming a lesson, update all three plus the `learn:NN` script in `package.json` and `learn:all`'s chain. `docs/typescript/README.md` and `examples/typescript-lessons/README.md` list the ordering and must be kept in sync.
- `src/examples/*.ts` (`testDataFactory`, `apiHelpers`, `waitsAndAssertions`) are reference snippets the docs link to — not used by the test suite.

## Conventions

- **Strict TS, NodeNext modules** (`tsconfig.json`). When importing local files use explicit relative paths; `ts-node` runs the lesson scripts directly so they must be valid under NodeNext resolution.
- **Prettier**: double quotes, semicolons, no trailing commas, 100-char width. ESLint extends `eslint-config-prettier` so formatting rules don't conflict — never re-enable stylistic ESLint rules.
- **Branch policy**: develop on the feature branch named in the task; do not push to `main`.

## Repo layout notes

- `playwright-report/`, `test-results/`, `node_modules/` are gitignored — never commit them.
- `.vscode/settings.json` configures Code Runner to use `npx ts-node` for `.ts` files; the `learn:NN` scripts mirror that behaviour from the CLI.
