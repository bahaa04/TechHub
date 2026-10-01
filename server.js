const express = require('express');
const { db } = require('./src/firebase');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const cart = {};

app.get('/api/products', async (req, res) => {
  const snapshot = await db.collection('products').get();
  const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(products);
});

app.get('/api/cart', async (req, res) => {
  const items = [];
  for (const [id, qty] of Object.entries(cart)) {
    const doc = await db.collection('products').doc(id).get();
    if (doc.exists) {
      items.push({ id, qty, ...doc.data() });
    }
  }
  res.json(items);
});

app.post('/api/cart', (req, res) => {
  const { productId, qty } = req.body;
  cart[productId] = (cart[productId] || 0) + qty;
  res.json(cart);
});

app.delete('/api/cart/:productId', (req, res) => {
  delete cart[req.params.productId];
  res.json(cart);
});

app.delete('/api/cart', (req, res) => {
  Object.keys(cart).forEach(key => delete cart[key]);
  res.json({});
});

app.listen(3000, () => console.log('Shop running on port 3000'));
