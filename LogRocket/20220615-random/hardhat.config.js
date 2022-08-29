require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
       accounts: ["0x07e47d743c1708fb363e25bb2d1687f3c38ac16fdc0ed7cf8503ce5b5468640d"]
    }
  }

};
