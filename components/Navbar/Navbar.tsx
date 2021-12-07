import Row from '@/components/Row/Row'
import Container from '@/components/Container/Container'
import Logo from '@/components/Logo/Logo'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <Row>
      <Container>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <nav>
            <ul className={styles.navList}>
              <li>Home</li>
              <li>Contato</li>
              <li>Central do Assinante</li>
            </ul>
          </nav>
        </div>
      </Container>
    </Row>
  )
}
