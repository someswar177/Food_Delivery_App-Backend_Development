const pool = require('../db');

const findItemByType = (type)=>{
    const query = "SELECT * FROM item WHERE type=$1";
    return pool.query(query,[type]).then(res=>res.rows[0]);
}

module.exports = findItemByType;


// const { rows } = await pool.query(query, [type]);
// return rows[0];