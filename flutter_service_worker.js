'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/assets/sample_data/sample_friends_feed.json": "a7a612edd9eaa6209ebaac0b5e1f0669",
"assets/assets/sample_data/sample_recipes.json": "9af69a65a6315703535f60c16eee930f",
"assets/assets/sample_data/sample_explore_recipes.json": "b58fe067df602ae1a42f96bb8c6e29a0",
"assets/assets/magazine_pics/mag2.png": "66130bc238c886240790cfb1b440adb6",
"assets/assets/magazine_pics/card_bread.jpg": "fc720a6180f591b9fdde03c642fb3d00",
"assets/assets/magazine_pics/mag5.png": "612e2e487cb51a5b1f5782760ce15373",
"assets/assets/magazine_pics/card_smoothie.png": "66130bc238c886240790cfb1b440adb6",
"assets/assets/magazine_pics/card_carrot.png": "0d2b21e99c63449763a1d5ed4dfc45a7",
"assets/assets/magazine_pics/mag1.png": "083c4fa992d0b95058ff1915a6780a1d",
"assets/assets/magazine_pics/mag4.png": "bd572d0a2d5001b5c0ed7493a6041eed",
"assets/assets/magazine_pics/card_salad.png": "612e2e487cb51a5b1f5782760ce15373",
"assets/assets/magazine_pics/mag3.png": "0d2b21e99c63449763a1d5ed4dfc45a7",
"assets/assets/fooderlich_assets/recommend.png": "8fad21adf4d94a6a57771fdbc9a8e80a",
"assets/assets/fooderlich_assets/sheet.png": "477215e0559841944120213057896e30",
"assets/assets/fooderlich_assets/list.png": "589407bfa52cb1b07c41f74c865a6d2e",
"assets/assets/fooderlich_assets/empty_list.png": "fd8ae8afd0b3a57cac11d107cead2d34",
"assets/assets/fooderlich_assets/rw_logo.png": "82be520659a802d202f2ad11866d4a85",
"assets/assets/food_pics/food_cucumber.jpg": "8fa5d8fdb838a5bc3d709d6d35369ed7",
"assets/assets/food_pics/food_pho.jpg": "8901532618080a276cf6a53b792903e0",
"assets/assets/food_pics/food_curry.jpg": "451de7dc12ddcc47abe1b061ec9423d9",
"assets/assets/food_pics/food_dozen_eggs.jpg": "3dd6c07b0560270e3055221207d81ed7",
"assets/assets/food_pics/food_friedrice.jpg": "99c906c9c472ba662e567e6578372578",
"assets/assets/food_pics/food_cupcake.jpg": "3a18b5a33e5ef956273a7e9aff184469",
"assets/assets/food_pics/food_peanutbutter.png": "009e6fd0b6cdcad24c1af0f5056fe50b",
"assets/assets/food_pics/food_brussels_sprouts.jpg": "4749cd82747801875a1c1d545cb5f435",
"assets/assets/food_pics/food_spaghetti.jpg": "352bc4733d3ba759fa977f14881d8fa6",
"assets/assets/food_pics/food_banana.jpg": "28b81838736f4ea48228a37589d694bf",
"assets/assets/food_pics/food_flour.jpg": "635a6dac95e89f29b18794b669785148",
"assets/assets/food_pics/food_green_beans.jpg": "82d95c746ba5744eca9cd9d37684243a",
"assets/assets/food_pics/food_soymilk.png": "2756ae43b13f8364f2b0226c4b74d137",
"assets/assets/food_pics/food_burger.jpg": "ffc3463799a04569d0741019f3901df2",
"assets/assets/food_pics/food_salmon.jpg": "875f12fcf5985eb2864c1dcef8da1063",
"assets/assets/food_pics/food_pancake.jpg": "d9b0a474f1c0c496821fad8b5e5d8050",
"assets/assets/profile_pics/person_kelvin.jpg": "074164acdd5150eee97179b89b183b15",
"assets/assets/profile_pics/person_crispy.png": "f72ff9baa079eb3a9eacd6b805d77c43",
"assets/assets/profile_pics/person_sandra.jpeg": "313347d60d8a6693b8528cbf38be4435",
"assets/assets/profile_pics/person_manda.png": "4b13f8089c95e0334717e05c8c0aeb68",
"assets/assets/profile_pics/person_kevin.jpeg": "ecc19eb1c1dc1704fca0c7502adb7e5e",
"assets/assets/profile_pics/person_ray.jpeg": "d21589f30a1f5c968bd4686520e50b25",
"assets/assets/profile_pics/person_katz.jpeg": "9d93dc4bef3ce0e055eeb486a1af911a",
"assets/assets/profile_pics/person_cesare.jpeg": "953a93138a29882976b30c386396305a",
"assets/assets/profile_pics/person_stef.jpeg": "e2ce6888dbf5fc392c9322d9cfb54b29",
"assets/assets/profile_pics/person_joe.jpeg": "c03b996f28a9a0f74e81d0565d4218a3",
"assets/assets/profile_pics/person_tiffani.jpeg": "10f1b0e3af37b5569f59c07c61cdb970",
"assets/AssetManifest.json": "242627d177f5875e255a23e23ab7e5d3",
"assets/NOTICES": "2b1670c3182e90a8702f81fec7c686a4",
"version.json": "f60d15b86704a3701008c6f59ce8a4b9",
"manifest.json": "22708f9f2e575acce235b4495a9fabb6",
"main.dart.js": "446721ce708d16b35aee1f799ccb44d0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "8a429ef9da6d5dbc8b0ac33bacfbd723",
"/": "8a429ef9da6d5dbc8b0ac33bacfbd723"
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
