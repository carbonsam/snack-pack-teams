const axios = require('axios');
const apiEndpoint = require('../apiEndpoint');

export default async function addNewMember(turnContext, messageText, memberId) {
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
        `ERROR - ${error.response.data.message} (${error.response.status})`
      );

      await turnContext.sendActivity(
        'Sorry, there was an issue adding you to the Snack Pack list 🙁'
      );
    });
}
