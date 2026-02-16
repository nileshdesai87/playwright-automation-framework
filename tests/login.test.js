const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://example.com/login');
  });

  test('Valid login', async () => {
    await loginPage.login('testuser', 'password123');
    await expect(page).toHaveURL('https://example.com/dashboard');
  });
});
