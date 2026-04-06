// 06: Zmienne, warunki i petle - totalna baza.
// Uruchom: npm run learn:06

const environments = ["local", "staging", "prod"] as const;
type EnvironmentName = (typeof environments)[number];
const current: EnvironmentName = environments[Math.floor(Math.random() * environments.length)];

if (current === "prod") {
  console.log("Uwaga: testy na produkcji wymagaja ostroznosci.");
} else {
  console.log("Srodowisko testowe:", current);
}

for (const env of environments) {
  console.log("Dostepne env:", env);
}
