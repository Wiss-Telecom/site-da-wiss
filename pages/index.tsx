import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wiss Telecom - Internet para quem precisa</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
