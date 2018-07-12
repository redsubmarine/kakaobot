const Context = require('./Context')

module.exports = class ReadyToChangeLangContext extends Context {
  reply(text, dialog) {
    return Promise.resolve({
      message: {
        text: '번역 가능한 언어목록'
      },
      keyboard: {
        type: 'buttons',
        buttons: ['한국어->영어', '한국어->프랑스어']
      }
    })
  }
}
