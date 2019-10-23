const path = require("path");
const sitemap = require("./sitemap")

var window = global;

const genSm = sitemap.generate();

sitemap.conf.injectSitemap(genSm).then(() => {
    genSm.save(path.join(sitemap.conf.sitemapBasePath, sitemap.conf.sitemapFile));
})
