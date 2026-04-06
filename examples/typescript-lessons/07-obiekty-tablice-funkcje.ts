// 07: Obiekty, tablice i funkcje.
// Uruchom: npm run learn:07

interface Scenario {
  name: string;
  expectedStatus: number;
}

const scenarios: Scenario[] = [
  { name: "valid login", expectedStatus: 200 },
  { name: "invalid password", expectedStatus: 401 }
];

function printScenario(scenario: Scenario): void {
  console.log(`Scenariusz: ${scenario.name}, status: ${scenario.expectedStatus}`);
}

for (const scenario of scenarios) {
  printScenario(scenario);
}
