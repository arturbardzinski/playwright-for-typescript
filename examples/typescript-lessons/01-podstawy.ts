// 01: Podstawowe typy i funkcje w TypeScript.
// Uruchom: npm run learn:01

const testName: string = "Login smoke";
const retryCount: number = 2;
const isCi: boolean = false;
const tags: string[] = ["smoke", "auth"];

function buildEmail(prefix: string, domain = "example.com"): string {
  return `${prefix}@${domain}`;
}

console.log("Nazwa testu:", testName);
console.log("Retry:", retryCount);
console.log("Czy CI:", isCi);
console.log("Tagi:", tags.join(", "));
console.log("Email:", buildEmail("tester"));
