const axios = require('axios');
const { ActivityHandler } = require('botbuilder');

const apiEndpoint =
  'https://3hwcgjxm60.execute-api.us-east-1.amazonaws.com/prod/api/members';

class SnackPackBot extends ActivityHandler {
  constructor() {
    super();

    this.onMessage(async turnContext => {
      const messageText = turnContext.activity.text;
      const memberId = turnContext.activity.from.id;

      if (messageText.includes('join')) {
        await turnContext.sendActivity(
          'Great! Adding you to the Snack Pack waiting list now...'
        );

        await axios
          .post(apiEndpoint, {
            memberId,
            organizationId: 'TEST'
          })
          .then(async response => {
            console.log(response.data);

            await turnContext.sendActivity(
              'Congrats! You will be notified as soon as we find a matching group 😎'
            );
          })
          .catch(async error => {
            console.log(
              `ERROR - ${error.response.data.message} (${
                error.response.status
              })`
            );

            await turnContext.sendActivity(
              'Sorry, there was an issue adding you to the Snack Pack list 🙁'
            );
          });
      } else {
        await turnContext.sendActivity(
          "Sorry, we're not sure how to interpret that message 🤷‍"
        );
      }
    });

    this.onConversationUpdate(async turnContext => {
      await turnContext.sendActivity('[conversationUpdate]');
    });
  }
}

module.exports.SnackPackBot = SnackPackBot;
