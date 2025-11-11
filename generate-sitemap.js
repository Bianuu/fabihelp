import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, readdirSync } from 'fs';
import { resolve } from 'path';

// URL-ul principal al site-ului tău
const baseUrl = 'https://fabihelp.vercel.app';

// ========================
// 🔹 1. Rute statice
// ========================
const staticRoutes = [
    '/',
    '/despre',
    '/probleme',
    '/contact',
];

// ========================
// 🔹 2. Pagini "probleme" din src/probleme
// ========================
const problemeDir = './src/probleme';
let problemeRoutes = [];

try {
    const files = readdirSync(problemeDir);
    problemeRoutes = files.map(file => {
        const name = file.replace(/\.[^/.]+$/, '');
        return `/probleme/${name}`;
    });
} catch (err) {
    console.warn('⚠️  Folderul /src/probleme nu a fost găsit.');
}

// ========================
// 🔹 3. Pagini dinamice din public/rezolvari/*.txt
// ========================
const rezolvariDir = './public/rezolvari';
let problemaRoutes = [];

try {
    const txtFiles = readdirSync(rezolvariDir);
    problemaRoutes = txtFiles
        .filter(file => file.endsWith('.txt'))
        .map(file => {
            const id = file.replace('.txt', '');
            return `/problema/${id}`;
        });
} catch (err) {
    console.warn('⚠️  Folderul /public/rezolvari nu a fost găsit.');
}

// ========================
// 🔹 4. Combină toate rutele
// ========================
const allRoutes = [...staticRoutes, ...problemeRoutes, ...problemaRoutes];

// ========================
// 🔹 5. Generează sitemap.xml
// ========================
async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: baseUrl });
    const writeStream = createWriteStream(resolve('./public/sitemap.xml'));
    sitemap.pipe(writeStream);

    for (const route of allRoutes) {
        sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
    }

    sitemap.end();
    await streamToPromise(sitemap);

    // ========================
    // ✅ Afișare în consolă
    // ========================
    console.log('\n🧭  Paginile incluse în sitemap:\n');
    console.log('📌 Statice:');
    staticRoutes.forEach(r => console.log(`   • ${r}`));

    if (problemeRoutes.length) {
        console.log('\n📘 Probleme:');
        problemeRoutes.forEach(r => console.log(`   • ${r}`));
    }

    if (problemaRoutes.length) {
        console.log('\n⚙️  Dinamice /problema/:id:');
        problemaRoutes.forEach(r => console.log(`   • ${r}`));
    }

    console.log(`\n✅ Sitemap generat cu succes (${allRoutes.length} pagini)!\n`);
}

generateSitemap().catch(console.error);
