import { trucks } from "../../data/trucksData";
import TruckCard from '../../components/TruckCard/TruckCard';
import styles from './Catalog.module.scss';

export default function Catalog() {
  return (
    <div className={styles.catalogPage}>
      <h1>Каталог грузовиков</h1>
      <p className={styles.subtitle}>Технические характеристики популярных моделей</p>
      <div className={styles.catalogGrid}>
        {trucks.map(truck => (
          <TruckCard key={truck.id} truck={truck} />
        ))}
      </div>
    </div>
  );
}