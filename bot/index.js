const builder = require('botbuilder');
const teams = require('botbuilder-teams');
const getConfig = require('../utilities/config');

const CONFIG = getConfig();

const setup = app => {
  const connector = new teams.TeamsChatConnector({
    appId: CONFIG.bot.appId,
    appPassword: CONFIG.bot.appPassword
  });

  const inMemoryBotStorage = new builder.MemoryBotStorage();

  const bot = new builder.UniversalBot(connector, session => {
    let text = teams.TeamsMessage.getTextWithoutMentions(session.message);
    session.send('You said: %s', text);
  }).set('storage', inMemoryBotStorage);

  module.exports.connector = connector;
};

setup();
