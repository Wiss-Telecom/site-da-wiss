import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'

import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <Logo />
      </div>
      <Navbar />
      <h1>É muito mais que internet!</h1>
    </header>
  )
}
