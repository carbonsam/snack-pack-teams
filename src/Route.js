export default class Route {
  constructor(turnContext) {
    this.turnContext = turnContext;
    this.messageText = turnContext.activity.text;
    this.memberId = turnContext.activity.from.id;
    this.hasMatchedARoute = false;
  }

  includes(text, callback) {
    if (!this.messageText.includes(text)) {
      return;
    }

    this.hasMatchedARoute = true;
    callback(this.turnContext, this.messageText, this.memberId);
  }

  otherwise(callback) {
    if (!this.hasMatchedARoute) {
      callback(this.turnContext, this.messageText, this.memberId);
    }
  }
}
