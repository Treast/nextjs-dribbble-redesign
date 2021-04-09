import styles from '@/styles/_components/Button.module.scss';
import Link from 'next/link';
import Image from './Image';

export default function Button({ href, icon, children, style = '' }) {
  return (
    <Link href={href}>
      <a className={`${styles.button} ${style ? styles['button--' + style] : ''}`}>
        <Image src={icon} height='24' width='24' />
        {children && <span>{children}</span>}
      </a>
    </Link>
  );
}
