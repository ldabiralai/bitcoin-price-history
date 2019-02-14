import moxios from "moxios";
import getAveragePrice, { calculateAverage } from "./getAveragePrice";
import config from "../config";

describe("getAveragePrice", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should call API", async () => {
    moxios.stubRequest(config.coindeskUrl, {
      status: 200,
      responseText: { bpi: { "2019-01-01": 10 } }
    });

    const result = await getAveragePrice();
    expect(result).toEqual("10.00");
  });

  describe("calculateAverage", () => {
    it("should calculate average price to two decimal places", () => {
      const input = [0, 100, 200];

      expect(calculateAverage(input)).toEqual("100.00");
    });
  });
});
