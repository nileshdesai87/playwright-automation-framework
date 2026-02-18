import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';

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