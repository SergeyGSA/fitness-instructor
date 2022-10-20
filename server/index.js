const express = require('express')
const cors = require('cors')
const axios = require('axios').default
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080
const TG_SEND_MESSAGE_URL = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`
const socialLinks = {
  instagram: 'https://www.instagram.com/',
}

app.use(express.json())
app.use(cors())

app.post('/api/request', async (req, res) => {
  let message = `<b>Заявка с сайта!</b>\n`

  message += `<u><b>Имя: </b></u> ${req.body.name}\n`
  message += `<u><b>Услуга: </b></u> ${req.body.services}\n`
  message += `<u><b>Тип обратной связи: </b></u> ${req.body.feedbackType}\n`

  // If user select instagram we add instagram link to acc
  message += `<u><b>Аккаунт: </b></u> <a>${
    req.body.feedbackType === 'Инстаграм' ? socialLinks.instagram : ''
  }${req.body.account}</a>
  `

  // Optional comments
  if (req.body.comments) {
    message += `<u><b>Комментарии: </b></u> ${req.body.comments}`
  }

  try {
    await axios.post(TG_SEND_MESSAGE_URL, {
      chat_id: process.env.CHAT_ID,
      text: message,
      parse_mode: 'html',
    })

    res.status(200).json({ message: 'Заявка успешно создана' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server has been started at port ${PORT}`)
})
