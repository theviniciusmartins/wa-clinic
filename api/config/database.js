
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

({ 
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env);

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Database connected');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
