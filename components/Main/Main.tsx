import styles from './Main.module.css'
import Image from 'next/image'
import smile from '../../public/images/smile.jpg'
import card1 from '../../public/images/cards/card1.jpg'
import card2 from '../../public/images/cards/card2.jpg'
import card3 from '../../public/images/cards/card3.jpg'

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.section1} id='section1'>
        <div className={styles.buttonsContainer}>
          <a
            className={styles.linkButton}
            href='https://https://radiusnet.wisstelecom.com.br/radiusnet/cda/login.php'
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
                Somos a Wiss Telecom, uma empresa criada para levar tecnologia
                exatamente onde você precisa.
              </p>
              <p>
                Com a gente, você terá a melhor experiência online, na sua casa
                ou empresa!
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
          <div className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image
                alt='plants being irrigated'
                src={card1}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <p>
              Mora ou trabalha na fazenda e não tem acesso fácil a internet?
              <br />A Wiss Telecom leva para você a qualidade e a tecnologia da
              cidade!
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image
                alt='man sitting in field, looking to mountains'
                src={card2}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <p>
              Escolha o plano perfeito para atender as suas necessidades! Temos
              tecnologia para oferecer a você internet com alta velocidade,
              estável e de qualidade!
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImageContainer}>
              <Image
                alt='Woman using a computer on an office'
                src={card3}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <p>
              Para estudar, trabalhar ou lazer, a Wiss Telecom tem internet
              rural rápida, estável e por um preço super acessível. É tecnologia
              de ponta para o campo!
            </p>
          </div>
        </div>
      </section>
      <section id='section2'>
        <div></div>
        <div>
          <p>
            A Wiss Telecom nasceu para suprir a necessidade de atendimento de
            qualidade aos moradores da zona rural. Nosso objetivo é oferecer
            acesso à Internet de excelência, colaborando para a modernização do
            campo e democratização do acesso à Internet.
          </p>
        </div>
      </section>
      <section id='section3'>
        <div>
          <p>
            Com planos sem franquia e com foco total em áreas rurais, trabalhos
            para levar até você:
          </p>
          <ul>
            <li>Mais velocidades</li>
            <li>Mais estabilidade</li>
            <li>Valores amigáveis</li>
            <li>Atendimento personalizado</li>
          </ul>
        </div>
        <div></div>
      </section>
      <section id='contact'>
        <div></div>
        <div>
          <form>
            <input
              id='name'
              type='text'
              autoComplete='name'
              placeholder='Seu nome'
              required
              // onChange={(e) => setName(e.target.value)}
              // className={styles.input_field}
            />
            <input
              id='email'
              type='email'
              placeholder='Seu e-mail'
              required
              // onChange={(e) => setEmail(e.target.value)}
              // className={styles.input_field}
            />
            <textarea
              id='message'
              name='message'
              placeholder='Sua mensagem'
              // onChange={(e) => setMessage(e.target.value)}
              // className={styles.input_field}
            ></textarea>
            <input
              type='submit'
              value='Enviar'
              // onClick={(e) => handleSubmit(e)}
              // className={styles.submit}
            />
          </form>
        </div>
      </section>
    </main>
  )
}
