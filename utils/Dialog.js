const { ContextFactory } = require('../factories/context.factory')

class Dialog {
  constructor(context = ContextFactory.getContext()) {
    this.context = context
  }
  
  reply(msg, dialog, type) {
    return this.context.reply(msg, dialog, type)
  }
}

module.exports = Dialog
