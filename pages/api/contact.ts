require('dotenv').config()
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function mailer (req: NextApiRequest, res: NextApiResponse) {
  const EMAIL_HOST = process.env.NEXT_PUBLIC_EMAIL_HOST
  const EMAIL_ACCOUNT = process.env.NEXT_PUBLIC_EMAIL_ACCOUNT
  const PASSWORD = process.env.NEXT_PUBLIC_EMAIL_PASSWORD

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_ACCOUNT,
      pass: PASSWORD
    }
  })

  const mailData = {
    from: `${req.body.email}`,
    to: 'thiago@wisstelecom.com.br',
    subject: `Mensagem recebida no site de ${req.body.name}`,
    text: req.body.message,
    html: `
      <p>Mensagem de: ${req.body.name}</p>
      <p>Responder para: ${req.body.email}</p>
      <div>${req.body.message}</div>
    `
  }

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err)
    else console.log(info)
  })
  res.status(200).end()
}
