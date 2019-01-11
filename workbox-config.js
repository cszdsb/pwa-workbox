module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    // '**/*',
  ],
  "swDest": "build\\sw.js",
  "swSrc": "src/sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};