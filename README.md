# Playwright + TypeScript starter

Prosty projekt do nauki automatyzacji testow w `Playwright` i `TypeScript`.

## Wymagania

- Node.js 22 lub nowszy
- npm

## Instalacja

```bash
npm install
npx playwright install
```

## Uruchamianie testow

```bash
npm test
```

Przydatne tryby:

```bash
npm run typecheck
npm run test:ui
npm run test:headed
npm run test:debug
npm run report
```

## Struktura projektu

```text
.
├── playwright.config.ts
├── src
│   ├── pages
│   │   └── PlaywrightHomePage.ts
│   └── utils
│       └── testData.ts
└── tests
    ├── api
    │   └── github-api.spec.ts
    ├── e2e
    │   └── home.spec.ts
    └── fixtures
        └── base.ts
```

## Co tu znajdziesz

- `tests/e2e/home.spec.ts` - przyklad testu UI na stronie dokumentacji Playwright
- `tests/api/github-api.spec.ts` - przyklad testu API
- `src/pages/*` - prosty Page Object Pattern
- `tests/fixtures/base.ts` - fixture z gotowym page objectem
- `docs/typescript/*` - materialy do nauki TypeScript pod test automation
- `src/examples/*` - codzienne helpery i wzorce TypeScript

## Dalsza nauka

1. Dodaj kolejny page object i nowy test scenariusza.
2. Rozszerz fixture o logowanie do testowej aplikacji.
3. Ustaw `baseURL` na swoja aplikacje i uruchom testy lokalnie.
