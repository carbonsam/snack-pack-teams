const getConfig = () =>
  process.env.APP_ID
    ? {
        app: {
          baseUri: process.env.APP_BASE_URI,
          appId: process.env.APP_ID
        },
        bot: {
          appId: process.env.BOT_APP_ID,
          appPassword: process.env.BOT_APP_PASSWORD
        }
      }
    : require('../../config/app.json');

module.exports = getConfig;
