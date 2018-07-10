const Papago = require('../utils/Papago')
const papago = new Papago()

module.exports = class KakaoService {
  changeLanguage(message) {

    const splitMessages = message.split('->')
    papago.sourceLangCode = splitMessages[0]
    papago.targetLangCode = splitMessages[1]

    return {
      message: {
        text: `${message}로 언어가 변경되었습니다.`
      }
    }
  }

  getTrLanguages() {
    return {
      message: {
        text: '번역 가능한 언어목록'
      },
      keyboard: {
        type: 'buttons',
        buttons: ['한국어->영어', '한국어->프랑스어']
      }
    }
  }

  translateText(text) {
    return papago.translateText(text)
      .then(data => {
        return { message: { text} }
      })
  }
}
