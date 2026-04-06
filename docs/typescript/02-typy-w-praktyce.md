# 02. Typy w praktyce testowej

## Typowanie danych testowych

Zamiast "luźnych" obiektow warto zdefiniowac kontrakt:

```ts
type UserRole = "admin" | "manager" | "viewer";

interface UserCredentials {
  email: string;
  password: string;
  role: UserRole;
}
```

## Union types dla scenariuszy

```ts
type LoginScenario = "valid" | "invalid-password" | "blocked-user";
```

Dzieki temu nie pomylisz nazwy scenariusza w `test.describe`.

## Record do map konfiguracji

```ts
type EnvName = "local" | "staging";

const baseUrls: Record<EnvName, string> = {
  local: "http://localhost:3000",
  staging: "https://staging.example.com"
};
```

## Generics w helperach

```ts
function pickRandom<T>(items: T[]): T {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}
```

To samo dziala dla stringow, liczb i obiektow bez duplikowania funkcji.
