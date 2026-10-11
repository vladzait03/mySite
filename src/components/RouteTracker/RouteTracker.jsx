// src/components/RouteTracker/RouteTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    // Проверяем, что счётчик загружен
    if (window._tmr) {
      // Отправляем данные о новом просмотре страницы
      window._tmr.push({
        id: "3800987", // Ваш ID счётчика
        type: "pageView",
        url: window.location.href,
      });
    }
  }, [location]); // Срабатывает при каждом изменении URL

  return null; // Компонент ничего не рендерит
}