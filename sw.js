/* Bale Out offline support: serve from cache first, refresh the cache in the background. */
const CACHE = "bale-out-v4";
const INDEX = new URL("./index.html", self.location).href;
const ASSETS = [
  "./index.html",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./fonts/silkscreen-400.woff2",
  "./fonts/silkscreen-700.woff2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS.map((url) => new Request(url, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;
  const isPage = req.mode === "navigate";
  const key = isPage ? INDEX : req;

  const network = fetch(req)
    .then(async (res) => {
      if (res && res.ok && !res.redirected) {
        const cache = await caches.open(CACHE);
        await cache.put(key, res.clone());
      }
      return res;
    })
    .catch(() => null);
  event.waitUntil(network);

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(key, { ignoreSearch: true });
    if (cached) return cached;
    const res = await network;
    if (res) return res;
    return (await cache.match(INDEX)) || Response.error();
  })());
});
