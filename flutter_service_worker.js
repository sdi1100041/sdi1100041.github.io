'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "38844ed8ae15942ebf855fc2dd3d3eed",
"icons/Icon-16.png": "f6ba11ebae4530c69e8e9469b87aad2d",
"icons/Icon-192.png": "49168459cdb30e60903b898091107fcc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/energy_class_7.png": "fb8aad21a19ad3abc24cd5c918181a0a",
"assets/assets/energy_class_2.png": "bbf72d5416e0e426d2d6bf00923a74e9",
"assets/assets/MU.svg": "047cc902c4159121e12e72213c20fb33",
"assets/assets/SO.svg": "08c9ba2172ffd507ef3b4f29bb3e27f1",
"assets/assets/%25CE%2593%25CE%25BB%25CF%2585%25CE%25BA%25CE%25AC.png": "2bf232f147eab08f5619a3bb1beebe38",
"assets/assets/SE.svg": "2b4472a4a66225a3e24593e50636f66c",
"assets/assets/CE.svg": "e94c21c6ace7575e9df5fee072f533c5",
"assets/assets/%25CE%2596%25CF%2585%25CE%25BC%25CE%25B1%25CF%2581%25CE%25B9%25CE%25BA%25CE%25AC.png": "7ba6b7b3db9a9fcab478d16be039efa7",
"assets/assets/%25CE%25A6%25CF%2581%25CE%25BF%25CF%258D%25CF%2584%25CE%25B1.png": "fa095ed0700161fd3c0c7378da330088",
"assets/assets/%25CE%2598%25CE%25B1%25CE%25BB%25CE%25B1%25CF%2583%25CF%2583%25CE%25B9%25CE%25BD%25CE%25AC.png": "d915125f66bd122ecf08e60a5a308962",
"assets/assets/%25CE%2586%25CE%25BB%25CE%25BB%25CE%25B1%2520%25CE%25A5%25CE%25BB%25CE%25B9%25CE%25BA%25CE%25AC.png": "f4f3cdec8d832193d3dd817d5a18b803",
"assets/assets/PE.svg": "8ab015e2096d1038331ccb33a5ca5d80",
"assets/assets/EG.svg": "5c994ceff7c1c51557525d79258df8a1",
"assets/assets/energy_class_5.png": "34f593a7f74afdb479aba71440cfeaaf",
"assets/assets/transparent.png": "1b607a6fb78980fc79c7342429f4ed89",
"assets/assets/ML.svg": "a5d94d39fe16a6045250a6a293c69795",
"assets/assets/GL.svg": "28ae8f2518b952b0448990b9234ea77c",
"assets/assets/energy_class_4.png": "ced0510f6fa85470ba83cda94b0afac8",
"assets/assets/404.png": "99a05e8146cbaf0d5c8ef6aebc93b69a",
"assets/assets/SU.svg": "509066641323adee25b40388cb9c147f",
"assets/assets/dorpon_logo.riv": "529e4e634a69c9f29f1ae499e7b4dac4",
"assets/assets/energy_class_3.png": "df896528b9b59ad0fba6d748909c9fb2",
"assets/assets/LU.svg": "59ca160d2037b50d2c845494db80aa38",
"assets/assets/%25CE%259A%25CF%2581%25CE%25AD%25CE%25B1%25CF%2582.png": "eaa930b6ea78b77c1f9e26637406e90d",
"assets/assets/energy_class_6.png": "b0538066398d1b01574c3f91dc1bf575",
"assets/assets/%25CE%25A1%25CF%258D%25CE%25B6%25CE%25B9.png": "d1c73205187bc84690665bb890590af5",
"assets/assets/%25CE%258C%25CF%2583%25CF%2580%25CF%2581%25CE%25B9%25CE%25B1%2520%25CE%2594%25CE%25B7%25CE%25BC%25CE%25B7%25CF%2584%25CF%2581%25CE%25B9%25CE%25B1%25CE%25BA%25CE%25AC.png": "f96cec8270399c334758cfa0ca4f8e6c",
"assets/assets/%25CE%2591%25CF%2585%25CE%25B3%25CF%258C.png": "f913eff9b8e9d9abec565712c39c3e95",
"assets/assets/%25CE%259E%25CE%25B7%25CF%2581%25CE%25BF%25CE%25AF%2520%25CE%25BA%25CE%25B1%25CF%2581%25CF%2580%25CE%25BF%25CE%25AF.png": "588d4856b13a93e8cc62577183eff910",
"assets/assets/NU.svg": "266fd9664159ca0359a31a7e92e38b36",
"assets/assets/%25CE%2596%25CF%258D%25CE%25BC%25CE%25B5%25CF%2582.png": "ad000eca54813c55ba7d7371bbe50172",
"assets/assets/FI.svg": "3d924072f8100cb3896546735b5647b2",
"assets/assets/energy_class_1.png": "6812d177a464419ab67bed3dd0431740",
"assets/assets/%25CE%25A0%25CE%25BF%25CF%2584%25CE%25AC.png": "40f98f7010f9a5a302d1f4b5ab90730f",
"assets/assets/%25CE%25A3%25CE%25BF%25CE%25BA%25CE%25BF%25CE%25BB%25CE%25AC%25CF%2584%25CE%25B1.png": "66a8d92e13c31c3acefa5a648b9e4723",
"assets/assets/CR.svg": "a9378777c3050c6caf9663c74ac55a68",
"assets/assets/%25CE%259B%25CE%25B1%25CF%2587%25CE%25B1%25CE%25BD%25CE%25B9%25CE%25BA%25CE%25AC.png": "9bf2bd84fe882242d652d5cfd1e4c702",
"assets/assets/dorpon_logo_static.png": "2a7b4557e70b111ba295b9223002f447",
"assets/assets/%25CE%25A4%25CF%2585%25CF%2581%25CE%25AF.png": "0bf7eefd2547ed1be51143479ce87150",
"assets/AssetManifest.json": "c1c044102e7bbcc6408810bbbe5f39ea",
"assets/NOTICES": "cf17100ab3d39f459171b6dcc826bba2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"version.json": "a37476fc11d5a548351a5a04f011c8c1",
"manifest.json": "0f4278e94cb91b89324c831a52ea37f6",
"main.dart.js": "6c525de9230202f0529a60e3e10f8b28",
"index.html": "8b51064fe3dceb19d6967167472918d3",
"/": "8b51064fe3dceb19d6967167472918d3"
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
