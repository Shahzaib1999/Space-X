let version = "v1";

//Cache Files
let cacheFiles = [
  "/static/js/2.b10a8057.chunk.js",
  "/static/js/3.8bc106b0.chunk.js",
  "/static/js/main.1e4e846d.chunk.js",
  "/static/js/runtime-main.1c2e87ec.js",
  "/static/css/2.1a02f21c.chunk.css",
  "/static/css/main.8ed7caa2.chunk.css",
  "/static/media/loader.e2ef5a7f.png",
  "/static/media/logo.754a683c.png",
  "/favicon.ico",
  "/logo192.png",
  "/",
  "/index.html"
];

// Install Service Woker
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(version).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  );
});

// Activate Service Worker
self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
});

const options = {
  ignoreSearch: true,
  ignoreMethod: true,
  ignoreVary: true,
};
// Fetch Service Worker
self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request, options)
        .then((response) => {
          if (response) {
            return response || fetch.response;
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
    );
  }
});