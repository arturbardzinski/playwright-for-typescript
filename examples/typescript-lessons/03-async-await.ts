// 03: async/await - podstawy asynchronicznego kodu.
// Uruchom: npm run learn:03

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fakeLogin(email: string): Promise<string> {
  await wait(300);
  return `Zalogowano uzytkownika: ${email}`;
}

async function run(): Promise<void> {
  console.log("Start logowania...");
  const result = await fakeLogin("tester@example.com");
  console.log(result);
  console.log("Koniec.");
}

void run();
