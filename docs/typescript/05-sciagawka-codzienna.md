# 05. Sciagawka codzienna (TypeScript + Playwright)

## Najczestsze typy

```ts
string
number
boolean
string[]
Record<string, string>
Promise<void>
```

## Najczestsze utility types

```ts
Partial<T>   // czesc pol opcjonalna
Required<T>  // wszystkie pola wymagane
Pick<T, K>   // wybierz konkretne pola
Omit<T, K>   // usun konkretne pola
Record<K, V> // mapa klucz->wartosc
```

## Dobre praktyki w testach

- trzymaj typy blisko testowego kontekstu
- nie naduzywaj `any` (lepiej `unknown` + walidacja)
- dla API tworz interfejs odpowiedzi
- dla danych testowych uzywaj factory
- dla powtarzalnych akcji tworz helpery

## Anty-patterny

- `await` pomijane przy `click/fill/goto`
- gigantyczne page objecty "do wszystkiego"
- typ `any` w fixture i helperach
- asercje oparte o `waitForTimeout`
