if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),d={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts("fallback-1BIctTwK3KxDeQdD_gSwa.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"db9e64e6d27e64e3f57963d24ad4fee9"},{url:"/_next/static/1BIctTwK3KxDeQdD_gSwa/_buildManifest.js",revision:"da875330b3500c02157b492d57f65a94"},{url:"/_next/static/1BIctTwK3KxDeQdD_gSwa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-5950e0afd9854075.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/231-8a4540090194fdc4.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/app/_not-found/page-27af2dcb3937f9cb.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/app/landing/page-92ff4eb821cd4cf4.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/app/layout-c72d2513e3c2f789.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/app/offline/page-cb9d9ef4fca52b9b.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/app/page-ecd308804ff9c165.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/app/testPage/page-43f839626cc64d42.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/framework-bdf76ccd7590db8f.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/main-app-63c05372416d64e5.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/main-bfa0e2a5ae17ccfc.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/pages/_offline-03c7d07531af2b2d.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-04c090bf27c652c8.js",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/_next/static/css/844e447038fd54a4.css",revision:"844e447038fd54a4"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icon-192x192.png",revision:"2be52aacaccbaa41a5578f7add3682a1"},{url:"/icon-256x256.png",revision:"d69a9575b64880f020dddff5bb6b39c8"},{url:"/icon-384x384.png",revision:"e04658b7a8edb29a36d910c2cd151e10"},{url:"/icon-512x512.png",revision:"749d1168513e9be95dfdef53669295e5"},{url:"/icons/android-chrome-192x192.png",revision:"0bbd64d1ee937300fb1505ec5c88b154"},{url:"/manifest.json",revision:"a755e864e653f4e7a9766d6c88568b52"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/offline",revision:"1BIctTwK3KxDeQdD_gSwa"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
