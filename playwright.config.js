// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,

  retries: 0,

  use: {
    headless: true,
    baseURL: 'https://practicetestautomation.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],

  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports' }],
  ],
});
