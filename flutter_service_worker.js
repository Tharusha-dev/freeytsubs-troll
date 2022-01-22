'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".git/COMMIT_EDITMSG": "4bb0f72c222b789950a703619b89960c",
".git/index": "265b2ca0d2fe588ff9b9c296b624b8c3",
".git/logs/HEAD": "8612907a66e351179b2367b7e9bdeaa5",
".git/logs/refs/remotes/origin/main": "2539c168f084b9e8a3e268a30673a9d2",
".git/logs/refs/heads/main": "8612907a66e351179b2367b7e9bdeaa5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/c4/74a19f2713bf1d4c4887a0bb82602dc96c4a4f": "03e39af397ece2c4d1d038c6c46af10d",
".git/objects/3c/010885d8aab35c16c8b7af6674ca89818c8bbb": "169326c300046cf7e7936781baa05315",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/2c/2f3d7bbc8010c0a74c281480131d992ff2cdea": "15e5b55bc8ab9dc52c3de7b5931573c4",
".git/objects/80/411934781fcd843338071e5315102d6cfc359d": "a36782db9dea411641979963fc9d1ed6",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/ad/277c8fd716b3635e8b7a41b61c783591a3cf08": "75b37a19cbfb942f48f71908b77f3839",
".git/objects/ad/5b0c07367405807175586970c97eba7d6268c3": "da29cb8708ece9da044b3daa13e9facd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/10/43f46ec43f8978a587a465cc0a906746b11983": "1f47a238e26946ed193fae7e0f6de398",
".git/objects/6e/8305c5f44b4c1d28f301dbb2f27d7dfd137c7c": "c8e453ba98fdccfb04d8d468338d21e7",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/b8/5a1e157f24bb3ce68ebfc70460909644956d09": "007e387431d8fccacfb18a12660b77bd",
".git/objects/95/d2dca59c3e41787365c3bdc33b256f5b0f8c12": "caf5d7449deaf9f96763dd2d0392cefb",
".git/objects/e8/bdac0514b947c137908766d61b9bd6c101b1bf": "97549fbdd4345c39072d54a69ea78909",
".git/objects/12/e2848a6546dd012a194bdb85d96685d2a655d3": "fd7ad590d7c3d094fc91a7a83aadf0d7",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/82/5cf5f780acb636b715d89e0eb2ceeba3644072": "12991602f161f66c01df10f4b97030b3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/ae/0662dfda47aa47af8a3f71c7a2410b2495a413": "629398087a546011e04a0f8603acd7ba",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a8/ed0bb3115489a48f1f6d7c4911710150d3b2ed": "53cee0aed68849585e08adf22a3e4702",
".git/objects/23/59e39584cfb1171010dd330fff66d26421b6ba": "df8cbd84083ddd40c6c37e546e12b8d4",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/5c/d8516ed39f1d560c3f3300d256c185a1fbbb7b": "03d15264a316e35423986e3884bd71db",
".git/objects/9d/a06e196e597c2f088c6a6820bbd25418de4f28": "5812d50a9586434f52239c935c55d0f5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/19/7b80d4f54c446ebbf31fa58efc7597e32bb399": "ba14fc568409ab9388c59dec125c3eeb",
".git/objects/78/825297dc263946350d056d8f0577a4bf69903d": "d1cdff2539d33f8e58b7b72a1ec95041",
".git/objects/b3/b68dd44eddef37349a1bd3751effaf1f321dbb": "8a79a66261810e31411fdab2f055a0de",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/f3/b763bc829133af72e23a7752d8faaf5f2965b3": "467c8a8efb7648d58fe32406a4c77b6e",
".git/objects/16/5047baac9ae5595b37d3ce975dce71aee8636d": "ddb59fe235cd6b594b42e3e0a9355943",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/c52a1e4bfa44208c02a154faa34f4bdd163d32": "66594ca3c51871e5e28306080264df00",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/3997a1e4d72c3a7015b5d93b774972088bc49f": "51d5a22b41001c4767344311ac23531d",
".git/objects/20/ecc6b0faea3eb3c4df2903b4b09d2ff118bb8b": "f3cbc3f51295f4612021f54fce567787",
".git/objects/c6/4a9bf93d58429a3fb0ec3c227023f475c8a841": "81592daaed256ee45c68c542bcee32e8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/config": "b34000dc63c298fdaec54425719db756",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/remotes/origin/main": "f39daba3df4a0378e5b4d2f93a94450e",
".git/refs/heads/main": "f39daba3df4a0378e5b4d2f93a94450e",
"manifest.json": "08ac35066a222048399df80b41567666",
"index.html": "80644a6178545c7cd10b46b653b50349",
"/": "80644a6178545c7cd10b46b653b50349",
"favicon.ico": "068043b625e988658433bdd14f0fa3d1",
"assets/NOTICES": "724479946afa5789749e54e24cba399b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"main.dart.js": "eb1d96d33b6dec308a95f6dba7df3b6c",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"version.json": "729035ad74838761044bfa25d7f7dc42"
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
