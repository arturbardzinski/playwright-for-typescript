// 10: Mini symulacja "flow testu" bez odpalania prawdziwej przegladarki.
// W terminalu (nie w pliku .ts): npm run learn:10
// Albo Code Runner / ts-node na tym pliku — nie zaznaczaj samej linii z "npm", to polecenie powloki, nie TypeScript.

type StepResult = "passed" | "failed";

interface Step {
  name: string;
  result: StepResult;
}

function summarize(steps: Step[]): void {
  const passed = steps.filter((step) => step.result === "passed").length;
  const failed = steps.length - passed;
  console.log(`Kroki: ${steps.length}, passed: ${passed}, failed: ${failed}`);
}

const steps: Step[] = [
  { name: "open page", result: "passed" },
  { name: "fill form", result: "passed" },
  { name: "assert success message", result: "passed" }
];

summarize(steps);
