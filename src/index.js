const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.json({
    service: 'frontend',
    version: require('../package.json').version,
    status: 'running',
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`frontend running on port ${PORT}`);
});
