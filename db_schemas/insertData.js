const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' });
const { insertOrganizationData, insertItemData, insertPricingData } = require('./queries/data');

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

const queryPromise = (query) => new Promise((resolve, reject) => {
    pool.query(query, (err, res) => {
        if (err) {
            reject(err);
        } else {
            resolve(res);
        }
    });
});

queryPromise(insertOrganizationData)
    .then(() => queryPromise(insertItemData))
    .then(() => queryPromise(insertPricingData))
    .then(() => {
        console.log('Data inserted successfully');
        pool.end();
    })
    .catch((err) => {
        console.error('Error inserting data:', err);
        pool.end();
    });
