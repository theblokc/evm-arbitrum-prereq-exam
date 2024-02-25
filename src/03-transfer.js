const { JsonRpcProvider, Wallet, parseEther } = require("ethers");

const PRIVATE_KEY = ??;
const DESTINATION_WALLET = ??;
const JSON_RPC_URL = ??;

async function main() {
  const provider = new JsonRpcProvider(JSON_RPC_URL);

  let wallet = new Wallet(PRIVATE_KEY, provider);

  // just transfer a 'test' amount
  let amountInEther = "0.001";

  let tx = {
    to: DESTINATION_WALLET,
    value: parseEther(amountInEther),
  };

  const txObj = await wallet.sendTransaction(tx);
  console.log("tx submitted", txObj.hash);
}

main().then().catch(console.error);
