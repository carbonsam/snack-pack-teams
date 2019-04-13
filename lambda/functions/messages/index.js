const { responseSuccess } = require('../../utilities/responses');

export const receiveMessage = async (event, context) =>
  responseSuccess({
    message: 'Message received'
  });
