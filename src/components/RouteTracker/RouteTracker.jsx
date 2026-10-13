import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    // MyTracker (Top.Mail.Ru)
    if (window._tmr) {
      window._tmr.push({
        id: "3800987",
        type: "pageView",
        url: window.location.href,
      });
    }

    // Rambler Top-100 (Kraken)
    if (window.top100Counter && typeof window.top100Counter.trackPageview === 'function') {
      window.top100Counter.trackPageview();
    }
  }, [location]);

  return null;
}