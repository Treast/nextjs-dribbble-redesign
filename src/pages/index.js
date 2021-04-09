import Head from 'next/head';

import styles from '@/styles/_pages/Home.module.scss';

import Sidebar from '@/layouts/Sidebar';
import Topbar from '@/layouts/Topbar';
import Main from '@/layouts/Main';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS - Dribbble Redesign</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar />
      <Topbar />
      <Main />
    </div>
  );
}
