import { TokenConfig } from "./modules/token-config";

const main = async () => {
  const configurations = await TokenConfig.loadFromFolder(
    "./tokens",
    "testnet"
  );
  console.log(configurations);
};

main();
