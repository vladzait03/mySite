import { trucks } from "../../data/trucksData";
import TruckCard from '../../components/TruckCard/TruckCard';
import styles from './Catalog.module.scss';

export default function Catalog() {
  // Функция для отправки кастомного события в MyTracker
  const handleTruckClick = (truck) => {
    if (window._tmr) {
      window._tmr.push({
        id: "3800987",                 // Ваш ID счётчика
        type: "reachGoal",
        goal: "Click_Truck_Card",      // Название события
        value: truck.brand + ' ' + truck.model, // Дополнительная метка (какая модель)
      });
    }
  };

  return (
    <div className={styles.catalogPage}>
      <h1>Каталог грузовиков</h1>
      <p className={styles.subtitle}>Технические характеристики популярных моделей</p>
      <div className={styles.catalogGrid}>
        {trucks.map(truck => (
          <div key={truck.id} onClick={() => handleTruckClick(truck)}>
            <TruckCard truck={truck} />
          </div>
        ))}
      </div>
    </div>
  );
}