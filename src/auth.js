class AuthUtils {
  static async setSession(page, path) {
    await page.context().storageState({ path });
  }

  static async getAuthenticatedPage(browser, path) {
    const browserContext = await browser.newContext({
      storageState: path,
    });

    const authPage = await browserContext.newPage();
    return authPage;
  }
}

module.exports = AuthUtils;