import { expect, Page } from "@playwright/test";

export class ZooplusPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.blockHeavyAssets();
    await this.page.goto("https://www.zooplus.pl/", { waitUntil: "domcontentloaded" });
    await this.acceptCookiesIfVisible();
  }

  async openCatsCategory(): Promise<void> {
    await this.acceptCookiesIfVisible();
    await this.page
      .getByRole("link", { name: /^Koty$/ })
      .first()
      .click();
    await expect(this.page).toHaveURL(/\/shop\/koty/);
  }

  async openWetCatFoodCategory(): Promise<void> {
    await this.acceptCookiesIfVisible();
    await this.page
      .getByRole("region", { name: "Wybierz kategorię" })
      .getByRole("link", { name: "Karma mokra dla kota" })
      .click();

    await expect(this.page).toHaveURL(/karma_dla_kota_mokra/);
    await this.acceptCookiesIfVisible();
    await expect(
      this.page.getByRole("heading", { name: "Karma mokra dla kota", exact: true })
    ).toBeVisible();
  }

  async assertWetFoodFiltersVisible(): Promise<void> {
    await this.acceptCookiesIfVisible();
    await expect(this.page.getByRole("button", { name: "Marka", exact: true })).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Rodzaj zniżki", exact: true })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Rodzaj karmy", exact: true })
    ).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Cena", exact: true })).toBeVisible();
  }

  async selectVisibleBrandFilter(brandName: string): Promise<void> {
    await this.acceptCookiesIfVisible();
    const brandFilter = this.page.getByRole("checkbox", { name: brandName }).first();

    await expect(brandFilter).toBeVisible();
    await brandFilter.check();
    await expect(this.page).toHaveURL(
      new RegExp(`karma_dla_kota_mokra(?:/${brandName}|\\?filters=.*brand%3D${brandName})`, "i")
    );
  }

  private async acceptCookiesIfVisible(): Promise<void> {
    const consentButton = this.page
      .getByRole("button", { name: /akceptuj|zaakceptuj|zgadzam|accept/i })
      .first();

    if (await consentButton.isVisible({ timeout: 1_000 }).catch(() => false)) {
      await consentButton.click();
    }
  }

  private async blockHeavyAssets(): Promise<void> {
    await this.page.route("**/*", async (route) => {
      const resourceType = route.request().resourceType();

      if (["font", "image", "media"].includes(resourceType)) {
        await route.abort();
        return;
      }

      await route.continue();
    });
  }
}
