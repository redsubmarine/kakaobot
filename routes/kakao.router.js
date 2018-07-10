const router = require('express').Router()
const Papago = require('../utils/Papago')

const papago = new Papago()

router.get('/keyboard', (req, res) => {
  res.send({
    type: 'buttons',
    buttons: ['번역언어 변경']
  })
})

router.post('/message', (req, res) => {
  const { content, type } = req.body

  papago.translate(content)
    .then(data => {
      const result = {
        message: { text }
      }
      res.send(result)
    })
})

module.exports = router
