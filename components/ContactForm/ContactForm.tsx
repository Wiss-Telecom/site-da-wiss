import Image from 'next/image'

import Container from '@/components/Container/Container'
import Row from '@/components/Row/Row'

import man from '@/images/img3.jpg'

import styles from './ContactForm.module.css'

export default function ContactForm() {
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
              <form className={styles.form}>
                <input
                  id='name'
                  type='text'
                  autoComplete='name'
                  placeholder='Seu nome'
                  required
                  className={styles.inputField}
                />
                <input
                  id='email'
                  type='email'
                  placeholder='Seu e-mail'
                  required
                  className={styles.inputField}
                />
                <textarea
                  id='message'
                  name='message'
                  placeholder='Sua mensagem'
                  className={styles.inputField}
                ></textarea>
                <input type='submit' value='Enviar' className={styles.submit} />
              </form>
            </div>
          </div>
        </Container>
      </section>
    </Row>
  )
}
