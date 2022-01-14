import styles from '../styles/Home.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Main from '@/components/Main/Main'
import Navbar from '@/components/Navbar/Navbar'
import ContactForm from '@/components/ContactForm/ContactForm'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <ContactForm />
    </>
  )
}
