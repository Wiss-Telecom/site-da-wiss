import Image from 'next/image'
import logo from '../../public/wiss-logo.svg'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
      <div className={styles.logo_container}>
        <Image
          className={styles.navbar_logo}
          alt='Company Logo'
          src={logo}
          layout='responsive'
        />
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
  )
}
