self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('platform-25-static-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/edit.html',
          '/test.html',
          '/thanks.html',
          '/assets/css/academies.css',
          '/assets/css/chapter1.css',
          '/assets/css/home.css',
          '/assets/css/membership.css',
          '/assets/css/style.css',
          '/assets/images/alwarsha.jpg',
          '/assets/images/eduexa.png',
          '/assets/images/esrar.png',
          '/assets/images/himam-academy.png',
          '/assets/images/mindsync-icon.png',
          '/assets/images/mindsync-logo.png',
          '/assets/images/mindsynclogo.png',
          '/assets/images/oman-2040-vision.png',
          '/assets/images/oman-academy.png',
          '/assets/images/oman-flag.jpg',
          '/assets/images/sadim.webp',
          '/assets/images/searchicon.png',
          '/assets/js/academies.js',
          '/assets/js/chapter1.js',
          '/assets/js/home.js',
          '/assets/js/membership.js',
          '/assets/js/script.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  