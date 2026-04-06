// 10: Mini symulacja "flow testu" bez odpalania prawdziwej przegladarki.
// Uruchom: npm run learn:10

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
