import { Request, Response } from 'express'
import fetch from 'node-fetch'

const API_URI = process.env.API_URI || 'http://localhost:5000'

interface ContactMessage {
  name: string
  email: string
  message: string
}

const sendEmail = async (req: ContactMessage) => {
  const { name, email, message } = req
  await fetch(API_URI, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  })
    .then((res) => {
      if (res.status === 200) {
        return res.ok
      }
    })
    .catch((error) => {
      console.error(error)
    })
}

export default async function handler(req: Request, res: Response) {
  const { body, method } = req

  const { name, email, message, captcha } = body

  if (method === 'POST') {
    if (!name || !email || !message || !captcha) {
      return res.status(422).json({
        message: 'Unprocessable request, please provide the required fields'
      })
    }

    try {
      const response = await fetch('https://hcaptcha.com/siteverify', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `response=${captcha}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
        method: 'POST'
      })
      const captchaValidation: any = await response.json()
      if (captchaValidation.success) {
        sendEmail({ name, email, message })
        return res.status(200).send('ok')
      }

      return res.status(422).json({
        message: 'Invalid captcha'
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Internal server error'
      })
    }
  }
  return res.status(404).send('Not found')
}
