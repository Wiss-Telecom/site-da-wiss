type Props = {
  children: JSX.Element | JSX.Element[]
}

import styles from './HeaderContainer.module.css'

export default function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>
}
