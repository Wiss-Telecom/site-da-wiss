import Image from 'next/image'
import Row from '@/components/Row/Row'
import Container from '@/components/Container/Container'
import bg from '@/images/bg2.jpg'

import styles from './Header.module.css'

export default function Header() {
  const style = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: 'cover',
    width: '100%',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw'
  }
  return (
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
  )
}
