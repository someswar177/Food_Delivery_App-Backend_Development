const findOrganizationById = require('../models/organization');
const findItemByType = require('../models/item');
const findPricingByOrganizationAndItemAndZone = require('../models/pricing');
const priceCalculator = require('../services/priceCalculator');

const calculatePrice = async(req,res)=>{
    console.log("this is req body",req.body);
    const {zone,organization_id,total_distance,item_type} = req.body;
    if (!zone || !organization_id || !total_distance || !item_type) {
        return res.status(400).json({ error: 'Invalid request payload' });
    }
    try{
        const organization = await findOrganizationById(organization_id);
        const item = await findItemByType(item_type.toLowerCase());
        const pricing = await findPricingByOrganizationAndItemAndZone(organization.id,item.id,zone.toLowerCase());
        if(!pricing){
            return res.status(400).json({error:"Pricing is not found with your input"});
        }
        console.log("\nRequested Service ",pricing)

        const totalPrice = priceCalculator(
            pricing.base_distance_in_km,
            pricing.fix_price,
            pricing.km_price,
            total_distance
        )
        const responseData = {
            "Base distance": pricing.base_distance_in_km,
            "Fixed price": pricing.fix_price,
            "Price per km": pricing.km_price,
            "Total distance": total_distance,
            "Total price": totalPrice,
        };
        res.status(200).json(responseData);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"ineternal server error",err})
    }
}

module.exports = calculatePrice;