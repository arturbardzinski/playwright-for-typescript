import { expect, Locator, Page } from "@playwright/test";

export async function clickAndWaitForUrl(
  page: Page,
  trigger: Locator,
  urlPattern: RegExp
): Promise<void> {
  await Promise.all([page.waitForURL(urlPattern), trigger.click()]);
}

export async function expectVisibleText(locator: Locator, text: string): Promise<void> {
  await expect(locator).toBeVisible();
  await expect(locator).toContainText(text);
}
