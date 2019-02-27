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