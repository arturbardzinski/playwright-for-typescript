# 04. TypeScript patterny przydatne w Playwright

## 1) Page Object z typami

- jeden obiekt = jedna strona/modul
- metody zwracaja `Promise<void>` albo konkretna wartosc

```ts
class LoginPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto("/login");
  }
}
```

## 2) Typed fixtures

Fixture powinien jasno mowic, co wstrzykuje do testu:

```ts
type Fixtures = {
  loginPage: LoginPage;
};
```

## 3) Dane testowe przez factory

Lepsze od duzych statycznych plikow JSON:

```ts
function createUser(overrides?: Partial<UserCredentials>): UserCredentials {
  return {
    email: "test@example.com",
    password: "Secret123!",
    role: "viewer",
    ...overrides
  };
}
```

## 4) Typowane helpery do asercji

```ts
async function expectToast(page: Page, message: string): Promise<void> {
  await expect(page.getByRole("status")).toContainText(message);
}
```
