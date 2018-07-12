const Context = require('./Context')
const Papago = require('../utils/Papago')
const papago = new Papago()

module.exports = class TranslateContext extends Context {

  reply(text, dialog, type) {
    return this.translateText(text)
  }

  async translateText(text1) {
    try {
      const text  = await papago.translateText(text1)
      return { message: { text } }
    } catch (err) {
      throw new Error('translateText: translate text error')
    }
  }
}

