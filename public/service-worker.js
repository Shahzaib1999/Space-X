let version = "v1";

//Cache Files
let cacheFiles = [
  "/static/js/2.6b531299.chunk.js",
  "/static/js/3.275bb9cd.chunk.js",
  "/static/js/main.63ab0d0b.chunk.js",
  "/static/js/runtime-main.4146be26.js",
  "/static/css/main.8dafb259.chunk.css",
  // "/static/css/main.c6446536.chunk.css",
  "/static/media/logo.754a683c.png",
  "/favicon.ico",
  "/logo192.png",
  "/",
  "/index.html",
  // "https://spacexdata.herokuapp.com/graphql"
  // "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
];

// Install Service Woker
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(version).then((cache) => {
      console.log("cacheFiles", cacheFiles);
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
            console.log(response);
            return response || fetch.response;
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
    );
  }
});