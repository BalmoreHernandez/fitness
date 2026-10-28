// Permite abrir la app sin internet cuando está publicada en https.
// Rutas relativas: funciona en la raíz de un dominio o en una subcarpeta (balmorehernandez.com/fitness/).
// Solo borra cachés con su propio prefijo: otras apps del mismo dominio (p. ej. /presupuesto/) guardan las suyas.
const PREFIX = "fitness-principiantes-";
const CACHE = PREFIX + "v15";
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "./index.html"]))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
