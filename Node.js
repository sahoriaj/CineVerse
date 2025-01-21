const fs = require('fs');
const path = require('path');

// List of all pages and posts on your site
const urls = [
  'https://cineverse.linkpc.net/',
  'https://cineverse.linkpc.net/about.html',
  'https://cineverse.linkpc.net/contact.html',
  'https://cineverse.linkpc.net/video/movie/Pushpa-2-The-Rule.html',
  'https://cineverse.linkpc.net/video/movie/Paatal-Lok-Season-2(2025).html',
  'https://cineverse.linkpc.net/Cartoon/The-Girl-Downstairs.html',
  // Add more URLs for posts and pages
];

// Generate the XML sitemap content
const generateSitemap = (urls) => {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const xmlFooter = `</urlset>`;
  const xmlBody = urls.map(url => {
    return `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
  }).join('\n');

  return xmlHeader + xmlBody + xmlFooter;
};

// Save the sitemap as an XML file
const sitemap = generateSitemap(urls);
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
