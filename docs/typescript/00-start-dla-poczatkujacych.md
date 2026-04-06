# 00. Start dla poczatkujacych

Jesli dopiero zaczynasz, potraktuj TypeScript jako "JavaScript z pasami bezpieczenstwa".
Kod uruchamia sie jak JS, ale TypeScript ostrzega Cie wczesniej, gdy cos moze byc bledem.

## Jak sie uczyc tych materialow

1. Przeczytaj jeden plik z `docs/typescript`.
2. Uruchom odpowiadajacy mu plik z `examples/typescript-lessons`.
3. Zmien 1-2 linie kodu i odpal ponownie.
4. Sprawdz, jakie podpowiedzi i bledy pokazuje IDE.

## Co to jest typ?

Typ to informacja "jakiego rodzaju dane tu sa". Przyklady:

- `string` - tekst, np. `"login test"`
- `number` - liczba, np. `3`
- `boolean` - `true` albo `false`

## Dlaczego to pomaga w testach?

- mniej literowek i mniej "niewidzialnych" bledow
- latwiejsze utrzymanie testow po kilku miesiacach
- jasny kontrakt danych testowych (co jest wymagane, co opcjonalne)

## Minimalny workflow lokalny

```bash
npm install
npm run learn:01
npm test
```

## Czego nie musisz znac na start

Na poczatku nie musisz znac:

- zaawansowanych genericow
- skomplikowanych utility types
- wszystkich opcji `tsconfig`

Najpierw opanuj: typy podstawowe, funkcje, interfejsy i `async/await`.
