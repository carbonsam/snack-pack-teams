[![Maintainability](https://api.codeclimate.com/v1/badges/381dbdb53d6dc7d5eae8/maintainability)](https://codeclimate.com/github/carbonsam/snack-pack-teams/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/381dbdb53d6dc7d5eae8/test_coverage)](https://codeclimate.com/github/carbonsam/snack-pack-teams/test_coverage)

# Snack Pack Bot :school_satchel:

Teams bot that helps team members get connected and stay connected.

Based on https://github.com/OfficeDev/msteams-samples-hello-world-nodejs

## Development Setup

_WARNING! Outdated instructions - may not work_

Requires [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/).

1. Clone repository and install dependenices with `yarn install`.
1. Install the App Studio app in Teams.
1. Go to `Manifest Editor > Import an existing app` and select the `src/manifest.json` file to install the app locally.
1. Generate an app password for the bot by clicking the Generate New Password button in `Capabilities > Bots > App passwords`.
1. Setup local development credentials by copying `config/app.example.json` to `config/app.json` and replacing placeholder values.
1. Create an [ngrok account](https://ngrok.com/) and add your auth token.
1. Run `yarn start` to run the app locally.
1. Run `ngrok http 3333 -host-header=localhost:3333` to create a tunnel to allow Teams to connect to your local endpoints.
1. Add your ngrok endpoint to the bot by editing the manifest in `Capabilities > Bots > Messaging endpoint`. Should look like `https://XXXXXXXX.ngrok.io/api/messages`.

# Echo Bot template

This bot has been created using [Bot Framework][1], it shows how to create a simple bot that accepts input from the user and echoes it back.

## Prerequisites

- [Node.js][4] version 10.14 or higher
  ```bash
  # determine node version
  node --version
  ```

# To run the bot locally

- Download the bot code from the Build blade in the Azure Portal (make sure you click "Yes" when asked "Include app settings in the downloaded zip file?").
  - If you clicked "No" you will need to copy all the Application Settings properties from your App Service to your local .env file.
- Install modules
  ```bash
  npm install
  ```
- Run the bot
  ```bash
  npm start
  ```

# Testing the bot using Bot Framework Emulator

[Bot Framework Emulator][5] is a desktop application that allows bot developers to test and debug their bots on localhost or running remotely through a tunnel.

- Install the Bot Framework Emulator version 4.3.0 or greater from [here][6]

## Connect to the bot using Bot Framework Emulator

- Launch Bot Framework Emulator
- File -> Open Bot
- Enter a Bot URL of `http://localhost:3978/api/messages`

# Deploy the bot to Azure

To learn more about deploying a bot to Azure, see [Deploy your bot to Azure][40] for a complete list of deployment instructions.

# Further reading

- [Bot Framework Documentation][20]
- [Bot Basics][32]
- [Azure Bot Service Introduction][21]
- [Azure Bot Service Documentation][22]
- [Deploy Your Bot to Azure][40]
- [Azure CLI][7]
- [msbot CLI][9]
- [Azure Portal][10]
- [Language Understanding using LUIS][11]
- [Restify][30]
- [dotenv][31]

[1]: https://dev.botframework.com
[2]: https://www.typescriptlang.org
[3]: https://www.typescriptlang.org/#download-links
[4]: https://nodejs.org
[5]: https://github.com/microsoft/botframework-emulator
[6]: https://github.com/Microsoft/BotFramework-Emulator/releases
[7]: https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest
[8]: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest
[9]: https://github.com/Microsoft/botbuilder-tools/tree/master/packages/MSBot
[10]: https://portal.azure.com
[11]: https://www.luis.ai
[20]: https://docs.botframework.com
[21]: https://docs.microsoft.com/en-us/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0
[22]: https://docs.microsoft.com/en-us/azure/bot-service/?view=azure-bot-service-4.0
[30]: https://www.npmjs.com/package/restify
[31]: https://www.npmjs.com/package/dotenv
[32]: https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0
[40]: https://aka.ms/azuredeployment
