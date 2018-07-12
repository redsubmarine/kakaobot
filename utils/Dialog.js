const { ContextFactory } = require('../factories/context.factory')

module.exports = class Dialog {
  constructor(context = ContextFactory.getContext()) {
    this.context = context
  }
  
  reply(msg, dialog, type) {
    return this.context.reply(msg, dialog, type)
  }
}

