import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

// Domeniul principal al site-ului
const baseUrl = 'https://fabihelp.vercel.app';

// 🔹 1. Rute statice
const staticRoutes = [
    '/',
    '/despre',
    '/probleme',
    '/contact',
];

// 🔹 2. Pagini din src/probleme
const problemeDir = './src/probleme';
let problemeRoutes = [];

try {
    const files = readdirSync(problemeDir);
    problemeRoutes = files.map(file => {
        const filePath = join(problemeDir, file);
        const name = file.replace(/\.[^/.]+$/, '');
        const stats = statSync(filePath);
        return {
            url: `/probleme/${name}`,
            lastmod: stats.mtime.toISOString().split('T')[0],
        };
    });
} catch (err) {
    console.warn('⚠️  Folderul /src/probleme nu a fost găsit.');
}

// 🔹 3. Pagini dinamice din public/rezolvari/*.txt
const rezolvariDir = './public/rezolvari';
let problemaRoutes = [];

try {
    const txtFiles = readdirSync(rezolvariDir);
    problemaRoutes = txtFiles
        .filter(file => file.endsWith('.txt'))
        .map(file => {
            const filePath = join(rezolvariDir, file);
            const stats = statSync(filePath);
            const id = file.replace('.txt', '');
            return {
                url: `/problema/${id}`,
                lastmod: stats.mtime.toISOString().split('T')[0],
            };
        });
} catch (err) {
    console.warn('⚠️  Folderul /public/rezolvari nu a fost găsit.');
}

// 🔹 4. Rutele statice au o dată generică (azi)
const today = new Date().toISOString().split('T')[0];
const staticEntries = staticRoutes.map(url => ({ url, lastmod: today }));

// 🔹 5. Combinăm toate
const allRoutes = [...staticEntries, ...problemeRoutes, ...problemaRoutes];

// 🔹 6. Generează sitemap
async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: baseUrl });
    const writeStream = createWriteStream(resolve('./public/sitemap.xml'));
    sitemap.pipe(writeStream);

    for (const route of allRoutes) {
        sitemap.write({
            url: route.url,
            lastmod: route.lastmod,
            changefreq: 'weekly',
            priority: 0.8,
        });
    }

    sitemap.end();
    await streamToPromise(sitemap);

    // 🔹 Loguri în consolă
    console.log('\n🧭  Paginile incluse în sitemap:\n');
    console.log('📌 Statice:');
    staticEntries.forEach(r => console.log(`   • ${r.url} (${r.lastmod})`));

    if (problemeRoutes.length) {
        console.log('\n📘 Probleme:');
        problemeRoutes.forEach(r => console.log(`   • ${r.url} (${r.lastmod})`));
    }

    if (problemaRoutes.length) {
        console.log('\n⚙️  Dinamice /problema/:id:');
        problemaRoutes.forEach(r => console.log(`   • ${r.url} (${r.lastmod})`));
    }

    console.log(`\n✅ Sitemap generat cu succes (${allRoutes.length} pagini)!\n`);
}

generateSitemap().catch(console.error);
