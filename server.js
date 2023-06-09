const express = require('express');
const app = express();

app.get('/api/condition', (req, res) => {
  const code = Math.random() < 0.5 ? 1 : 207
  res.json({ code });

});

const port = 3000;
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



