import { copyFile, mkdir, writeFile } from "fs/promises";
import { TokenConfig } from "./modules/token-config";
import path from "path";
import config from "../config.json";

const build = async (env: string) => {
  const outputPath = path.join(__dirname, "..", config.outputDir);
  const configPath = path.join(__dirname, "../tokens");
  const logoPath = path.join(outputPath, config.logoDir);

  // load tokens
  const tokens = await TokenConfig.loadFromFolder(configPath, env);

  // Create dist folder
  await mkdir(logoPath, {
    recursive: true,
  });

  // Copy image to logo folder
  await Promise.all(
    tokens.map((token) => {
      // source path
      const source = path.join(
        configPath,
        token.networkType,
        token.address,
        "token.png"
      );

      // dest path
      const dest = path.join(logoPath, token.icon);

      return copyFile(source, dest);
    })
  );

  // Write file
  await writeFile(
    path.join(outputPath, `${env}.json`),
    JSON.stringify(tokens, null, 2)
  );

  // print
  console.info(`List ${env.toUpperCase()} tokens: `);
  console.table(tokens, ["name", "symbol", "decimals", "address", "icon"]);
};

const main = async () => {
  await Promise.all([build("testnet"), build("mainnet")]);
};

main();
