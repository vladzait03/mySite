import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.logo}>Truck<span>Specs</span></Link>
        <div className={styles.navLinks}>
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/compare">Сравнение</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
        <button className={styles.themeBtn} onClick={toggleTheme} aria-label="Сменить тему">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}