require("dotenv").config();
const { test, expect } = require("@playwright/test");
const { realpathSync } = require("fs");

test("Test A", async ({ request }) => {
  // await waitForOneSecond();
  console.log("Test A");
});

test("Test B", async ({ request }) => {
  // await waitForOneSecond();
  console.log("Test B");
});

test("Test C", async ({ request }) => {
  // await waitForOneSecond();
  console.log("Test C");
});

// function waitForOneSecond() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("DONE");
//     }, 1000);
//   });
// }
