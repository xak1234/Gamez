const express = require('express');
const path = require('path');
const app = express();

// Serve game HTML files from a 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html directly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// (Optional) 404 for anything else
app.use((req, res) => res.status(404).send('Not found'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Arcade live on port', PORT));
