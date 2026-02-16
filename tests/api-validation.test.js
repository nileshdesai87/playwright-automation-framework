const { test, expect } = require('@playwright/test');
const fetch = require('node-fetch');

test('GET /api/health', async () => {
  const response = await fetch('https://example.com/api/health');
  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data.status).toBe('ok');
});
