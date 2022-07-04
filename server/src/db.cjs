const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'falguni',
  host: 'localhost',
  port: 5432,
  database: 'behaviour'
});

module.exports = pool;
