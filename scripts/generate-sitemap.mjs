import fs from 'node:fs';
import path from 'node:path';

const siteUrl = 'https://lirisoft.com';
const today = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  ['/', 'weekly', '1.0'],
  ['/about', 'monthly', '0.8'],
  ['/services', 'weekly', '0.9'],
  ['/our-work', 'monthly', '0.8'],
  ['/team', 'monthly', '0.7'],
  ['/blog', 'daily', '0.8'],
  ['/faq', 'monthly', '0.7'],
  ['/contact', 'monthly', '0.8'],
  ['/privacy', 'yearly', '0.3'],
  ['/terms', 'yearly', '0.3'],
];

const serviceSlugs = [
  'custom-software-development',
  'iot-automation-solutions',
  'cloud-migration',
  'cybersecurity',
  'data-analytics',
];

const locationSlugs = [
  'san-jose-ca-usa',
  'austin-tx-usa',
  'new-york-ny-usa',
  'london-uk',
  'bangalore-ka-india',
  'singapore',
];

const blogIds = [
  'reactjs-in-modern-companies',
  'angular-enterprise-applications',
  'modern-website-design-principles',
  'react-beginner-survival-guide',
  'automation-testing-technologies',
  'react-vs-angular-modern-web-apps',
  'password-security-and-mfa',
  'enterprise-ios-messaging-development',
];

const urls = [];

for (const [route, changefreq, priority] of staticRoutes) {
  urls.push({ loc: `${siteUrl}${route}`, lastmod: today, changefreq, priority });
}

for (const serviceSlug of serviceSlugs) {
  urls.push({
    loc: `${siteUrl}/services/${serviceSlug}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.9',
  });

  for (const locationSlug of locationSlugs) {
    urls.push({
      loc: `${siteUrl}/services/${serviceSlug}/${locationSlug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.6',
    });
  }
}

for (const id of blogIds) {
  urls.push({
    loc: `${siteUrl}/blog/${id}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7',
  });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map(
    (u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n')}\n</urlset>\n`;

const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Generated sitemap with ${urls.length} urls at ${outputPath}`);
