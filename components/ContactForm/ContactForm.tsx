import Image from 'next/image'
import { useState, useRef } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'

import Container from '@/components/Container/Container'

import man from '@/images/img3.jpg'
import sentMail from '@/images/sent-mail.svg'
import spinner from '@/images/spinner.svg'

import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [token, setToken] = useState('')

  const hcaptchaRef = useRef(null)

  const clearFields = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const onHCaptchaChange = async (token: string) => {
    if (!token) {
      return
    }
    setToken(token)
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setSending(true)
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message, captcha: token })
      })
      if (response.ok) {
        setSubmitted(true)
        setSending(false)
      } else {
        setSubmitted(false)
        setSending(false)
        const error = await response.json()
        throw new Error(error.message)
      }
    } catch (error) {
      console.error(error)
    } finally {
      clearFields()
    }
  }

  return (
    <section id='contact' className={styles.contact}>
      <Container>
        <div className={styles.contactContent}>
          <div className={styles.contactImageContainer}>
            <Image src={man} alt='man with PC on desk' layout='responsive' />
          </div>
          <div>
            <h2 className={styles.formTitle}>Fale conosco</h2>
            {sending ? (
              <div className={styles.sentMessage}>
                <Image src={spinner} alt='spinner' layout='responsive' />
              </div>
            ) : submitted ? (
              <div>
                <h3>Obrigado</h3>
                <div className={styles.sentMessage}>
                  <Image
                    src={sentMail}
                    alt='icon of an envelope'
                    layout='responsive'
                  />
                </div>
                <p>Retornaremos o contato em breve</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  id='name'
                  type='text'
                  autoComplete='name'
                  placeholder='Seu nome'
                  aria-label='Seu nome'
                  required
                  className={styles.inputField}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  id='email'
                  type='email'
                  placeholder='Seu e-mail'
                  aria-label='Seu e-mail'
                  required
                  className={styles.inputField}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <textarea
                  id='message'
                  name='message'
                  placeholder='Sua mensagem'
                  aria-label='Sua mensagem'
                  className={styles.inputField}
                  required
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
                <HCaptcha
                  ref={hcaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string}
                  onVerify={onHCaptchaChange}
                />
                <input type='submit' value='Enviar' className={styles.submit} />
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
