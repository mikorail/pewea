var CACHE_NAME='latihan-pwa-cache-v1';

var urlToCache = [
    '/',
    '/main/ugm.png',
    '/css/main.css'
    ,'/js/jquery.min.js'
    ,'/js.main.js'
];

//install cache on browser
self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(
            function(cache){
                console.log("service worker do install..");
                return cache.add(urlToCache);
            }
        )
    )
});

self.addEventListener('activate',function(event){
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
            cacheNames.filter(function (cacheName){
                return cacheName !== CACHE_NAME;
            }).map(function(cacheName){
                return caches.delete(cacheName);
            })
            );
        })
    );
});


self.addEventListener('fetch',function(event){
    event.respondWith(
        caches.match(event.request).then(function (response){
            console.log(response);
            if(response){
                return response;
            }
            return fetch(event.request);
        })
    )
});