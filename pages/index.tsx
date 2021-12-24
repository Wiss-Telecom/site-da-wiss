import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Main from '@/components/Main/Main'
import Navbar from '@/components/Navbar/Navbar'
import ContactForm from '@/components/ContactForm/ContactForm'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Wiss Telecom - Internet para quem precisa</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      <Header />
      <Main />
      <ContactForm />
      <Footer />
    </div>
  )
}
