const { Pool } = require('pg');

const pool = new Pool({
    user:"postgres",
    password:"*someswar",
    host:"localhost",
    port:5432,
    database:"food_delivery_app"
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
