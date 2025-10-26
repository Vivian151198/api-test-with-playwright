const { test } = require("@playwright/test");

/*
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
*/
test("Should be send a PUT method", async ({ request }) => {
  //Construct the data
  const URL = "https://jsonplaceholder.typicode.com/posts/1";
  const putContent = {
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  };
  const options = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    data: putContent,
  };

  // Send a PUT request
  const response = await request.put(URL, options);
  console.log("🚀 ~ response:", response);
  console.log(response.status());
  const bodyJson = await response.json();
  console.log("🚀 ~ bodyJson:", bodyJson);
  //Verification
});
