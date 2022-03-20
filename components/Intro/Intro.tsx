import Image from 'next/image'

import Container from '@/components/Container/Container'
import smile from '@/images/smile.jpg'

import styles from './Intro.module.css'

export default function Intro() {
  return (
    <article>
      <Container>
        <div className={styles.intro}>
          <div className={styles.introParagraph}>
            <p>
              Somos a Wiss Telecom, uma empresa criada para levar tecnologia
              exatamente onde você precisa.
            </p>
            <p>
              Com a gente, você terá a melhor experiência online, na sua casa ou
              empresa!
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
      </Container>
    </article>
  )
}
