const { ActivityHandler } = require('botbuilder');

const Route = require('./routes/Route');
const addNewMember = require('./routes/addNewMember');
const notifyOfMisunderstanding = require('./routes/notifyOfMisunderstanding');

class SnackPackBot extends ActivityHandler {
  constructor() {
    super();

    this.onMessage(async turnContext => {
      const route = new Route(turnContext);

      route.includes('join', addNewMember);
      route.otherwise(notifyOfMisunderstanding);
    });

    this.onConversationUpdate(async turnContext => {
      await turnContext.sendActivity('[conversationUpdate]');
    });
  }
}

module.exports.SnackPackBot = SnackPackBot;
