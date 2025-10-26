const { test, expect } = require("@playwright/test");

test("", async ({ request }) => {
  //Construct the data
  const URL = " https://jsonplaceholder.typicode.com/posts/1";
  //Send a DELETE request
  const response = await request.delete(URL);
  console.log(response.status());
  const jsonBody = await response.json();

  //Verification
  expect(response.status()).toBe(200);
});
