const { Wallet } = require("ethers");
const { createRandom  } = Wallet;

// Step 1 - Create a new wallet using ethers Wallet
// https://docs.ethers.org/v6/api/wallet/
async function main() {
  const wallet = ??
  const { privateKey, address } = wallet;
  console.log("wallet", {
    privateKey,
    address,
  });
  // Sample output
  // wallet {
  //   privateKey: 'xxx',
  //   address: 'xxx'
  // }
}

main().then().catch(console.error);
