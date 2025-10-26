const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");
const postContent = require("../test_data/postContent.json");
const multiPostContent = require("../test_data/postContentMulti.json");

test("Should be able to create a new post", async ({ request }) => {
  //Construct the data
  const url = "https://jsonplaceholder.typicode.com/posts";
  // const dataFileLocation = path.resolve(
  //   __dirname,
  //   "../test_data/postContent.json"
  // );
  // const postContent = JSON.parse(fs.readFileSync(dataFileLocation));
  console.log("🚀 ~ postContent:", postContent);
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

test("Should be able to create multi post", async ({ request }) => {
  //Construct the data
  const url = "https://jsonplaceholder.typicode.com/posts";

  for (let postContent of multiPostContent) {
    console.log("🚀 ~ postContent:", postContent);
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
  }
});
