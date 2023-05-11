# Token Registry

## Submit token

- Fork a repository
- Create a folder named `${contract_addresss}` in `tokens/${env}/`
- This folder requires 2 files:

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

- Submit [a new Pull Request](https://github.com/aura-nw/token-registry/pulls)

## How to use

### 1. Get tokens config

- [Mainnet](https://aura-nw.github.io/token-registry/mainnet.json)

  `https://aura-nw.github.io/token-registry/mainnet.json`

- [Testnet](https://aura-nw.github.io/token-registry/testnet.json)

  `https://aura-nw.github.io/token-registry/testnet.json`

### 2. Get the token icon

  `https://aura-nw.github.io/token-registry/images/${token.icon}`
