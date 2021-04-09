import Link from 'next/link';

import Image from '@/components/Image';

import styles from '@/styles/_layouts/Sidebar.module.scss';

export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <div className={styles.logo}>
        <Image src={require('@/images/dribbble-logo.svg')} width='171' height='42' />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href='#'>
              <a className={styles['link--selected']}>Latest Shot</a>
            </Link>
          </li>
          <li>
            <Link href='#'>Top Designer</Link>
          </li>
          <li>
            <Link href='#'>Teams</Link>
          </li>
          <li>
            <Link href='#'>Community</Link>
          </li>
          <li>
            <Link href='#'>Find Jobs</Link>
          </li>
          <li>
            <Link href='#'>Hiring Designers</Link>
          </li>
          <li>
            <Link href='#'>Pricing</Link>
          </li>
          <li>
            <Link href='#'>Upgrade</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
