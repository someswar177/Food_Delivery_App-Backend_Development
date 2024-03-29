const { Pool } = require('pg');
require('dotenv').config();

// const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME
// });

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

// poolConfig.connectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;
// const pool = new Pool(poolConfig);

const pool = new Pool({
    // connectionString: "process.env.External_DB_URL_Render",
    connectionString: process.env.External_DB_URL_Render || process.env.Internal_DB_URL_Render ,
    ssl: {
        rejectUnauthorized: false // For development purposes only. Set to true in production
    }
});
module.exports = pool;

// CREATE TABLE organization (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL
// );

// CREATE TABLE item (
//     id SERIAL PRIMARY KEY,
//     type VARCHAR(255) NOT NULL,
//     description TEXT
// );

// CREATE TABLE pricing (
//     organization_id INT NOT NULL,
//     item_id INT NOT NULL,
//     zone VARCHAR(255) NOT NULL,
//     base_distance_in_km INT NOT NULL,
//     km_price INT NOT NULL,
//     fix_price INT NOT NULL,
//     PRIMARY KEY (organization_id, item_id, zone),
//     FOREIGN KEY (organization_id) REFERENCES organization(id),
//     FOREIGN KEY (item_id) REFERENCES item(id)
// );
