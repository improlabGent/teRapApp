/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-b2b86277'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "style.css",
    "revision": "ebc15c8139c6dbca0e26b91b6863ebc4"
  }, {
    "url": "registerSW.js",
    "revision": "402b66900e731ca748771b6fc5e7a068"
  }, {
    "url": "pwa-512x512.png",
    "revision": "b9121a67b4dfa0a0e510f748d4176150"
  }, {
    "url": "pwa-192x192.png",
    "revision": "035075d82a0210cfed502e71a4a6053e"
  }, {
    "url": "maskable-512x512.png",
    "revision": "18b0acb1ba1f1a8381762dcccd881a38"
  }, {
    "url": "index.html",
    "revision": "621eb8d25eb5bd92c2454de0061e8a1b"
  }, {
    "url": "favicon.svg",
    "revision": "60407eccbf1dcecb6d8e75d779cbc2c3"
  }, {
    "url": "favicon.png",
    "revision": "b9121a67b4dfa0a0e510f748d4176150"
  }, {
    "url": "fonts/bangers-latin.woff2",
    "revision": "d09b4fad52420d64f7e47377834e36c9"
  }, {
    "url": "fonts/bangers-latin-ext.woff2",
    "revision": "fd15c519ddba7924c0f858a91141732e"
  }, {
    "url": "assets/select_down-BVVDAWfo.png",
    "revision": null
  }, {
    "url": "assets/select-T0izCPVU.png",
    "revision": null
  }, {
    "url": "assets/rapper_09-mT2KKvz1.png",
    "revision": null
  }, {
    "url": "assets/rapper_07-Bt5mFZYV.png",
    "revision": null
  }, {
    "url": "assets/rapper_05-CNCBex4x.png",
    "revision": null
  }, {
    "url": "assets/rapper_04-cEopL-z8.png",
    "revision": null
  }, {
    "url": "assets/rapper_03-DvgDrG1d.png",
    "revision": null
  }, {
    "url": "assets/rapper_01-BC33ibpv.png",
    "revision": null
  }, {
    "url": "assets/rapper_00-B7AHhuiu.png",
    "revision": null
  }, {
    "url": "assets/phaser--qN7-NCm.js",
    "revision": null
  }, {
    "url": "assets/logo.png",
    "revision": null
  }, {
    "url": "assets/index-CYHziPg9.js",
    "revision": null
  }, {
    "url": "assets/bg.png",
    "revision": null
  }, {
    "url": "assets/TE_RAP-DF8oV9P0.png",
    "revision": null
  }, {
    "url": "assets/IMPROLAB-DFJ5HsbM.png",
    "revision": null
  }, {
    "url": "assets/FUS-eSYpZJ1-.png",
    "revision": null
  }, {
    "url": "assets/dict/d29_Veelgebruikte_woorden-CmNb5G67.js",
    "revision": null
  }, {
    "url": "assets/dict/d28_Vervoer_en_voertuigen-DcuzHKdq.js",
    "revision": null
  }, {
    "url": "assets/dict/d27_Technologie_en_computers-CgMYebg8.js",
    "revision": null
  }, {
    "url": "assets/dict/d26_Sport_en_fitness-BuhpqeBO.js",
    "revision": null
  }, {
    "url": "assets/dict/d25_Roasts_en_rapbattles-Btj486li.js",
    "revision": null
  }, {
    "url": "assets/dict/d24_Natuur_en_planten-BVB05ZeF.js",
    "revision": null
  }, {
    "url": "assets/dict/d23_Muziek_en_kunst-Av5xTPPG.js",
    "revision": null
  }, {
    "url": "assets/dict/d22_Lichaamsdelen-CeCNI0KY.js",
    "revision": null
  }, {
    "url": "assets/dict/d21_Kleuren-CsEyv-Xp.js",
    "revision": null
  }, {
    "url": "assets/dict/d20_Kleding-CFFx7rts.js",
    "revision": null
  }, {
    "url": "assets/dict/d19_Keuken_en_huishouden-D-Dn2m0F.js",
    "revision": null
  }, {
    "url": "assets/dict/d18_Huis_en_meubels-BJc6haO0.js",
    "revision": null
  }, {
    "url": "assets/dict/d17_Hobbys_en_vrije_tijd-DqhC3GuM.js",
    "revision": null
  }, {
    "url": "assets/dict/d16_Gezondheid_en_medisch-BBD3OcnQ.js",
    "revision": null
  }, {
    "url": "assets/dict/d15_Geografie_en_landen-hvr7878V.js",
    "revision": null
  }, {
    "url": "assets/dict/d14_Familie_en_relaties-CZnkCyaO.js",
    "revision": null
  }, {
    "url": "assets/dict/d13_Emoties_en_gevoelens-Bk-Ge_2q.js",
    "revision": null
  }, {
    "url": "assets/dict/d12_Belgische_politiek-Bs3OypAi.js",
    "revision": null
  }, {
    "url": "assets/dict/d11_Absurd_en_bizar-DlX7Hxl8.js",
    "revision": null
  }, {
    "url": "assets/dict/d10_Rap-termen-BXfRzZ-7.js",
    "revision": null
  }, {
    "url": "assets/dict/d09_Werk_en_kantoor-Cg3yHIuP.js",
    "revision": null
  }, {
    "url": "assets/dict/d08_Voedsel-CZpqIneV.js",
    "revision": null
  }, {
    "url": "assets/dict/d07_Moeilijk_te_rijmen-Dugj0OK9.js",
    "revision": null
  }, {
    "url": "assets/dict/d06_Formele_woorden-BCN2WBxh.js",
    "revision": null
  }, {
    "url": "assets/dict/d05_Dieren-DYcAlUBl.js",
    "revision": null
  }, {
    "url": "assets/dict/d04_Beroepen-BKH4Y3_j.js",
    "revision": null
  }, {
    "url": "assets/dict/d03_Moeilijk_te_rijmen_XL-jj5MK4GG.js",
    "revision": null
  }, {
    "url": "assets/dict/d02_Simpele_woorden_XL-Cb1ya1CL.js",
    "revision": null
  }, {
    "url": "assets/dict/d01_Simpele_woorden-etG2qUPY.js",
    "revision": null
  }, {
    "url": "assets/rapapp3-gOyDA0zG.mp3",
    "revision": null
  }, {
    "url": "assets/rapapp2-u9vuLb82.mp3",
    "revision": null
  }, {
    "url": "assets/rapapp1-CF5G3f3q.mp3",
    "revision": null
  }, {
    "url": "favicon.png",
    "revision": "b9121a67b4dfa0a0e510f748d4176150"
  }, {
    "url": "favicon.svg",
    "revision": "60407eccbf1dcecb6d8e75d779cbc2c3"
  }, {
    "url": "maskable-512x512.png",
    "revision": "18b0acb1ba1f1a8381762dcccd881a38"
  }, {
    "url": "pwa-192x192.png",
    "revision": "035075d82a0210cfed502e71a4a6053e"
  }, {
    "url": "pwa-512x512.png",
    "revision": "b9121a67b4dfa0a0e510f748d4176150"
  }, {
    "url": "manifest.webmanifest",
    "revision": "626525331cd1d2ff694aef81f9c3f822"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/\/behind_barz-[^/]+\.mp3$/, new workbox.CacheFirst({
    "cacheName": "rijmspel-offline-song",
    plugins: [new workbox.RangeRequestsPlugin(), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/\/assets\/dict-xl\/.*\.js$/, new workbox.CacheFirst({
    "cacheName": "rijmspel-dictionaries",
    plugins: [new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    }), new workbox.ExpirationPlugin({
      maxEntries: 40,
      maxAgeSeconds: 31536000
    })]
  }), 'GET');
  workbox.registerRoute(/\.mp3$/, new workbox.CacheFirst({
    "cacheName": "rijmspel-music",
    plugins: [new workbox.RangeRequestsPlugin(), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    }), new workbox.ExpirationPlugin({
      maxEntries: 30,
      maxAgeSeconds: 31536000
    })]
  }), 'GET');

}));
