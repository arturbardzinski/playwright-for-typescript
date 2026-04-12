import { test as base } from "@playwright/test";
import { PlaywrightHomePage } from "../../src/pages/PlaywrightHomePage";
import { ZooplusPage } from "../../src/pages/ZooplusPage";

type Fixtures = {
  homePage: PlaywrightHomePage;
  zooplusPage: ZooplusPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new PlaywrightHomePage(page));
  },
  zooplusPage: async ({ page }, use) => {
    await use(new ZooplusPage(page));
  }
});

export { expect } from "@playwright/test";
