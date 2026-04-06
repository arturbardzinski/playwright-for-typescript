import { expect, test } from "@playwright/test";

test.describe("GitHub API smoke tests", () => {
  test("returns basic data for Playwright repository", async ({ request }) => {
    const response = await request.get("https://api.github.com/repos/microsoft/playwright");

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const payload = await response.json();
    expect(payload.full_name).toBe("microsoft/playwright");
    expect(payload).toHaveProperty("stargazers_count");
  });
});
