import axios from "axios";

import config from "../config";

export default async () => {
  const { data } = await axios.get(config.coindeskUrl);
  const { bpi: prices } = data;

  const totalPrice = Object.values(prices).reduce((total, amount) => {
    return total + amount;
  }, 0);
  const averagePrice = (totalPrice / 30).toFixed(2);

  return averagePrice;
};
