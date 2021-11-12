require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const RINKEBY_RPC_URL =process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


module.exports = {
    defaultNetwork: "rinkeby",
    networks: {
      hardhat: {
      },
      rinkeby: {
        url: RINKEBY_RPC_URL,
        accounts: [PRIVATE_KEY]
      }
    },
    solidity: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    paths: {
      sources: "./contracts",
      tests: "./test",
      cache: "./cache",
      artifacts: "./artifacts"
    },
    mocha: {
      timeout: 20000
    }
  }