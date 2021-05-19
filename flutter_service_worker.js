'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "9c892ab7270c38d548147a3a93d10b3e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"version.json": "8299908622cc2a1483e34e813045616f",
"manifest.json": "0185636eadad662f477d180ee4b821e1",
".git/FETCH_HEAD": "08ed3f897594fa50aff3f5c03eb552ff",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/b5/c34f35e576f5d95c97502d013105de932a6096": "4ac0e0a481d77a85d30cab927153b928",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a9/928c2e0b5c766d361d05cbe025210c5831f933": "036e74745c2d3df28561c2be414056ac",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/57/7a1b9e750196ff84664ee199c8568f38e2dae9": "83f8366fc2fb299e243203d38a2b4906",
".git/objects/66/d5b0d864507907d5ff18ffe6d7acb93768c4ac": "9f5f7cce9a8936840a01d5f445b1fc1b",
".git/objects/72/8510e608cf9032a0ddf9d945d097694fd0c287": "b30cbcc12691379120a31c28811f2416",
".git/objects/f1/a5303a8ed3a9402c8424a33071274b5c60cd04": "51cdcac233b7a962baab6e8db446e2a0",
".git/objects/5d/1ff2b09761c553e0fd638ed4909000350d6e18": "3a72f807a56c91c8341f3dcd022e8ec5",
".git/objects/05/bd1c796c9e57f8095761c0856b9312f1952c5d": "8f909faa5e118ee674abbd88a4918862",
".git/objects/9b/500daafdbec45f8dbcb5050abd838d71ef2087": "6b719d39d7613393b38190c4f11be507",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/49/3af42673abd6e2a6bcee6ae1600e73b7e4f482": "b8563fe7379406eb0db6d3f0919072f9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/e5/e49439e461a8612583943eba880cb89dd95a9e": "2230f7ea0293f01fe4e45ef24b00f215",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6e/ab888616bf8d18bfb181a3db2874278e246ed8": "866d00cae51e8ce4f7ee365fe16c0e80",
".git/objects/2a/bc30012b4c252b96bc9f323a59f6511f7b69ad": "6c84b3541a6c7cc7919ae29d16e5a901",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/828f0707de397200db0fa5dd245b1ba833ad72": "a2418d2c218718d321c9bef710e06b1f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/d7/aff23ee6bb50b71b7904f7dca3c1f23236c625": "7797aedd3da3746c9fdb1d8165d1a192",
".git/objects/98/f94948d8d2b112323945b8381421d6c5ed59cb": "dee07376d28cb1f7323fe6fe7402a7aa",
".git/objects/f6/36b626dd611888a65b3e45cebb1d0c5dcb1007": "b24ac126fd7be426f0c6b43aadb2ffa0",
".git/objects/08/3c24ed7e1c924f7c452ab7ff2c11b1cdbed43d": "950ca137dc2853ee3226fb69d7392e09",
".git/objects/9a/c351a1a3197e27a770c4b8d615ce82a909ad82": "0d53f14dd0decc5cdbc11e916da48600",
".git/objects/9a/e041804a6f9b45f964d503fbf5d367274a7f96": "540a4390e2f1daaf6d5f0efebb17d386",
".git/objects/9a/e8485564d95f37f66a8b87dfea06e6ebac8905": "573496f9295776f1882ad17d2cda3f84",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/index": "9a92b1c2ecc626d421a58ebc8ee0d0db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/config": "8abf81dd550d661aad88d1943813a97d",
".git/logs/HEAD": "b252b22b599026121fc395c22cd5dc71",
".git/logs/refs/remotes/origin/main": "2db80e8d6d89d730b9bcc569bebcfb32",
".git/logs/refs/heads/main": "389d5401bd5009019cf28e099aeeb6ae",
".git/refs/remotes/origin/main": "8cb7e0d1ea1b31a462485d8bd34e2447",
".git/refs/heads/main": "1da8ba17a58c009afc694d3e80b0e1a0",
".git/ORIG_HEAD": "e133cd8416218960bb49189415f4f86e",
".git/COMMIT_EDITMSG": "3d227c4727edf5c1f352784637744670",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"main.dart.js": "511f984e814473f1b5911be73f68aded",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "6e804a04356abdb547d95cfee5bade64",
"/": "6e804a04356abdb547d95cfee5bade64"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
