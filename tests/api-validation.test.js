const { test, expect } = require('@playwright/test');
const fetch = require('node-fetch');

test('GET objects/7', async ({ request }) => {

  const response = await request.get('https://api.restful-api.dev/objects/7');

  expect(response).toBeOK();

  const data = await response.json();
  console.log(await response.json());

//  expect(data.status).toBe('ok');

});
