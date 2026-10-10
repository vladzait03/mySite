import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>База знаний по грузовым автомобилям</h1>
          <p>Сравнивайте технические характеристики, изучайте спецификации двигателей и находите идеальную машину для ваших задач.</p>
          <div className={styles.heroButtons}>
            <Link to="/catalog" className="btn-primary">Перейти в каталог</Link>
            <Link to="/compare" className={styles.btnSecondary}>Сравнить модели</Link>
          </div>
        </div>
      </div>
    </div>
  );
}