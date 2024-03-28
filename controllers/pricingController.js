const { calculatePrice } = require('../services/pricingService');

exports.calculatePrice = async (req, res) => {
    try {
        const { zone, organization_id, total_distance, item_type } = req.body;

        // Validate input payload
        if (!zone || !organization_id || !total_distance || !item_type) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        // Call pricing service to calculate price
        const totalPrice = await calculatePrice(zone, organization_id, total_distance, item_type);

        res.json({ total_price: totalPrice });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
