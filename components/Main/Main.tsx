import Image from 'next/image'
import Row from '@/components/Row/Row'
import Container from '@/components/Container/Container'
import CardContainer from '@/components/CardContainer/CardContainer'
import ButtonsContainer from '@/components/ButtonsContainer/ButtonsContainer'
import woman from '@/images/woman.jpg'
import hoe from '@/images/img2.jpg'

import styles from './Main.module.css'
import Intro from '../Intro/Intro'

export default function Main() {
  return (
    <main className={styles.main}>
      <ButtonsContainer />
      <Intro />
      <Row>
        <Container>
          <CardContainer />
        </Container>
      </Row>
      <Row>
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
      </Row>
      <Row>
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
      </Row>
    </main>
  )
}
