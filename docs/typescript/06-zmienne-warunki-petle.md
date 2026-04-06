# 06. Zmienne, warunki i petle

To jest absolutna baza programowania i przydaje sie tez w testach.

## `const` vs `let`

- `const` - gdy wartosc nie powinna byc nadpisana
- `let` - gdy planujesz zmiane wartosci

W testach najczesciej uzywasz `const`.

## Warunki `if`

```ts
const statusCode = 200;

if (statusCode === 200) {
  console.log("OK");
} else {
  console.log("Blad");
}
```

## Petla `for...of`

```ts
const users = ["a@example.com", "b@example.com"];

for (const user of users) {
  console.log("Testuje uzytkownika:", user);
}
```

## W testach Playwright

Przyklad: chcesz sprawdzic kilka elementow menu.
Petla jest wtedy wygodniejsza niz kopiowanie 5 razy podobnej asercji.
