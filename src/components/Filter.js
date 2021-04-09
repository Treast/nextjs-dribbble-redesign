import styles from '@/styles/_components/Filter.module.scss';
import Button from './Button';

export default function Filter() {
  return (
    <div className={styles.container}>
      <Button style='primary' href='#' icon={require('@/images/icons/filter.svg')} />
      <input type='text' placeholder='Tags (ex: Android, iPhone, Web, UI, UX)' />
      <input type='text' placeholder='Colors (ex: enter hex code or select)' />
      <input type='text' placeholder='Made With' />
      <input type='text' placeholder='Download' />
    </div>
  );
}
