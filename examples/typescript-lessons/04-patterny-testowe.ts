// 04: Proste patterny test automation (Page Object + helper).
// Uruchom: npm run learn:04

type UrlPattern = RegExp;

class DemoLoginPage {
  // Krotki komentarz: normalnie tutaj uzywalbys obiektu `Page` z Playwright.
  async goto(): Promise<void> {
    console.log("Przejscie na /login");
  }

  async signIn(email: string, password: string): Promise<void> {
    console.log(`Wypelnianie formularza dla ${email}, haslo: ${"*".repeat(password.length)}`);
    console.log("Klik Sign in");
  }
}

async function clickAndWaitForUrl(urlPattern: UrlPattern): Promise<void> {
  // Krotki komentarz: odpowiednik Promise.all([waitForURL, click]).
  console.log("Czekam na URL:", urlPattern);
}

async function run(): Promise<void> {
  const page = new DemoLoginPage();
  await page.goto();
  await page.signIn("tester@example.com", "Secret123!");
  await clickAndWaitForUrl(/dashboard/);
}

void run();
