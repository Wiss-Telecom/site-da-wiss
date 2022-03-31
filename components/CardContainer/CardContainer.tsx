import Card from '@/components/Card/Card'
import Container from '@/components/Container/Container'

import card1 from '@/images/cards/card1.jpg'
import card2 from '@/images/cards/card2.jpg'
import card3 from '@/images/cards/card3.jpg'

import styles from './CardContainer.module.css'

export default function CardContainer() {
  return (
    <Container>
      <section className={styles.cardContainer}>
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
                    rural rápida, estável e por um preço super acessível. &Eacute
                    tecnologia de ponta para o campo!'
        />
      </section>
    </Container>
  )
}
