import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

export default function Home() {
  const handleCompareClick = () => {
    if (window._tmr) {
      window._tmr.push({
        id: "3800987", // Ваш ID счетчика
        type: "reachGoal",
        goal: "Click_Compare_Button" // Название вашего события
      });
    }
  };
  
  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Технические характеристики грузовых автомобилей</h1>
          <p>
            Сравнивайте мощность, крутящий момент, расход топлива и грузоподъёмность
            седельных тягачей и магистральных грузовиков. Актуальные данные по моделям
            Volvo, Scania, MAN, Mercedes-Benz, DAF и KAMAZ.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/catalog" className="btn-primary">Открыть каталог</Link>
            <Link to="/compare" className={styles.btnSecondary}>Сравнить модели</Link>
          </div>
        </div>
      </div>
    </div>
  );
}