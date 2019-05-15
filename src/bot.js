const { ActivityHandler } = require('botbuilder');

class SnackPackBot extends ActivityHandler {
  constructor() {
    super();
  }

  onMessage = async turnContext => {
    await turnContext.sendActivity(`You said '${turnContext.activity.text}'`);
  };

  onConversationUpdate = async turnContext => {
    await turnContext.sendActivity('[conversationUpdate event detected]');
  };
}

module.exports.SnackPackBot = SnackPackBot;
