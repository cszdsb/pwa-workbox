module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.css",
    "./cacheList/aa.jpg",
    "./cacheList/aa.html",
    "./index.html"
  ],
  "swDest": "build\\sw.js",
  "swSrc": "src/sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};