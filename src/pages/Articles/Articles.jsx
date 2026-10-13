import { Link } from 'react-router-dom';
import styles from './Articles.module.scss';

const articles = [
  {
    id: 'fuel-comparison',
    title: 'Сравнение расхода топлива у Scania R500 и Volvo FH16',
    excerpt: 'Разбираем, как реальный расход топлива отличается от заявленного производителем и что влияет на экономичность в дальних рейсах.',
    date: '10.10.2026'
  },
  {
    id: 'torque-guide',
    title: 'Что такое крутящий момент и почему он важнее мощности',
    excerpt: 'Многие смотрят только на лошадиные силы, но именно крутящий момент определяет тягу. Разбираем на примерах грузовиков.',
    date: '08.10.2026'
  },
  {
    id: 'choosing-truck',
    title: 'Как выбрать седельный тягач для междугородних перевозок',
    excerpt: 'Пять ключевых параметров, на которые стоит смотреть при выборе тягача: от объёма бака до типа кабины.',
    date: '05.10.2026'
  }
];

export default function Articles() {
  return (
    <div className={styles.articlesPage}>
      <h1>Статьи и обзоры</h1>
      <p className={styles.subtitle}>Аналитика грузового транспорта от экспертов портала</p>

      <div className={styles.articlesGrid}>
        {articles.map(article => (
          <Link to={`/articles/${article.id}`} key={article.id} className={styles.articleCard}>
            <span className={styles.date}>{article.date}</span>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <span className={styles.readMore}>Читать →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}