const dotenv = require('dotenv');
const path = require('path');
const restify = require('restify');

const { BotFrameworkAdapter } = require('botbuilder');
const { SnackPackBot } = require('./bot');

// Import required bot configuration
const ENV_FILE = path.join(__dirname, '.env');
dotenv.config({ path: ENV_FILE });

// Create HTTP server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`\n${server.name} listening to ${server.url}`);
  console.log(
    `\nGet Bot Framework Emulator: https://aka.ms/botframework-emulator`
  );
  console.log(`\nTo talk to your bot, open the emulator select "Open Bot"`);
  console.log(`\nSee https://aka.ms/connect-to-bot for more information`);
});

// Create adapter
const adapter = new BotFrameworkAdapter({
  appId: process.env.MicrosoftAppId,
  appPassword: process.env.MicrosoftAppPassword,
  channelService: process.env.ChannelService,
  openIdMetadata: process.env.BotOpenIdMetadata
});

// Catch-all for errors
adapter.onTurnError = async (context, error) => {
  // This check writes out errors to console log .vs. app insights.
  console.error(`\n [onTurnError]: ${error}`);
  // Send a message to the user
  await context.sendActivity(`Oops. Something went wrong!`);
};

// Create the main dialog
const SnackPackBot = new SnackPackBot();

// Listen for incoming requests
server.post('/api/messages', (req, res) => {
  adapter.processActivity(req, res, async context => {
    await SnackPackBot.run(context);
  });
});
