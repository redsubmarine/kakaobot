const Context = require('./Context')
const TranslateContext = require('./TranslateContext')

module.exports = class ChangeLangContext extends Context {
  reply(text, dialog) {
    const splitMsg = text.split('->')
    
    dialog.context = new TranslateContext()
    dialog.context.changeLanguage({
      source: splitMsg[0],
      target: splitMsg[1]
    })
  return Promise.resolve({
      message: {
        text: `${text}로 언어가 변경되었습니다.`
      }
    })
  }
}
