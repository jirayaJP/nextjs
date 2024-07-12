const withPWA = require("next-pwa")({
  cacheOnFrontEndNav: true,
  dest: "public",
  register: true,
  skipWaiting: true,
  reloadOnOnline: true,
  fallbacks: {
    //image: "/static/images/fallback.png",
    document: "/offline", // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
});

const nextConfig = {
  // ... other options you like
};

module.exports = withPWA(nextConfig);
