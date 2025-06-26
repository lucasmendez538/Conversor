// service-worker.js
const CACHE_NAME = 'conversor-tasas-cache-v1';
const urlsToCache = [
  '/',
  '/Conversor_Testeado_LM.html',
  // Si tuvieras archivos CSS o JS externos, los agregarías aquí
  // '/styles/main.css',
  // '/scripts/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});