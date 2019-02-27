import axios from "axios";

import config from "../config";

export const calculateAverage = (prices: number[]): string => {
  const totalPrice = prices.reduce((total, amount) => {
    return total + amount;
  }, 0);

  return (totalPrice / prices.length).toFixed(2);
};

export default async (): Promise<string> => {
  const { data } = await axios.get(config.coindeskUrl);
  const { bpi: monthOfPrices } = data;

  return calculateAverage(Object.values(monthOfPrices));
};
