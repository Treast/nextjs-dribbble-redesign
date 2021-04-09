import styles from '@/styles/_components/Image.module.scss';

export default function Image({ src, height, width, alt = '' }) {
  return <img src={src} height={height} width={width} alt={alt} className={styles.image} />;
}
