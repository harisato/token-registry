# Token Registry

## Submit token

- Fork a repository
- Create a folder in `tokens/${env}/${contract_address}`
- This folder require 2 files:

  - `info.json`

    ```json
      {
        "name": "Serenity Coin",
        "symbol": "AURA",
        "decimals": 6,
        "desc": "Aura Token for the Serenity Chain", // Short description
        "website": "https://aura.network/",
        "links": {  
          "twitter": "https://twitter.com/AuraNetworkHQ",
          "telegram": "https://t.me/AuraNetworkOfficial",
          "linkedIn": "https://www.linkedin.com/company/auranetwork/",
          "github": "https://github.com/aura-nw"
        }
        // Only Twitter / Telegram / LinkedIn / Github are supported
      }
    ```

  - `token.png`: Must be `png`, `transparent-background` and `256 x 256px`

- Submit [new Pull Request](https://github.com/harisato/token-registry/pulls)

## How to use

### 1. Get tokens config

- [Mainnet](https://harisato.github.io/token-registry/mainnet.json)

  `https://harisato.github.io/token-registry/mainnet.json`

- [Testnet](https://harisato.github.io/token-registry/testnet.json)

  `https://harisato.github.io/token-registry/testnet.json`

### 2. Get token icon

  `https://harisato.github.io/token-registry/images/${token.icon}`
