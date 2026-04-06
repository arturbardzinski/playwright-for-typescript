import { expect, Page } from "@playwright/test";

export class PlaywrightHomePage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async openGetStarted(): Promise<void> {
    await this.page.getByRole("link", { name: "Get started" }).first().click();
  }

  async assertTitleContains(text: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(text, "i"));
  }
}
