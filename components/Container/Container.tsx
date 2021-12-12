import { Props } from '@/types/Props'
import styles from './Container.module.css'

export default function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>
}
