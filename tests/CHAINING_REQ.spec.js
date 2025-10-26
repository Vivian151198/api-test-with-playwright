/*
Create order - Read order detail > Update order > Delete order || CRUD

*/
require("dotenv").config();
const { test, expect } = require("@playwright/test");

test("Should be able to perfrom CRUD on post type", async ({ request }) => {
  //   const baseUrl = "https://jsonplaceholder.typicode.com";
  const baseUrl = process.env.BASE_URL;
  console.log("🚀 ~ baseUrl:", baseUrl);

  const postContent = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  const putContent = {
    title: "Toi la Teo",
    body: "This is my body",
    userId: 1,
  };

  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };

  const postOptions = {
    headers: headers,
    data: postContent,
  };

  const putOptions = {
    headers: headers,
    data: putContent,
  };
  //Create a post

  const postResponse = await request.post(`${baseUrl}/posts`, postOptions);
  const postJsonBody = await postResponse.json();
  console.log("🚀 ~ postJsonBody:", postJsonBody);
  let postId = postJsonBody.id - 1;

  //Reuse the post ID to read the details
  const getResponse = await request.get(`${baseUrl}/posts/${postId}`);
  const getJsonBody = await getResponse.json();
  console.log("🚀 ~ getJsonBody:", getJsonBody);

  // TODO: Verification

  //Update the pb ost
  const putResponse = await request.put(
    `${baseUrl}/posts/${postId}`,
    putOptions
  );
  // TODO: Verification

  //Delete the post
  const deleteResponse = await request.delete(`${baseUrl}/posts/${postId}`);
  // TODO: Verification
});
