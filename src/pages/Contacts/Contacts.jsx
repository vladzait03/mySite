import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <div className={styles.contactsPage}>
      <h1 className={styles.title}>Контакты</h1>
      <p className={styles.subtitle}>
        Есть вопросы или предложения по улучшению портала? Напишите нам.
      </p>
      
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder="Ваше имя" 
          className={styles.input} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          className={styles.input} 
        />
        <textarea 
          placeholder="Сообщение" 
          rows="5" 
          className={styles.textarea}
        ></textarea>
        {/* Здесь мы объединяем глобальный класс btn-primary и локальный submitBtn */}
        <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
          Отправить
        </button>
      </form>
    </div>
  );
}