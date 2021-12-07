import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '../components/Container/Container'
import Row from '../components/Row/Row'
import Header from '../components/Header/Header'
import HeaderContainer from '../components/HeaderContainer/HeaderContainer'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Wiss Telecom - Internet para quem precisa</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Row>
        <Container>
          <Navbar />
        </Container>
      </Row>
      <Row>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
      </Row>
      <Row>
        <Container>
          <Main />
        </Container>
      </Row>
      <Row>
        <Container>
          <Footer />
        </Container>
      </Row>
    </div>
  )
}
