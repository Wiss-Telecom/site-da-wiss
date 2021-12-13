import Image from 'next/image'
import { useState } from 'react'

import Container from '@/components/Container/Container'
import Row from '@/components/Row/Row'

import man from '@/images/img3.jpg'
import sentMail from '@/images/sent-mail.svg'
import spinner from '@/images/spinner.svg'

import styles from './ContactForm.module.css'

export default function ContactForm() {
  const API_URI =
    'https://us-central1-mail-sender-55e6b.cloudfunctions.net/sendMail'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const sendEmail = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setSending(true)
    let data = { name, email, message }

    await fetch(API_URI, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.status === 200) {
          setSending(false)
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
        }
      })
      .catch((error) => {
        console.error(error)
        setSending(false)
        setSubmitted(false)
      })
  }

  return (
    <Row>
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
                <form className={styles.form} onSubmit={sendEmail}>
                  <input
                    id='name'
                    type='text'
                    autoComplete='name'
                    placeholder='Seu nome'
                    aria-label='Seu nome'
                    required
                    className={styles.inputField}
                  />
                  <input
                    id='email'
                    type='email'
                    placeholder='Seu e-mail'
                    aria-label='Seu e-mail'
                    required
                    className={styles.inputField}
                  />
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Sua mensagem'
                    aria-label='Sua mensagem'
                    className={styles.inputField}
                  ></textarea>
                  <input
                    type='submit'
                    value='Enviar'
                    className={styles.submit}
                  />
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </Row>
  )
}
