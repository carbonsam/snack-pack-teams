export default async function notifyOfMisunderstanding(turnContext) {
  await turnContext.sendActivity(
    "Sorry, we're not sure how to interpret that message 🤷‍"
  );
}
