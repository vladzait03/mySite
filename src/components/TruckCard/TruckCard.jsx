import { Link } from 'react-router-dom';
import styles from './TruckCard.module.scss';

export default function TruckCard({ truck }) {
  return (
    <Link to={`/catalog/${truck.id}`} className={styles.cardLink}>
      <div className={styles.truckCard}>
        <img src={truck.image} alt={`${truck.brand} ${truck.model}`} />
        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <h3>{truck.brand} {truck.model}</h3>
            <span className={styles.badge}>{truck.type}</span>
          </div>
          <div className={styles.specsGrid}>
            <div className={styles.specItem}>
              <span className={styles.label}>Мощность</span>
              <span className={styles.value}>{truck.power} л.с.</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.label}>Грузоподъемность</span>
              <span className={styles.value}>{truck.payload} т</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.label}>Двигатель</span>
              <span className={styles.value}>{truck.engine}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.label}>Расход</span>
              <span className={styles.value}>{truck.consumption} л/100км</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}