if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const o=e=>i(e,n),r={module:{uri:n},exports:t,require:o};s[n]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-f52fd911"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"856154d4d424f6edff0c17198926f37f"},{url:"/_next/static/3XmICRtF7No1uPauBzxx3/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/3XmICRtF7No1uPauBzxx3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-5950e0afd9854075.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/231-8a4540090194fdc4.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/app/_not-found/page-27af2dcb3937f9cb.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/app/landing/page-23312e425fb00363.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/app/layout-a1fde637c0515912.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/app/page-ecd308804ff9c165.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/app/page3/page-359d4e210bc1e4f4.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/app/testPage/page-ecc97435a81c93ac.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/main-8789e9f59a487e28.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/main-app-63c05372416d64e5.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-04c090bf27c652c8.js",revision:"3XmICRtF7No1uPauBzxx3"},{url:"/_next/static/css/b8fcd66c5e60e930.css",revision:"b8fcd66c5e60e930"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icons/icon-128x128.png",revision:"04bfed20d3cc0e6b89594e4478e4106d"},{url:"/icons/icon-144x144.png",revision:"4d07c1b11aba62825f90f3ec901227dc"},{url:"/icons/icon-152x152.png",revision:"915c4e900a5a041b10853b91d9abbe8d"},{url:"/icons/icon-192x192.png",revision:"08baf4f28be25ac36beaecc724829d54"},{url:"/icons/icon-384x384.png",revision:"e7f23da50ef84803e4cbb04119a862b7"},{url:"/icons/icon-512x512.png",revision:"78e540169ef8603d453501cb95e318c4"},{url:"/icons/icon-72x72.png",revision:"22f978bac6140f577f2bb0198ad8adbe"},{url:"/icons/icon-96x96.png",revision:"e282a9d955cffdee9968d7ae7f7c70fb"},{url:"/manifest.json",revision:"4ffde998ae4bb6dc0f93bc16342f6f80"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/(.*?)\.(png|jpg|jpeg|gif|svg|webp)$/i,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https:\/\/api\.example\.com\/.*/i,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:300})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"fallback",plugins:[new e.ExpirationPlugin({maxEntries:200,maxAgeSeconds:86400})]}),"GET")}));
