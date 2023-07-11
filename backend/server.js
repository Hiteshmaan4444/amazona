import express from 'express';
import data from './data.js';
const app = express();

app.get('/', (req, res) => {
  res.send('backend is ready');
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log(`Server running of port ${5000}`);
});
