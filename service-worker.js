"use strict";var precacheConfig=[["/portfolio/index.html","ed1c5beb242acc3a9debf766ee57afc9"],["/portfolio/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/portfolio/static/js/main.c4365c59.js","2c182a25c950fc2b5f360235b984b0c3"],["/portfolio/static/media/aboutme.72190faa.svg","72190faa5b9f13904619603f46d6e43f"],["/portfolio/static/media/beet.2b1bd064.svg","2b1bd064cbd4262712133c68097902a2"],["/portfolio/static/media/face.3e317be6.svg","3e317be601f2a6e2bbcb056ce6c60ff4"],["/portfolio/static/media/getintouch.aff22679.svg","aff2267957a441e912e00305e69c5a2e"],["/portfolio/static/media/myskills.de04c2cc.svg","de04c2ccd39c0e5a764d5056174f4b2c"],["/portfolio/static/media/person.218050db.svg","218050db144f0438986588d93cfdcdeb"],["/portfolio/static/media/projects.294572d0.svg","294572d02bd1ffc764769b212edf2c24"],["/portfolio/static/media/reactlogo.8fb16b65.png","8fb16b653144526a74eb87fa0e82f9ba"],["/portfolio/static/media/simpson.df99eeda.svg","df99eeda860a8531463cc07c2d6ecc47"],["/portfolio/static/media/sketchlogo.64416d7c.svg","64416d7cf5eded1a2ba57a2b5910fc57"],["/portfolio/static/media/submarine.8f69c464.svg","8f69c46440a1191bf3601533e42f2e89"],["/portfolio/static/media/swiftlogo.ec8b2ba7.png","ec8b2ba7650429663bb6d1fbea538bc2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var a="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});