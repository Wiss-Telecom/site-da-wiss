import { Props } from '@/types/Props'
import styles from './CardContainer.module.css'

export default function CardContainer({ children }: Props) {
  return <div className={styles.cardContainer}>{children}</div>
}
