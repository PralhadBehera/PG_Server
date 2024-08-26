const pool = require('./db');

async function testConnection() {
  let client;

  try {

    client = await pool.connect();
    console.log('Connected to the PostgreSQL database successfully!');

    const result = await client.query('SELECT * FROM student_data');
    console.log(result.rows); 

  } catch (err) {
    console.error('Failed to fetch the data:', err.stack); 

  } finally {

    if (client) {
      client.release();
    }
  }
}

// Call the function to test the connection
testConnection();
