import { useParams, Link } from 'react-router-dom';
import { trucks } from '../../data/trucksData';
import styles from './TruckDetails.module.scss';

export default function TruckDetails() {
  const { id } = useParams();
  const truck = trucks.find(t => t.id === Number(id));

  if (!truck) {
    return (
      <div className={styles.detailsPage}>
        <h1>Грузовик не найден</h1>
        <Link to="/catalog" className={styles.backBtn}>← Вернуться в каталог</Link>
      </div>
    );
  }

  return (
    <div className={styles.detailsPage}>
      <Link to="/catalog" className={styles.backBtn}>← Вернуться в каталог</Link>

      <div className={styles.truckHeader}>
        <div className={styles.imageWrapper}>
          <img src={truck.image} alt={`${truck.brand} ${truck.model}`} />
        </div>
        <div className={styles.headerInfo}>
          <h1>{truck.brand} {truck.model}</h1>
          <span className={styles.typeBadge}>{truck.type}</span>
          <p className={styles.description}>{truck.description}</p>
        </div>
      </div>

      <div className={styles.specsSection}>
        <h2>Технические характеристики</h2>
        <div className={styles.specsTable}>
          <div className={styles.specRow}>
            <span className={styles.label}>Двигатель</span>
            <span className={styles.value}>{truck.engine}</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.label}>Мощность</span>
            <span className={styles.value}>{truck.power} л.с.</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.label}>Крутящий момент</span>
            <span className={styles.value}>{truck.torque} Нм</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.label}>Коробка передач</span>
            <span className={styles.value}>{truck.transmission}</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.label}>Тип кабины</span>
            <span className={styles.value}>{truck.cabin}</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.label}>Колесная формула</span>
            <span className={styles.value}>{truck.wheelFormula}</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.label}>Грузоподъемность</span>
            <span className={styles.value}>{truck.payload} т</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.label}>Объем топливного бака</span>
            <span className={styles.value}>{truck.fuelTank} л</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.label}>Расход топлива</span>
            <span className={styles.value}>{truck.consumption} л/100км</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.label}>Максимальная скорость</span>
            <span className={styles.value}>{truck.maxSpeed} км/ч</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.label}>Год выпуска</span>
            <span className={styles.value}>{truck.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}