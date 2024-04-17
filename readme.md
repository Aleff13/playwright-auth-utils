
# Playwright auth utils

This module exports AuthUtils with two capabilities: saving a session and injecting a session into a page.

# Example

```ts
  import { AuthUtils } from 'playwright-auth-utils';

  test('has title', async ({ page, browser }) => {
    const pathToFileSession = "path/file.json"

    await page.goto('https://playwright.dev/');

    await AuthUtils.setSession(page, pathToFileSession)

    const authenticatedPage = await AuthUtils.getAuthenticatedPage(browser, pathToFileSession)

  });
```