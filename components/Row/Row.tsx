type Props = {
  children: JSX.Element | JSX.Element[]
}

import styles from './Row.module.css'

export default function Container({ children }: Props) {
  return <div className={styles.row}>{children}</div>
}
