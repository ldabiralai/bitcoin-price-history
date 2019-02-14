const { Then } = require("cucumber");
const { By } = require("selenium-webdriver");

const driver = require("../support/driver");

Then(/^I should see:$/, async table => {
  const textToFind = table.raw();
  const body = await driver.findElement(By.tagName("body"));
  let searchText = await body.getText();

  for (let row of textToFind) {
    for (let searchTerm of row) {
      const position = searchText.indexOf(searchTerm);
      const textExists = position > -1;

      if (textExists) {
        searchText = searchText.substr(
          position + searchTerm.length,
          searchText.length
        );
      } else {
        throw new Error(`Could not find: '${searchTerm}' in '${searchText}'`);
      }
    }
  }
});
