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
