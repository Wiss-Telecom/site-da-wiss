import { useState } from 'react'

import Link from 'next/link'

import Row from '@/components/Row/Row'
import Container from '@/components/Container/Container'
import Logo from '@/components/Logo/Logo'

import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Row>
      <div className={styles.navWrapper}>
        <Container>
          <div className={styles.navContainer}>
            <div className={styles.logoContainer}>
              <a href='#top'>
                <Logo />
              </a>
            </div>
            <div className={styles.menuButton} onClick={handleMenuClick}>
              <span
                className={`${styles.iconBar} ${
                  isMenuOpen ? styles.activeIconBar : ''
                }`}
              ></span>
              <span
                className={`${styles.iconBar} ${
                  isMenuOpen ? styles.activeIconBar : ''
                }`}
              ></span>
              <span
                className={`${styles.iconBar} ${
                  isMenuOpen ? styles.activeIconBar : ''
                }`}
              ></span>
            </div>
            <div
              className={`${styles.bg} ${isMenuOpen ? styles.bgShow : ''}`}
              onClick={handleMenuClick}
            ></div>
            <nav
              className={`${styles.navContent} ${
                isMenuOpen ? styles.navContentShow : ''
              }`}
            >
              <ul className={styles.navList}>
                <li onClick={handleMenuClick}>
                  <Link href='/#top'>
                    <a>Home</a>
                  </Link>
                </li>
                <li onClick={handleMenuClick}>
                  <Link href='/#contact'>
                    <a>Contato</a>
                  </Link>
                </li>
                <li onClick={handleMenuClick}>
                  <a
                    className={styles.linkButton}
                    href='https://radiusnet.wisstelecom.com.br/radiusnet/cda/login.php'
                  >
                    Central do Assinante
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    </Row>
  )
}
