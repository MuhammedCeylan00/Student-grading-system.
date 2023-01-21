const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'postgres', // default postgres
    host: 'localhost',
    database: 'web_final',
    password: 'Muhammed6065', //added during PostgreSQL and pgAdmin installation
    port: '5432' //default port
});

module.exports = pool;