const { TranslateContext, ReadyToChangeLangContext } = require('../contexts')
class ContextFactory {
  static getContext(type) {
    switch(type) {
      case IntentType.READY_LANG_CHANGE:
        return new ReadyToChangeLangContext()
      default:
        return new TranslateContext()
    }
  }
}

const IntentType = {
  READY_LANG_CHANGE: '번역언어 변경'
}

module.exports = { ContextFactory, IntentType } 
