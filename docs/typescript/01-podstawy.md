# 01. Podstawy TypeScript

## Po co TypeScript w testach?

- szybciej lapiesz bledy (np. literowki w nazwach pol i metod)
- masz podpowiedzi w IDE
- kod testow jest latwiejszy do utrzymania przy wiekszym projekcie

## Podstawowe typy

```ts
const testName: string = "login smoke";
const retryCount: number = 2;
const isCi: boolean = true;
const tags: string[] = ["smoke", "auth"];
```

## Funkcje z typami

```ts
function buildUserEmail(prefix: string, domain = "example.com"): string {
  return `${prefix}@${domain}`;
}
```

## Interfejsy i typy

```ts
interface LoginData {
  email: string;
  password: string;
}

type Environment = "local" | "staging" | "prod";
```

## Optional i readonly

```ts
interface TestUser {
  readonly id: string;
  email: string;
  role?: "admin" | "user";
}
```

`role?` oznacza pole opcjonalne. `readonly` blokuje przypadkowa modyfikacje krytycznych danych.
