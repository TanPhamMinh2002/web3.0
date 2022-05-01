//https://eth-ropsten.alchemyapi.io/v2/fzbEgyC_1PnYXQUXQCTjtzJPKSH-FRwu

require('@nomiclabs/hardhat-waffle') 

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/fzbEgyC_1PnYXQUXQCTjtzJPKSH-FRwu',
      accounts: ['735c80db831226f600732fab47e12cfb714ae8cf757a70b27f4f62195b05cfc6']
    }
  }
}