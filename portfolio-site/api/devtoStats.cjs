require('dotenv').config();

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.DEVTO_API_KEY;
  if (!apiKey) {
    return res.status(200).json({ totalViews: null, message: 'DEVTO_API_KEY not set' });
  }

  try {
    const response = await fetch('https://dev.to/api/articles/me', {
      headers: {
        'api-key': apiKey,
        'user-agent': 'portfolio-site/1.0'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `DEV.to API error: ${response.statusText}` });
    }

    const articles = await response.json();
    const totalViews = Array.isArray(articles)
      ? articles.reduce((sum, a) => sum + (a.page_views_count || 0), 0)
      : 0;

    return res.status(200).json({ totalViews });
  } catch (error) {
    console.error('[devtoStats] Error:', error);
    return res.status(500).json({ error: error?.message || 'Failed to fetch DEV.to stats' });
  }
};
