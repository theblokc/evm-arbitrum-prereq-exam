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
  // Sample output (DO NOT USE THIS KEYPAIR!!!)
  // wallet {
  //   privateKey: '0xdf923254e3ff1633a083e0c5b40cd7a842af1174d17c72d8a5a4ae950def162c',
  //   address: '0x19FDB5f594Ec3451a1640746C00f706A63A598BD'
  // }
}

main().then().catch(console.error);
