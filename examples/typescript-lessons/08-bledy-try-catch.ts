// 08: Obsluga bledow przez try/catch.
// Uruchom: npm run learn:08

async function parseJsonSafely(input: string): Promise<unknown> {
  try {
    return JSON.parse(input);
  } catch {
    return { error: "Niepoprawny JSON" };
  }
}

async function run(): Promise<void> {
  const good = await parseJsonSafely('{"status":"ok"}');
  const bad = await parseJsonSafely("{status:ok}");
  console.log("Poprawny JSON:", good);
  console.log("Niepoprawny JSON:", bad);
}

void run();
