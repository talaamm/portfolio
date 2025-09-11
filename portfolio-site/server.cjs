const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mount API routes (serverless-style handlers)
const sendMail = require('./api/sendMail.cjs');
const devtoStats = require('./api/devtoStats.cjs');

app.post('/api/sendMail', (req, res) => sendMail(req, res));
app.get('/api/devtoStats', (req, res) => devtoStats(req, res));

// In production, serve the built client
const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
