import Configstore from 'configstore';

const config = {
  configStore: new Configstore('ethstats-cli111'),
  configurator: {
    url: 'http://localhost:3003'
  },
  server: {
    net: 'hsc'
  },
  client: {
    url: 'http://localhost:8545'
  },
  logger: {
    showErrors: true,
    showInfos: false,
    showDebugs: false
  }
};

export default config;
