const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' });
const { organizationSchema, itemSchema, pricingSchema } = require('./queries/tables');

const poolConfig = {
    max: 5,
    min: 2,
    idleTimeoutMillis: 600000,
};

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;

poolConfig.connectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;
const pool = new Pool(poolConfig);

const createTable = (schema) => new Promise((resolve, reject) => {
    pool.query(schema, (err, res) => {
        if (err) {
            reject(err);
        } else {
            resolve();
        }
    });
});

createTable(organizationSchema)
    .then(() => createTable(itemSchema))
    .then(() => createTable(pricingSchema))
    .then(() => {
        console.log('All tables created successfully');
        pool.end();
    })
    .catch((err) => {
        console.error('Error creating tables:', err);
        pool.end();
    });
