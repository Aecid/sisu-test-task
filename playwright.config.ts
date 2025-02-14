import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  workers: 4,
  retries: 1,

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['allure-playwright'],
  ],

  use: {
    headless: true,
    baseURL: 'https://epicbet.com/',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  }
});
