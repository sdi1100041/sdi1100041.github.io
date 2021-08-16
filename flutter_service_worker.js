'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/lottie_animation_4.json": "ba6736abb88fa0652f67de11aed3e9b3",
"assets/assets/example_3.riv": "5c7218da2ce10bbec393ec318c9be45c",
"assets/assets/dorpon_logo_11.riv": "5a6c0e65d1750e49b530b145660ed9b4",
"assets/assets/dorpon_logo_12.riv": "a77ddff38476eba27b2fbe4962535854",
"assets/assets/dorpon_logo_8.riv": "825a9924e70e9968746841a453437bc2",
"assets/assets/example_2.riv": "6f64063c393b1687b1c0d440a319f564",
"assets/assets/example.riv": "a2dfdd9255274eaff2f75402e515b77b",
"assets/assets/dorpon_logo_1.riv": "3269c9bdd22734d93c9d0d678a12f49c",
"assets/assets/example_6.riv": "1b1efb93208484f3bb509de4ca019f68",
"assets/assets/happy_mothers_Day.gif": "c3ab91d40b8e34e7a1f55ac93f55fc6d",
"assets/assets/dorpon_logo_5.riv": "e48435e7bdabfecc1747313aa5339e9d",
"assets/assets/lottie_animation_1.json": "54fb1c05638ca79836c297854e388c8a",
"assets/assets/dorpon_welcome.gif": "5ae790247cf95ee7a217ca7c5a94a7cc",
"assets/assets/example_7.riv": "b8dda9c1e6e8424cd0bc0ad2dc93fe1f",
"assets/assets/example_4.riv": "d3a53c7a3fda16f2467d35e5afadaa7e",
"assets/assets/lottie_animation_6.json": "c4300d28b61800ad5fdd578db41c889f",
"assets/assets/dorpon_logo_7.riv": "8d05259eeaab295a16cb350e59db61ca",
"assets/assets/lottie_animation_3.json": "30da714fc4140c2382025c8558086ccc",
"assets/assets/dorpon_logo_14.riv": "6ef2ffe0b293dcbc05a52f6bbe4bc00f",
"assets/assets/example_5.riv": "ac4fc93215f410478aae393e61745155",
"assets/assets/dorpon_logo_10.riv": "59407bd19323d81a1169ec4e13a66719",
"assets/assets/dorpon_logo_2.riv": "206724a95ae59f161c8bbda45dc0cfdf",
"assets/assets/lottie_animation_5.json": "ba6736abb88fa0652f67de11aed3e9b3",
"assets/assets/dorpon_logo_3.riv": "5622964d9d735383fd7576611f9371df",
"assets/assets/dorpon_logo_9.riv": "b385bdf5763ebce35dcf24e9a0e8e0d7",
"assets/assets/dorpon_logo_6.riv": "67b54c504bb15e6d7a87ca79d36d36be",
"assets/assets/lottie_animation_2.json": "07244784ffe1d15a66b2792fa9119a1a",
"assets/assets/dorpon_logo_13.riv": "df088f220132b58a85b27467de88d5f1",
"assets/assets/dorpon_logo_15.riv": "529e4e634a69c9f29f1ae499e7b4dac4",
"assets/assets/dorpon_logo_4.riv": "b48fbe20216516ef10480a21b9e7d8f8",
"assets/AssetManifest.json": "bd3d4f14db38855f4eb17073b70d2828",
"assets/NOTICES": "25382a5cc7fa80a01c2f9c0593c6efd3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"version.json": "20a4fe24f5e76b2f22aa19a7625eefb2",
"manifest.json": "2236e76d3f71da8766a4f4e671c2f901",
"main.dart.js": "7bd013ac5bb6a8880d2f92b1be15bd04",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "756c9b338fadfd673802616fa6b84cdf",
"/": "756c9b338fadfd673802616fa6b84cdf"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
