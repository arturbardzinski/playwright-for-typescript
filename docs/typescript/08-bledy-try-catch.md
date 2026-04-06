# 08. Bledy i try/catch

W testach czesto pracujesz z siecia, UI i asynchronicznoscia.
Warto rozumiec, jak obslugiwac bledy.

## Podstawowy wzorzec

```ts
try {
  // kod, ktory moze rzucic blad
} catch (error) {
  // reakcja na blad
}
```

## Przyklad praktyczny

```ts
async function parseJsonSafely(text: string): Promise<unknown> {
  try {
    return JSON.parse(text);
  } catch {
    return { error: "Invalid JSON" };
  }
}
```

## Wskazowka testowa

W testach E2E zwykle lepiej polegac na asercjach Playwright (`expect`) niz lapac kazdy blad recznie.
`try/catch` stosuj glownie w helperach narzedziowych.
