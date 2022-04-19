const { test, expect } = require('@playwright/test');

// First test
test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const title = page.locator('.Heading');
  await expect(title).toHaveText('Taskify');
});