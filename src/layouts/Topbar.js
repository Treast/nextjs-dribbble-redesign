import Button from '@/components/Button';
import styles from '@/styles/_layouts/Topbar.module.scss';

export default function Topbar() {
  return (
    <div className={styles.container}>
      <form action='#' className={styles.form}>
        <input type='text' placeholder='Search Shot (ex: web, mobile, iOS, android)' />
        <Button href='#' icon={require('@/images/icons/search.svg')} style='primary'>
          Search
        </Button>
      </form>
      <div className={styles.actions}>
        <Button href='#' icon={require('@/images/icons/upload.svg')}>
          Upload
        </Button>
        <Button href='#' icon={require('@/images/icons/user.svg')} />
      </div>
    </div>
  );
}
