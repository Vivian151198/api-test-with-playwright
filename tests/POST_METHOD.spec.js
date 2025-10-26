/*
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  console.log("🚀 ~ response:", response)
  console.log("🚀 ~ response:", response)
  .then((json) => console.log(json));
*/

const { test, expect } = require("@playwright/test");

test("Should be able to creat a new post", async ({ request }) => {
  //Construct the data
  const url = "https://jsonplaceholder.typicode.com/posts";
  const postContent = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  const options = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    data: postContent,
  };

  //Send a POST request
  const response = await request.post(url, options);
  const responseBody = await response.json();

  //Verification
  expect(response.status()).toBe(201);
  const { title, body, userId, id } = responseBody;
  expect(title).toBe(postContent.title);
  expect(body).toBe(postContent.body);
  expect(userId).toBe(postContent.userId);
  expect(id).toBeTruthy();
});
