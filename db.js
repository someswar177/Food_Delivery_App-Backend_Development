const { Pool } = require('pg');
require('dotenv').config();

const poolConfig = {
    max: 5,
    min: 2,
    idleTimeoutMillis: 600000,
};

const pool = process.env.External_DB_URL_Render ?
    new Pool({
        connectionString: process.env.External_DB_URL_Render,
        ssl: {
            rejectUnauthorized: false
        }
    }) :
    (() => {
        const user = process.env.DB_USER;
        const password = process.env.DB_PASSWORD;
        const host = process.env.DB_HOST;
        const port = process.env.DB_PORT;
        const database = process.env.DB_NAME;

        poolConfig.connectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;
        return new Pool(poolConfig);
    })();

module.exports = pool;
