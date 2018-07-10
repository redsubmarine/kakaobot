const router = require('express').Router()

router.get('/keyboard', (req, res) => {
  res.send({
    type: 'buttons',
    buttons: ['번역언어 변경']
  })
})

module.exports = router
