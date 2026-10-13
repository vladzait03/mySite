import { useEffect } from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  useEffect(() => {
    const img = document.getElementById('licnt7C2E');
    if (img) {
      img.src =
        'https://counter.yadro.ru/hit?t53.4;r' +
        escape(document.referrer) +
        (typeof screen === 'undefined'
          ? ''
          : ';s' + screen.width + '*' + screen.height + '*' +
            (screen.colorDepth ? screen.colorDepth : screen.pixelDepth)) +
        ';u' + escape(document.URL) +
        ';h' + escape(document.title.substring(0, 150)) +
        ';' + Math.random();
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.counters}>
        <div className={styles.counter}>
          <a href="https://www.liveinternet.ru/click" target="_blank" rel="noopener noreferrer">
            <img
              id="licnt7C2E"
              width="88"
              height="31"
              style={{ border: 0 }}
              title="LiveInternet: показано число просмотров и посетителей за 24 часа"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"
              alt="LiveInternet"
            />
          </a>
        </div>

        <div className={styles.counter}>
          <a href="https://top100.rambler.ru/navi/7752734/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://counter.rambler.ru/top100.cnt?pid=7752734"
              alt="Rambler's Top100"
              width="88"
              height="31"
              style={{ border: 0 }}
            />
          </a>
        </div>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} АвтоГруз - учебный проект.
      </p>
    </footer>
  );
}