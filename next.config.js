const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    cacheOnFrontEndNav: true,
    sw: 'sw.js',
    fallbacks:{
      document: '/offline'
    }
  })
  
  module.exports = withPWA({
    // next.js config
  })