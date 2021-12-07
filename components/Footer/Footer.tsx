import Row from '../Row/Row'
import Container from '@/components/Container/Container'
import Logo from '@/components/Logo/Logo'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <Row>
      <Container>
        <footer>
          <div className={styles.logo_container}>
            <Logo />
          </div>
          <ul>
            <li>Central do Assinante</li>
            <li>Fale conosco</li>
            <li>Termo de Privacidade</li>
            <li>Modelo de Contrato</li>
          </ul>
          <ul>
            <li>facebook</li>
            <li>instagram</li>
            <li>central do assinante</li>
          </ul>
          <div>
            <span>WissTelecom © 2020</span>
          </div>
        </footer>
      </Container>
    </Row>
  )
}
