self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('platform-25-static-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/about.html',
        '/academic-education.html',
        '/englishTest.html',
        '/pomodoro-technique.html',
        '/self-development.html',
        '/services-and-tools.html',
        '/essay-tool.html',
        '/summaries.html',
        '/terms-of-use.html',
      
        '/assets/js/aboScript.js',
        '/assets/js/aeScript.js',
        '/assets/js/indScript.js',
        '/assets/js/satScript.js',
        '/assets/js/script.js',
        '/assets/js/sdScript.js',
        '/assets/js/summScript.js',
        '/assets/js/touScript.js',

        '/assets/css/aboStyle.css',
        '/assets/css/aeStyle.css',
        '/assets/css/indStyle.css',
        '/assets/css/satStyle.css',
        '/assets/css/sdStyle.css',
        '/assets/css/style.css',
        '/assets/css/summStyle.css',
        '/assets/css/touStyle.css',

        '/assets/css/images/mindsync-icon.png',
        '/assets/css/images/mindsync-logo.png',
        '/assets/css/images/mindsynclogo.png',
        '/assets/css/images/oman-2040-vision.png',
        '/assets/css/images/oman-cte_oman.png',
        '/assets/css/images/oman-edu.png',
        '/assets/css/images/oman-flag.jpg',
        '/assets/css/images/oman-ministry-of-education.png',

        '/assets/pdfs/artificialintelligence-humanintelligence.pdf',
        '/assets/pdfs/pistachio-theory.pdf',
        '/assets/pdfs/rich-dad-poor-dad.pdf',

        '/assets/audios/pomodoroAlarmTimer.mp3'
      ]).catch((error) => {
        console.error('Failed to cache', error);
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        returnnewResponse('Network error occurred', {
          status: 408,
          statusText: 'Network error',
        });
      });
    })
  );
});