const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    cacheOnFrontEndNav: true,
    fallbacks:{
      document: '/offline'
    }
  })
  
  module.exports = withPWA({
    // next.js config
  })