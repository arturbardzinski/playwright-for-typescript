import { expect, test } from "../fixtures/base";

test.describe("Zooplus category filters", () => {
  test.skip(
    ({ browserName }) => browserName !== "chromium",
    "External Zooplus smoke test runs in Chromium."
  );

  test("opens cat wet food category and applies a brand filter", async ({ page, zooplusPage }) => {
    test.setTimeout(60_000);

    await zooplusPage.goto();
    await zooplusPage.openCatsCategory();
    await zooplusPage.openWetCatFoodCategory();
    await zooplusPage.assertWetFoodFiltersVisible();
    await zooplusPage.selectVisibleBrandFilter("4vets");

    await expect(page).toHaveURL(/karma_dla_kota_mokra/);
  });
});
