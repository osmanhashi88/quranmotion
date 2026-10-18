// QuranMotion offline support.
// The app itself (with the full Arabic and English Quran inside) is cached on install.
// Fonts, the hand tracking model and extra translations are cached the first time they load,
// so after one online visit they work offline too.
const VERSION = "qh-v32";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/logo-128.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Translations from alquran.cloud: try the network first, fall back to what was saved.
  if (url.hostname === "api.alquran.cloud") {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // The app page itself: get the newest version when online, use the saved copy when offline.
  if (req.mode === "navigate" || (url.origin === self.location.origin && /\/(index\.html)?$/.test(url.pathname))) {
    event.respondWith(
      fetch(req).then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put("./index.html", copy)); }
        return res;
      }).catch(() => caches.match("./index.html").then(r => r || caches.match(req)))
    );
    return;
  }

  // Everything else (app files, fonts, hand tracking files): saved copy first, then network.
  event.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && (res.ok || res.type === "opaque")) {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
