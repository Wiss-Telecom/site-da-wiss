import { ButtonProps } from '@/types/ButtonProps'
import styles from './LinkButton.module.css'

export default function LinkButton({ url, label }: ButtonProps) {
  return (
    <a
      className={styles.linkButton}
      target='_blank'
      rel='noreferrer'
      href={url}
    >
      {label}
    </a>
  )
}
