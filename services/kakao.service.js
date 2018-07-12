const { ContextFactory, IntentType } = require('../factories/context.factory')
const Papago = require('../utils/Papago')
const papago = new Papago()

module.exports = class KakaoService {

  getReply({ content, dialog, type }) {
    if (content === IntentType.READY_LANG_CHANGE) {
      dialog.context = ContextFactory.getContext(IntentType.READY_LANG_CHANGE)
    }
    return dialog.reply(content, dialog, type)
  }

}

