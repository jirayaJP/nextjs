// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
// };

// module.exports = nextConfig;
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  // next config
});
module.exports = nextConfig;
