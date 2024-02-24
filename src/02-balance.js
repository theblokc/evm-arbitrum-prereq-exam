const { JsonRpcProvider } = require("ethers");

const WALLET_ADDRESS = ??;
const JSON_RPC_URL = ??;

async function main() {
  const provider = new JsonRpcProvider(JSON_RPC_URL);
  const balance = await provider.getBalance(WALLET_ADDRESS);
  console.log("balance is ", balance);
}

main().then().catch(console.error);
