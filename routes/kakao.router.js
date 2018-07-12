const router = require('express').Router()
const KakaoService = require('../services/kakao.service')
const Dialog = require('../utils/Dialog')

const kakaoService = new KakaoService()
const dialog = new Dialog()

router.get('/keyboard', (req, res) => {
  res.send({
    type: 'buttons',
    buttons: ['번역언어 변경']
  })
})

router.post('/message', async (req, res) => {
  const { content, type } = req.body
  const reply = await kakaoService.getReply({ content, dialog, type })
  res.send(reply)
/*
  if (content === '번역언어 변경') {
    return res.send(kakaoService.getTrLanguages())
  }

  if (content.includes('->')) {
    return res.send(kakaoService.changeLanguage(content))
  }

  kakaoService.translate(content)
    .then(data => res.send(data) )
*/
})

module.exports = router
