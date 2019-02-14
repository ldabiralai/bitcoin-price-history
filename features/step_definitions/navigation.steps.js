const { Given } = require("cucumber");

const driver = require("../support/driver");

Given(/^I visit the home page$/, async () => {
  return driver.get("http://localhost:3000");
});
