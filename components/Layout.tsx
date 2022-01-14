import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

import { Props } from '@/types/Props'

export default function Layout({ children }: Props) {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Wiss Telecom - Internet para quem precisa</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
