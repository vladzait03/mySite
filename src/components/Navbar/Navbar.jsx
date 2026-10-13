import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          Авто<span>Груз</span>
        </Link>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <Link to="/" onClick={closeMenu}>Главная</Link>
          <Link to="/catalog" onClick={closeMenu}>Каталог</Link>
          <Link to="/compare" onClick={closeMenu}>Сравнение</Link>
          <Link to="/articles" onClick={closeMenu}>Статьи</Link>
          <Link to="/about" onClick={closeMenu}>О нас</Link>
          <Link to="/contacts" onClick={closeMenu}>Контакты</Link>
        </div>

        <div className={styles.rightBlock}>
          <button className={styles.themeBtn} onClick={toggleTheme} aria-label="Сменить тему">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}