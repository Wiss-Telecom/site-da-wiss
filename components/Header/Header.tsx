import Image from 'next/image'
import Row from '../Row/Row'
import Container from '../Container/Container'
import bg from '../../public/images/bg2.jpg'

import styles from './Header.module.css'

export default function Header() {
  const style = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: 'cover',
    with: '100%',
    borderTop: '1px solid var(--very-light-greenish-gray)',
    borderBottom: '1px solid var(--very-light-greenish-gray)'
  }
  return (
    <Row>
      <header style={style}>
        <Container>
          <h1 className={styles.mainTitle}>É muito mais que internet!</h1>
          <div className={styles.titleImageContainer}>
            <Image
              alt='Field with mountains on the horizon'
              src={bg}
              layout='fill'
              objectFit='cover'
              className={styles.titleImage}
            />
          </div>
        </Container>
      </header>
    </Row>
  )
}
