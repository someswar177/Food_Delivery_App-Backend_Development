const pool = require('../db');

const findPricingByOrganizationAndItemAndZone = (organizationId,itemId,zone)=>{
    const query = "SELECT * FROM pricing WHERE organization_Id = $1 AND item_Id = $2 AND zone = $3";
    return pool.query(query,[organizationId,itemId,zone]).then(res=>res.rows[0]);
}

module.exports = findPricingByOrganizationAndItemAndZone;