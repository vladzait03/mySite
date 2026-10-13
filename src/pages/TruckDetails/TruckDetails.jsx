import { useParams, Link } from 'react-router-dom';
import { trucks } from '../../data/trucksData';
import styles from './TruckDetails.module.scss';

export default function TruckDetails() {
  const { id } = useParams();
  const truck = trucks.find(t => t.id === Number(id));

  if (!truck) {
    return (
      <div className={styles.notFound}>
        <h1>Грузовик не найден</h1>
        <Link to="/catalog" className="btn-primary">← Вернуться в каталог</Link>
      </div>
    );
  }

  const specs = [
    { label: 'Двигатель', value: truck.engine, unit: '' },
    { label: 'Мощность', value: truck.power, unit: ' л.с.' },
    { label: 'Крутящий момент', value: truck.torque, unit: ' Нм' },
    { label: 'Коробка передач', value: truck.gearbox, unit: '' },
    { label: 'Тип кабины', value: truck.cabin, unit: '' },
    { label: 'Колёсная формула', value: truck.wheelFormula, unit: '' },
    { label: 'Грузоподъёмность', value: truck.payload, unit: ' т' },
    { label: 'Объём топливного бака', value: truck.fuelTank, unit: ' л' },
    { label: 'Расход топлива', value: truck.consumption, unit: ' л/100км' },
    { label: 'Максимальная скорость', value: truck.maxSpeed, unit: ' км/ч' },
    { label: 'Год выпуска', value: truck.year, unit: '' },
  ];

  return (
    <div className={styles.detailsPage}>
      <Link to="/catalog" className={styles.backLink}>← Вернуться в каталог</Link>

      <div className={styles.topBlock}>
        <div className={styles.imageWrapper}>
          <img src={truck.image} alt={`${truck.brand} ${truck.model}`} />
        </div>

        <div className={styles.infoBlock}>
          <h1>{truck.brand} {truck.model}</h1>
          <span className={styles.badge}>{truck.type}</span>
        </div>
      </div>

      <div className={styles.specsCard}>
        <h2 className={styles.specsTitle}>Технические характеристики</h2>

        <div className={styles.specsGrid}>
          {specs.map((spec, i) => (
            <div className={styles.specItem} key={i}>
              <span className={styles.label}>{spec.label}</span>
              <span className={styles.value}>
                {spec.value !== undefined && spec.value !== null && spec.value !== ''
                  ? `${spec.value}${spec.unit}`
                  : '—'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <Link to="/compare" className="btn-primary">Сравнить с другой моделью</Link>
      </div>
    </div>
  );
}