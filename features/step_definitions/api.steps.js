const { Given } = require("cucumber");
const simulado = require("simulado");

Given(/^the API fails$/, async () => {
  await simulado.setMock({
    path: "/v1/bpi/historical/close.json",
    status: 500
  });
});
