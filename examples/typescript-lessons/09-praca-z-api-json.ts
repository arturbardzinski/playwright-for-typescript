// 09: Podstawowe myslenie o odpowiedzi API.
// Uruchom: npm run learn:09

interface HealthResponse {
  status: "ok" | "fail";
  version: string;
}

function validateHealth(payload: HealthResponse): string {
  if (payload.status !== "ok") {
    return "API nie jest gotowe";
  }
  return `API dziala, wersja: ${payload.version}`;
}

const samplePayload: HealthResponse = {
  status: "ok",
  version: "1.2.0"
};

console.log(validateHealth(samplePayload));
