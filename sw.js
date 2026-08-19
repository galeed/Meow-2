const CACHE_NAME = 'reproductor-unico-v1';
const ASSETS = [
  './',
  'index.html'
];

// Instalar y guardar el HTML único
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Servir el HTML desde la caché si no hay internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
