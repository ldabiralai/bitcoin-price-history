const { Before, AfterAll } = require("cucumber");

const driver = require("./driver");
const setDefaultMocks = require("./setDefaultMocks");

Before(async () => {
  await setDefaultMocks();
});

AfterAll(() => {
  driver.quit();
});
