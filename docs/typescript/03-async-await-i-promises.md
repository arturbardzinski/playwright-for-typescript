# 03. async/await i Promises

W Playwright prawie kazda operacja jest asynchroniczna.

## Zasady

1. Kazda operacje na `page`, `locator`, `request` poprzedzaj `await`.
2. Funkcje wykonujace akcje UI/API oznaczaj jako `async`.
3. Nie mieszaj callbackow i `await` bez potrzeby.

## Przyklad poprawny

```ts
async function login(page: Page, email: string, password: string): Promise<void> {
  await page.getByLabel("Email").fill(email);
  await page.getByLabel("Password").fill(password);
  await page.getByRole("button", { name: "Sign in" }).click();
}
```

## Typowanie odpowiedzi API

```ts
interface HealthResponse {
  status: "ok" | "fail";
  version: string;
}

const response = await request.get("/api/health");
const payload = (await response.json()) as HealthResponse;
```

## Kiedy `Promise.all`

Uzyj, gdy akcja i oczekiwanie powinny wystartowac razem:

```ts
await Promise.all([
  page.waitForURL(/dashboard/),
  page.getByRole("button", { name: "Sign in" }).click()
]);
```
