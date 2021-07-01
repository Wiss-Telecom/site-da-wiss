import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/wiss-logo.svg'
import facebook from '../public/facebook.svg'
import instagram from '../public/instagram.svg'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
          const arr = document.querySelector('.user_input')
          console.log(arr)
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
        <div className={styles.buttons_container}>
          <a
            href='https://wa.me/5519999749477?text=Olá,%20tudo%20bem?'
            className={`${styles.contact_button} ${styles.whatsapp_button}`}
          >
            Fale conosco pelo Whatsapp
          </a>
          <button className={styles.contact_button}>
            Envie-nos uma mensagem
          </button>
        </div>
      </main>
      <aside className={styles.aside}>
        <form className={styles.contact_form}>
          <input
            id='name'
            type='text'
            autoComplete='name'
            placeholder='Seu nome'
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id='email'
            type='email'
            placeholder='E-mail'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name='message'
            id='message'
            cols={30}
            rows={10}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type='submit' onClick={(e) => handleSubmit(e)} />
        </form>
      </aside>
      <footer className={styles.footer}>
        <div className={styles.social_media_icons_container}>
          <a href='https://www.facebook.com/wisstelecom'>
            <Image
              className={styles.icon}
              alt='Company Logo'
              src={facebook}
              width={35}
              height={35}
            />
          </a>
          <a href='https://www.instagram.com/wisstelecom/'>
            <Image
              className={styles.icon}
              alt='Company Logo'
              src={instagram}
              width={35}
              height={35}
            />
          </a>
        </div>
      </footer>
    </div>
  )
}
