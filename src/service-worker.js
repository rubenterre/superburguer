// Asignar nombre y version de la caché

const CACHE_NAME = 'v1_cache_superburguer_pwa';

// Ficheros a cachear en la aplicación

var urlsToCache = [
    './',
    './favicon/favicon_1024x1024.png',
    './favicon/favicon_512x512.png',
    './favicon/favicon_152x152.png',
    './favicon/favicon_120x120.png',
    './favicon/favicon_76x76.png',
    './favicon/favicon_60x60.png',
];

// Evento install
//Que la web funcione sin conexiÓN
//instalación del service worker y guardar en caché los recursos estáticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                        .then(() => {
                            self.skipWaiting();
                        })

            })
            .catch(err => {
                console.log( 'No se ha registrado el caché', err)
            })
    )
})


// Evento activate

self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhitelist.indexOf(cacheName) === 1){
                        // Borrar elementos que no necesita
                        return caches.delete(cacheName);
                    }
                })
            )
        })
        .then(
            ()=>{
                //Activar cache

        self.clientInformation.claim();
    }
        )
    )
});

// Evento fetch

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                // devuelvo datos desde caché
                return res;
            }
            return fetch(e.request);
        })
    )
});