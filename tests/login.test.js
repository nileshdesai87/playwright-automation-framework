const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://practicetestautomation.com/practice-test-login/');
  });

  test('Valid login', async ({ page }) => {
    await loginPage.login('student', 'Password123');
    await expect(page).toHaveURL('/logged-in-successfully/');
  });
});