if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const t=e=>n(e,i),d={module:{uri:i},exports:c,require:t};s[i]=Promise.all(a.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Y7YOcWdxVFkmMrTr98Zyy/_buildManifest.js",revision:"da875330b3500c02157b492d57f65a94"},{url:"/_next/static/Y7YOcWdxVFkmMrTr98Zyy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/231-8a4540090194fdc4.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/403-b11cd45f4c2618b3.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/app/_not-found/page-ee98a88ca6b95b98.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/app/landing/page-8a74cddb0dd62175.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/app/layout-333b21a1269eb0e4.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/app/offline/page-48ab81c7a21182df.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/app/page-5444922a802aeb4a.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/app/testPage/page-4d1da5519b602f24.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/framework-bdf76ccd7590db8f.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/main-app-37045582966843f8.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/main-ed57315bedbd6ae3.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/pages/_offline-03c7d07531af2b2d.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-04c090bf27c652c8.js",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/_next/static/css/844e447038fd54a4.css",revision:"844e447038fd54a4"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/fallback-ce627215c0e4a9af.js",revision:"a5281aa1504c5d6bcd7ba1097870376a"},{url:"/icon-192x192.png",revision:"2be52aacaccbaa41a5578f7add3682a1"},{url:"/icon-256x256.png",revision:"d69a9575b64880f020dddff5bb6b39c8"},{url:"/icon-384x384.png",revision:"e04658b7a8edb29a36d910c2cd151e10"},{url:"/icon-512x512.png",revision:"749d1168513e9be95dfdef53669295e5"},{url:"/icons/android-chrome-192x192.png",revision:"0bbd64d1ee937300fb1505ec5c88b154"},{url:"/manifest.json",revision:"a755e864e653f4e7a9766d6c88568b52"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/offline",revision:"Y7YOcWdxVFkmMrTr98Zyy"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET")}));
