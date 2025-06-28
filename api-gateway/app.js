const express = require('express');
const app = express();
const axios = require('axios');
const morgan = require('morgan');

app.use(morgan('combined'));
app.use(express.json());
// ✅ Correct - use normal npm start
const USER_SERVICE = 'http://localhost:3001';
const PRODUCT_SERVICE = 'http://localhost:3002';

// ✅ Correct - use Docker service names
// const USER_SERVICE = 'http://user-service:3001';
// const PRODUCT_SERVICE = 'http://product-service:3002';


app.get('/ok', (req, res) => {
    res.send({ message: 'Welcome to API User Service', timestamp: Date.now() });
});

// Proxy to user service
app.use('/users', async (req, res) => {
  const response = await axios({
    method: req.method,
    url: `${USER_SERVICE}${req.originalUrl}`,
    data: req.body,
  });
  res.json(response.data);
});

// Proxy to product service
app.use('/products', async (req, res) => {
  const response = await axios({
    method: req.method,
    url: `${PRODUCT_SERVICE}${req.originalUrl}`,
    data: req.body,
  });
  res.json(response.data);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
