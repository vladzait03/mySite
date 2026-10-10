import { useState } from 'react';
import { trucks } from '../../data/trucksData';
import styles from './Compare.module.scss';

export default function Compare() {
  const [truck1, setTruck1] = useState(trucks[0]);
  const [truck2, setTruck2] = useState(trucks[1]);

  const handleSelect1 = (e) => setTruck1(trucks.find(t => t.id === Number(e.target.value)));
  const handleSelect2 = (e) => setTruck2(trucks.find(t => t.id === Number(e.target.value)));

  return (
    <div className={styles.comparePage}>
      <h1>Сравнение характеристик</h1>
      <p className={styles.subtitle}>Выберите две модели для детального сравнения</p>

      <div className={styles.selectors}>
        <select value={truck1.id} onChange={handleSelect1}>
          {trucks.map(t => <option key={t.id} value={t.id}>{t.brand} {t.model}</option>)}
        </select>
        <span className={styles.vs}>VS</span>
        <select value={truck2.id} onChange={handleSelect2}>
          {trucks.map(t => <option key={t.id} value={t.id}>{t.brand} {t.model}</option>)}
        </select>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.compareTable}>
          <thead>
            <tr>
              <th>Характеристика</th>
              <th>{truck1.brand} {truck1.model}</th>
              <th>{truck2.brand} {truck2.model}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Тип</td>
              <td>{truck1.type}</td>
              <td>{truck2.type}</td>
            </tr>
            <tr>
              <td>Двигатель</td>
              <td>{truck1.engine}</td>
              <td>{truck2.engine}</td>
            </tr>
            <tr>
              <td>Мощность (л.с.)</td>
              <td className={truck1.power > truck2.power ? styles.winner : ''}>{truck1.power}</td>
              <td className={truck2.power > truck1.power ? styles.winner : ''}>{truck2.power}</td>
            </tr>
            <tr>
              <td>Крутящий момент (Нм)</td>
              <td className={truck1.torque > truck2.torque ? styles.winner : ''}>{truck1.torque}</td>
              <td className={truck2.torque > truck1.torque ? styles.winner : ''}>{truck2.torque}</td>
            </tr>
            <tr>
              <td>Объем бака (л)</td>
              <td className={truck1.fuelTank > truck2.fuelTank ? styles.winner : ''}>{truck1.fuelTank}</td>
              <td className={truck2.fuelTank > truck1.fuelTank ? styles.winner : ''}>{truck2.fuelTank}</td>
            </tr>
            <tr>
              <td>Расход (л/100км)</td>
              {/* Для расхода меньшее значение — лучше, поэтому знак < */}
              <td className={truck1.consumption < truck2.consumption ? styles.winner : ''}>{truck1.consumption}</td>
              <td className={truck2.consumption < truck1.consumption ? styles.winner : ''}>{truck2.consumption}</td>
            </tr>
            <tr>
              <td>Грузоподъемность (т)</td>
              <td className={truck1.payload > truck2.payload ? styles.winner : ''}>{truck1.payload}</td>
              <td className={truck2.payload > truck1.payload ? styles.winner : ''}>{truck2.payload}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}