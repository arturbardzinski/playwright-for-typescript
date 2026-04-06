# 07. Obiekty, tablice i funkcje

## Obiekt

Obiekt grupuje powiazane dane:

```ts
const user = {
  email: "tester@example.com",
  role: "admin"
};
```

## Tablica

Tablica przechowuje liste:

```ts
const roles = ["admin", "manager", "viewer"];
```

## Funkcje

Funkcja to "kawalek logiki", ktory mozesz wywolac wiele razy:

```ts
function buildTestTitle(moduleName: string, caseName: string): string {
  return `[${moduleName}] ${caseName}`;
}
```

## Dlaczego to wazne w testach?

- obiekty: przechowywanie danych testowych
- tablice: uruchamianie testow na wielu danych
- funkcje: mniej duplikacji, czytelniejszy kod
