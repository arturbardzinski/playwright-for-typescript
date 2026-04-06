# 10. Playwright od zera (krotko i jasno)

Playwright to narzedzie do automatyzacji:

- testow przegladarki (E2E/UI)
- testow API

## Najwazniejsze elementy

- `test(...)` - pojedynczy test
- `expect(...)` - asercja (sprawdzenie)
- `page` - obiekt przegladarki
- `request` - klient HTTP do testow API

## Minimalny test UI

```ts
test("strona ma tytul", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example/);
});
```

## 3 zasady dla poczatkujacych

1. Uzywaj `await` przy akcjach Playwright.
2. Uzywaj stabilnych selektorow (`getByRole`, `getByLabel`).
3. Trzymaj dane i helpery poza samym testem, gdy kod zaczyna rosnac.
