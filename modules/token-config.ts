import { readFile, readdir } from "fs/promises";
import path from "path";
import { plainToInstance } from "class-transformer";
import * as hasha from "hasha";
import { existsSync } from "fs";

export interface ISocialUrl {
  twitter: string;
  medium: string;
  github: string;
  telegram: string;
}

export class TokenConfig {
  name: string;

  symbol: string;

  decimals: number;

  address: string;

  description: string;

  icon: string;

  totalSupply: string;

  website: string;

  whitePaper: string;

  socialUrl: ISocialUrl;

  networkType: string;

  public static async loadFromFolder(
    configPath: string,
    env = "testnet"
  ): Promise<TokenConfig[]> {
    const envConfigPath = path.join(configPath, env);

    if (!existsSync(envConfigPath)) return [];

    const tokens = (
      await readdir(envConfigPath, {
        withFileTypes: true,
      })
    )
      .filter((direct) => direct.isDirectory())
      .map((direct) => direct.name);

    const filesData = await Promise.all(
      tokens.map((token) => {
        return readFile(path.join(envConfigPath, token, "info.json"));
      })
    );

    const configurations: TokenConfig[] = [];
    for (const id in tokens) {
      const address = tokens[id];

      // calculate icon file name
      const icon = `${hasha.fromFileSync(
        path.join(envConfigPath, tokens[id], "token.png"),
        {
          algorithm: "sha1",
        }
      )}.png`;

      configurations.push(
        plainToInstance(TokenConfig, {
          ...JSON.parse(filesData[id].toString()),
          address,
          icon,
          networkType: env,
        })
      );
    }

    return configurations;
  }
}
