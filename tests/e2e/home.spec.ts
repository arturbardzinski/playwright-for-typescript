import { expect, test } from "../fixtures/base";
import { testData } from "../../src/utils/testData";

test.describe("Playwright docs homepage", () => {
  test("opens docs from home page", async ({ homePage, page }) => {
    await homePage.goto();
    await homePage.assertTitleContains(testData.searchPhrase);
    await homePage.openGetStarted();

    await expect(page).toHaveURL(/.*intro/);
    await expect(page.getByRole("heading", { name: testData.expectedDocHeading })).toBeVisible();
  });
});
