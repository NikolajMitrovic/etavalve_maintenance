'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c456512e5db8465c26ece6b5f117e0cc",
"assets/AssetManifest.bin.json": "6c23fef2868ebbb003f43e08ad17d83d",
"assets/AssetManifest.json": "52189be909689b4f09d44d8d86662f51",
"assets/assets/ABimage1.png": "f6c42904cc8ba5c5392c1f650e02252d",
"assets/assets/backgroundlatica.png": "9b567c4dad8842df0b42b9231dc899d9",
"assets/assets/BlueArrow.svg": "e0d8626ed4aa4e5f93677afb11b7a217",
"assets/assets/bubbles.png": "3066ae1d0d5655ef28d381f85bbeca9e",
"assets/assets/calendar.png": "9a42a513b259c21bb5d2414164cb1fde",
"assets/assets/calendar.svg": "eafa8e5e60c8f280d52197e484033378",
"assets/assets/chart.png": "117c4025498419885fa45322c133505a",
"assets/assets/develop.png": "6bcb00cdd4eefbe7a936042291b348b5",
"assets/assets/down_left.svg": "8a7f9a978c586a4a21dcc03dfce14e05",
"assets/assets/down_left_de.png": "d3ab275072bdccdd4cf5b7fcd5fe3bb0",
"assets/assets/down_left_de_hover.png": "c6d650b5a7343133765cffba45196cfe",
"assets/assets/down_left_en.png": "427640ef555dd46c9a23a8ec4aa78dd7",
"assets/assets/down_left_en_hover.png": "87047a782c6dc7cfe31bdc7a396aa427",
"assets/assets/down_left_hover.svg": "2d134487d7c93976f2bf697c790732d8",
"assets/assets/down_right.svg": "4f5bba8f70a7ca27a271d549cc0ae3c7",
"assets/assets/down_right_de.png": "6901438673478605a7d641670065d261",
"assets/assets/down_right_de_hover.png": "3ca9f125d77a311dc3373e803125ee91",
"assets/assets/down_right_en.png": "6fb6c9662fdef1e0905a21b8798f2497",
"assets/assets/down_right_en_hover.png": "0161e1bbf46023030ec4faef79269b34",
"assets/assets/down_right_hover.svg": "3e4f15b67217d93ef1d090ea65be12c7",
"assets/assets/eclipse.png": "6d64b512ad19432b229fbb23513eb166",
"assets/assets/envelope.svg": "02eb1ca50b3991bb798ea926002bc7e2",
"assets/assets/foto_andyn.png": "b4b356830c6cee73f7debe98e659743c",
"assets/assets/foto_andyn_hover_de.png": "924d0dea945ac5d6fa36cd8b737f9a8e",
"assets/assets/foto_andyn_hover_en.png": "0748a3532e1ca1a84d7b396110475bdc",
"assets/assets/foto_wolfgang.png": "266361962c8b91b506656bcb155f4006",
"assets/assets/foto_wolfgang_hover_de.png": "d0f8a8fb5d1d4c6316e7ba7268959adc",
"assets/assets/foto_wolfgang_hover_en.png": "77738898dcb96a7c96e814f23aea47e6",
"assets/assets/hero1.png": "c006cc4da4fa35f8a615cdc9ce2b6440",
"assets/assets/hero2.png": "18ba34c61d2518b8632c6a7a0710132d",
"assets/assets/hero3.png": "a51f9ef249fd432b41df519a7ee20134",
"assets/assets/hero4.png": "5980a3abdd52480d276193094b72ff7d",
"assets/assets/image1.png": "69f2a85deffabd236e61e39742066025",
"assets/assets/image1_de.svg": "7c216172f17858d8f8c250e3b1318694",
"assets/assets/image1_eng.svg": "6b831c23e78bafd51b03d3b1b6dce141",
"assets/assets/image2.png": "d55b0b5c7f7ee7a8f5b77cb530ab96ef",
"assets/assets/image3.png": "ad8573865913feed127eecf1fbee675b",
"assets/assets/image4.png": "0ced20b86a69f9760656fe6277a3a7c6",
"assets/assets/image5.png": "bd15b7db2b152cf3cb290df324c1571d",
"assets/assets/IP_Image.png": "eadd6dd47bcbc53b350d19039af7a1b0",
"assets/assets/latica1_de.png": "08a853af6ee246e6c0683ccd1c7f7db1",
"assets/assets/latica1_de_hover.png": "ec2ee833497a15d761e895c4d83fa104",
"assets/assets/latica1_en.png": "100e4980decbe31a1aa9cb2db008190f",
"assets/assets/latica1_en_hover.png": "03162c3025d02dd876872d1e622c4452",
"assets/assets/latica2_de.png": "90b3664c5ec7fb93d9e90a62a40faacd",
"assets/assets/latica2_de_hover.png": "c6d5a4fd7d3faf6358466c336829edb0",
"assets/assets/latica2_en.png": "f6b77077aa4158c4fcaf435b1fa846a8",
"assets/assets/latica2_en_hover.png": "e2fb0a96a5c43ac990c0fa93860440e6",
"assets/assets/latica3_de.png": "bc9fe402d32b1ae35bd18199e5242c3b",
"assets/assets/latica3_de_hover.png": "6e9f07edfb9c4bb30c363c10e548b3f5",
"assets/assets/latica3_en.png": "cdc31054b1b3a6ec72a452de34c5c5a7",
"assets/assets/latica3_en_hover.png": "daf927078b2f0d237f1b1ab27410112e",
"assets/assets/latica4_de.png": "99c99cdd4e9bde6d925521040781bcc7",
"assets/assets/latica4_de_hover.png": "90b3caaee172aaae15510c64beda1546",
"assets/assets/latica4_en.png": "fac7bfee908bb9cb363e764f586e5070",
"assets/assets/latica4_en_hover.png": "dd80fd4c320ac5ae62243826fe2778c1",
"assets/assets/LaticaDesna.svg": "45e5fdbbae1400c1cf774ab290a07924",
"assets/assets/LaticaLijeva.svg": "137ac8c8c7d290fc3e59d757cae61847",
"assets/assets/latice_pozadina.png": "007c37285916cdabcde059a145dc1c46",
"assets/assets/latice_pozadina1.png": "476f8e6fd864974cf59a9772f956f155",
"assets/assets/latice_pozadina_tamnije.png": "3fed02eca648cf1f305c59d39733c1e0",
"assets/assets/latice_pozadina_tamnije.svg": "39da5d6c1ee29d3c03150b08e76d1453",
"assets/assets/leftbuttonarrow.svg": "5669884b8d2d41339f87424632b770cf",
"assets/assets/LinkedIN.png": "e92cdd8fe81d00abfd967c2d82f8de12",
"assets/assets/LinkedIn.svg": "f12702ed5e6e1001ea67905e74cb50a1",
"assets/assets/logo1-2.png": "a3d90b5d32b0d1d7548350c1e23b2903",
"assets/assets/logo1.png": "c689e05eb2cf1f670bf6a6d5c69331d2",
"assets/assets/logo1.svg": "179f8aee3d259850c182f0e3c60963b6",
"assets/assets/logo2.png": "db36bcebecf1492f8af06b51d93fec9d",
"assets/assets/logo3.png": "3f2f505b38d23b72b752a60591d4cb2d",
"assets/assets/logo4-2.png": "527151e67e9a8b3633f26334a2914585",
"assets/assets/logo5-2.png": "307e14c1ebc5dbc9f65c0b47f1bb2916",
"assets/assets/logo_tablet.png": "fb07d7efa5d5b474163d479678213cc0",
"assets/assets/logo_tablet2.png": "b8f73541aeaf4659c73aa0702aed4d73",
"assets/assets/map.png": "8e81911f856e616d5db1dfbee41af63a",
"assets/assets/map.svg": "614e25559da9fa99ef69894b976dbdaa",
"assets/assets/menu.svg": "78bda09bb954020d6e758b5adba8a6cd",
"assets/assets/mobileetavalvepic.png": "9f294c5068222f2f69912ad1ce1ff1db",
"assets/assets/mobilegraph1_de.svg": "788e85a04d3a437ca48a0511666d35b0",
"assets/assets/mobilegraph1_eng.svg": "409640b9751269e62d55bb0f1d8ed158",
"assets/assets/mobilegraph2_de.svg": "ca26c4e69213d76df303992e8310194c",
"assets/assets/mobilegraph2_eng.svg": "3abd1363e882f76547f123ffeeebf0b0",
"assets/assets/mobilehero1.png": "8849a32a0246ac26907174bc8cc8bd51",
"assets/assets/mobilehero2.png": "3ae2f94f8b2201b121650f9778d559ae",
"assets/assets/mobilehero3.png": "b143bc5dda2b001ad01e32eddace06ff",
"assets/assets/mobilehero4.png": "0fe0d37805dda05c27ae389f8def4272",
"assets/assets/mobileKeyBenefits.png": "73c9091052e3e433a93aedd392707a49",
"assets/assets/mobileKeyBenefits.svg": "cc35ae991692c46d547893bde8fa5cc4",
"assets/assets/mobileKeyBenefits_eng.svg": "3bbc93e574598bc04b3e7d857c2fb265",
"assets/assets/mobilelogo1.svg": "fdbd6339886c8f85f343b320fccfe660",
"assets/assets/mobileproduct.png": "e3fab67d7703232576fc238ffb71a1a4",
"assets/assets/OrangeArrow.svg": "434d4a06abbbb3d3238b12b4c2b1c24b",
"assets/assets/partners_logo1.png": "e7badc46eb839215314efe3fd1729436",
"assets/assets/partners_logo1.svg": "e1100b4e34c11619d3e69bb44b9887a9",
"assets/assets/partners_logo2.png": "0ce41e24de23d4e2479aa0ac5017c76a",
"assets/assets/partners_logo2.svg": "b752086693b8e86800ba135edbfa9d4a",
"assets/assets/partners_logo3.png": "9e246e9fb02caa91cbe5fcf516829050",
"assets/assets/partners_logo3.svg": "96c77a479b175f853e726ecae4cca6a8",
"assets/assets/partners_logo4.png": "69830d72bf996bda7e4997ae62e721e3",
"assets/assets/partners_logo4.svg": "4b82ff2bc19b765514361fd2b3fb8b72",
"assets/assets/product.png": "a5b021f418476663bffc0b8b25008017",
"assets/assets/rightbuttonarrow.svg": "c330087bf78e336178d63aa372c2a731",
"assets/assets/technology_graph1.png": "cc9a59f02784cb07dbe165b090a2b5c2",
"assets/assets/technology_graph1_de.svg": "d671563aa2cf5d1c8e0bb9bda6228a3a",
"assets/assets/technology_graph1_eng.svg": "5a0707af89052267d3c3bc39dba153c6",
"assets/assets/technology_graph1_tablet.png": "6e2f01bed1fc3cfa2e89772929f9bfa8",
"assets/assets/technology_graph1_tablet_de.svg": "f3be9c1926ff603431299d4da9dcf26a",
"assets/assets/technology_graph1_tablet_eng.svg": "a083e5e900b3b08adcf46c2bdc1c1ff4",
"assets/assets/technology_graph2.png": "17a250ced7b003f689393c806acd62a6",
"assets/assets/technology_graph2_de.svg": "61c0d92cf7bca6757c8eeac7cb4a36b3",
"assets/assets/technology_graph2_eng.svg": "feb9ef9446bfc893263172cd5b9bd7ac",
"assets/assets/technology_graph2_tablet.png": "1480573b6539dabc94ed1c5c670811ed",
"assets/assets/technology_graph2_tablet_de.svg": "242b0a0771f3d92b99593f244d181e7f",
"assets/assets/technology_graph2_tablet_eng.svg": "baee766dcf681a27705c990ac71e9721",
"assets/assets/technology_section_1.png": "d41988295df7dfe799e94f1106984ac2",
"assets/assets/technology_section_2.png": "bbdf2811783f338311fe545a39c30d0a",
"assets/assets/technology_section_3.png": "eab3ec9bcc177b2a61eb730e243f2ea7",
"assets/assets/up_left.svg": "bf0d00cec335373b05d4d4631e2dfefd",
"assets/assets/up_left_de.png": "01aefe8d7f3b24d2b562ae10013d40ba",
"assets/assets/up_left_de_hover.png": "b76d570c81763d2c798a2d4acf3be79b",
"assets/assets/up_left_en.png": "8638c8f4ff54e1b45c841a4634dadf4b",
"assets/assets/up_left_en_hover.png": "91729103925c05509592b274167d2f63",
"assets/assets/up_left_hover.svg": "cf554f005d6912dd8c35dc86e48d961a",
"assets/assets/up_right.svg": "669f82b55ae6078144e9885e6a2e04f0",
"assets/assets/up_right_de.png": "e904f391be7b81b7722ddb079520528f",
"assets/assets/up_right_de_hover.png": "7da31cf5a86197a9952f1af6b7ec2dae",
"assets/assets/up_right_en.png": "2935a220b9240e3da5a80845752b8634",
"assets/assets/up_right_en_hover.png": "5eb7d4e1332f7d90933d18ba2d4dd901",
"assets/assets/up_right_hover.svg": "01e34885093768b027d6bb76a5153330",
"assets/assets/Vector1.svg": "42df0080c3dc083a8c6f9048736fdb21",
"assets/assets/Vector2.svg": "32967c1b401a7ebd194282a1a2357178",
"assets/assets/Vector3.svg": "14056f79a82be6f725e59d041b68f9a5",
"assets/assets/Vector4.svg": "b3c8790955f44d6589a7af5057786ab1",
"assets/assets/WhiteArrow.svg": "c89936222e723b5d42c34a00ddcc0714",
"assets/assets/x.svg": "3cc83dfa69130a7ae0cdb6b35542633b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "77f9a8e1a6829de943261890ea22a2c6",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "ec5b5f82dc5601250ff955b444f6be38",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "065b6eae5b5c1ace0ab9720dd458df5d",
"icons/android-chrome-256x256.png": "ef288945f6ec119ef21547a1f3eb0785",
"icons/apple-touch-icon.png": "36879082cad0da43f56bc05988080f19",
"index.html": "dd135fd2cbc7239e96317a381a771279",
"/": "dd135fd2cbc7239e96317a381a771279",
"main.dart.js": "bdbf20c68070ea108b8000cdb2f51bb0",
"manifest.json": "3d40192a21fafb69ce7f9acfe317229f",
"version.json": "9e9d8e9e31de0e71dcbcd5ebe5140fc8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
