import { CardProps } from '@/types/CardProps'

import Image from 'next/image'
import styles from './Card.module.css'

export default function Card({ imageDescription, imagePath, text }: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Image
          alt={imageDescription}
          src={imagePath}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <p>{text}</p>
    </article>
  )
}
