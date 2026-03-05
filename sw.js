self.addEventListener('install', (e) => {
  console.log('[Service Worker] Установлен');
});

self.addEventListener('fetch', (e) => {
  // Оставляем пустым, чтобы не ломать Firebase, 
  // но браузер засчитает сайт как PWA.
});