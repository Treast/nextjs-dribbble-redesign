import Card from '@/components/Card';
import Filter from '@/components/Filter';
import styles from '@/styles/_layouts/Main.module.scss';

export default function Main() {
  return (
    <div className={styles.container}>
      <Filter />
      <hr className={styles.separator} />
      <ul className={styles.list}>
        <li>
          <Card image={require('@/images/cards/card-01.svg')} title='Dating App Design Concept' date='07 October, 2019'>
            Latest iOS mobile app design concept. See more..
          </Card>
        </li>
        <li>
          <Card image={require('@/images/cards/card-02.svg')} title='Customer Dashboard Design..' date='06 October, 2019'>
            Latest iOS mobile app design concept. See more..
          </Card>
        </li>
        <li>
          <Card image={require('@/images/cards/card-03.svg')} title='iOS App Design Concept' date='04 October, 2019'>
            Latest iOS mobile app design concept. See more..
          </Card>
        </li>
        <li>
          <Card image={require('@/images/cards/card-04.svg')} title='Music App Design Concept' date='04 October, 2019'>
            Latest iOS mobile app design concept. See more..
          </Card>
        </li>
        <li>
          <Card image={require('@/images/cards/card-05.svg')} title='Payment Dashboard Design' date='03 October, 2019'>
            Latest iOS mobile app design concept. See more..
          </Card>
        </li>
        <li>
          <Card image={require('@/images/cards/card-06.svg')} title='Currency Dashboard Design..' date='02 October, 2019'>
            Latest iOS mobile app design concept. See more..
          </Card>
        </li>
        <li>
          <Card image={require('@/images/cards/card-07.svg')} title='Order Dashboard Design' date='01 October, 2019'>
            Latest iOS mobile app design concept. See more..
          </Card>
        </li>
        <li>
          <Card image={require('@/images/cards/card-08.svg')} title='Flat Workstation Illustration' date='01 October, 2019'>
            Latest iOS mobile app design concept. See more..
          </Card>
        </li>
      </ul>
    </div>
  );
}
