// db.js

require('dotenv').config(); // Load environment variables from .env file
const { Pool } = require('pg');

// Create a new pool instance with configuration from environment variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Export the pool to use in other parts of your application
module.exports = pool;
