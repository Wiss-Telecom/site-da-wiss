import Image from 'next/image'
import Row from '@/components/Row/Row'
import Container from '@/components/Container/Container'
import Card from '@/components/Card/Card'
import smile from '@/images/smile.jpg'
import woman from '@/images/woman.jpg'
import man from '@/images/img3.jpg'
import hoe from '@/images/img2.jpg'
import card1 from '@/images/cards/card1.jpg'
import card2 from '@/images/cards/card2.jpg'
import card3 from '@/images/cards/card3.jpg'

import styles from './Main.module.css'

export default function Main() {
  return (
    <Row>
      <main className={styles.main}>
        <section className={styles.section1} id='section1'>
          <Container>
            <div className={styles.buttonsContainer}>
              <a
                className={styles.linkButton}
                href='https://radiusnet.wisstelecom.com.br/radiusnet/cda/login.php'
              >
                Central do Assinante
              </a>
              <a
                className={styles.linkButton}
                target='_blank'
                rel='noreferrer'
                href='https://wa.me/5519999749477?text=Ol%C3%A1,%20tudo%20bem?'
              >
                Fale conosco pelo Whatsapp
              </a>
            </div>
            <div>
              <div className={styles.hero}>
                <div className={styles.introParagraph}>
                  <p>
                    Somos a Wiss Telecom, uma empresa criada para levar
                    tecnologia exatamente onde você precisa.
                  </p>
                  <p>
                    Com a gente, você terá a melhor experiência online, na sua
                    casa ou empresa!
                  </p>
                </div>
                <div className={styles.introImageContainer}>
                  <Image
                    src={smile}
                    alt='Woman with red lipstick smiling'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>
            <div className={styles.cardContainer}>
              <Card
                imageDescription='man sitting in field, looking to mountains'
                imagePath={card2}
                text='Escolha o plano perfeito para atender as suas necessidades!
                  Temos tecnologia para oferecer a você internet com alta
                  velocidade, estável e de qualidade!'
              />
              <Card
                imageDescription='plants being irrigated'
                imagePath={card1}
                text='Mora ou trabalha na fazenda e não tem acesso fácil a internet?
                  A Wiss Telecom leva para você a qualidade e a tecnologia
                  da cidade!'
              />
              <Card
                imageDescription='Woman using a computer on an office'
                imagePath={card3}
                text='Para estudar, trabalhar ou lazer, a Wiss Telecom tem internet
                  rural rápida, estável e por um preço super acessível. É
                  tecnologia de ponta para o campo!'
              />
            </div>
          </Container>
        </section>
        <section className={`${styles.section} ${styles.section2}`}>
          <Container>
            <div
              className={`${styles.sectionContent} ${styles.section1Content}`}
            >
              <div className={styles.imageContainer}>
                <Image src={woman} alt='a woman on farm' layout='responsive' />
              </div>
              <div>
                <p>
                  A Wiss Telecom nasceu para oferecer atendimento de qualidade
                  aos moradores da zona rural.
                </p>
                <p>
                  Nosso objetivo é levar a todos acesso à Internet de
                  excelência, colaborando para a modernização do campo e
                  democratização do acesso à Internet.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className={`${styles.section} ${styles.section3}`}>
          <Container>
            <div
              className={`${styles.sectionContent} ${styles.section2Content}`}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={hoe}
                  alt='man with a hoe on field'
                  layout='responsive'
                />
              </div>
              <div>
                <p>
                  Com planos sem franquia e com foco total em áreas rurais,
                  trabalhamos para levar até você
                </p>
                <ul className={styles.advantagesList}>
                  <li>Mais velocidades</li>
                  <li>Mais estabilidade</li>
                  <li>Valores amigáveis</li>
                  <li>Atendimento personalizado</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <section id='contact' className={styles.contact}>
          <Container>
            <div className={styles.contactContent}>
              <div className={styles.contactImageContainer}>
                <Image
                  src={man}
                  alt='man with PC on desk'
                  layout='responsive'
                />
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
                    // onChange={(e) => setName(e.target.value)}
                    className={styles.inputField}
                  />
                  <input
                    id='email'
                    type='email'
                    placeholder='Seu e-mail'
                    required
                    // onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputField}
                  />
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Sua mensagem'
                    // onChange={(e) => setMessage(e.target.value)}
                    className={styles.inputField}
                  ></textarea>
                  <input
                    type='submit'
                    value='Enviar'
                    // onClick={(e) => handleSubmit(e)}
                    className={styles.submit}
                  />
                </form>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </Row>
  )
}
