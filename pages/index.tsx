import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/wiss-logo.svg'
import facebook from '../public/facebook.svg'
import instagram from '../public/instagram.svg'
import user from '../public/user.svg'
import up from '../public/up.svg'
import messageSent from '../public/message_sent.svg'

export default function Home() {
  const API_URI =
    'https://us-central1-mail-sender-55e6b.cloudfunctions.net/sendMail'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [isAsideOpen, setIsAsideOpen] = useState(false)

  const handleContactButtonClick = () => {
    setIsAsideOpen(!isAsideOpen)
  }

  const handleAnotherMessageClick = () => {
    setSubmitted(!submitted)
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    let data = {
      name,
      email,
      message
    }

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
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Wiss Telecom - Internet para quem precisa</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo_container}>
          <Image
            className={styles.logo}
            alt='Company Logo'
            src={logo}
            layout='responsive'
          />
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Estamos construindo um novo site para você.
        </h1>
        <div className={styles.customer_area_link}>
          <p>
            Central do Assinante?
            <a href='https://radiusnet.wisstelecom.com.br/radiusnet/cda/login.php'>
              {' '}
              <span>Clique aqui.</span>
            </a>
          </p>
        </div>
        <div className={styles.buttons_container}>
          <a
            href='https://wa.me/5519999749477?text=Olá,%20tudo%20bem?'
            className={`${styles.contact_button} ${styles.whatsapp_button}`}
          >
            Fale conosco pelo Whatsapp
          </a>
          <button
            className={styles.contact_button}
            onClick={handleContactButtonClick}
          >
            Envie-nos uma mensagem
          </button>
        </div>
      </main>
      <aside
        className={`${styles.aside} ${isAsideOpen ? styles.aside_show : ''}`}
      >
        <div className={styles.form_top}>
          <div
            className={`${styles.close_form} ${
              isAsideOpen ? styles.close_form_open : ''
            }`}
            onClick={handleContactButtonClick}
          >
            <Image
              className={styles.icon}
              alt='Up arrow'
              src={up}
              width={44}
              height={38}
            />
          </div>
        </div>
        {submitted ? (
          <>
            <div className={styles.message_sent_container}>
              <Image
                className={styles.message_sent}
                alt='Envelope'
                src={messageSent}
                layout='responsive'
              />
            </div>
            <h3 className={`${styles.title} ${styles.form_title}`}>
              Agradecemos por seu contato.
            </h3>
            <p className={styles.text}>Entraremos em contato em breve!</p>
            <button
              className={styles.submit}
              onClick={handleAnotherMessageClick}
            >
              Enviar nova mensagem
            </button>
          </>
        ) : (
          <>
            <h3 className={`${styles.title} ${styles.form_title}`}>
              Envie sua mensagem
            </h3>
            <form className={styles.contact_form}>
              <input
                id='name'
                type='text'
                autoComplete='name'
                placeholder='Seu nome'
                required
                onChange={(e) => setName(e.target.value)}
                className={styles.input_field}
              />
              <input
                id='email'
                type='email'
                placeholder='Seu e-mail'
                required
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input_field}
              />
              <textarea
                id='message'
                name='message'
                placeholder='Sua mensagem'
                onChange={(e) => setMessage(e.target.value)}
                className={styles.input_field}
              ></textarea>
              <input
                type='submit'
                value='Enviar'
                onClick={(e) => handleSubmit(e)}
                className={styles.submit}
              />
            </form>
          </>
        )}
      </aside>
      <footer className={styles.footer}>
        <div className={styles.social_media_icons_container}>
          <a href='https://www.facebook.com/wisstelecom'>
            <Image
              className={styles.icon}
              alt='Facebook icon'
              src={facebook}
              width={35}
              height={35}
            />
          </a>
          <a href='https://www.instagram.com/wisstelecom/'>
            <Image
              className={styles.icon}
              alt='Instagram icon'
              src={instagram}
              width={35}
              height={35}
            />
          </a>
          <a href='https://radiusnet.wisstelecom.com.br/radiusnet/cda/login.php'>
            <Image
              className={styles.icon}
              alt='Person Icon'
              src={user}
              width={35}
              height={35}
            />
          </a>
        </div>
      </footer>
    </div>
  )
}
