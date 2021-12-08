import Image from 'next/image'
import Row from '@/components/Row/Row'
import Container from '@/components/Container/Container'
import facebook from '@/icons/facebook.svg'
import instagram from '@/icons/instagram.svg'
import user from '@/icons/user.svg'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <Row>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerContent}>
            <div>
              <h3 className={styles.footerTitle}>Wiss telecom</h3>
              <p className={styles.footerSubtitle}>Internet rural</p>
            </div>
            <ul className={styles.footerLinksList}>
              <li>
                <a href='https://radiusnet.wisstelecom.com.br/radiusnet/cda/login.php'>
                  Central do Assinante
                </a>
              </li>
              <li>
                <a href='#contact'>Fale conosco</a>
              </li>
              <li>
                <a href='#'>Termo de Privacidade</a>
              </li>
            </ul>
            <ul className={styles.socialMediaFooterList}>
              <li>
                <a href='https://www.facebook.com/wisstelecom'>
                  <Image src={facebook} alt='facebook icon' />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.instagram.com/wisstelecom/'
                >
                  <Image src={instagram} alt='instagram icon' />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://radiusnet.wisstelecom.com.br/radiusnet/cda/login.php'
                >
                  <Image src={user} alt='user' />
                </a>
              </li>
            </ul>
          </div>
        </Container>
        <div className={styles.copyright}>
          <span>© WissTelecom 2021 - Todos os direitos reservados</span>
        </div>
      </footer>
    </Row>
  )
}
