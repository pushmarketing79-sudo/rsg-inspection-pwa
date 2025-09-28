// Simple service worker for offline caching (works on GitHub Pages subpaths)
const CACHE_NAME = "rsg-inspection-cache-v1";
const urlsToCache = [
"index.html",
"css/styles.css",
"js/config.js",
"js/app.js",
"manifest.json"
];

self.addEventListener("install", (event) => {
event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener("activate", (event) => {
event.waitUntil(
caches.keys().then((keys) =>
Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
)
);
});

self.addEventListener("fetch", (event) => {
event.respondWith(
caches.match(event.request).then((response) => response || fetch(event.request))
);
});
