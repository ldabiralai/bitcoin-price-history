interface Config {
  [key: string]: ConfigEntry;
}

interface ConfigEntry {
  coindeskUrl: string;
}

const config: Config = {
  development: {
    coindeskUrl: "http://localhost:7001/v1/bpi/historical/close.json"
  },
  production: {
    coindeskUrl: "https://api.coindesk.com/v1/bpi/historical/close.json"
  }
};

export default config[process.env.NODE_ENV] || config.development;
