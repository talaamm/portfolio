const fs = require('fs');
const path = require('path');
require('dotenv').config();

(async () => {
  try {
    const apiKey = process.env.DEVTO_API_KEY;
    const outDir = path.join(__dirname, '..', 'public');
    const outFile = path.join(outDir, 'devto.json');

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    if (!apiKey) {
      const minimal = { totalViews: null, generatedAt: new Date().toISOString(), note: 'No DEVTO_API_KEY provided at build time' };
      fs.writeFileSync(outFile, JSON.stringify(minimal, null, 2));
      console.log('[fetchDevto] Wrote fallback devto.json with null totalViews');
      return;
    }

    const res = await fetch('https://dev.to/api/articles/me', {
      headers: { 'api-key': apiKey, 'user-agent': 'portfolio-site/1.0' }
    });

    if (!res.ok) {
      const payload = { totalViews: null, error: `DEV.to API ${res.status} ${res.statusText}`, generatedAt: new Date().toISOString() };
      fs.writeFileSync(outFile, JSON.stringify(payload, null, 2));
      console.warn('[fetchDevto] API error, wrote fallback devto.json');
      return;
    }

    const articles = await res.json();
    const totalViews = Array.isArray(articles) ? articles.reduce((sum, a) => sum + (a.page_views_count || 0), 0) : 0;
    const payload = { totalViews, generatedAt: new Date().toISOString() };
    fs.writeFileSync(outFile, JSON.stringify(payload, null, 2));
    console.log(`[fetchDevto] Wrote devto.json totalViews=${totalViews}`);
  } catch (err) {
    console.error('[fetchDevto] Unexpected error:', err);
  }
})();
