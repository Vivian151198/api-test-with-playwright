const { test, expect } = require("@playwright/test");

test("Should be able to send a GET method", async ({ request }) => {
  //Send GET request
  let response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // Extract response data
  const status = response.status();
  const jsonResponse = await response.json();
  let randomIndex = Math.floor(Math.random() * jsonResponse.length);
  //   console.log(jsonResponse);
  //   const resBody = await response.body();
  //   console.log(JSON.parse(resBody));

  //.json() --> await
  //.body() : Buffer 010190201841478134

  const randomPost = jsonResponse[randomIndex];
  console.log("🚀 ~ randomPost:", randomPost);
  //   {
  //   userId: 1,
  //   id: 1,
  //   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //   body: 'quia et suscipit\n' +
  //     'suscipit recusandae consequuntur expedita et cum\n' +
  //     'reprehenderit molestiae ut ut quas totam\n' +
  //     'nostrum rerum est autem sunt rem eveniet architecto'
  // }

  //Destructure technique: Ra du lieu cua randomPost ra
  const { userId, id, title, body } = randomPost;

  //Verification
  expect(status).toBe(200);
  expect(jsonResponse.length).toBeGreaterThan(1);
  expect(userId).toBeTruthy();
  expect(id).toBeTruthy();
  expect(title).toBeTruthy();

  // NOTE: Marking this failed intentionally
  expect(body).toBe("sfdhsdf");
});
