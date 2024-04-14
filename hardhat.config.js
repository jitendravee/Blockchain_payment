require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://sepolia.infura.io/v3/1c85cbbe35594ddc92a20e2e33381f83",
      accounts: [
        "4f0882f2865039a3003da17f085fb70163449916c7d19941041e9ce5c449f567",
      ],
    },
  },
};
