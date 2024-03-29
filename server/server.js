const express = require('express');
const { Pool } = require('pg');

const app = express();
const cors = require('cors');
const port = 3000;


const pool = new Pool({
  user: 'manikantasadhanala',
  host: 'localhost',
  database: 'zithara_assignment',
  password: 9666,
  port: 5432,
});

app.use(cors()); // Enable CORS for all routes

app.get('/api/customers', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM customers');
    res.json(rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
