const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ilya/Projects/myWeb/src/pages/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ilya/Projects/myWeb/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ilya/Projects/myWeb/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ilya/Projects/myWeb/src/pages/about.js"))),
  "component---src-pages-faq-js": hot(preferDefault(require("/Users/ilya/Projects/myWeb/src/pages/FAQ.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("/Users/ilya/Projects/myWeb/src/pages/gallery.js")))
}

