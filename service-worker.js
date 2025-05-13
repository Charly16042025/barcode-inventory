self.addEventListener('install', event => {
  console.log('Service worker installed');
  event.waitUntil(
    caches.open('barcode-app').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './service-worker.js',
        './icon-192.png',
        './icon-192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
