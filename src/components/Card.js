import styles from '@/styles/_components/Card.module.scss';
import Image from './Image';
import Link from 'next/link';

export default function Card({ image, title, date, children }) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image src={image} height='292' width='360' />
        <Link href='#'>
          <a>
            <Image src={require('@/images/icons/heart.svg')} height='24' width='27' />
          </a>
        </Link>
      </div>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <p>{children}</p>
    </article>
  );
}
