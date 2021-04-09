import styles from '@/styles/_components/Card.module.scss';
import Image from './Image';

export default function Card({ image, title, date, children }) {
  return (
    <article className={styles.card}>
      <Image src={image} height='292' width='360' />
      <h1>{title}</h1>
      <h2>{date}</h2>
      <p>{children}</p>
    </article>
  );
}
