import LinkButton from '@/components/LinkButton/LinkButton'
import styles from './ButtonsContainer.module.css'

export default function ButtonsContainer() {
  return (
    <div className={styles.buttonsContainer}>
      <LinkButton
        url='https://radiusnet.wisstelecom.com.br/radiusnet/cda/login.php'
        label='Central do Assinante'
      />
      <LinkButton
        url='https://wa.me/5519999749477?text=Ol%C3%A1,%20tudo%20bem?'
        label='Fale conosco pelo Whatsapp'
      />
    </div>
  )
}
