const CACHE_NAME = 'student-wallet-v1';
const ASSETS = [
  './',
  './index.html',
  './lucide.min.js'
];

// Cài đặt và lưu cache các file tĩnh
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Chặn request và lấy từ cache ra khi mất mạng
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});