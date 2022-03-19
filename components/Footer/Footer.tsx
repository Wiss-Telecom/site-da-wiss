import Image from 'next/image'
import Link from 'next/link'
import Row from '@/components/Row/Row'
import Container from '@/components/Container/Container'
import facebook from '@/icons/facebook.svg'
import instagram from '@/icons/instagram.svg'
import user from '@/icons/user.svg'

import styles from './Footer.module.css'

export default function Footer() {
  return (
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
              <Link href='/#contact'>
                <a>Contato</a>
              </Link>
            </li>
            <li>
              <Link href='/privacidade'>
                <a>Política de Privacidade</a>
              </Link>
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
        <span>
          Coyright © WissTelecom {new Date().getFullYear()} - Todos os direitos
          reservados
        </span>
      </div>
    </footer>
  )
}
