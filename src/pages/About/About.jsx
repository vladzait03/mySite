import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>О проекте</h1>
      <p className={styles.text}>
        <strong>«АвтоГруз»</strong> — это учебный веб-ресурс, разработанный в рамках выполнения лабораторной работы. 
      </p>
      <p className={styles.text}>
        Сайт представляет собой информационный портал для сравнения технических характеристик грузовых автомобилей. 
        Здесь вы можете изучить спецификации двигателей, мощность, грузоподъемность и расход топлива популярных моделей 
        (Volvo, Scania, KAMAZ, MAN и др.).
      </p>
      <p className={styles.text}>
        <em>Все данные представлены исключительно в ознакомительных и образовательных целях.</em>
      </p>
    </div>
  );
}