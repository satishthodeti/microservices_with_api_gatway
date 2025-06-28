const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Get users
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
});

router.get('/ok', (req, res) => {
    res.send({ message: 'Welcome to API Products Service', timestamp: Date.now() });
});

module.exports = router;
